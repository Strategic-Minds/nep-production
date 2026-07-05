import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { SITE_IMAGES, AI_IMAGE_DISCLOSURE } from '@/lib/site-images';

const ITEMS = [
  { title: 'Full-Flake Garage', img: SITE_IMAGES.garageEpoxy },
  { title: 'Commercial Retail Floor', img: SITE_IMAGES.retailFloor },
  { title: 'Metallic Showroom Finish', img: SITE_IMAGES.metallicShowroom },
  { title: 'Outdoor Patio Overlay', img: SITE_IMAGES.patioOverlay },
];

export default function GalleryPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Gallery</p>
        <h1 className="mt-2 text-3xl font-extrabold uppercase tracking-tight">Recent Work</h1>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {ITEMS.map((it) => (
            <div key={it.title} className="overflow-hidden rounded-lg border border-border bg-card">
              <img src={it.img} alt={it.title} className="h-72 w-full object-cover" />
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
