'use client';

import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 p-10 md:p-20 overflow-hidden">
      
      {/* Markaziy qism - Ko'p padding bilan */}
      <div className="text-center max-w-4xl bg-gray-50/50 p-12 md:p-24 rounded-[4rem] border-2 border-gray-100 shadow-2xl shadow-gray-50">
        <div className="inline-block bg-red-100 text-red-600 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-10">
          Future of Content
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter">
          AI bilan <br />
          <span className="text-red-600">SHORTS</span> <br/>
          YARATING
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-16 leading-relaxed max-w-2xl mx-auto font-medium">
          Professional darajadagi YouTube Shorts videolarini 
          birgina buyruq orqali tayyorlab oling.
        </p>

        {/* Tugmalar - Katta va keng */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-stretch sm:items-center">
          <Link
            href="/create"
            className="px-16 py-8 bg-red-600 hover:bg-red-700 text-white rounded-[2rem] text-2xl font-black shadow-2xl shadow-red-200 transition-all hover:scale-105 active:scale-95 tracking-widest text-center"
          >
            BOSHLASH 🚀
          </Link>

          <Link
            href="/videos"
            className="px-16 py-8 bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-100 rounded-[2rem] text-2xl font-black transition-all hover:scale-105 active:scale-95 text-center shadow-lg"
          >
            VIDEOLARIM 🎬
          </Link>
        </div>
      </div>

      {/* Xususiyatlar - padding bilan */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center w-full max-w-6xl">
        <div className="bg-white p-10 rounded-3xl border border-gray-50 flex flex-col items-center">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="font-black text-2xl mb-2">Tezkor</h3>
          <p className="text-gray-400 font-medium">60 soniyada tayyor bo'ladi</p>
        </div>
        <div className="bg-white p-10 rounded-3xl border border-gray-50 flex flex-col items-center">
          <div className="text-4xl mb-4">🧠</div>
          <h3 className="font-black text-2xl mb-2">Aqlli</h3>
          <p className="text-gray-400 font-medium">AI hamma narsani hal qiladi</p>
        </div>
        <div className="bg-white p-10 rounded-3xl border border-gray-50 flex flex-col items-center">
          <div className="text-4xl mb-4">💎</div>
          <h3 className="font-black text-2xl mb-2">Sifatli</h3>
          <p className="text-gray-400 font-medium">4K darajadagi render</p>
        </div>
      </div>

    </main>
  );
}