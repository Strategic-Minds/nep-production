import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';

const CHARTS = [
  { name: 'Full Flake', colors: ['#111111', '#f7f7f7', '#7a7a7a'] },
  { name: 'Metallic', colors: ['#c99a2e', '#6b4a2b', '#e8d9b5'] },
  { name: 'Quartz', colors: ['#d8cdb8', '#8f8570', '#5a5142'] },
  { name: 'Solid Color', colors: ['#1c1c1c', '#4b4b4b', '#9c9c9c'] },
  { name: 'Glitter Accent', colors: ['#f0e6a8', '#c7a9e0', '#a8d8f0'] },
  { name: 'Stain Concrete', colors: ['#b98a4a', '#8a5a2a', '#e0c090'] },
];

export default function DesignPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Design Center</p>
        <h1 className="mt-2 text-3xl font-extrabold uppercase tracking-tight">Color & Finish Charts</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Every finish is available in multiple color blends. Pick a direction here — your
          project consultant will bring physical samples on-site.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {CHARTS.map((c) => (
            <div key={c.name} className="rounded-lg border border-border bg-card p-5">
              <p className="font-extrabold">{c.name}</p>
              <div className="mt-4 flex h-20 overflow-hidden rounded-md">
                {c.colors.map((col) => (
                  <div key={col} style={{ background: col }} className="flex-1" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
