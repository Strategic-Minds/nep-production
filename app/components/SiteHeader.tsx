import Link from 'next/link';
import { BRAND } from '@/lib/brand';

const NAV = [
  { label: 'Services', href: '/floor-systems' },
  { label: 'Floor Systems', href: '/floor-systems' },
  { label: 'Design Center', href: '/design' },
  { label: 'Visualizer', href: '/floor-visualizer' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about-us' },
  { label: 'Contact', href: '/contact-us' }
];

export function SiteHeader() {
  return (
    <>
      <div className="hidden border-b border-border bg-card text-[11px] font-bold text-muted-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <div className="flex items-center gap-4">
            <a href={`tel:${BRAND.phone.replace(/[^\d+]/g, '')}`} className="hover:text-primary">{BRAND.phone}</a>
            <span className="text-border">|</span>
            <a href={`mailto:${BRAND.email}`} className="hover:text-primary">{BRAND.email}</a>
            <span className="text-border">|</span>
            <a
              href={`https://wa.me/${BRAND.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              WhatsApp Us
            </a>
          </div>
          <p>
            Powered by <span className="text-primary">Xtreme Polishing Systems</span>
          </p>
          <p className="text-primary">America&rsquo;s #1 Epoxy Super Store</p>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex flex-col leading-none">
            <span className="text-xl font-extrabold tracking-tight">
              NATIONAL <span className="text-primary">EPOXY</span> PROS
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Powered by Xtreme Polishing Systems
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-bold lg:flex">
            {NAV.slice(1).map((item) => (
              <Link key={item.href + item.label} href={item.href} className="text-foreground/80 hover:text-primary">
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/digital-bid"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-extrabold text-primary-foreground hover:bg-primary/90"
          >
            Start My Digital Bid
          </Link>
        </div>
      </header>
    </>
  );
}
