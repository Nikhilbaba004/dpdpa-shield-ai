import { auditLogs } from '../data/sampleData';
import RiskBadge from '../components/RiskBadge';

export default function AuditTimeline() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">Audit Timeline</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">Chronological log of compliance activity</h2>
      </div>

      <div className="mt-6 space-y-4">
        {auditLogs.map((log, index) => (
          <div key={`${log.time}-${index}`} className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/15 text-sm font-semibold text-blue-300">
                {index + 1}
              </div>
              <div>
                <p className="font-semibold text-white">{log.action}</p>
                <p className="text-sm text-slate-400">{log.user} • {log.module}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <span>{log.time}</span>
              <RiskBadge risk={log.risk} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
