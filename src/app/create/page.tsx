'use client';

import React from 'react';
import Container from '@/components/layout/Container';
import Generate from '@/components/video/Generate';

export default function CreatePage() {
  return (
    <Container>
      <div className="max-w-4xl mx-auto py-10">
        {/* Sarlavha qismi */}
        <div className="text-center mb-12">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4">
            AI Video Generation
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
            Yangi <span className="text-red-600">Shorts</span> Yarating
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            G'oyangizni bir necha so'zda tushuntiring, qolganini bizning aqlli tizimimiz bajaradi.
          </p>
        </div>

        {/* Generatsiya formasi */}
        <div className="max-w-3xl mx-auto">
          <Generate />
        </div>
      </div>
    </Container>
  );
}
