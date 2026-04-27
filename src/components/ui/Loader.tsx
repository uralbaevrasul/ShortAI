'use client';
// src/components/ui/Loader.tsx

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  progress?: number;
}

const sizes = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12' };
const borders = { sm: 'border-2', md: 'border-2', lg: 'border-[3px]' };

export function Spinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  return (
    <div className={`${sizes[size]} ${borders[size]} rounded-full animate-spin`}
      style={{ borderColor: 'rgba(99,102,241,0.2)', borderTopColor: '#6366f1' }} />
  );
}

export function ProgressLoader({ progress = 0, label }: { progress: number; label?: string }) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        {label && <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>{label}</span>}
        <span className="text-xs font-bold" style={{ color: '#818cf8', marginLeft: 'auto' }}>{Math.round(progress)}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--bg-elevated)' }}>
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
            boxShadow: '0 0 8px rgba(99,102,241,0.6)',
          }}
        />
      </div>
    </div>
  );
}

export default function Loader({ size = 'md', label, progress }: LoaderProps) {
  return (
    <div className="flex flex-col items-center gap-4 py-8">
      {progress !== undefined ? (
        <div className="w-64">
          <ProgressLoader progress={progress} label={label} />
        </div>
      ) : (
        <>
          <Spinner size={size} />
          {label && <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{label}</p>}
        </>
      )}
    </div>
  );
}