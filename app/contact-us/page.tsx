import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { BRAND } from '@/lib/brand';

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-2xl px-6 py-20">
        <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Contact</p>
        <h1 className="mt-2 text-3xl font-extrabold uppercase tracking-tight">Talk to a Specialist</h1>
        <div className="mt-8 space-y-3 rounded-lg border border-border bg-card p-6">
          <p><span className="font-extrabold">Phone:</span> <a className="text-primary" href="tel:8779586408">{BRAND.phone}</a></p>
          <p><span className="font-extrabold">Email:</span> <a className="text-primary" href={`mailto:${BRAND.email}`}>{BRAND.email}</a></p>
          <p><span className="font-extrabold">Corporate:</span> {BRAND.corporateAddress}</p>
        </div>
        <a
          href="/digital-bid"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-primary px-7 text-sm font-extrabold text-primary-foreground hover:bg-primary/90"
        >
          Or Get a Digital Bid →
        </a>
      </section>
      <SiteFooter />
    </main>
  );
}
