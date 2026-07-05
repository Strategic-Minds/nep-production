import Link from 'next/link';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { SITE_IMAGES, AI_IMAGE_DISCLOSURE } from '@/lib/site-images';
import { BRAND } from '@/lib/brand';
import { proofStats } from '@/lib/site-content';

const CREDENTIALS = [
  { title: 'ACI 310.1-20', detail: 'Surface preparation standards followed on every job.' },
  { title: 'ASCC-Aligned', detail: 'Installation practices verified against ASCC guidance.' },
  { title: 'Lifetime Warranty', detail: 'Materials and workmanship covered on every install.' },
  { title: 'Certified Network', detail: 'Every crew trained through the Xtreme Polishing Systems program.' }
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-primary">About Us</p>
            <h1 className="mt-2 text-4xl font-extrabold uppercase leading-tight tracking-tight">
              {BRAND.name}
            </h1>
            <p className="mt-5 text-muted-foreground">
              {BRAND.name} is a nationwide network of certified epoxy and concrete coating
              contractors, powered by {BRAND.poweredBy} — a manufacturer and training authority
              with 20+ years in the decorative concrete industry. We built National Epoxy Pros to
              give homeowners and businesses a faster, more transparent way to get a floor coating
              project done: digital bids instead of waiting for a sales visit, real-time job
              tracking, and a lifetime warranty on every install.
            </p>
            <p className="mt-4 text-muted-foreground">
              Every contractor in the network is trained on ACI 310.1-20 surface preparation
              standards and ASCC-aligned installation practices, so quality holds up whether
              your project is in {BRAND.markets.slice(0, 3).join(', ')}, or any of our{' '}
              {BRAND.serviceFootprint}.
            </p>
            <Link
              href="/digital-bid"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-primary px-7 text-sm font-extrabold text-primary-foreground hover:bg-primary/90"
            >
              Start Digital Bid →
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
            <img src={SITE_IMAGES.patioOverlay} alt="National Epoxy Pros installation" className="h-full w-full object-cover" />
            <p className="absolute bottom-0 left-0 right-0 bg-background/80 px-3 py-1 text-[10px] text-muted-foreground">
              {AI_IMAGE_DISCLOSURE}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 text-center md:grid-cols-4">
          {proofStats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold text-primary">{s.value}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Standards We Hold</p>
          <h2 className="mt-2 text-3xl font-extrabold uppercase tracking-tight">Built on real credentials.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CREDENTIALS.map((c) => (
              <div key={c.title} className="rounded-lg border border-border bg-card p-6">
                <p className="font-extrabold text-primary">{c.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
