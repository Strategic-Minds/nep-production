import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { SITE_IMAGES, AI_IMAGE_DISCLOSURE } from '@/lib/site-images';
import { BRAND } from '@/lib/brand';

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-lg border border-border lg:order-1">
            <img src={SITE_IMAGES.metallicShowroom} alt="Talk to a National Epoxy Pros specialist" className="h-full w-full object-cover" />
            <p className="absolute bottom-0 left-0 right-0 bg-background/80 px-3 py-1 text-[10px] text-muted-foreground">
              {AI_IMAGE_DISCLOSURE}
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Contact</p>
            <h1 className="mt-2 text-4xl font-extrabold uppercase leading-tight tracking-tight">
              Talk to a Specialist
            </h1>
            <p className="mt-4 max-w-md text-muted-foreground">
              Reach our team directly, or skip the wait and submit a digital bid — most projects
              get a response within 24 hours.
            </p>

            <div className="mt-8 space-y-4 rounded-lg border border-border bg-card p-6">
              <p><span className="font-extrabold">Phone:</span> <a className="text-primary hover:underline" href="tel:8779586408">{BRAND.phone}</a></p>
              <p><span className="font-extrabold">Leads:</span> <a className="text-primary hover:underline" href={`mailto:${BRAND.leadsEmail}`}>{BRAND.leadsEmail}</a></p>
              <p><span className="font-extrabold">Support:</span> <a className="text-primary hover:underline" href={`mailto:${BRAND.email}`}>{BRAND.email}</a></p>
              <p><span className="font-extrabold">WhatsApp:</span> <a className="text-primary hover:underline" href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" rel="noreferrer">Message us</a></p>
              <p><span className="font-extrabold">Corporate:</span> {BRAND.corporateAddress}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/digital-bid"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-7 text-sm font-extrabold text-primary-foreground hover:bg-primary/90"
              >
                Start Digital Bid →
              </a>
              <a
                href="/locations"
                className="inline-flex h-12 items-center justify-center rounded-md border border-border px-7 text-sm font-extrabold hover:bg-accent"
              >
                Find Your Location
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-background p-6 text-center">
            <p className="text-2xl font-extrabold text-primary">24 hr</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">Bid Response Target</p>
          </div>
          <div className="rounded-lg border border-border bg-background p-6 text-center">
            <p className="text-2xl font-extrabold text-primary">70+</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">Locations Nationwide</p>
          </div>
          <div className="rounded-lg border border-border bg-background p-6 text-center">
            <p className="text-2xl font-extrabold text-primary">Lifetime</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">Warranty on Every Install</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
