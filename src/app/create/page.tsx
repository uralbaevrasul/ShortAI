'use client';

import React, { useState } from 'react';
import { useVideoCreation } from '@/context/VideoCreationContext';

export default function CreatePage() {
  const [inputValue, setInputValue] = useState('');
  const { startCreation } = useVideoCreation();

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    startCreation(inputValue);
  };

  return (
    <div className="flex flex-col gap-10 items-center justify-center min-h-[60vh]">
      <section className="text-center flex flex-col gap-4 max-w-2xl animate-in">
        <h2 className="text-5xl font-black tracking-tight text-text-main">Yangi video yaratish ✨</h2>
        <p className="text-text-muted text-lg font-semibold">Mavzuni kiriting va qolganini sun'iy intellektga qo'yib bering.</p>
      </section>

      <form 
        onSubmit={handleCreate}
        className="w-full max-w-xl flex flex-col gap-6 animate-in" 
        style={{ animationDelay: '0.1s' }}
      >
        <div className="card-premium flex flex-col gap-4 p-10">
          <label className="text-xs font-black text-primary uppercase tracking-[0.2em]">Mavzu nomi</label>
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Masalan: Rim imperiyasi"
            className="w-full px-8 py-6 rounded-2xl text-xl font-bold transition-all placeholder:text-[var(--text-muted)] opacity-80"
          />
        </div>

        <button 
          type="submit"
          className="w-full py-6 bg-primary text-white rounded-[2rem] font-black text-2xl shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          VIDEONI YARATISH 🚀
        </button>
      </form>
    </div>
  );
}
