'use client';

import React from 'react';
import Container from '@/components/layout/Container';
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
  },
  {
    id: '2',
    title: 'Eng qisqa video',
    prompt: 'Oddiygina sinov videosi',
    status: 'uploading',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Xato bergan video',
    prompt: 'Nimadir xato ketgan bo\'lsa shundert ko\'rinadi',
    status: 'error',
    createdAt: new Date().toISOString(),
  },
];

export default function VideosPage() {
  const [videos, setVideos] = React.useState<Video[]>(INITIAL_VIDEOS);

  const handleDelete = (id: string) => {
    if (confirm('Rostdan ham o\'chirmoqchimisiz?')) {
      setVideos(videos.filter(v => v.id !== id));
    }
  };

  return (
    <Container>
      <div className="max-w-6xl mx-auto">
        {/* Sarlavha */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black text-gray-900">
            Mening <span className="text-red-600">Videolarim</span>
          </h1>
          <p className="text-gray-500 mt-2">Siz tomoningizdan yaratilgan barcha videolar ro'yxati</p>
        </div>

        {/* Videolar gridi - markazlashgan (justify-items-center) */}
        {videos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {videos.map((video) => (
              <div key={video.id} className="w-full max-w-sm">
                <VideoCard 
                  video={video} 
                  onDelete={handleDelete} 
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border-2 border-dashed rounded-3xl p-20 text-center">
            <div className="text-7xl mb-6">🎬</div>
            <h2 className="text-2xl font-bold mb-3">Videolar hali mavjud emas</h2>
            <p className="text-gray-400 mb-8">Hali hech qanday video yaratmagansiz. Keling, birinchi videoni hoziroq yarating!</p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-red-200 transition-all active:scale-95">
              Yangi video yaratish
            </button>
          </div>
        )}
      </div>
    </Container>
  );
}