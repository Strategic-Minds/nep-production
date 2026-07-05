'use client';

import { useState } from 'react';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';

const STEPS = ['Project', 'Details', 'Contact'];

export default function DigitalBidPage() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');
  const [form, setForm] = useState({
    projectType: 'garage',
    finish: 'full_flake',
    sqft: '',
    zip: '',
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function submit() {
    setStatus('submitting');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('done');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <main>
        <SiteHeader />
        <section className="mx-auto max-w-2xl px-6 py-32 text-center">
          <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Received</p>
          <h1 className="mt-3 text-3xl font-extrabold uppercase">Your bid request is in.</h1>
          <p className="mt-4 text-muted-foreground">
            A National Epoxy Pros specialist will follow up by phone or email — usually within
            a few business hours.
          </p>
        </section>
        <SiteFooter />
      </main>
    );
  }

  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-2xl px-6 py-20">
        <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Digital Bid</p>
        <h1 className="mt-2 text-3xl font-extrabold uppercase tracking-tight">
          Get a bid without waiting for a visit.
        </h1>

        <div className="mt-8 flex gap-2">
          {STEPS.map((s, i) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full ${i <= step ? 'bg-primary' : 'bg-border'}`}
            />
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-border bg-card p-6">
          {step === 0 && (
            <div className="space-y-5">
              <div>
                <label className="text-sm font-bold">Project type</label>
                <select
                  className="mt-2 w-full rounded-md border border-border bg-background p-3 text-sm"
                  value={form.projectType}
                  onChange={(e) => update('projectType', e.target.value)}
                >
                  <option value="garage">Garage Floor</option>
                  <option value="commercial">Commercial Floor</option>
                  <option value="patio">Patio / Outdoor</option>
                  <option value="basement">Basement</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-bold">Finish</label>
                <select
                  className="mt-2 w-full rounded-md border border-border bg-background p-3 text-sm"
                  value={form.finish}
                  onChange={(e) => update('finish', e.target.value)}
                >
                  <option value="full_flake">Full Flake Epoxy</option>
                  <option value="metallic">Metallic Epoxy</option>
                  <option value="quartz">Quartz Epoxy</option>
                  <option value="solid">Solid Color Epoxy</option>
                  <option value="polished">Polished Concrete</option>
                  <option value="not_sure">Not Sure Yet</option>
                </select>
              </div>
              <button
                onClick={() => setStep(1)}
                className="h-11 w-full rounded-md bg-primary text-sm font-extrabold text-primary-foreground hover:bg-primary/90"
              >
                Continue
              </button>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-5">
              <div>
                <label className="text-sm font-bold">Approximate square footage</label>
                <input
                  className="mt-2 w-full rounded-md border border-border bg-background p-3 text-sm"
                  placeholder="e.g. 600"
                  value={form.sqft}
                  onChange={(e) => update('sqft', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-bold">ZIP code</label>
                <input
                  className="mt-2 w-full rounded-md border border-border bg-background p-3 text-sm"
                  placeholder="e.g. 28202"
                  value={form.zip}
                  onChange={(e) => update('zip', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-bold">Anything we should know?</label>
                <textarea
                  className="mt-2 w-full rounded-md border border-border bg-background p-3 text-sm"
                  rows={3}
                  value={form.notes}
                  onChange={(e) => update('notes', e.target.value)}
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(0)}
                  className="h-11 flex-1 rounded-md border border-border text-sm font-extrabold hover:bg-accent"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(2)}
                  className="h-11 flex-1 rounded-md bg-primary text-sm font-extrabold text-primary-foreground hover:bg-primary/90"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <div>
                <label className="text-sm font-bold">Full name</label>
                <input
                  className="mt-2 w-full rounded-md border border-border bg-background p-3 text-sm"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-bold">Phone</label>
                <input
                  className="mt-2 w-full rounded-md border border-border bg-background p-3 text-sm"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-bold">Email</label>
                <input
                  className="mt-2 w-full rounded-md border border-border bg-background p-3 text-sm"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                />
              </div>
              {status === 'error' && (
                <p className="text-sm font-bold text-destructive">
                  Something went wrong — please try again or call {' '}
                  <a href="tel:8779586408" className="underline">(877) 958-6408</a>.
                </p>
              )}
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="h-11 flex-1 rounded-md border border-border text-sm font-extrabold hover:bg-accent"
                >
                  Back
                </button>
                <button
                  onClick={submit}
                  disabled={status === 'submitting' || !form.name || (!form.phone && !form.email)}
                  className="h-11 flex-1 rounded-md bg-primary text-sm font-extrabold text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Submitting…' : 'Submit Bid Request'}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
