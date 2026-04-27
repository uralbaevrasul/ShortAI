'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useVideoCreation } from '@/context/VideoCreationContext';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'script', label: 'Ssenariy', href: '/script' },
  { id: 'data', label: 'Ma\'lumot', href: '/data' },
  { id: 'image', label: 'Rasm', href: '/image' },
  { id: 'edit', label: 'Montaj', href: '/edit' },
  { id: 'telegram', label: 'Telegram', href: '/telegram' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { isProcessing, theme, toggleTheme } = useVideoCreation();

  const isAccessible = (itemHRef: string) => {
    if (!isProcessing) return pathname === itemHRef;
    const stepOrder = ['/script', '/data', '/image', '/edit', '/telegram'];
    const currentIndex = stepOrder.indexOf(pathname);
    const itemIndex = stepOrder.indexOf(itemHRef);
    return itemIndex <= currentIndex;
  };

  return (
    <header className="navbar flex items-center justify-between">
      {/* Mobile Logo */}
      <div className="md:hidden flex items-center mr-4">
        <Link href="/" className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md">
          S
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center overflow-x-auto scrollbar-hide gap-1 md:gap-2">
        {navItems.map((item) => {
          const accessible = isAccessible(item.href);
          const isActive = pathname === item.href;

          if (accessible) {
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`navbar-item no-underline transition-all ${isActive ? 'active' : 'hover:bg-accent cursor-pointer'}`}
              >
                {item.label}
              </Link>
            );
          }

          return (
            <div
              key={item.id}
              className="navbar-item opacity-20 pointer-events-none"
            >
              {item.label}
            </div>
          );
        })}
      </div>

      <button 
        onClick={toggleTheme}
        className="ml-4 p-2 bg-accent rounded-xl text-lg hover:bg-glass-border transition-all flex items-center justify-center"
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </header>
  );
}

