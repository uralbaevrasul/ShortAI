'use client';

import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full bg-bg-main">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-20 px-8 overflow-hidden">
        {/* Abstract Background Blur */}
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-8 animate-in">
          <div className="px-6 py-2 bg-accent border border-glass-border rounded-full text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4">
            Kelajak videolari — Endi mavjud
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-text-main tracking-tighter leading-[0.9]">
            AI Bilan Realistik <br/>
            <span className="text-primary italic">Shorts</span> Yarating.
          </h1>
          <p className="max-w-2xl text-text-muted text-xl md:text-2xl font-medium leading-relaxed">
            Hech qanday kamera yoki studiya shart emas. Shunchaki mavzuni yozing va AI sizga bir necha soniyada 4K sifatda professional video tayyorlab beradi.
          </p>
          <div className="flex justify-center mt-10">
            <Link href="/create">
              <button className="px-12 py-6 bg-primary text-white rounded-[2rem] font-black text-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/30">
                VIDEO YARATISHNI BOSHLASH 🚀
              </button>
            </Link>
          </div>
        </div>

        {/* Realistic Showcase Mockup */}
        <div className="relative mt-20 w-full max-w-6xl mx-auto animate-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative aspect-video bg-accent rounded-[3.5rem] border-[12px] border-glass-border shadow-[0_100px_200px_-50px_rgba(0,0,0,0.3)] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1620712943543-bcc463867d00?w=1600&q=80" 
              className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
              alt="Realistic AI Video Preview"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-12">
               <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white text-3xl">▶</div>
                  <div>
                    <h4 className="text-2xl font-black text-white">AI Realism Demo</h4>
                    <p className="text-white/70 font-bold uppercase text-xs tracking-widest">4K Raytracing Render</p>
                  </div>
               </div>
            </div>
          </div>
          <div className="absolute -bottom-10 -left-10 bg-bg-card border border-glass-border p-6 rounded-3xl shadow-2xl animate-bounce delay-1000">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xl">🎨</div>
              <span className="text-sm font-black text-text-main">Raytracing Faol</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-8 bg-accent/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-20">
          <div className="text-center flex flex-col items-center gap-4">
            <h2 className="text-5xl font-black text-text-main tracking-tighter">Cheksiz Imkoniyatlar</h2>
            <p className="text-text-muted text-lg max-w-xl font-bold">ShortAI — bu shunchaki generator emas, bu sizning shaxsiy videostudiyangiz.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Ultra-Realistik', text: 'Eng so\'nggi AI modellari yordamida haqiqiydan ajratib bo\'lmaydigan tasvirlar.', icon: '💎' },
              { title: 'Avto-Montaj', text: 'Ssenariy, rasm va ovoz AI tomonidan professional birlashtiriladi.', icon: '⚙️' },
              { title: 'YouTube Integratsiya', text: 'Videoni to\'g\'ridan-to\'g\'ri kanalingizga yuklash imkoniyati.', icon: '🚀' }
            ].map((f, i) => (
              <div key={i} className="card-premium p-12 flex flex-col gap-6 text-center hover:scale-105 transition-all">
                <div className="text-5xl mb-2">{f.icon}</div>
                <h3 className="text-xl font-black text-text-main">{f.title}</h3>
                <p className="text-text-muted font-semibold text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 bg-bg-main border-t border-glass-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
              S
            </div>
            <span className="text-2xl font-black text-text-main tracking-tighter">ShortAI</span>
          </div>
          <p className="text-text-muted text-sm font-bold uppercase tracking-widest">© 2026 Barcha huquqlar himoyalangan.</p>
          <div className="flex gap-10">
             <a href="#" className="text-text-muted hover:text-primary transition-all font-black text-[10px] uppercase tracking-widest">Telegram</a>
             <a href="#" className="text-text-muted hover:text-primary transition-all font-black text-[10px] uppercase tracking-widest">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
}