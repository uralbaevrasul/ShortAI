'use client';

import React from 'react';

export default function SidebarRight() {
  return (
    <aside className="right-sidebar">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-black text-text-main">Channels</h2>
        <span className="px-3 py-1 bg-primary text-white rounded-full text-[10px] font-black">2/5</span>
      </div>
      
      <div className="flex flex-col gap-4">
        {[
          { name: 'Faktlar Dunyosi', handle: '@faktlar_ai', subs: '12.5k', icon: '🎬' },
          { name: 'Texno Uz AI', handle: '@texnouz_ai', subs: '3.2k', icon: '🚀' }
        ].map((ch, i) => (
          <div key={i} className="bg-accent border border-glass-border p-6 rounded-[2.5rem] group hover:border-primary transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-bg-sidebar rounded-2xl flex items-center justify-center text-2xl border border-glass-border">
                {ch.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-sm text-text-main">{ch.name}</h3>
                <p className="text-[10px] text-text-muted font-bold uppercase">{ch.handle}</p>
              </div>
            </div>
            <div className="bg-bg-sidebar p-4 rounded-2xl border border-glass-border flex justify-between items-center">
              <span className="text-[10px] font-black text-text-muted">Subscribers</span>
              <span className="text-sm font-black text-text-main">{ch.subs}</span>
            </div>
          </div>
        ))}

        <button className="w-full py-5 border-2 border-dashed border-glass-border rounded-[2.5rem] text-text-muted text-[10px] font-black uppercase tracking-widest hover:border-primary hover:text-primary transition-all active:scale-[0.98]">
          + Add Channel
        </button>
      </div>

    </aside>
  );
}
