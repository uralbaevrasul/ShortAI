'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useVideoCreation } from '@/context/VideoCreationContext';

export default function SidebarLeft() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useVideoCreation();

  return (
    <aside className="left-sidebar">
      <Link href="/" className="flex items-center gap-4 mb-16 no-underline">
        <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-primary/20">
          S
        </div>
        <h1 className="text-2xl font-black text-text-main">ShortAI</h1>
      </Link>

      <nav className="flex flex-col gap-1">
        <div className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em] mb-4 px-4">
          Navigator
        </div>
        <Link 
          href="/dashboard" 
          className={`sidebar-link no-underline ${pathname === '/dashboard' ? 'active' : ''}`}
        >
          Dashboard
        </Link>
        <Link 
          href="/videos" 
          className={`sidebar-link no-underline ${pathname === '/videos' ? 'active' : ''}`}
        >
          Mening videolarim
        </Link>
        <Link 
          href="/create" 
          className={`sidebar-link no-underline ${pathname === '/create' ? 'active' : ''} text-primary`}
        >
          <span className="mr-2">✨</span> Yangi yaratish
        </Link>
      </nav>

      <div className="chat-container">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-text-muted">
            AI Assistant
          </span>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto mb-4">
          <div className="bg-bg-main border border-glass-border p-3 rounded-xl">
            <p className="text-xs leading-relaxed text-text-main">
              Qanday yordam bera olaman?
            </p>
          </div>
        </div>
        <input 
          type="text" 
          placeholder="Xabar..." 
          className="w-full text-xs"
        />
      </div>

      <button 
        onClick={toggleTheme}
        className="mt-6 w-full py-3 bg-accent border border-glass-border text-text-main rounded-xl text-xs font-semibold hover:bg-glass-border transition-all"
      >
        {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </aside>
  );
}
