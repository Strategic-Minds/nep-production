import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { SITE_IMAGES, AI_IMAGE_DISCLOSURE } from '@/lib/site-images';

const ITEMS = [
  { title: 'Full-Flake Garage', img: SITE_IMAGES.garageEpoxy },
  { title: 'Commercial Retail Floor', img: SITE_IMAGES.retailFloor },
  { title: 'Metallic Showroom Finish', img: SITE_IMAGES.metallicShowroom },
  { title: 'Polished Concrete Lobby', img: SITE_IMAGES.patioOverlay },
  { title: 'Luxury Garage Metallic', img: SITE_IMAGES.heroGarage },
  { title: 'Concrete Countertop Install', img: SITE_IMAGES.countertop }
];

export default function GalleryPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Gallery</p>
        <h1 className="mt-2 text-3xl font-extrabold uppercase tracking-tight">Recent Work</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A look at the systems, finishes, and spaces National Epoxy Pros crews deliver nationwide.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it) => (
            <div key={it.title} className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <p className="p-4 font-extrabold">{it.title}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">{AI_IMAGE_DISCLOSURE}</p>
      </section>
      <SiteFooter />
    </main>
  );
}
