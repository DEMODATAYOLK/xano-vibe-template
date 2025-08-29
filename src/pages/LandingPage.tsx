import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { ArrowRight, Sparkles } from 'lucide-react';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/unsplash-01.jpg)',
        }}
      />
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-background/85 to-background/48 dark:from-background/100 dark:via-background/95 dark:to-background/97" />
      
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-16">
          <section className="text-center max-w-4xl mx-auto">          
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-[1.1] drop-shadow-sm">
              <span className="block bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent py-2">
                Empowering your idea !
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Built with React, Vite, TailwindCSS, shadcn/ui, and Xano Boiler plate. 
              Transform your vision into reality with no-code backend.
            </p>
            
            {/* CTA Button */}
            <div className="flex justify-center mb-16">
              <Button asChild size="lg" className="text-lg px-12 py-6 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to="/login">
                  Get Started <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            {/* Tech Stack Logos */}
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-90">
              <div className="flex flex-col items-center gap-2 group hover:opacity-100 transition-all duration-300 p-4 rounded-xl bg-secondary/20 hover:bg-secondary/30 hover:scale-105 animate-fade-in">
                <img src="/React JS.svg" alt="React" className="h-12 w-12 rounded-lg transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                <span className="text-xs text-muted-foreground">React</span>
              </div>
              <div className="flex flex-col items-center gap-2 group hover:opacity-100 transition-all duration-300 p-4 rounded-xl bg-secondary/20 hover:bg-secondary/30 hover:scale-105 animate-fade-in" style={{animationDelay: '0.1s'}}>
                <img src="/Vite.js Logo.svg" alt="Vite" className="h-12 w-12 rounded-lg transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                <span className="text-xs text-muted-foreground">Vite</span>
              </div>
              <div className="flex flex-col items-center gap-2 group hover:opacity-100 transition-all duration-300 p-4 rounded-xl bg-secondary/20 hover:bg-secondary/30 hover:scale-105 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <img src="/Tailwind CSS Icon.png" alt="TailwindCSS" className="h-12 w-12 rounded-lg transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                <span className="text-xs text-muted-foreground">TailwindCSS</span>
              </div>
              <div className="flex flex-col items-center gap-2 group hover:opacity-100 transition-all duration-300 p-4 rounded-xl bg-secondary/20 hover:bg-secondary/30 hover:scale-105 animate-fade-in" style={{animationDelay: '0.3s'}}>
                <img src="/shadcnuilogo.png" alt="shadcn/ui" className="h-12 w-12 rounded-lg transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                <span className="text-xs text-muted-foreground">shadcn/ui</span>
              </div>
              <div className="flex flex-col items-center gap-2 group hover:opacity-100 transition-all duration-300 p-4 rounded-xl bg-secondary/20 hover:bg-secondary/30 hover:scale-105 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <img src="/xano-logo.png" alt="Xano" className="h-12 w-12 rounded-lg transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                <span className="text-xs text-muted-foreground">Xano</span>
              </div>
            </div>
          </section>
          
          {/* Footer */}
          <footer className="mt-16 text-center">
            <p className="text-sm text-muted-foreground/60">
              This boilerplate is created by natt
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};