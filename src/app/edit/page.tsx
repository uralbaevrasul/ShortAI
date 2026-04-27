'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useVideoCreation } from '@/context/VideoCreationContext';

export default function EditPage() {
  const { topic, setCurrentStep } = useVideoCreation();
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) return prev + 1;
        clearInterval(timer);
        setIsFinished(true);
        return 100;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const handleConfirm = () => {
    setCurrentStep('telegram');
    router.push('/telegram');
  };

  return (
    <div className="flex flex-col gap-10 max-w-4xl mx-auto py-10">
      <section className="flex flex-col gap-2 items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase mb-2 tracking-widest">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          {isFinished ? 'MONTAJ TAYYOR' : 'AI RENDER QILMOQDA'}
        </div>
        <h2 className="text-4xl font-black tracking-tight text-text-main tracking-tighter uppercase">Video Montaj</h2>
        <p className="text-text-muted font-bold text-sm tracking-tight max-w-lg opacity-60">Ssenariy, ma'lumotlar va rasmlar birlashtirib, professional video hosil qilinmoqda.</p>
      </section>

      <div className="card-premium flex flex-col items-center gap-12 relative overflow-hidden bg-accent/40">
         <div className={`text-8xl ${isFinished ? '' : 'animate-bounce'}`}>🎬</div>
         
         <div className="w-full max-w-md flex flex-col gap-5">
           <div className="flex justify-between items-center text-[11px] font-black text-text-muted uppercase tracking-[0.2em]">
             <span>Render jarayoni</span>
             <span className="text-primary">{progress}%</span>
           </div>
           <div className="w-full h-4 bg-bg-sidebar rounded-full overflow-hidden border border-glass-border p-1 shadow-inner">
              <div 
                className="h-full bg-primary transition-all duration-300 ease-out shadow-[0_0_20px_rgba(225,29,72,0.4)] rounded-full" 
                style={{ width: `${progress}%` }}
              ></div>
           </div>
         </div>

         <div className="flex flex-col gap-2 items-center">
            <p className="text-[10px] font-black text-text-muted tracking-[0.2em] uppercase">
              {isFinished ? 'TAYYOR ✅' : (
                progress < 30 ? 'Elementlar tekshirilmoqda...' : 
                progress < 60 ? 'Ovoz qo\'shilmoqda...' : 
                progress < 90 ? 'Ranglar sozlanyapti...' : 'Eksport qilinmoqda...'
              )}
            </p>
         </div>

         {isFinished && (
           <div className="w-full max-w-md animate-in pt-4">
              <button 
                onClick={handleConfirm}
                className="w-full py-6 bg-primary text-white rounded-[2rem] font-black text-xl hover:bg-primary-hover shadow-2xl shadow-primary/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                TASDIQLASH VA YUBORISH ➔
              </button>
           </div>
         )}
         
         <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-[shimmer_2s_infinite]"></div>
         </div>
      </div>

      <div className="flex items-center justify-between px-6 text-text-muted text-[10px] font-black uppercase tracking-[0.2em]">
        <span>BOSQICH: 4/6</span>
        <span className={isFinished ? 'text-primary' : 'animate-pulse'}>
          {isFinished ? 'TASDIQLASH KUTILMOQDA' : 'TELEGRAMGA YUBORISH ➔'}
        </span>
      </div>
    </div>
  );
}
