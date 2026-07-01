export default function ProgressBar({ value, label }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2.5 w-full rounded-full bg-slate-800">
        <div className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
