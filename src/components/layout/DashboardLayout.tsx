'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLanding = pathname === '/';

  if (isLanding) {
    return <div className="min-h-screen bg-bg-main overflow-x-hidden">{children}</div>;
  }

  return (
    <div className="dashboard-grid">
      <SidebarLeft />
      
      <main className="center-column">
        <Navbar />

        <div className="main-content">
          <div className="animate-in">
            {children}
          </div>
        </div>

        <footer className="footer">
          <div className="flex items-center justify-center gap-6 text-text-muted text-[11px] font-medium">
            <span>© {new Date().getFullYear()} ShortAI Jamoasi</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">Loyiha haqida</a>
              <a href="#" className="hover:text-primary transition-colors">Yordam</a>
            </div>
          </div>
        </footer>
      </main>

      <SidebarRight />
    </div>
  );
}
