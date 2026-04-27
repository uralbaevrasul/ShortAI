'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const path = usePathname();

  const menuList = [
    { nomi: 'Asosiy', manzili: '/dashboard' },
    { nomi: 'Yaratish', manzili: '/create' },
    { nomi: 'Videolar', manzili: '/videos' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b px-8 py-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logotip - ko'proq padding */}
        <Link href="/" className="flex items-center gap-4">
          <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-red-200">
            <span className="text-white font-black text-2xl">SF</span>
          </div>
          <span className="font-black text-2xl text-gray-900 hidden md:block tracking-tighter">
            ShortForge
          </span>
        </Link>

        {/* Navigatsiya - ko'proq padding */}
        <nav className="flex items-center gap-4">
          {menuList.map((item) => {
            const isActive = path === item.manzili;
            return (
              <Link 
                key={item.manzili} 
                href={item.manzili}
                className={`px-6 py-3 rounded-2xl text-sm font-black transition-all tracking-wide
                  ${isActive 
                    ? 'bg-red-50 text-red-600 shadow-inner' 
                    : 'text-gray-400 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
              >
                {item.nomi}
              </Link>
            );
          })}
        </nav>

        {/* O'ng tarafdagi tugma - ko'proq padding */}
        <div className="flex items-center gap-6">
          <Link 
            href="/create"
            className="hidden lg:block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl text-sm font-black shadow-xl shadow-red-100 transition-all active:scale-95 tracking-widest"
          >
            YANGI VIDEO +
          </Link>
          
          <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 cursor-pointer border-2 border-gray-100 hover:border-red-200 transition-colors">
            👤
          </div>
        </div>

      </div>
    </header>
  );
}