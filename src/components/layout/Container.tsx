import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: Props) {
  return (
    <div className={`w-full max-w-7xl mx-auto ${className}`}>
      {children}
    </div>
  );
}