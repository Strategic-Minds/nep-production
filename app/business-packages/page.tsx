import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { businessPackages } from '@/lib/site-content';
import { BRAND } from '@/lib/brand';

export default function BusinessPackagesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Business Packages</p>
        <h1 className="mt-2 max-w-2xl text-4xl font-extrabold uppercase leading-tight tracking-tight">
          Own a territory in the network.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Every package includes the National Epoxy Pros brand, digital bid tools, lead routing, and
          Xtreme Polishing Systems product access.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {businessPackages.map((pkg) => (
            <div key={pkg.name} className="rounded-lg border border-border bg-card p-6">
              <p className="font-extrabold">{pkg.name}</p>
              <p className="mt-2 text-sm text-muted-foreground">{pkg.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-border bg-card p-8 text-center">
          <p className="font-extrabold">Ready to talk territory availability?</p>
          <p className="mt-2 text-sm text-muted-foreground">Reach our team at {BRAND.phone} or {BRAND.leadsEmail}.</p>
          <a
            href="/contact-us"
            className="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-primary px-7 text-sm font-extrabold text-primary-foreground hover:bg-primary/90"
          >
            Contact Us →
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
