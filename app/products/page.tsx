import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { BRAND } from '@/lib/brand';

const PRODUCT_LINES = [
  { name: 'Epoxy Base Coats', detail: 'Solid color, high-build epoxy base coats for all substrates.' },
  { name: 'Flake Blends', detail: 'Custom and standard broadcast flake blends for texture and traction.' },
  { name: 'Metallic Pigments', detail: 'Pearlescent metallic pigment systems for showroom-grade finishes.' },
  { name: 'Polyaspartic Topcoats', detail: 'Fast-cure, UV-stable topcoats for long-term durability.' },
  { name: 'Surface Prep Tools', detail: 'Grinding, shot-blast, and repair tools for professional prep.' },
  { name: 'Concrete Stains & Dyes', detail: 'Penetrating color systems for interior and exterior concrete.' }
];

export default function ProductsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Products</p>
        <h1 className="mt-2 max-w-2xl text-4xl font-extrabold uppercase leading-tight tracking-tight">
          Pro-grade materials, sourced through XPS.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Every National Epoxy Pros installation uses Xtreme Polishing Systems-grade materials —
          the same products our certified crews are trained on.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_LINES.map((p) => (
            <div key={p.name} className="rounded-lg border border-border bg-card p-6">
              <p className="font-extrabold">{p.name}</p>
              <p className="mt-2 text-sm text-muted-foreground">{p.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-border bg-card p-8 text-center">
          <p className="font-extrabold">Want product specs or a wholesale account?</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Visit <a href={BRAND.poweredByUrl} target="_blank" className="text-primary hover:underline">xtremepolishingsystems.com</a> or contact us directly.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
