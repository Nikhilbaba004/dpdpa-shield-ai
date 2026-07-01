export default function StatusBadge({ status }) {
  const styles = {
    Active: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
    Withdrawn: 'bg-amber-500/15 text-amber-300 border-amber-500/20',
    Pending: 'bg-sky-500/15 text-sky-300 border-sky-500/20',
    Completed: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
    'In Review': 'bg-violet-500/15 text-violet-300 border-violet-500/20',
    Rejected: 'bg-rose-500/15 text-rose-300 border-rose-500/20',
    Open: 'bg-amber-500/15 text-amber-300 border-amber-500/20',
    Investigating: 'bg-sky-500/15 text-sky-300 border-sky-500/20',
    Resolved: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
    'High Risk': 'bg-rose-500/15 text-rose-300 border-rose-500/20',
  };

  return <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${styles[status] || 'bg-slate-800 text-slate-300 border-slate-700'}`}>{status}</span>;
}
