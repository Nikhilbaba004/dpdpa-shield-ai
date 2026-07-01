import { companyProfile } from '../data/sampleData';

export default function Header() {
  const today = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <header className="border-b border-slate-800 bg-slate-950/80 px-6 py-4 backdrop-blur">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">Compliance command center</p>
          <div className="mt-1 flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-semibold text-white">{companyProfile.companyName}</h1>
            <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm text-slate-300">
              Industry: {companyProfile.industry}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Admin</p>
            <p className="font-semibold text-white">{companyProfile.adminName}</p>
          </div>
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-emerald-200">
            <p className="text-xs uppercase tracking-[0.24em]">Status</p>
            <p className="font-semibold">Compliant</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Date</p>
            <p className="font-semibold text-white">{today}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
