import Link from 'next/link';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { SITE_IMAGES, AI_IMAGE_DISCLOSURE } from '@/lib/site-images';
import { BRAND } from '@/lib/brand';
import { serviceSystems, designCollections, proofStats } from '@/lib/site-content';

export default function HomePage() {
  return (
    <main>
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Enterprise</p>
            <h1 className="mt-3 text-5xl font-extrabold uppercase leading-[1.05] tracking-tight">
              Epoxy Flooring Systems <span className="text-primary">Built For Real Projects</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              High-performance epoxy floor systems for commercial, industrial, and residential spaces.
              Backed by 30+ years of expertise and nationwide service you can count on.
            </p>

            <div className="mt-8 rounded-lg border border-primary/30 bg-card p-5">
              <p className="font-extrabold text-primary">
                Start your digital bid and receive <span className="underline">15% OFF</span> your approved project proposal.
              </p>
              <p className="mt-1 text-xs text-muted-foreground">24-hour bid response guarantee. Terms apply.</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/digital-bid"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-7 text-sm font-extrabold text-primary-foreground hover:bg-primary/90"
              >
                Start Digital Bid →
              </Link>
              <Link
                href="/design"
                className="inline-flex h-12 items-center justify-center rounded-md border border-border px-7 text-sm font-extrabold hover:bg-accent"
              >
                Explore Design Center
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
            <img
              src={SITE_IMAGES.heroGarage}
              alt="Enterprise epoxy garage floor system"
              className="h-full w-full object-cover"
            />
            <p className="absolute bottom-0 left-0 right-0 bg-background/80 px-3 py-1 text-[10px] text-muted-foreground">
              {AI_IMAGE_DISCLOSURE}
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 text-center md:grid-cols-4">
          {proofStats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold text-primary">{s.value}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FLOOR SYSTEMS GRID */}
      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Premium Epoxy Floor Systems</p>
            <h2 className="mt-2 text-3xl font-extrabold uppercase tracking-tight">Choose the system that fits the space.</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {serviceSystems.slice(0, 6).map((system) => (
              <Link
                key={system.slug}
                href={`/floor-systems/${system.slug}`}
                className="group overflow-hidden rounded-lg border border-border bg-card transition hover:border-primary"
              >
                <div className="relative h-28 overflow-hidden">
                  <img
                    src={SITE_IMAGES.garageEpoxy}
                    alt={`${system.shortLabel} preview`}
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-extrabold">{system.shortLabel}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{system.shortDetail}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL BID */}
      <section className="border-b border-border bg-card py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
          <div className="rounded-lg border border-border bg-background p-6">
            <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Your Project, Our Priority</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Get a fast, easy, and accurate epoxy floor estimate in minutes with our Digital Bid System.
              Perfect for urgent projects and tight timelines.
            </p>
            <Link
              href="/digital-bid"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-extrabold text-primary-foreground hover:bg-primary/90"
            >
              Get My Instant Bid →
            </Link>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight">
              Deadlines don&rsquo;t wait. <span className="text-primary">Neither should you.</span>
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li>✓ 24-hour bid response guarantee</li>
              <li>✓ Accurate pricing you can trust</li>
              <li>✓ No phone tag. No delays.</li>
            </ul>
            <Link
              href="/digital-bid"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-primary px-7 text-sm font-extrabold text-primary-foreground hover:bg-primary/90"
            >
              Start My Digital Bid Now →
            </Link>
          </div>
        </div>
      </section>

      {/* VISUALIZER */}
      <section className="border-b border-border py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
            <img src={SITE_IMAGES.retailFloor} alt="Floor visualizer preview" className="h-full w-full object-cover" />
            <p className="absolute bottom-0 left-0 right-0 bg-background/80 px-3 py-1 text-[10px] text-muted-foreground">
              {AI_IMAGE_DISCLOSURE}
            </p>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-primary">See It Before You Build It</p>
            <h2 className="mt-2 text-3xl font-extrabold uppercase tracking-tight">Design your floor.</h2>
            <p className="mt-4 text-muted-foreground">
              Upload your space and visualize real epoxy floor styles in your environment with our visualizer.
            </p>
            <Link
              href="/floor-visualizer"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-md border border-border px-7 text-sm font-extrabold hover:bg-accent"
            >
              Try the Visualizer →
            </Link>
          </div>
        </div>
      </section>

      {/* DESIGN CENTER */}
      <section className="border-b border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Design Center</p>
              <h2 className="mt-2 text-3xl font-extrabold uppercase tracking-tight">
                Explore colors, see 3D finishes, match your perfect floor.
              </h2>
            </div>
            <Link href="/design" className="hidden text-sm font-extrabold text-primary hover:underline md:block">
              Browse All Colors →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {designCollections.slice(0, 4).map((item) => (
              <div key={item.name} className="rounded-lg border border-border bg-background p-5">
                <div className="h-16 w-full rounded-md" style={{ background: item.tone }} />
                <p className="mt-4 font-extrabold">{item.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Real Projects. Real Results.</p>
              <h2 className="mt-2 text-3xl font-extrabold uppercase tracking-tight">See the quality. Experience the difference.</h2>
            </div>
            <Link href="/gallery" className="hidden text-sm font-extrabold text-primary hover:underline md:block">
              View Gallery →
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[SITE_IMAGES.garageEpoxy, SITE_IMAGES.metallicShowroom, SITE_IMAGES.retailFloor, SITE_IMAGES.patioOverlay].map((img, i) => (
              <div key={i} className="relative h-48 overflow-hidden rounded-lg border border-border">
                <img src={img} alt="National Epoxy Pros project" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
          <p className="mt-3 text-[10px] text-muted-foreground">{AI_IMAGE_DISCLOSURE}</p>
        </div>
      </section>

      {/* PRODUCTS + TRAINING */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-8">
            <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Premium Products &amp; Equipment</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Professional-grade solutions for maximum performance and longevity.
            </p>
            <Link href="/products" className="mt-6 inline-flex text-sm font-extrabold text-primary hover:underline">
              Shop Products →
            </Link>
          </div>
          <div className="rounded-lg border border-border bg-card p-8">
            <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Training &amp; Contractor Success</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Build. Grow your business. Join the network of certified pros.
            </p>
            <Link href="/training" className="mt-6 inline-flex text-sm font-extrabold text-primary hover:underline">
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
