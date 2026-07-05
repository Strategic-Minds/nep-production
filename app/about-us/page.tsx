import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { BRAND } from '@/lib/brand';

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-xs font-extrabold uppercase tracking-widest text-primary">About Us</p>
        <h1 className="mt-2 text-3xl font-extrabold uppercase tracking-tight">
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
      </section>
      <SiteFooter />
    </main>
  );
}
