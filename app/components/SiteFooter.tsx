import Link from 'next/link';
import { BRAND } from '@/lib/brand';

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <p className="text-lg font-extrabold tracking-tight">
            NATIONAL <span className="text-primary">EPOXY</span> PROS
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            {BRAND.tagline}. {BRAND.serviceFootprint}.
          </p>
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-wider text-primary">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link href="/floor-systems" className="hover:text-foreground">Floor Systems</Link></li>
            <li><Link href="/design" className="hover:text-foreground">Design Center</Link></li>
            <li><Link href="/floor-visualizer" className="hover:text-foreground">Visualizer</Link></li>
            <li><Link href="/gallery" className="hover:text-foreground">Gallery</Link></li>
            <li><Link href="/products" className="hover:text-foreground">Products</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-wider text-primary">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link href="/about-us" className="hover:text-foreground">About Us</Link></li>
            <li><Link href="/locations" className="hover:text-foreground">Locations</Link></li>
            <li><Link href="/training" className="hover:text-foreground">Training</Link></li>
            <li><Link href="/business-packages" className="hover:text-foreground">Business Packages</Link></li>
            <li><Link href="/reviews" className="hover:text-foreground">Reviews</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-wider text-primary">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link href="/digital-bid" className="hover:text-foreground">Digital Bid</Link></li>
            <li><Link href="/contact-us" className="hover:text-foreground">Contact Us</Link></li>
            <li>{BRAND.phone}</li>
            <li>{BRAND.leadsEmail}</li>
            <li>{BRAND.corporateAddress}</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 border-t border-border px-6 py-6 text-xs text-muted-foreground">
        <span>© 2026 National Epoxy Pros. All rights reserved.</span>
        <span>
          Powered by{' '}
          <a href={BRAND.poweredByUrl} target="_blank" className="text-primary hover:underline">
            Xtreme Polishing Systems
          </a>
        </span>
      </div>
    </footer>
  );
}
