import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteHeader } from '../../components/SiteHeader';
import { SiteFooter } from '../../components/SiteFooter';
import { SITE_IMAGES, AI_IMAGE_DISCLOSURE } from '@/lib/site-images';
import { serviceSystems } from '@/lib/site-content';

const IMAGE_MAP: Record<string, string> = {
  'flake-epoxy': SITE_IMAGES.garageEpoxy,
  'metallic-epoxy': SITE_IMAGES.metallicShowroom,
  'polished-concrete': SITE_IMAGES.retailFloor,
  'stained-concrete': SITE_IMAGES.patioOverlay,
  'concrete-countertops': SITE_IMAGES.retailFloor
};

export function generateStaticParams() {
  return serviceSystems.map((s) => ({ slug: s.slug }));
}

export default function FloorSystemPage({ params }: { params: { slug: string } }) {
  const system = serviceSystems.find((s) => s.slug === params.slug);
  if (!system) return notFound();

  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs font-extrabold uppercase tracking-widest text-primary">{system.eyebrow}</p>
        <h1 className="mt-2 max-w-2xl text-4xl font-extrabold uppercase leading-tight tracking-tight">
          {system.title}
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">{system.description}</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg border border-border">
            <img src={IMAGE_MAP[system.slug]} alt={system.title} className="h-full w-full object-cover" />
            <p className="absolute bottom-0 left-0 right-0 bg-background/80 px-3 py-1 text-[10px] text-muted-foreground">
              {AI_IMAGE_DISCLOSURE}
            </p>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-primary">Why it works</p>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {system.benefits.map((b) => (
                <li key={b} className="rounded-md border border-border bg-card px-3 py-2 font-bold">{b}</li>
              ))}
            </ul>
            <p className="mt-8 text-xs font-extrabold uppercase tracking-wider text-primary">Available finishes</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {system.finishes.map((f) => (
                <span key={f} className="rounded-full border border-border px-3 py-1 text-xs font-bold text-muted-foreground">
                  {f}
                </span>
              ))}
            </div>
            <Link
              href="/digital-bid"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-primary px-7 text-sm font-extrabold text-primary-foreground hover:bg-primary/90"
            >
              Get Your Free Bid →
            </Link>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <p className="text-xs font-extrabold uppercase tracking-wider text-primary">Other systems</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {serviceSystems.filter((s) => s.slug !== system.slug).map((s) => (
              <Link key={s.slug} href={`/floor-systems/${s.slug}`} className="rounded-md border border-border px-4 py-2 text-sm font-bold hover:border-primary hover:text-primary">
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
