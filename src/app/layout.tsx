import type { Metadata } from 'next';
import './globals.css';
 
export const metadata: Metadata = {
  title: 'ShortForge — AI YouTube Shorts Generator',
  description: 'Create viral YouTube Shorts with AI in seconds',
  icons: { icon: '/favicon.ico' },
};
 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}