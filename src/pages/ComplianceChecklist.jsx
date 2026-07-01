import { checklistItems as initialChecklist } from '../data/sampleData';
import StatusBadge from '../components/StatusBadge';
import { calculateChecklistProgress } from '../utils/riskCalculator';

export default function ComplianceChecklist() {
  const progress = calculateChecklistProgress(initialChecklist);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">
          <p className="text-sm text-emerald-200">Completed</p>
          <p className="mt-2 text-2xl font-semibold text-white">{progress.completed}</p>
        </div>
        <div className="rounded-2xl border border-sky-500/20 bg-sky-500/10 p-4">
          <p className="text-sm text-sky-200">Pending</p>
          <p className="mt-2 text-2xl font-semibold text-white">{progress.pending}</p>
        </div>
        <div className="rounded-2xl border border-rose-500/20 bg-rose-500/10 p-4">
          <p className="text-sm text-rose-200">High Risk</p>
          <p className="mt-2 text-2xl font-semibold text-white">{progress.highRisk}</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
          <p className="text-sm text-slate-400">Completion</p>
          <p className="mt-2 text-2xl font-semibold text-white">{progress.percentage}%</p>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">Compliance Checklist</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Smart readiness review powered by AI</h2>
        </div>

        <div className="mt-6 space-y-4">
          {initialChecklist.map((item) => (
            <div key={item.id} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <StatusBadge status={item.status} />
                  </div>
                  <p className="mt-2 text-sm text-slate-400">{item.description}</p>
                </div>
                <div className="text-sm text-slate-300">
                  <p><span className="font-semibold text-white">Module:</span> {item.module}</p>
                  <p className="mt-1"><span className="font-semibold text-white">Recommended action:</span> {item.action}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
