import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { H1, H2, H3, Lead, P } from '@/components/ui/typography';
import { Sparkles, User, BookOpen, Languages } from 'lucide-react';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-cosmic-blue-midnight via-cosmic-purple-deep to-cosmic-blue-deep">
      {/* Enhanced Cosmic Background */}
      <div className="absolute inset-0 -z-10">
        {/* Primary cosmic gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(1400px 900px at 15% 15%, rgba(45, 27, 105, 0.4), transparent 70%),
              radial-gradient(1200px 800px at 85% 25%, rgba(26, 35, 126, 0.35), transparent 65%),
              radial-gradient(1000px 700px at 50% 90%, rgba(255, 215, 0, 0.15), transparent 60%),
              radial-gradient(800px 600px at 70% 40%, rgba(156, 39, 176, 0.2), transparent 50%)
            `,
          }}
        />
        
        {/* Floating cosmic orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-cosmic-purple-glow/20 to-cosmic-gold-glow/10 blur-xl animate-cosmic-float" />
          <div className="absolute top-[60%] right-[15%] w-24 h-24 rounded-full bg-gradient-to-br from-cosmic-blue-light/20 to-cosmic-purple-light/15 blur-lg animate-cosmic-pulse" />
          <div className="absolute bottom-[20%] left-[30%] w-20 h-20 rounded-full bg-gradient-to-br from-cosmic-gold-bright/15 to-cosmic-purple-medium/10 blur-md animate-cosmic-float" style={{ animationDelay: '2s' }} />
        </div>

        {/* Enhanced starfield */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-cosmic-starlight-white/80 blur-[0.5px] animate-star-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 1.5}s`,
              }}
            />
          ))}
        </div>

        {/* Mystical particle effects */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cosmic-gold-glow/60 rounded-full animate-cosmic-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${Math.random() * 4 + 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-starlight-white/5 via-cosmic-blue-midnight/20 to-cosmic-purple-deep/30 backdrop-blur-[1px]" />

      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20">
          {/* Hero Section */}
          <section className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cosmic-purple-medium/20 backdrop-blur-sm border border-cosmic-purple-glow/30 text-cosmic-starlight-white/90 mb-8 animate-cosmic-glow">
              <Sparkles className="h-4 w-4 text-cosmic-gold-bright animate-star-twinkle" />
              <span className="text-sm font-medium">Mystical • AI Tarot</span>
            </div>

            <H1 className="text-4xl md:text-[50px] font-bold leading-[1.08] tracking-tight">
              <span className="block bg-gradient-to-r from-cosmic-purple-glow via-cosmic-gold-bright to-cosmic-starlight-white bg-clip-text text-transparent drop-shadow-lg animate-cosmic-pulse">
                เปิดดวงชะตาด้วย AI ที่เข้าใจคุณ
              </span>
            </H1>

            <Lead className="mt-8 text-lg md:text-xl text-cosmic-starlight-light/90 max-w-3xl mx-auto leading-relaxed font-light">
              รับคำทำนายจากไพ่ทาโรต์ที่แม่นยำ ผ่านปัญญาประดิษฐ์ขั้นสูง พร้อมคำแนะนำเพื่อชีวิตที่ดีกว่า
            </Lead>

            <div className="mt-12 flex justify-center">
              <Button asChild size="lg" className="text-lg px-12 py-7 h-auto rounded-2xl shadow-2xl hover:shadow-cosmic-purple-glow/50 transition-all duration-500 bg-gradient-to-r from-cosmic-purple-medium via-cosmic-purple-glow to-cosmic-blue-medium hover:from-cosmic-purple-light hover:via-cosmic-purple-glow hover:to-cosmic-blue-light text-cosmic-starlight-white border border-cosmic-gold-glow/30 animate-cosmic-glow">
                <Link to="/dashboard">
                  ✨ เริ่มต้นทำนายดวง ✨
                </Link>
              </Button>
            </div>
          </section>

          {/* Features Section */}
          <section className="mt-24 md:mt-32">
            <H2 className="text-center text-3xl md:text-4xl font-bold bg-gradient-to-r from-cosmic-starlight-white via-cosmic-gold-bright to-cosmic-purple-glow bg-clip-text text-transparent mb-4">
              ทำไมต้องเลือก Taro App?
            </H2>
            <P className="text-center text-cosmic-starlight-light/70 text-lg mb-12">พลังแห่งจักรวาลในมือคุณ</P>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {/* Feature 1 */}
              <div className="group rounded-3xl border border-cosmic-purple-glow/20 bg-cosmic-blue-midnight/30 backdrop-blur-sm text-cosmic-starlight-white shadow-xl hover:shadow-2xl hover:shadow-cosmic-purple-glow/20 transition-all duration-500 hover:scale-105 animate-cosmic-float">
                <div className="p-8">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-cosmic-purple-glow/30 to-cosmic-gold-glow/20 text-cosmic-gold-bright flex items-center justify-center mb-6 group-hover:animate-cosmic-glow">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <H3 className="text-xl font-bold mb-4 text-cosmic-starlight-white">ปัญญาประดิษฐ์ขั้นสูง</H3>
                  <P className="text-cosmic-starlight-light/80 leading-relaxed">
                    ใช้เทคโนโลยี OpenAI ในการวิเคราะห์และให้คำทำนายที่แม่นยำ เข้าใจบริบทของชีวิตคุณ
                  </P>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group rounded-3xl border border-cosmic-blue-light/20 bg-cosmic-purple-deep/30 backdrop-blur-sm text-cosmic-starlight-white shadow-xl hover:shadow-2xl hover:shadow-cosmic-blue-light/20 transition-all duration-500 hover:scale-105 animate-cosmic-float" style={{ animationDelay: '1s' }}>
                <div className="p-8">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-cosmic-blue-light/30 to-cosmic-purple-glow/20 text-cosmic-gold-bright flex items-center justify-center mb-6 group-hover:animate-cosmic-glow">
                    <User className="h-8 w-8" />
                  </div>
                  <H3 className="text-xl font-bold mb-4 text-cosmic-starlight-white">คำทำนายเฉพาะตัว</H3>
                  <P className="text-cosmic-starlight-light/80 leading-relaxed">
                    คำนึงถึงวันเกิดและข้อมูลส่วนตัว เพื่อให้คำทำนายที่ตรงกับดวงชะตาของคุณมากที่สุด
                  </P>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group rounded-3xl border border-cosmic-gold-glow/20 bg-cosmic-blue-deep/30 backdrop-blur-sm text-cosmic-starlight-white shadow-xl hover:shadow-2xl hover:shadow-cosmic-gold-glow/20 transition-all duration-500 hover:scale-105 animate-cosmic-float" style={{ animationDelay: '2s' }}>
                <div className="p-8">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-cosmic-gold-glow/30 to-cosmic-purple-medium/20 text-cosmic-gold-bright flex items-center justify-center mb-6 group-hover:animate-cosmic-glow">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <H3 className="text-xl font-bold mb-4 text-cosmic-starlight-white">เก็บประวัติการทำนาย</H3>
                  <P className="text-cosmic-starlight-light/80 leading-relaxed">
                    บันทึกและจัดการคำทำนายทั้งหมด เพิ่มโน้ตส่วนตัว และติดตามความแม่นยำ
                  </P>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="group rounded-3xl border border-cosmic-purple-medium/20 bg-cosmic-blue-midnight/30 backdrop-blur-sm text-cosmic-starlight-white shadow-xl hover:shadow-2xl hover:shadow-cosmic-purple-medium/20 transition-all duration-500 hover:scale-105 animate-cosmic-float" style={{ animationDelay: '3s' }}>
                <div className="p-8">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-cosmic-purple-medium/30 to-cosmic-gold-bright/20 text-cosmic-gold-bright flex items-center justify-center mb-6 group-hover:animate-cosmic-glow">
                    <Languages className="h-8 w-8" />
                  </div>
                  <H3 className="text-xl font-bold mb-4 text-cosmic-starlight-white">ภาษาไทยที่เข้าใจง่าย</H3>
                  <P className="text-cosmic-starlight-light/80 leading-relaxed">
                    คำทำนายเป็นภาษาไทยที่เข้าใจง่าย ครอบคลุมทุกด้านของชีวิต
                  </P>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="mt-20 md:mt-28">
            <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                <H1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-cosmic-starlight-white">
                  Slow-carb next level shoindxgoitch ethical authentic, scenester sriracha forage.
                </H1>
                <button 
                  onClick={handleNavigateToDashboard}
                  className="flex-shrink-0 text-cosmic-starlight-white bg-gradient-to-r from-cosmic-purple-medium via-cosmic-purple-glow to-cosmic-blue-medium hover:from-cosmic-purple-light hover:via-cosmic-purple-glow hover:to-cosmic-blue-light border-0 py-2 px-8 focus:outline-none rounded text-lg mt-10 sm:mt-0 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-cosmic-purple-glow/50 border border-cosmic-gold-glow/30 animate-cosmic-glow"
                >
                  Button
                </button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-20 md:mt-28 text-center">
            <P className="text-lg text-cosmic-starlight-light/60 font-light">
              Made with <span className="text-cosmic-gold-bright animate-star-twinkle">✨</span> for your cosmic journey
            </P>
          </footer>
        </div>
      </div>
    </div>
  );
};