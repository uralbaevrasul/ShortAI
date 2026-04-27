// src/types/index.ts
export type VideoStatus = 'pending' | 'generating' | 'uploading' | 'done' | 'error';

export interface Video {
  id: string;
  title: string;
  prompt: string;
  status: VideoStatus;
  thumbnailUrl?: string;
  duration?: number;
  youtubeId?: string;
  youtubeUrl?: string;
  views?: number;
  likes?: number;
  createdAt: string;
}
