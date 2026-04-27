import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface Props {
  children: React.ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Yon menyu (Sidebar) */}
      <Sidebar />
      
      <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        {/* Yuqori Navbar */}
        <Header />
        
        {/* Asosiy kontent qismi - Katta padding bilan */}
        <main className="flex-1 p-8 md:p-12 lg:p-20">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}