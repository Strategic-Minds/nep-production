import Link from 'next/link';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { BRAND } from '@/lib/brand';
import { locationHighlights } from '@/lib/site-content';

export default function LocationsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Locations</p>
        <h1 className="mt-2 max-w-2xl text-4xl font-extrabold uppercase leading-tight tracking-tight">
          {BRAND.serviceFootprint}, one digital bid workflow.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          National Epoxy Pros runs on the Xtreme Polishing Systems network — certified crews, standardized
          materials, and the same lifetime warranty in every market.
        </p>

        <div className="mt-12 grid gap-3 sm:grid-cols-3 md:grid-cols-4">
          {locationHighlights.map((city) => (
            <div key={city} className="rounded-md border border-border bg-card px-4 py-3 text-center text-sm font-bold">
              {city}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-border bg-card p-8 text-center">
          <p className="font-extrabold">Don't see your city listed?</p>
          <p className="mt-2 text-sm text-muted-foreground">
            New territories are launching every month. Submit a digital bid and we'll route it to the
            nearest certified crew.
          </p>
          <Link
            href="/digital-bid"
            className="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-primary px-7 text-sm font-extrabold text-primary-foreground hover:bg-primary/90"
          >
            Get Your Free Bid →
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
