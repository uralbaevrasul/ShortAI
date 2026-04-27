import type { Metadata } from 'next';
import './globals.css';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { VideoCreationProvider } from '@/context/VideoCreationContext';

export const metadata: Metadata = {
  title: 'ShortAI — AI Video Forge',
  description: 'AI yordamida professional Shorts videolar yarating',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className="antialiased">
        <VideoCreationProvider>
          <DashboardLayout>
            {children}
          </DashboardLayout>
        </VideoCreationProvider>
      </body>
    </html>
  );
}