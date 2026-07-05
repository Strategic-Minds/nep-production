'use client';

import { useState } from 'react';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { SITE_IMAGES, AI_IMAGE_DISCLOSURE } from '@/lib/site-images';
import { designCollections } from '@/lib/site-content';

export default function FloorVisualizerPage() {
  const [selected, setSelected] = useState<(typeof designCollections)[number]>(designCollections[0]);

  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Visualizer</p>
        <h1 className="mt-2 max-w-2xl text-4xl font-extrabold uppercase leading-tight tracking-tight">
          See the finish before the first grind.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Switch systems and tones to preview finish direction. Your project consultant brings physical
          samples on-site to match the final color exactly.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="relative overflow-hidden rounded-lg border border-border">
            <img src={SITE_IMAGES.metallicShowroom} alt={`${selected.name} preview`} className="h-full w-full object-cover" />
            <div
              className="absolute inset-0 mix-blend-multiply opacity-40"
              style={{ background: selected.tone }}
            />
            <p className="absolute bottom-0 left-0 right-0 bg-background/80 px-3 py-1 text-[10px] text-muted-foreground">
              {AI_IMAGE_DISCLOSURE}
            </p>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-primary">{selected.name}</p>
            <p className="mt-2 text-muted-foreground">{selected.detail}</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {designCollections.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setSelected(item)}
                  className={`rounded-lg border px-3 py-3 text-left text-sm font-bold transition ${
                    selected.name === item.name ? 'border-primary bg-primary/10 text-primary' : 'border-border hover:border-primary/50'
                  }`}
                >
                  <span className="mb-2 block h-6 w-full rounded" style={{ background: item.tone }} />
                  {item.name}
                </button>
              ))}
            </div>
            <a
              href="/digital-bid"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-primary px-7 text-sm font-extrabold text-primary-foreground hover:bg-primary/90"
            >
              Get Your Free Bid →
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
