'use client';

import React, { useState } from 'react';
import { useVideoCreation } from '@/context/VideoCreationContext';

export default function TelegramPage() {
  const { topic } = useVideoCreation();
  const [status, setStatus] = useState<'pending' | 'confirmed' | 'uploading' | 'completed'>('pending');
  const [progress, setProgress] = useState(0);

  const handleConfirm = () => {
    setStatus('confirmed');
    setTimeout(() => {
      setStatus('uploading');
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev < 100) return prev + 2;
          clearInterval(interval);
          return 100;
        });
      }, 100);
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto py-10">
      <section className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent border border-glass-border text-text-muted rounded-full text-[10px] font-black uppercase w-fit mb-2 tracking-[0.1em]">
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          BOT INTEGRATSIYA
        </div>
        <h2 className="text-4xl font-black tracking-tight text-text-main mb-2 tracking-tighter uppercase">Telegram & YouTube</h2>
        <p className="text-text-muted font-bold text-sm tracking-tight opacity-60">Video tayyor! Uni Telegram botingizda tekshirib oling va tasdiqlang.</p>
      </section>

      <div className="card-premium flex flex-col gap-8 bg-accent/40">
        {status === 'pending' && (
          <div className="flex flex-col items-center gap-8 text-center animate-in">
             <div className="w-24 h-24 bg-accent text-primary rounded-[2rem] flex items-center justify-center text-5xl shadow-2xl shadow-primary/10 border border-glass-border">🤖</div>
             <div>
               <h3 className="text-2xl font-black text-text-main mb-3">Telegramga yuborildi!</h3>
               <p className="text-text-muted font-semibold text-sm max-w-xs mx-auto">Botimiz sizga videoni yubordi. Iltimos, uni ko'rib chiqing va tasdiqlang.</p>
             </div>
             <button 
               onClick={handleConfirm}
               className="px-12 py-5 bg-primary text-white rounded-[2rem] font-black text-xl hover:bg-primary-hover transition-all shadow-2xl shadow-primary/20 active:scale-[0.98]"
             >
               TASDIQLASH VA YUKLASH ✅
             </button>
          </div>
        )}

        {(status === 'confirmed' || status === 'uploading') && (
           <div className="flex flex-col items-center gap-8 text-center animate-in">
             <div className="w-24 h-24 bg-primary text-white rounded-[2rem] flex items-center justify-center text-5xl animate-pulse shadow-2xl shadow-primary/20">🎬</div>
             <div>
               <h3 className="text-2xl font-black text-text-main mb-3">YouTube-ga Yuklanmoqda...</h3>
               <p className="text-text-muted font-semibold text-sm">Video avtomatik ravishda kanalingizga joylanmoqda.</p>
             </div>
             <div className="w-full max-w-md h-3 bg-bg-sidebar rounded-full overflow-hidden mt-4 border border-glass-border p-0.5">
                <div className="h-full bg-primary transition-all duration-300 rounded-full" style={{ width: `${progress}%` }}></div>
             </div>
             <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{progress}% bajarildi</span>
           </div>
        )}

        {(status === 'completed' || progress === 100) && (
           <div className="flex flex-col items-center gap-8 text-center animate-in">
             <div className="w-24 h-24 bg-green-500 text-white rounded-[2rem] flex items-center justify-center text-5xl shadow-2xl shadow-green-500/20">🏆</div>
             <div>
               <h3 className="text-2xl font-black text-text-main mb-3">Muvaffaqiyatli Yuklandi!</h3>
               <p className="text-text-muted font-semibold text-sm">Videongiz endi YouTube-da jonli efirda.</p>
             </div>
             <button className="px-10 py-4 bg-accent border border-glass-border text-text-main rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-text-main hover:text-bg-main transition-all">
               VIDEONI KO'RISH ↗
             </button>
           </div>
        )}
      </div>

      <div className="flex items-center justify-between px-6 text-text-muted text-[10px] font-black uppercase tracking-[0.2em]">
        <span>JARAYON: 5/6</span>
        <span className="opacity-60 uppercase">OXIRGI BOSQICH 🏁</span>
      </div>
    </div>
  );
}