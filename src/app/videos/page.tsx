'use client';

import React from 'react';
import Link from 'next/link';
import VideoCard from '@/components/video/VideoCard';
import { Video } from '@/types';

const INITIAL_VIDEOS: Video[] = [
  {
    id: '1',
    title: 'Koinot sirlari',
    prompt: 'Koinot va qora tuynuklar haqida qiziqarli faktlar...',
    status: 'done',
    duration: 59,
    createdAt: new Date().toISOString(),
    youtubeUrl: 'https://youtube.com/shorts/123',
    thumbnailUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80'
  },
  {
    id: '2',
    title: 'Sun\'iy Intellekt kelajagi',
    prompt: 'AI insoniyat hayotini qanday o\'zgartirishi haqida',
    status: 'uploading',
    createdAt: new Date().toISOString(),
    thumbnailUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80'
  }
];

export default function VideosPage() {
  const [videos, setVideos] = React.useState<Video[]>(INITIAL_VIDEOS);

  const handleDelete = (id: string) => {
    if (confirm('Ro\'stdan ham o\'chirmoqchimisiz?')) {
      setVideos(videos.filter(v => v.id !== id));
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-2">
        <h2 className="text-4xl font-black tracking-tight text-text-main tracking-tighter">Mening Videolarim 🎬</h2>
        <p className="text-text-muted font-medium tracking-tight">Siz tomoningizdan tayyorlangan barcha videolar to'plami.</p>
      </section>

      {videos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="animate-in">
              <VideoCard 
                video={video} 
                onDelete={handleDelete} 
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="card-premium py-32 text-center border-dashed border-2 border-glass-border bg-accent/20 flex flex-col items-center justify-center">
          <div className="text-7xl mb-8 opacity-20 text-text-main">🎬</div>
          <h2 className="text-3xl font-black mb-4 text-text-main uppercase tracking-tighter">Videolar hali mavjud emas</h2>
          <p className="text-text-muted mb-10 max-w-sm mx-auto font-medium">Hali hech qanday video yaratmagansiz. Keling, birinchi videoni hoziroq yarating!</p>
          <Link href="/create">
            <button className="bg-primary hover:bg-primary-hover text-white px-10 py-5 rounded-[2rem] font-black text-xl shadow-2xl shadow-primary/20 transition-all active:scale-95">
              YANGI VIDEO YARATISH 🚀
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}