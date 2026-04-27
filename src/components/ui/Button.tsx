'use client';
// src/app/telegram/page.tsx

import Container from '@/components/layout/Container';
import Header from '@/components/layout/Header';

const COMMANDS = [
  { cmd: '/create', desc: "Yangi video yaratish", color: 'blue' },
  { cmd: '/status', desc: "So'nggi videolar holati", color: 'purple' },
  { cmd: '/balance', desc: "Qolgan kreditlarni ko'rish", color: 'green' },
];

const STEPS = [
  { id: 1, content: <>Telegramda <a href="https://t.me/shortforge_bot" target="_blank" rel="noreferrer" className="text-[#1e96c8] font-semibold hover:underline">@shortforge_bot</a> ga kiring</> },
  { id: 2, content: <>Botga <code className="font-mono text-sm bg-black/20 px-1.5 py-0.5 rounded">/start</code> buyrug'ini yuboring</> },
  { id: 3, content: 'token' },
];

const cmdColors: Record<string, string> = {
  blue:   'bg-blue-500/15 text-blue-400',
  purple: 'bg-purple-500/15 text-purple-400',
  green:  'bg-green-500/15 text-green-400',
};

export default function TelegramPage() {
  return (
    <Container>
      <Header />

      <div className="p-6 md:p-10 max-w-3xl mx-auto flex flex-col items-center gap-10">

        {/* Hero */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1e96c8]">
            <TelegramIcon size={30} />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
            <span className="text-[#1e96c8]">Telegram Bot</span> Integratsiyasi
          </h1>
          <p className="text-base text-[var(--text-muted)] max-w-md mx-auto">
            ShortForge boti orqali to'g'ridan-to'g'ri Telegramdan viral shorts yarating va kanalingizga yuboring.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

          {/* Guide Card */}
          <div className="rounded-2xl p-7 space-y-5 border border-white/5 bg-white/5 backdrop-blur-md">
            <h2 className="text-lg font-bold text-[var(--text-primary)]">Botni ulash qo'llanmasi</h2>

            <ol className="space-y-4 text-sm text-[var(--text-muted)]">
              {STEPS.map(({ id, content }) => (
                <li key={id} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1e96c8] flex items-center justify-center text-xs font-bold text-white">
                    {id}
                  </span>
                  <span className="pt-0.5 leading-relaxed">
                    {content === 'token'
                      ? <>Tokenni botga yuboring:
                          <div className="mt-2 flex items-center justify-between px-3 py-2 rounded-lg bg-black/30 border border-white/10 cursor-pointer group hover:bg-black/50 transition-colors">
                            <code className="font-mono text-gray-300 text-xs">sf_1a2b3c4d5e6f</code>
                            <span className="text-xs text-gray-500 group-hover:text-white transition-colors">Nusxa olish</span>
                          </div>
                        </>
                      : content}
                  </span>
                </li>
              ))}
            </ol>

            <div className="flex items-center gap-2 text-sm font-medium text-[#1e96c8] pl-3 border-l-4 border-[#1e96c8] py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              Ulanish holati: Kutilmoqda...
            </div>
          </div>

          {/* Commands Card */}
          <div className="rounded-2xl p-7 space-y-5 border border-white/5 bg-white/5 backdrop-blur-md">
            <h2 className="text-lg font-bold text-[var(--text-primary)]">Mavjud buyruqlar</h2>

            <ul className="space-y-3">
              {COMMANDS.map(({ cmd, desc, color }) => (
                <li key={cmd} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-black/20 border border-white/5">
                  <code className={`px-2 py-0.5 rounded text-xs font-mono font-medium ${cmdColors[color]}`}>{cmd}</code>
                  <span className="text-sm text-[var(--text-muted)]">{desc}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://t.me/shortforge_bot"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#1e96c8] hover:bg-[#1a84b3] transition-colors text-sm font-semibold text-white"
            >
              <TelegramIcon size={16} />
              Botni ochish
            </a>
          </div>

        </div>
      </div>
    </Container>
  );
}

function TelegramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="white" fillOpacity="0.2" />
      <path
        d="M16.036 8.533L7.362 11.879c-.69.277-.685.66-.127.832l2.232.697 5.168-3.26c.245-.15.467-.066.279.1l-4.19 3.784-.161 1.623c.52 0 .75-.239 1.032-.512l2.479-2.414 5.16 3.812c.95.524 1.63.252 1.889-.843l3.416-8.541c.47-1.887-.718-2.723-2.163-2.201L16.036 8.533z"
        fill="white"
      />
    </svg>
  );
}