import Link from 'next/link';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { SITE_IMAGES } from '@/lib/site-images';
import { serviceSystems } from '@/lib/site-content';

const IMAGE_MAP: Record<string, string> = {
  'flake-epoxy': SITE_IMAGES.garageEpoxy,
  'metallic-epoxy': SITE_IMAGES.metallicShowroom,
  'polished-concrete': SITE_IMAGES.retailFloor,
  'stained-concrete': SITE_IMAGES.patioOverlay,
  'concrete-countertops': SITE_IMAGES.retailFloor
};

export default function FloorSystemsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Premium floor systems</p>
        <h1 className="mt-2 max-w-2xl text-4xl font-extrabold uppercase leading-tight tracking-tight">
          Choose the system that fits the space.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Flake, metallic, polished, stained, and custom concrete surfaces — organized for fast comparison
          so you can find the right finish before you ever pick up the phone.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceSystems.map((system) => (
            <Link
              key={system.slug}
              href={`/floor-systems/${system.slug}`}
              className="group overflow-hidden rounded-lg border border-border bg-card transition hover:border-primary"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={IMAGE_MAP[system.slug]}
                  alt={`${system.title} preview`}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-primary">{system.eyebrow}</p>
                <h3 className="mt-1 font-extrabold">{system.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{system.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
