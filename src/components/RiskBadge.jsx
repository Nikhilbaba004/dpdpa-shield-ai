export default function RiskBadge({ risk }) {
  const styles = {
    Low: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
    Medium: 'bg-amber-500/15 text-amber-300 border-amber-500/20',
    High: 'bg-rose-500/15 text-rose-300 border-rose-500/20',
  };

  return <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${styles[risk] || 'bg-slate-800 text-slate-300 border-slate-700'}`}>{risk}</span>;
}
