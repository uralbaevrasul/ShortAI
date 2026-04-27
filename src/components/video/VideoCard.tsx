'use client';

import { Video } from '@/types';

interface Props {
  video: Video;
  onDelete?: (id: string) => void;
}

export default function VideoCard({ video, onDelete }: Props) {
  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'done':
        return { text: 'Tayyor', color: 'text-green-500', bg: 'bg-green-500/10 border-green-500/20' };
      case 'error':
        return { text: 'Xato', color: 'text-red-500', bg: 'bg-red-500/10 border-red-500/20' };
      case 'uploading':
        return { text: 'Yuklanmoqda', color: 'text-blue-500', bg: 'bg-blue-500/10 border-blue-500/20' };
      default:
        return { text: 'Kutilmoqda', color: 'text-yellow-500', bg: 'bg-yellow-500/10 border-yellow-500/20' };
    }
  };

  const status = getStatusInfo(video.status);

  return (
    <div className="bg-bg-card border border-glass-border rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500 group w-full p-2">
      {/* Video Preview */}
      <div className="relative aspect-video bg-accent flex items-center justify-center overflow-hidden rounded-[2rem]">
        {video.thumbnailUrl ? (
          <img 
            src={video.thumbnailUrl} 
            alt={video.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" 
          />
        ) : (
          <div className="text-text-main/10 text-6xl group-hover:scale-110 transition-transform duration-700">🎬</div>
        )}
        
        <span className={`absolute top-4 left-4 text-[10px] px-3 py-1.5 rounded-full font-black uppercase tracking-widest shadow-xl border backdrop-blur-md ${status.bg} ${status.color}`}>
          {status.text}
        </span>

        {video.duration && (
          <span className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-[10px] px-3 py-1.5 rounded-xl font-black border border-white/5">
            0:{video.duration}
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-8">
        <h3 className="font-black text-text-main text-lg truncate mb-2">{video.title}</h3>
        <p className="text-xs text-text-muted line-clamp-2 min-h-[32px] mb-6 leading-relaxed font-medium">
          {video.prompt}
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          {video.youtubeUrl ? (
            <a 
              href={video.youtubeUrl} 
              target="_blank" 
              className="flex-[4] bg-primary hover:bg-primary-hover text-white text-center py-4 rounded-xl text-[10px] font-black tracking-widest transition-all shadow-lg shadow-primary/20 active:scale-[0.98]"
            >
              KO'RISH
            </a>
          ) : (
            <div className="flex-[4] bg-accent text-text-muted text-center py-4 rounded-xl text-[10px] font-black border border-glass-border tracking-widest uppercase">
              Kutilmoqda
            </div>
          )}
          
          {onDelete && (
            <button 
              onClick={() => onDelete(video.id)}
              className="flex-1 py-4 bg-accent text-text-muted hover:text-primary hover:bg-primary/10 rounded-xl transition-all border border-glass-border hover:border-primary/20 flex items-center justify-center text-xl"
            >
              🗑
            </button>
          )}
        </div>
      </div>
    </div>
  );
}