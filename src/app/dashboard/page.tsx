'use client';

import React from 'react';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import VideoCard from '@/components/video/VideoCard';
import { Video } from '@/types';

export default function DashboardPage() {
  const stats = [
    { label: 'Jami Videolar', value: '12' },
    { label: 'Ko\'rishlar', value: '45.2K' },
    { label: 'Kreditlar', value: '8' },
  ];

  const recentVideos: Video[] = [
    { 
      id: 'dash-1', 
      title: 'Koinot sirlari', 
      prompt: 'Kosmik faktlar va kashfiyotlar haqida qisqacha ma\'lumot', 
      status: 'done', 
      views: 45200, 
      likes: 3100, 
      createdAt: new Date().toISOString(), 
      duration: 59,
      youtubeUrl: '#'
    },
    { 
      id: 'dash-2', 
      title: 'Qadimgi Dunyo', 
      prompt: 'Rim va Misr piramidalari sirlari haqida', 
      status: 'generating', 
      createdAt: new Date().toISOString() 
    }
  ];

  return (
    <Container>
      <div className="space-y-20 pb-20">
        
        {/* Banner - Ko'p padding bilan */}
        <div className="bg-white border-2 border-gray-100 rounded-[4rem] p-12 md:p-20 shadow-2xl shadow-gray-50 flex flex-col xl:flex-row items-center justify-between gap-12">
          <div className="text-center xl:text-left space-y-6">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.9] tracking-tighter">
              Xush kelibsiz! 👋 <br/>
              <span className="text-red-600">Shorts</span> yaratamiz.
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl font-medium max-w-xl">AI yordamida bir necha soniyada professional videolar tayyorlang.</p>
          </div>
          <Link 
            href="/create" 
            className="w-full xl:w-auto bg-red-600 hover:bg-red-700 text-white px-16 py-8 rounded-[2rem] font-black text-2xl text-center shadow-2xl shadow-red-200 transition-all hover:scale-105 active:scale-95 tracking-widest"
          >
            + VIDEO YARATISH
          </Link>
        </div>

        {/* Statistika - padding bilan */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {stats.map((item, index) => (
            <div key={index} className="bg-white p-12 rounded-[3rem] border-2 border-gray-50 shadow-sm text-center space-y-2">
              <h3 className="text-5xl font-black text-gray-900">{item.value}</h3>
              <p className="text-gray-300 font-black uppercase text-xs tracking-[0.3em]">{item.label}</p>
            </div>
          ))}
        </div>

        {/* So'nggi videolar */}
        <div className="space-y-12">
          <div className="flex items-center justify-between px-6">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">So'nggi videolar</h2>
            <Link href="/videos" className="text-red-600 font-black hover:underline tracking-widest text-sm uppercase">Hammasini ko'rish →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
            {recentVideos.map(v => (
              <div key={v.id} className="w-full">
                <VideoCard video={v} />
              </div>
            ))}
            
            <Link 
              href="/create" 
              className="group border-4 border-dashed border-gray-100 rounded-[3rem] p-16 flex flex-col items-center justify-center hover:border-red-200 hover:bg-red-50 transition-all min-h-[400px] w-full"
            >
              <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300">➕</div>
              <span className="font-black text-gray-300 group-hover:text-red-600 tracking-widest uppercase text-sm">Yangi video</span>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}