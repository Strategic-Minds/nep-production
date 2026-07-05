import Link from 'next/link';
import { BRAND } from '@/lib/brand';

const NAV = [
  { label: 'Floor Systems', href: '/floor-systems' },
  { label: 'Design Center', href: '/design' },
  { label: 'Visualizer', href: '/floor-visualizer' },
  { label: 'Locations', href: '/locations' },
  { label: 'Training', href: '/training' },
  { label: 'Gallery', href: '/gallery' },
];

export function SiteHeader() {
  return (
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
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-foreground/80 hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/digital-bid"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-extrabold text-primary-foreground hover:bg-primary/90"
        >
          Get Free Bid
        </Link>
      </div>
    </header>
  );
}
