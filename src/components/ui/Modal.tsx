'use client';
// src/components/ui/Modal.tsx

import { useEffect } from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

const widths = { sm: 'max-w-sm', md: 'max-w-md', lg: 'max-w-2xl' };

export default function Modal({ open, onClose, title, children, size = 'md' }: ModalProps) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (open) window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div
        className={`w-full ${widths[size]} rounded-2xl overflow-hidden fade-in-up`}
        style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
        {title && (
          <div className="flex items-center justify-between px-6 py-4"
            style={{ borderBottom: '1px solid var(--border)' }}>
            <h2 className="font-bold text-base" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}>
              {title}
            </h2>
            <button onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors hover:bg-white/5"
              style={{ color: 'var(--text-muted)', fontSize: '18px' }}>
              ✕
            </button>
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}