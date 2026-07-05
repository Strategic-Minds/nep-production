import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { reviews } from '@/lib/site-content';

export default function ReviewsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Reviews</p>
        <h1 className="mt-2 max-w-2xl text-4xl font-extrabold uppercase leading-tight tracking-tight">
          What customers are saying.
        </h1>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-lg border border-border bg-card p-6">
              <p className="text-primary">★★★★★</p>
              <p className="mt-3 text-sm text-muted-foreground">"{r.quote}"</p>
              <p className="mt-4 text-sm font-extrabold">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.location}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
