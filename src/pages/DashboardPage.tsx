import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { CardSection } from '@/components/CardSection';
import { H1, P, Small } from '@/components/ui/typography';
import { useAuth } from '@/contexts/AuthContext';
import { realtimeService, authService } from '@/lib/xano';
import { LogOut, User, Activity, Database, Menu, X } from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { user, logout, isLoading } = useAuth();
  const navigate = useNavigate();
  const [, setRealtimeData] = useState<any[]>([]);
  const [realtimeConnected, setRealtimeConnected] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [realtimeLoading, setRealtimeLoading] = useState(false);

  // Refs to store subscription and interval for cleanup
  const realtimeSubscriptionRef = useRef<any>(null);
  const demoIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Track processed messages to prevent duplicates
  const processedMessagesRef = useRef<Set<string>>(new Set());

  // Cleanup function for realtime connections
  const cleanupRealtime = () => {
    if (demoIntervalRef.current) {
      clearInterval(demoIntervalRef.current);
      demoIntervalRef.current = null;
    }
    if (realtimeSubscriptionRef.current) {
      realtimeService.unsubscribe(realtimeSubscriptionRef.current);
      realtimeSubscriptionRef.current = null;
      toast('Disconnected from realtime service', {
        icon: '🔌',
        duration: 2000,
      });
    }
    // Clear processed messages
    processedMessagesRef.current.clear();
    setRealtimeConnected(false);
    setRealtimeData([]);
  };

  useEffect(() => {
    // Don't try to setup realtime if auth is still loading
    if (isLoading) return;
    
    // Set up realtime connection if enabled and we're authenticated
    if (realtimeService.isEnabled() && authService.isAuthenticated()) {
      console.log('Setting up realtime connection...');
      setRealtimeLoading(true);
      
      const setupRealtime = async () => {
        try {
          let currentUser = user;
          
          // If user data isn't available yet, fetch it
          if (!currentUser) {
            console.log('User data not available, fetching...');
            currentUser = await authService.me();
          }
          
          // Use user's realtimeid if available, otherwise fall back to user id
          const realtimeId = currentUser.realtimeid || currentUser.id.toString();
          const channelName = `dashboard/${realtimeId}`;
          
          console.log(`Connecting to user-specific channel: ${channelName}`);
          
          const subscription = await realtimeService.subscribe(channelName, (data) => {
            
            // Create a unique message ID for deduplication
            const roughId = `${data.action}-${JSON.stringify(data.payload)}`;
            
            // Check if we've already processed this message recently
            if (processedMessagesRef.current.has(roughId)) {
              console.log('Duplicate message detected, skipping:', roughId);
              return;
            }
            
            // Add to processed messages (keep only last 50 to prevent memory leak)
            processedMessagesRef.current.add(roughId);
            if (processedMessagesRef.current.size > 50) {
              const firstItem = processedMessagesRef.current.values().next().value;
              if (firstItem) {
                processedMessagesRef.current.delete(firstItem);
              }
            }
            
            // Update the UI data
            setRealtimeData(prev => [...prev, { ...data, timestamp: Date.now() }].slice(-10));
            
            // Handle different types of realtime messages
            if (data.action === 'connection_status' || data.action === 'join') {
              setRealtimeConnected(true);
              setRealtimeLoading(false);
              if (data.action === 'join') {
                console.log('Successfully joined realtime channel:', channelName);
                toast.success(`Connected to realtime channel: ${channelName}`, {
                  icon: '🔗',
                });
              }
            } else if (data.action === 'event' && data.payload) {
              // Handle Xano realtime events
              const message = data.payload.data || data.payload.message || 'New realtime event received';
              toast(`📡 ${message}`, {
                duration: 3000,
              });
            } else if (data.action === 'message' && data.payload) {
              // Handle direct messages
              toast(data.payload.message || 'New realtime message received', {
                icon: '📨',
                duration: 3000,
              });
            } else if (data.action && !['connection_status', 'join'].includes(data.action)) {
              // Handle other realtime actions (but skip demo data)
              if (!data.type || data.type !== 'user_activity') {
                toast(`⚡ Realtime ${data.action}`, {
                  duration: 2000,
                });
              }
            }
          });
          
          if (subscription) {
            realtimeSubscriptionRef.current = subscription;

            // Simulate some realtime data for demo
            const interval = setInterval(() => {
              const demoData = {
                type: 'user_activity',
                message: `User ${currentUser.name || currentUser.email} activity at ${new Date().toLocaleTimeString()}`,
                value: Math.floor(Math.random() * 100),
                channel: channelName,
              };
              setRealtimeData(prev => [...prev, { ...demoData, timestamp: Date.now() }].slice(-10));
            }, 5000);
            demoIntervalRef.current = interval;
          }
        } catch (error) {
          console.error('Failed to setup realtime:', error);
          setRealtimeConnected(false);
          setRealtimeLoading(false);
          toast.error('Failed to connect to realtime service', {
            icon: '❌',
            duration: 4000,
          });
        }
      };

      setupRealtime();

      // Cleanup function
      return () => {
        console.log('Cleaning up realtime connection...');
        cleanupRealtime();
      };
    }
  }, [user, isLoading]); // Re-setup realtime when user data or loading state changes

  // Enhanced logout function that cleans up realtime connections
  const handleLogout = () => {
    cleanupRealtime();
    // Reset the realtime connection for clean state
    realtimeService.resetConnection();
    logout();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cosmic-blue-midnight via-cosmic-purple-deep to-cosmic-blue-deep relative overflow-hidden">
      {/* Cosmic Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Floating cosmic orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[5%] right-[10%] w-40 h-40 rounded-full bg-gradient-to-br from-cosmic-purple-glow/15 to-cosmic-gold-glow/10 blur-2xl animate-cosmic-float" />
          <div className="absolute bottom-[15%] left-[5%] w-32 h-32 rounded-full bg-gradient-to-br from-cosmic-blue-light/15 to-cosmic-purple-light/10 blur-xl animate-cosmic-pulse" />
          <div className="absolute top-[40%] right-[30%] w-24 h-24 rounded-full bg-gradient-to-br from-cosmic-gold-bright/10 to-cosmic-purple-medium/8 blur-lg animate-cosmic-float" style={{ animationDelay: '3s' }} />
        </div>

        {/* Subtle starfield */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-cosmic-starlight-white/60 blur-[0.5px] animate-star-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-starlight-white/3 via-cosmic-blue-midnight/10 to-cosmic-purple-deep/15 backdrop-blur-[0.5px]" />

      {/* Header */}
      <header className="border-b border-cosmic-purple-glow/20 backdrop-blur-md bg-cosmic-blue-midnight/40 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
              <div className="bg-gradient-to-br from-cosmic-purple-glow to-cosmic-gold-glow p-3 rounded-2xl shadow-lg animate-cosmic-glow">
                <Database className="h-6 w-6 text-cosmic-starlight-white" />
              </div>
              <div>
                <H1 className="text-xl font-bold bg-gradient-to-r from-cosmic-starlight-white to-cosmic-gold-bright bg-clip-text text-transparent">
                  Mystical Tarot
                </H1>
                <Small className="text-xs text-cosmic-starlight-light/70">by Cosmic AI</Small>
              </div>
            </div>

            {/* Realtime Status & Menu */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <ThemeToggle />
              
              {/* Realtime Status */}
              <div className="hidden md:flex items-center space-x-3 text-sm">
                {realtimeService.isEnabled() ? (
                  realtimeConnected ? (
                    <>
                      <div className="h-3 w-3 rounded-full bg-cosmic-gold-bright animate-pulse shadow-lg shadow-cosmic-gold-glow/50" />
                      <span className="text-cosmic-gold-bright font-medium">Cosmic Live</span>
                    </>
                  ) : realtimeLoading ? (
                    <>
                      <div className="h-3 w-3 rounded-full bg-cosmic-purple-glow animate-ping shadow-lg shadow-cosmic-purple-glow/50" />
                      <span className="text-cosmic-purple-glow font-medium">Connecting</span>
                    </>
                  ) : (
                    <>
                      <div className="h-3 w-3 rounded-full bg-red-400" />
                      <span className="text-red-400 font-medium">Disconnected</span>
                    </>
                  )
                ) : (
                  <>
                    <div className="h-3 w-3 rounded-full bg-cosmic-starlight-light/50" />
                    <span className="text-cosmic-starlight-light/70 font-medium">Static</span>
                  </>
                )}
              </div>

              {/* Hamburger Menu */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="h-10 w-10 p-0 border border-cosmic-purple-glow/20 bg-cosmic-blue-midnight/30 hover:bg-cosmic-purple-glow/20 text-cosmic-starlight-white"
                >
                  {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>

                {/* Dropdown Menu */}
                {menuOpen && (
                  <div className="absolute right-0 top-14 w-72 bg-cosmic-blue-midnight/90 backdrop-blur-md border border-cosmic-purple-glow/30 rounded-2xl shadow-2xl shadow-cosmic-purple-glow/20 py-3 z-50">
                    {/* User Info */}
                    <div className="px-6 py-4 border-b border-cosmic-purple-glow/20">
                      <div className="flex items-center space-x-3">
                        <div className="bg-gradient-to-br from-cosmic-purple-glow/30 to-cosmic-gold-glow/20 p-3 rounded-full">
                          <User className="h-5 w-5 text-cosmic-gold-bright" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <P className="font-semibold text-sm truncate text-cosmic-starlight-white">{user?.name || 'User'}</P>
                          <Small className="text-xs text-cosmic-starlight-light/70 truncate">{user?.email}</Small>
                        </div>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="py-2">
                      {realtimeService.isEnabled() && realtimeConnected && (
                        <button
                          className="w-full text-left px-6 py-3 text-sm hover:bg-cosmic-purple-glow/20 flex items-center space-x-3 text-cosmic-starlight-light transition-colors duration-200"
                          onClick={() => {
                            toast('🧪 Test notification triggered!', { duration: 2000 });
                            setMenuOpen(false);
                          }}
                        >
                          <Activity className="h-4 w-4 text-cosmic-gold-bright" />
                          <span>Test Toast</span>
                        </button>
                      )}
                      <button
                        className="w-full text-left px-6 py-3 text-sm hover:bg-red-500/20 flex items-center space-x-3 text-red-400 transition-colors duration-200"
                        onClick={() => {
                          handleLogout();
                          setMenuOpen(false);
                        }}
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-12 relative z-10">

        {/* Card Section */}
        <div className="w-full max-w-6xl">
          <CardSection />
        </div>

      </main>

      {/* Click outside to close menu */}
      {menuOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
};