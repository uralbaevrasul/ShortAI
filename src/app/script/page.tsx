'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useVideoCreation } from '@/context/VideoCreationContext';

export default function ScriptPage() {
  const { topic, isProcessing, setCurrentStep } = useVideoCreation();
  const [scriptLines, setScriptLines] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const router = useRouter();

  const mockScript = [
    "Kirish: Bugun biz dunyoning eng qiziqarli joylaridan biri haqida gaplashamiz.",
    "Fakt 1: Bu joy juda qadimiy va sirlarga boy.",
    "Fakt 2: Olimlar hali ham bu erdagi barcha sirlarni ocha olmagan.",
    "Xulosa: Obuna bo'lishni unutmang!"
  ];

  useEffect(() => {
    if (isProcessing) {
      let currentLine = 0;
      const interval = setInterval(() => {
        if (currentLine < mockScript.length) {
          setScriptLines(prev => [...prev, mockScript[currentLine]]);
          currentLine++;
        } else {
          clearInterval(interval);
          setIsFinished(true);
        }
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [isProcessing]);

  const handleConfirm = () => {
    setCurrentStep('data');
    router.push('/data');
  };

  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto py-10">
      <section className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase w-fit mb-2 animate-pulse tracking-widest">
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          {isFinished ? 'SSENARIY TAYYOR' : 'AI YOZMOQDA'}
        </div>
        <h2 className="text-4xl font-black tracking-tight text-text-main mb-2">
          Senariy Yaratish: <span className="text-primary tracking-tighter">{topic || 'Mavzusiz'}</span>
        </h2>
        <p className="text-text-muted font-bold text-sm tracking-tight uppercase opacity-60">Siz tanlagan mavzu asosida eng qiziqarli senariy tayyorlanmoqda...</p>
      </section>

      <div className="card-premium min-h-[400px] flex flex-col gap-4 relative">
        {scriptLines.length === 0 && (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-text-muted">
             <div className="w-12 h-12 border-4 border-primary/10 border-t-primary rounded-full animate-spin"></div>
             <p className="font-black animate-pulse uppercase text-[10px] tracking-[0.2em]">O'ylanmoqda...</p>
          </div>
        )}
        {scriptLines.map((line, i) => (
          <div key={i} className="animate-in bg-accent border border-glass-border p-6 rounded-2xl font-bold leading-relaxed text-text-main/90">
            {line}
          </div>
        ))}

        {isFinished && (
           <div className="mt-6 pt-6 border-t border-glass-border animate-in">
              <button 
                onClick={handleConfirm}
                className="w-full py-6 bg-primary text-white rounded-2xl font-black text-xl hover:bg-primary-hover shadow-2xl shadow-primary/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                TASDIQLASH VA DAVOM ETISH ✅
              </button>
           </div>
        )}
      </div>

      <div className="flex items-center justify-between px-6 text-text-muted text-[10px] font-black uppercase tracking-[0.2em]">
        <span>BOSQICH: 1/6</span>
        <span className={isFinished ? 'text-primary' : 'animate-pulse'}>
          {isFinished ? 'TASDIQLASH KUTILMOQDA' : 'MA\'LUMOT TO\'PLASH ➔'}
        </span>
      </div>
    </div>
  );
}
