'use client';
// src/components/ui/Input.tsx

import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  icon?: React.ReactNode;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const baseStyle: React.CSSProperties = {
  background: 'var(--bg-elevated)',
  border: '1px solid var(--border)',
  color: 'var(--text-primary)',
  borderRadius: '12px',
  width: '100%',
  fontSize: '14px',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label, error, hint, icon, className = '', ...props
}, ref) => {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium" style={{ color: 'var(--text-primary)', fontFamily: 'Syne, sans-serif' }}>
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm" style={{ color: 'var(--text-muted)' }}>
            {icon}
          </span>
        )}
        <input
          ref={ref}
          className={`${className} focus:outline-none`}
          style={{
            ...baseStyle,
            padding: icon ? '10px 14px 10px 38px' : '10px 14px',
            borderColor: error ? 'var(--red)' : undefined,
          }}
          onFocus={e => { e.target.style.borderColor = '#6366f1'; e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.12)'; }}
          onBlur={e => { e.target.style.borderColor = error ? 'var(--red)' : 'var(--border)'; e.target.style.boxShadow = 'none'; }}
          {...props}
        />
      </div>
      {(error || hint) && (
        <p className="text-xs" style={{ color: error ? 'var(--red)' : 'var(--text-muted)' }}>
          {error || hint}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  label, error, hint, className = '', rows = 4, ...props
}, ref) => {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium" style={{ color: 'var(--text-primary)', fontFamily: 'Syne, sans-serif' }}>
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={`${className} resize-none`}
        style={{
          ...baseStyle,
          padding: '12px 14px',
          borderColor: error ? 'var(--red)' : undefined,
        }}
        onFocus={e => { e.target.style.borderColor = '#6366f1'; e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.12)'; }}
        onBlur={e => { e.target.style.borderColor = error ? 'var(--red)' : 'var(--border)'; e.target.style.boxShadow = 'none'; }}
        {...props}
      />
      {(error || hint) && (
        <p className="text-xs" style={{ color: error ? 'var(--red)' : 'var(--text-muted)' }}>
          {error || hint}
        </p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';
export default Input;