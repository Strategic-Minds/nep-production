import Link from 'next/link';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';

const RESOURCES = [
  { title: 'How the Digital Bid Works', href: '/digital-bid', detail: 'Submit photos and measurements — no in-home visit required to start.' },
  { title: 'Floor System Comparison', href: '/floor-systems', detail: 'Compare flake, metallic, polished, stained, and countertop systems.' },
  { title: 'Design & Color Center', href: '/design', detail: 'Browse color and finish charts before your consultation.' },
  { title: 'Warranty Overview', href: '/about-us', detail: 'What is covered under the lifetime materials and workmanship warranty.' }
];

export default function ResourcesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Resources</p>
        <h1 className="mt-2 max-w-2xl text-4xl font-extrabold uppercase leading-tight tracking-tight">
          Everything you need before your bid.
        </h1>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {RESOURCES.map((r) => (
            <Link key={r.href} href={r.href} className="rounded-lg border border-border bg-card p-6 hover:border-primary">
              <p className="font-extrabold">{r.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{r.detail}</p>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
