'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const path = usePathname();

  const menuItems = [
    { nomi: 'Dashboard', manzili: '/dashboard', ikonka: '📊' },
    { nomi: 'Yaratish', manzili: '/create', ikonka: '✨' },
    { nomi: 'Videolar', manzili: '/videos', ikonka: '🎬' },
  ];

  return (
    <aside className="hidden xl:flex w-80 flex-col bg-white border-r min-h-screen sticky top-0 p-6 space-y-10">
      {/* Logotip qismi - ko'p padding */}
      <div className="py-6 px-4">
        <Link href="/" className="flex items-center gap-4">
          <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center font-black text-white shadow-lg">
            SF
          </div>
          <span className="font-black text-xl text-gray-900 tracking-[0.2em]">S-FORGE</span>
        </Link>
      </div>

      {/* Asosiy navigatsiya - ko'p padding */}
      <nav className="flex-1 space-y-4">
        {menuItems.map((item) => {
          const isActive = path === item.manzili;
          return (
            <Link
              key={item.manzili}
              href={item.manzili}
              className={`flex items-center gap-5 px-8 py-5 rounded-[2rem] font-black transition-all group
                ${isActive 
                  ? 'bg-red-600 text-white shadow-2xl shadow-red-200 translate-x-2' 
                  : 'text-gray-400 hover:bg-gray-50 hover:text-gray-900'
                }
              `}
            >
              <span className="text-2xl">{item.ikonka}</span>
              <span className="tracking-wide">{item.nomi}</span>
            </Link>
          );
        })}
      </nav>

      {/* Pastki qism - padding bilan */}
      <div className="pt-10 border-t border-gray-50 space-y-4 px-2">
        <Link
          href="/telegram"
          className="flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-blue-500 bg-blue-50 hover:bg-blue-100 transition-all text-sm"
        >
          <span>✈️</span>
          <span>Telegram Bot</span>
        </Link>
        
        <p className="text-[10px] text-gray-300 font-black uppercase text-center tracking-widest py-4">
          v2.4.0 • ShortForge AI
        </p>
      </div>
    </aside>
  );
}