'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Asosiy', href: '/dashboard', icon: '🏠' },
    { label: 'Videolar', href: '/videos', icon: '🎬' },
    { label: 'Yaratish', href: '/create', icon: '✨' },
  ];

  return (
    <nav className="mobile-nav">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link 
            key={item.href} 
            href={item.href} 
            className={`mobile-nav-item no-underline ${isActive ? 'active' : ''}`}
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
