'use client';
// src/app/telegram/page.tsx

import Container from '@/components/layout/Container';
import Header from '@/components/layout/Header';

const TG = '#229ED9';

const COMMANDS = [
  { cmd: '/create',  desc: 'Yangi video yaratish',        cls: 'text-sky-400 bg-sky-400/10'       },
  { cmd: '/status',  desc: "So'nggi videolar holati",     cls: 'text-violet-400 bg-violet-400/10' },
  { cmd: '/balance', desc: "Qolgan kreditlarni ko'rish",  cls: 'text-emerald-400 bg-emerald-400/10' },
];

function TgIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="white" fillOpacity="0.2" />
      <path
        d="M16.036 8.533L7.362 11.879c-.69.277-.685.66-.127.832l2.232.697
           5.168-3.26c.245-.15.467-.066.279.1l-4.19 3.784-.161 1.623c.52 0
           .75-.239 1.032-.512l2.479-2.414 5.16 3.812c.95.524 1.63.252
           1.889-.843l3.416-8.541c.47-1.887-.718-2.723-2.163-2.201z"
        fill="white"
      />
    </svg>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl p-6 flex flex-col gap-5 border border-white/[0.06] bg-white/[0.03]">
      <h2 className="font-bold text-base text-[var(--text-primary)]">{title}</h2>
      {children}
    </div>
  );
}

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span
        className="shrink-0 w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center mt-0.5"
        style={{ background: TG }}
      >
        {n}
      </span>
      <span className="text-sm leading-relaxed text-[var(--text-muted)]">{children}</span>
    </li>
  );
}

export default function TelegramPage() {
  return (
    <Container>
      <Header />

      <div className="max-w-3xl mx-auto px-6 py-12 flex flex-col items-center gap-10">

        {/* ── Hero ── */}
        <div className="text-center space-y-3">
          <div
            className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-1"
            style={{ background: TG }}
          >
            <TgIcon size={28} />
          </div>

          <h1
            className="text-4xl font-extrabold tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            <span style={{ color: TG }}>Telegram Bot</span> Integratsiyasi
          </h1>

          <p className="text-sm text-[var(--text-muted)] max-w-sm mx-auto leading-relaxed">
            ShortForge boti orqali Telegramdan viral shorts yarating va kanalingizga yuboring.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="grid md:grid-cols-2 gap-5 w-full">

          {/* Guide */}
          <Card title="Botni ulash qo'llanmasi">
            <ol className="space-y-4">
              <Step n={1}>
                Telegramda{' '}
                <a
                  href="https://t.me/shortforge_bot"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold hover:underline"
                  style={{ color: TG }}
                >
                  @shortforge_bot
                </a>{' '}
                ga kiring
              </Step>

              <Step n={2}>
                Botga{' '}
                <code className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-xs">
                  /start
                </code>{' '}
                buyrug'ini yuboring
              </Step>

              <Step n={3}>
                Tokenni botga yuboring:
                <div className="mt-2 flex items-center justify-between px-3 py-2 rounded-lg bg-black/30 border border-white/10 group cursor-pointer hover:bg-black/50 transition-colors">
                  <code className="font-mono text-xs text-white/70">sf_1a2b3c4d5e6f</code>
                  <span className="text-xs text-white/30 group-hover:text-white/70 transition-colors">
                    Nusxa olish
                  </span>
                </div>
              </Step>
            </ol>

            <div
              className="flex items-center gap-2 text-xs font-medium pl-3 py-2 border-l-2"
              style={{ color: TG, borderColor: TG }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-60" />
                <span className="relative rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Ulanish holati: Kutilmoqda...
            </div>
          </Card>

          {/* Commands */}
          <Card title="Mavjud buyruqlar">
            <ul className="space-y-2 flex-1">
              {COMMANDS.map(({ cmd, desc, cls }) => (
                <li
                  key={cmd}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/[0.05] bg-white/[0.03]"
                >
                  <code className={`px-2 py-0.5 rounded text-xs font-mono font-semibold ${cls}`}>
                    {cmd}
                  </code>
                  <span className="text-sm text-[var(--text-muted)]">{desc}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://t.me/shortforge_bot"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white hover:opacity-80 transition-opacity"
              style={{ background: TG }}
            >
              <TgIcon size={15} />
              Botni ochish
            </a>
          </Card>

        </div>
      </div>
    </Container>
  );
}