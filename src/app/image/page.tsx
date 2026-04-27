'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useVideoCreation } from '@/context/VideoCreationContext';

export default function ImagePage() {
  const { topic, setCurrentStep } = useVideoCreation();
  const [selected, setSelected] = useState<number[]>([]);
  const router = useRouter();

  const handleNext = () => {
    if (selected.length === 0) {
      alert("Iltimos, videoga mos rasmlarni tanlang!");
      return;
    }
    setCurrentStep('edit');
    router.push('/edit');
  };

  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1620712943543-bcc463867d00?w=400&q=80', label: 'Tarixiy manzara' },
    { id: 2, url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80', label: 'AI Vizualizatsiya' },
    { id: 3, url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80', label: 'Abstrakt fon' },
    { id: 4, url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80', label: 'Texnologiya' },
  ];

  return (
    <div className="flex flex-col gap-8 max-w-5xl mx-auto py-10">
      <section className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 text-purple-500 rounded-full text-xs font-bold w-fit mb-2">
          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          RASMLARNI TASDIQLASH
        </div>
        <h2 className="text-4xl font-black tracking-tight text-white mb-2">Vizual Elementlar</h2>
        <p className="text-slate-500 font-medium">Mavzuga mos keladigan rasmlarni tanlang. AI ularni video davomida ishlata boshlaydi.</p>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((img) => (
          <div 
            key={img.id} 
            onClick={() => {
              if (selected.includes(img.id)) {
                setSelected(selected.filter(id => id !== img.id));
              } else {
                setSelected([...selected, img.id]);
              }
            }}
            className={`cursor-pointer transition-all duration-300 relative rounded-3xl overflow-hidden border-4 ${
              selected.includes(img.id) ? 'border-primary scale-105 shadow-2xl shadow-primary/20' : 'border-transparent opacity-60 hover:opacity-100 hover:scale-102'
            }`}
          >
             <img src={img.url} alt={img.label} className="w-full aspect-[4/5] object-cover" />
             <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-xs font-bold">{img.label}</p>
             </div>
             {selected.includes(img.id) && (
               <div className="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-[10px]">
                 ✓
               </div>
             )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between card-premium bg-sidebar border-white/5">
        <div>
          <p className="text-white font-bold">{selected.length} ta rasm tanlandi</p>
          <p className="text-slate-500 text-xs mt-1">Tanlovingiz montaj sifatiga ta'sir qiladi.</p>
        </div>
        <button 
          onClick={handleNext}
          className="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary-hover transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={selected.length === 0}
        >
          MONTAJNI BOSHLASH →
        </button>
      </div>

      <div className="flex items-center justify-between px-6 text-slate-600 text-sm font-bold">
        <span>JARAYON: 3/6</span>
        <span className="text-slate-400">NAVBAT: AI MONTAJ ➔</span>
      </div>
    </div>
  );
}
