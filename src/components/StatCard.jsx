export default function StatCard({ title, value, change, tone = 'blue' }) {
  const toneStyles = {
    blue: 'from-blue-500/20 to-blue-400/10 text-blue-300',
    emerald: 'from-emerald-500/20 to-emerald-400/10 text-emerald-300',
    amber: 'from-amber-500/20 to-amber-400/10 text-amber-300',
    rose: 'from-rose-500/20 to-rose-400/10 text-rose-300',
    violet: 'from-violet-500/20 to-violet-400/10 text-violet-300',
  };

  return (
    <div className={`rounded-2xl border border-slate-800 bg-gradient-to-br ${toneStyles[tone]} p-5`}>
      <p className="text-sm text-slate-400">{title}</p>
      <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm text-slate-300">{change}</p>
    </div>
  );
}
