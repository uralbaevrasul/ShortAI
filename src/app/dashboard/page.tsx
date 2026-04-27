'use client';

import React from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-10">
      {/* WELCOME SECTION */}
      <section className="flex flex-col gap-2 animate-in">
        <h2 className="text-3xl font-bold tracking-tight text-text-main">Xush kelibsiz! 👋</h2>
        <p className="text-text-muted text-base">Bugun qanday video yaratamiz?</p>
      </section>

      {/* QUICK ACTIONS */}
      <section className="animate-in" style={{ animationDelay: '0.1s' }}>
        <h3 className="text-lg font-semibold mb-6 text-text-main">Tezkor amallar</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="group relative overflow-hidden bg-bg-card border border-glass-border rounded-[2rem] p-8 hover:border-primary transition-all flex flex-col h-full min-h-[340px]">
            <div className="flex items-start justify-between mb-8">
              <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-lg text-xs font-semibold">YANGI</span>
            </div>
            <h4 className="text-2xl font-bold mb-3 text-text-main">Video Generator</h4>
            <p className="text-text-muted mb-auto leading-relaxed text-sm">
              Birgina mavzu berish orqali to'liq ssenariy, rasm va ovoz bilan tayyor video oling.
            </p>
            <div className="pt-8">
               <Link href="/create" className="block w-full">
                <button className="w-full py-4 bg-primary text-white rounded-xl font-semibold text-lg hover:bg-primary-hover active:scale-[0.98] transition-all">
                  Yaratishni boshlash
                </button>
              </Link>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-bg-card border border-glass-border rounded-[2rem] p-8 transition-all flex flex-col h-full min-h-[340px]">
            <div className="flex items-start justify-between mb-8">
              <span className="px-4 py-1.5 bg-accent text-text-muted rounded-lg text-xs font-semibold">LOYIHA</span>
            </div>
            <h4 className="text-2xl font-bold mb-3 text-text-main">Avto-Post</h4>
            <p className="text-text-muted mb-auto leading-relaxed text-sm">
               Tayyor videolaringizni YouTube va Telegram kanallariga vaqti bilan joylang.
            </p>
            <div className="pt-8">
              <button className="w-full py-4 bg-accent text-text-main border border-glass-border rounded-xl font-semibold text-lg hover:bg-glass-border active:scale-[0.98] transition-all">
                Rejalash
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT ACTIVITY */}
      <section className="card-premium animate-in" style={{ animationDelay: '0.2s' }}>
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-lg font-semibold text-text-main">Oxirgi loyihalar</h3>
          <button className="text-primary font-medium text-sm hover:underline">Hammasini ko'rish</button>
        </div>
        <div className="flex flex-col gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-glass-border last:border-0 group">
              <div className="flex items-center gap-4">
                <div className="w-16 h-12 bg-accent rounded-xl overflow-hidden border border-glass-border">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-transparent"></div>
                </div>
                <div>
                  <h5 className="font-semibold text-text-main group-hover:text-primary transition-colors">Sun'iy intellekt kelajagi #{i}</h5>
                  <p className="text-xs text-text-muted mt-1">2 soat oldin • 1:00 min</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-accent text-text-main rounded-lg text-xs font-medium border border-glass-border">Tayyor</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}