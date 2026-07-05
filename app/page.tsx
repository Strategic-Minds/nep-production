import Link from 'next/link';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { SITE_IMAGES, AI_IMAGE_DISCLOSURE } from '@/lib/site-images';
import { BRAND } from '@/lib/brand';

const SERVICES = [
  { title: 'Garage Floors', sub: 'Full-broadcast flake systems built for daily wear.', img: SITE_IMAGES.garageEpoxy },
  { title: 'Commercial Floors', sub: 'Retail, warehouse, and industrial coatings at scale.', img: SITE_IMAGES.retailFloor },
  { title: 'Metallic & Decorative', sub: 'Showroom-grade metallic epoxy finishes.', img: SITE_IMAGES.metallicShowroom },
  { title: 'Patios & Outdoor', sub: 'Overlay systems for patios, pool decks, and walkways.', img: SITE_IMAGES.patioOverlay },
];

const PROCESS = [
  { n: '01', title: 'Digital Bid', sub: 'Submit photos and measurements — no in-home visit required to get started.' },
  { n: '02', title: 'Proposal & Warranty', sub: 'A line-item proposal with lifetime warranty terms comes back by email.' },
  { n: '03', title: 'Schedule & Prep', sub: 'Pick your finish, confirm dates, crew handles surface prep and repair.' },
  { n: '04', title: 'Install & Sign-Off', sub: 'Live job tracker updates during install. Final walkthrough, warranty issued.' },
];

const FAQS = [
  { q: 'How fast can I get a bid?', a: 'Most digital bids are returned within a few business hours of photo + measurement submission.' },
  { q: 'Do you offer a warranty?', a: 'Yes — every installation is backed by a lifetime warranty on materials and workmanship.' },
  { q: 'What areas do you serve?', a: `${BRAND.serviceFootprint} across the US, with new city launches ongoing.` },
  { q: 'Can I track my project?', a: 'Yes. Every customer gets a live job tracker dashboard from bid through final sign-off.' },
];

export default function HomePage() {
  return (
    <main>
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={SITE_IMAGES.garageEpoxy}
          alt="Epoxy garage floor installation"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-28">
          <p className="text-xs font-extrabold uppercase tracking-widest text-primary">
            {BRAND.serviceFootprint}
          </p>
          <h1 className="mt-3 max-w-2xl text-5xl font-extrabold uppercase leading-[1.05] tracking-tight">
            Floors that outlast the excuses.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Digital bid in minutes. Lifetime warranty on every install. Track your job
            in real time from first photo to final walkthrough.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/digital-bid"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-7 text-sm font-extrabold text-primary-foreground hover:bg-primary/90"
            >
              Get Your Free Bid →
            </Link>
            <Link
              href="/gallery"
              className="inline-flex h-12 items-center justify-center rounded-md border border-border px-7 text-sm font-extrabold hover:bg-accent"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 text-center md:grid-cols-4">
          {[
            ['Lifetime', 'Warranty'],
            ['70+', 'Cities Nationwide'],
            ['2,000+', 'Certified Contractors'],
            ['Minutes', 'To Your Digital Bid'],
          ].map(([big, small]) => (
            <div key={small}>
              <p className="text-3xl font-extrabold text-primary">{big}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">{small}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Services</p>
        <h2 className="mt-2 text-3xl font-extrabold uppercase tracking-tight">What We Install</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <div key={s.title} className="overflow-hidden rounded-lg border border-border bg-card">
              <img src={s.img} alt={s.title} className="h-44 w-full object-cover" />
              <div className="p-5">
                <p className="font-extrabold">{s.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">{AI_IMAGE_DISCLOSURE}</p>
      </section>

      {/* PROCESS */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Process</p>
          <h2 className="mt-2 text-3xl font-extrabold uppercase tracking-tight">How It Works</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-4">
            {PROCESS.map((p) => (
              <div key={p.n}>
                <p className="text-4xl font-extrabold text-primary/40">{p.n}</p>
                <p className="mt-3 font-extrabold">{p.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{p.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs font-extrabold uppercase tracking-widest text-primary">FAQ</p>
        <h2 className="mt-2 text-3xl font-extrabold uppercase tracking-tight">Common Questions</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {FAQS.map((f) => (
            <div key={f.q} className="rounded-lg border border-border bg-card p-6">
              <p className="font-extrabold">{f.q}</p>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FOOTER BANNER */}
      <section className="border-t border-border bg-primary">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-14">
          <h2 className="max-w-xl text-3xl font-extrabold uppercase text-primary-foreground">
            Ready for a floor that actually holds up?
          </h2>
          <Link
            href="/digital-bid"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-extrabold text-primary hover:bg-primary-foreground/90"
          >
            Get Your Free Bid →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
