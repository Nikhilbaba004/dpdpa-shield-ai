export default function ActivityTimeline({ items }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-300">
            {index + 1}
          </div>
          <div>
            <p className="font-semibold text-white">{item.title}</p>
            <p className="mt-1 text-sm text-slate-400">{item.description}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.24em] text-slate-500">{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
