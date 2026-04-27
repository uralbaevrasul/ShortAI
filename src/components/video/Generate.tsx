'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Generate() {
  const router = useRouter();
  
  const [prompt, setPrompt] = React.useState('');
  const [style, setStyle] = React.useState('realistic');
  const [voice, setVoice] = React.useState('uz-male');
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt === '' || loading) return;

    setLoading(true);

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, style, voice })
      });

      if (res.ok) {
        router.push('/videos');
      } else {
        alert('Xatolik yuz berdi!');
      }
    } catch (error) {
      alert('Bog\'lanishda xatolik!');
    } finally {
      setLoading(false);
    }
  };

  // Kattaroq padding berilgan input stili
  const inputClass = "w-full p-6 md:p-8 rounded-[2rem] border-2 border-gray-100 focus:border-red-500 focus:ring-8 focus:ring-red-50 outline-none transition-all text-gray-700 font-medium placeholder:text-gray-300 text-lg shadow-sm";

  return (
    <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl shadow-gray-100 border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-12">
        
        {/* Video Prompt */}
        <div className="space-y-4">
          <label className="block text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-4">
            🚀 Video g'oyasini batafsil yozing
          </label>
          <textarea
            required
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Koinot sirlari haqida 60 soniyalik qiziqarli faktlar..."
            className={`${inputClass} h-52 resize-none`}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Style */}
          <div className="space-y-4">
            <label className="block text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-4">
              🎨 Vizual uslub
            </label>
            <select 
              value={style} 
              onChange={(e) => setStyle(e.target.value)}
              className={inputClass}
            >
              <option value="realistic">Realistik</option>
              <option value="anime">Anime</option>
              <option value="cinematic">Kinematik</option>
              <option value="3d">3D Render</option>
            </select>
          </div>

          {/* Voice */}
          <div className="space-y-4">
            <label className="block text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-4">
              🎙 Ovoz turi
            </label>
            <select 
              value={voice} 
              onChange={(e) => setVoice(e.target.value)}
              className={inputClass}
            >
              <option value="uz-male">O'zbekcha (Erkak)</option>
              <option value="uz-female">O'zbekcha (Ayol)</option>
              <option value="en-male">English (Male)</option>
            </select>
          </div>
        </div>

        {/* Submit Button - Maksimal padding */}
        <div className="pt-8">
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-8 md:py-10 rounded-[3rem] font-black text-2xl text-white transition-all shadow-2xl tracking-widest
              ${loading 
                ? 'bg-gray-200 cursor-not-allowed text-gray-400' 
                : 'bg-red-600 hover:bg-red-700 shadow-red-200 hover:scale-[1.02] active:scale-95'
              }
            `}
          >
            {loading ? '⏳ TAYYORLANMOQDA...' : '🔥 VIDEONI YARATISH'}
          </button>
        </div>

        <p className="text-center text-xs font-bold text-gray-300 uppercase tracking-widest bg-gray-50 py-4 rounded-full">
          * Jarayon 1-2 daqiqa vaqt olishi mumkin
        </p>

      </form>
    </div>
  );
}