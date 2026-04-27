'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useVideoCreation } from '@/context/VideoCreationContext';

export default function DataPage() {
  const { topic, setCurrentStep } = useVideoCreation();
  const [faktlar, setFaktlar] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const router = useRouter();

  const mockFacts = [
    "Ma'lumot topildi: Tarixiy hujjatlar ko'rib chiqildi.",
    "Fakt tekshirildi: Manbalar solishtirildi.",
    "Statistika: Ushbu mavzu bo'yicha 120 ta nuqta topildi.",
    "Video uchun eng muhim 5 ta nuqta aniqlandi."
  ];

  useEffect(() => {
    let current = 0;
    const itv = setInterval(() => {
      if (current < mockFacts.length) {
        setFaktlar(prev => [...prev, mockFacts[current]]);
        current++;
      } else {
        clearInterval(itv);
        setIsFinished(true);
      }
    }, 1200);
    return () => clearInterval(itv);
  }, []);

  const handleConfirm = () => {
    setCurrentStep('image');
    router.push('/image');
  };

  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto py-10">
      <section className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase w-fit mb-2 animate-pulse tracking-widest">
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          {isFinished ? 'MA\'LUMOTLAR TAYYOR' : 'QIDIRILMOQDA...'}
        </div>
        <h2 className="text-4xl font-black tracking-tight text-text-main mb-2 tracking-tighter">Ma'lumot To'plash</h2>
        <p className="text-text-muted font-bold text-sm tracking-tight uppercase opacity-60">AI barcha ishonchli manbalardan faktlarni jamlamoqda.</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in">
        <div className="card-premium bg-accent border-glass-border items-center flex flex-col justify-center gap-6 py-20">
           <div className={`text-7xl ${isFinished ? '' : 'animate-bounce'}`}>🔍</div>
           <div className="text-center">
             <p className="text-text-main font-black text-xl mb-1">Web Qidiruv</p>
             <p className="text-text-muted font-bold text-[10px] uppercase tracking-widest">GLOBAL DATABASE</p>
           </div>
        </div>
        <div className="card-premium bg-bg-sidebar flex flex-col gap-4">
          <p className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em] mb-2">Progress Status:</p>
          <div className="flex flex-col gap-3">
            {faktlar.map((f, i) => (
              <div key={i} className="flex items-center gap-4 text-xs text-text-main animate-in font-bold p-4 bg-accent border border-glass-border rounded-xl">
                <span className="text-primary font-black">✓</span> {f}
              </div>
            ))}
            {faktlar.length === 0 && <p className="text-xs text-text-muted animate-pulse font-bold">Manbalar bog'lanmoqda...</p>}
          </div>
        </div>
      </div>

      {isFinished && (
        <div className="animate-in pt-4">
           <button 
             onClick={handleConfirm}
             className="w-full py-6 bg-primary text-white rounded-[2rem] font-black text-xl hover:bg-primary-hover shadow-2xl shadow-primary/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
           >
             TASDIQLASH ➔
           </button>
        </div>
      )}

      <div className="flex items-center justify-between px-6 text-text-muted text-[10px] font-black uppercase tracking-[0.2em]">
        <span>BOSQICH: 2/6</span>
        <span className={isFinished ? 'text-primary' : 'animate-pulse'}>
          {isFinished ? 'TASDIQLASH KUTILMOQDA' : 'RASMLARNI TANLASH ➔'}
        </span>
      </div>
    </div>
  );
}
