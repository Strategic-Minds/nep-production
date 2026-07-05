import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { trainingPrograms } from '@/lib/site-content';

export default function TrainingPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Training</p>
        <h1 className="mt-2 max-w-2xl text-4xl font-extrabold uppercase leading-tight tracking-tight">
          Backed by pro-grade systems.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Product education and installer pathways support customers, crews, and business owners across
          the National Epoxy Pros network.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {trainingPrograms.map((p) => (
            <div key={p.name} className="rounded-lg border border-border bg-card p-6">
              <p className="font-extrabold">{p.name}</p>
              <p className="mt-2 text-sm text-muted-foreground">{p.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-border bg-card p-8 text-center">
          <p className="font-extrabold">Interested in a territory license?</p>
          <p className="mt-2 text-sm text-muted-foreground">See our business ownership packages.</p>
          <a
            href="/business-packages"
            className="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-primary px-7 text-sm font-extrabold text-primary-foreground hover:bg-primary/90"
          >
            View Business Packages →
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
