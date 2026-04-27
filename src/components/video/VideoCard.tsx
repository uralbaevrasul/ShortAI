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
        return { text: 'Tayyor', color: 'text-green-600', bg: 'bg-green-100' };
      case 'error':
        return { text: 'Xato', color: 'text-red-600', bg: 'bg-red-100' };
      case 'uploading':
        return { text: 'Yuklanmoqda', color: 'text-blue-600', bg: 'bg-blue-100' };
      default:
        return { text: 'Kutilmoqda', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    }
  };

  const status = getStatusInfo(video.status);

  return (
    <div className="bg-white border-[3px] border-gray-100 rounded-[3rem] overflow-hidden hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:border-red-100 transition-all duration-500 group w-full p-2">
      {/* Video Preview */}
      <div className="relative aspect-video bg-gray-50 flex items-center justify-center overflow-hidden rounded-[2.5rem]">
        {video.thumbnailUrl ? (
          <img 
            src={video.thumbnailUrl} 
            alt={video.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          />
        ) : (
          <div className="text-gray-100 text-6xl">🎬</div>
        )}
        
        <span className={`absolute top-6 left-6 text-[10px] px-4 py-2 rounded-full font-black uppercase tracking-widest shadow-lg ${status.bg} ${status.color}`}>
          {status.text}
        </span>

        {video.duration && (
          <span className="absolute bottom-6 right-6 bg-black/80 text-white text-[10px] px-3 py-1.5 rounded-xl font-black">
            0:{video.duration}
          </span>
        )}
      </div>

      {/* Content Section - Ko'p padding bilan */}
      <div className="p-8 md:p-10">
        <h3 className="font-black text-gray-900 text-xl truncate mb-2">{video.title}</h3>
        <p className="text-sm text-gray-400 line-clamp-2 min-h-[48px] mb-8 leading-relaxed">
          {video.prompt}
        </p>

        {/* Buttons - Maksimal padding */}
        <div className="flex items-center gap-4">
          {video.youtubeUrl ? (
            <a 
              href={video.youtubeUrl} 
              target="_blank" 
              className="flex-[4] bg-red-600 hover:bg-red-700 text-white text-center py-5 rounded-2xl text-xs font-black tracking-widest transition-all shadow-xl shadow-red-100 active:scale-95"
            >
              KO'RISH
            </a>
          ) : (
            <div className="flex-[4] bg-gray-50 text-gray-300 text-center py-5 rounded-2xl text-[10px] font-black border-2 border-dashed tracking-widest uppercase">
              Kutilmoqda
            </div>
          )}
          
          {onDelete && (
            <button 
              onClick={() => onDelete(video.id)}
              className="flex-1 py-5 bg-white text-gray-200 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all border-2 border-gray-50 hover:border-red-100 flex items-center justify-center text-2xl shadow-sm"
            >
              🗑
            </button>
          )}
        </div>
      </div>
    </div>
  );
}