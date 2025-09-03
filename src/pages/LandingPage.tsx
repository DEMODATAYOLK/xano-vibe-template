import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Sparkles, User, BookOpen, Languages } from 'lucide-react';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Cosmic Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(1200px 800px at 10% 10%, rgba(88, 28, 135, 0.35), transparent 60%), radial-gradient(1000px 700px at 90% 20%, rgba(37, 99, 235, 0.25), transparent 60%), radial-gradient(900px 600px at 50% 100%, rgba(234, 179, 8, 0.12), transparent 60%)',
          }}
        />
        {/* Subtle stars */}
        <div className="absolute inset-0 pointer-events-none">
          <span className="absolute top-[15%] left-[20%] h-1 w-1 rounded-full bg-white/70 blur-[0.5px] opacity-70 animate-pulse" />
          <span className="absolute top-[30%] left-[60%] h-1 w-1 rounded-full bg-white/60 blur-[0.5px] opacity-60 animate-pulse" />
          <span className="absolute top-[55%] left-[35%] h-1 w-1 rounded-full bg-white/60 blur-[0.5px] opacity-60 animate-pulse" />
          <span className="absolute top-[70%] left-[75%] h-1 w-1 rounded-full bg-white/70 blur-[0.5px] opacity-70 animate-pulse" />
          <span className="absolute top-[40%] left-[15%] h-1 w-1 rounded-full bg-white/60 blur-[0.5px] opacity-60 animate-pulse" />
        </div>
      </div>

      {/* Overlay for readability across themes */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-background/80 to-background/60 dark:from-background/80 dark:via-background/90 dark:to-background/80" />

      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20">
          {/* Hero Section */}
          <section className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/30 text-secondary-foreground/80 mb-6">
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <span className="text-xs">Mystical • AI Tarot</span>
            </div>

            <h1 className="text-4xl md:text-[50px] font-bold leading-[1.08] tracking-tight">
              <span className="block bg-gradient-to-r from-purple-400 via-purple-300 to-yellow-300 bg-clip-text text-transparent drop-shadow-sm">
                เปิดดวงชะตาด้วย AI ที่เข้าใจคุณ
              </span>
            </h1>

            <p className="mt-6 text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              รับคำทำนายจากไพ่ทาโรต์ที่แม่นยำ ผ่านปัญญาประดิษฐ์ขั้นสูง พร้อมคำแนะนำเพื่อชีวิตที่ดีกว่า
            </p>

            <div className="mt-10 flex justify-center">
              <Button asChild size="lg" className="text-lg px-10 py-6 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 dark:text-white">
                <Link to="/dashboard">
                  เริ่มต้นทำนายดวง
                </Link>
              </Button>
            </div>
          </section>

          {/* Features Section */}
          <section className="mt-20 md:mt-28">
            <h2 className="text-center text-2xl md:text-3xl font-semibold text-foreground">
              ทำไมต้องเลือก Taro App?
            </h2>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {/* Feature 1 */}
              <div className="rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-6 md:p-7">
                  <div className="h-12 w-12 rounded-xl bg-purple-700/20 text-purple-300 flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">ปัญญาประดิษฐ์ขั้นสูง</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    ใช้เทคโนโลยี OpenAI ในการวิเคราะห์และให้คำทำนายที่แม่นยำ เข้าใจบริบทของชีวิตคุณ
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-6 md:p-7">
                  <div className="h-12 w-12 rounded-xl bg-indigo-700/20 text-indigo-300 flex items-center justify-center mb-4">
                    <User className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">คำทำนายเฉพาะตัว</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    คำนึงถึงวันเกิดและข้อมูลส่วนตัว เพื่อให้คำทำนายที่ตรงกับดวงชะตาของคุณมากที่สุด
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-6 md:p-7">
                  <div className="h-12 w-12 rounded-xl bg-yellow-600/20 text-yellow-300 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">เก็บประวัติการทำนาย</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    บันทึกและจัดการคำทำนายทั้งหมด เพิ่มโน้ตส่วนตัว และติดตามความแม่นยำ
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-6 md:p-7">
                  <div className="h-12 w-12 rounded-xl bg-emerald-700/20 text-emerald-300 flex items-center justify-center mb-4">
                    <Languages className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">ภาษาไทยที่เข้าใจง่าย</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    คำทำนายเป็นภาษาไทยที่เข้าใจง่าย ครอบคลุมทุกด้านของชีวิต
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-16 md:mt-24 text-center">
            <p className="text-sm text-muted-foreground/70">Made with ✨ for your journey</p>
          </footer>
        </div>
      </div>
    </div>
  );
};