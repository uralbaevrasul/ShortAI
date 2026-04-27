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
  { id: 'script', label: 'Ssenariy yozish', href: '/script' },
  { id: 'data', label: 'Ma\'lumot to\'plash', href: '/data' },
  { id: 'image', label: 'Rasm generatsiya', href: '/image' },
  { id: 'edit', label: 'AI Montaj', href: '/edit' },
  { id: 'telegram', label: 'Telegram Bot', href: '/telegram' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { isProcessing } = useVideoCreation();

  const isAccessible = (itemHRef: string) => {
    if (!isProcessing) return pathname === itemHRef;
    const stepOrder = ['/script', '/data', '/image', '/edit', '/telegram'];
    const currentIndex = stepOrder.indexOf(pathname);
    const itemIndex = stepOrder.indexOf(itemHRef);
    return itemIndex <= currentIndex;
  };

  return (
    <header className="navbar">
      {navItems.map((item) => {
        const accessible = isAccessible(item.href);
        const isActive = pathname === item.href;

        if (accessible) {
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`navbar-item no-underline transition-all ${isActive ? 'active' : 'hover:text-primary cursor-pointer'}`}
              style={{ cursor: 'pointer' }}
            >
              {item.label}
            </Link>
          );
        }

        return (
          <div
            key={item.id}
            className="navbar-item opacity-15"
            style={{ cursor: 'default' }}
          >
            {item.label}
          </div>
        );
      })}
    </header>
  );
}
