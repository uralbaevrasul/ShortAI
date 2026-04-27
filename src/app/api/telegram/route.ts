// src/app/api/telegram/route.ts
import { NextResponse } from 'next/server';

// This handles incoming webhooks from Telegram Bot API
export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Check if it's a message from Telegram
    if (data.message && data.message.text) {
      const chatId = data.message.chat.id;
      const text = data.message.text;

      console.log(`Received message from ${chatId}: ${text}`);

      // Basic command handling
      if (text.startsWith('/start')) {
        // Send welcome message back via Telegram API (would use your bot token here)
        // fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, { ... })
      } else if (text.startsWith('/create')) {
        // Parse prompt and Trigger video generation
      }
    }

    // Always return 200 OK to Telegram to acknowledge receipt
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('Telegram Webhook Error:', error);
    return NextResponse.json({ error: 'Failed to process webhook' }, { status: 500 });
  }
}
