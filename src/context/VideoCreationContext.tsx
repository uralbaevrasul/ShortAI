'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type Step = 'idle' | 'script' | 'data' | 'image' | 'edit' | 'telegram' | 'youtube';
type Theme = 'light' | 'dark';

interface VideoCreationContextType {
  topic: string;
  setTopic: (t: string) => void;
  currentStep: Step;
  setCurrentStep: (s: Step) => void;
  startCreation: (topic: string) => void;
  isProcessing: boolean;
  setIsProcessing: (b: boolean) => void;
  theme: Theme;
  toggleTheme: () => void;
}

const VideoCreationContext = createContext<VideoCreationContextType | undefined>(undefined);

export function VideoCreationProvider({ children }: { children: React.ReactNode }) {
  const [topic, setTopic] = useState('');
  const [currentStep, setCurrentStep] = useState<Step>('idle');
  const [isProcessing, setIsProcessing] = useState(false);
  const [theme, setTheme] = useState<Theme>('dark');
  const router = useRouter();

  useEffect(() => {
    // Apply theme to document
    document.documentElement.className = theme;
  }, [theme]);

  const startCreation = (newTopic: string) => {
    setTopic(newTopic);
    setCurrentStep('script');
    setIsProcessing(true);
    router.push('/script');
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <VideoCreationContext.Provider value={{ 
      topic, setTopic, 
      currentStep, setCurrentStep, 
      startCreation, 
      isProcessing, setIsProcessing,
      theme, toggleTheme
    }}>
      {children}
    </VideoCreationContext.Provider>
  );
}

export function useVideoCreation() {
  const context = useContext(VideoCreationContext);
  if (!context) throw new Error('useVideoCreation must be used within a VideoCreationProvider');
  return context;
}
