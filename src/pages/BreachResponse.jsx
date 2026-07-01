import { useState } from 'react';
import StatusBadge from '../components/StatusBadge';
import { breachIncidents as initialIncidents } from '../data/sampleData';
import { generateBreachSummary } from '../utils/aiSimulator';

const blankForm = {
  title: '',
  dataAffected: '',
  affectedUsers: '',
  severity: 'Medium',
  status: 'Open',
  actionTaken: '',
};

export default function BreachResponse() {
  const [incidents, setIncidents] = useState(initialIncidents);
  const [form, setForm] = useState(blankForm);
  const [summary, setSummary] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const entry = {
      id: Date.now(),
      title: form.title,
      dataAffected: form.dataAffected,
      affectedUsers: Number(form.affectedUsers) || 0,
      severity: form.severity,
      status: form.status,
      actionTaken: form.actionTaken,
    };
    setIncidents([entry, ...incidents]);
    setForm(blankForm);
    // TODO: Replace local state with Supabase persistence when the backend is ready.
  };

  const severityWarning = form.severity === 'Critical' || Number(form.affectedUsers) > 1000 ? 'High Risk' : 'Medium/Low';

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">Breach Response</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Log incidents and accelerate response readiness</h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" placeholder="Incident title" value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} required />
          <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" placeholder="Data affected" value={form.dataAffected} onChange={(event) => setForm({ ...form, dataAffected: event.target.value })} required />
          <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" placeholder="Affected users count" type="number" value={form.affectedUsers} onChange={(event) => setForm({ ...form, affectedUsers: event.target.value })} required />
          <select className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" value={form.severity} onChange={(event) => setForm({ ...form, severity: event.target.value })}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Critical</option>
          </select>
          <select className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value })}>
            <option>Open</option>
            <option>Investigating</option>
            <option>Resolved</option>
          </select>
          <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" placeholder="Action taken" value={form.actionTaken} onChange={(event) => setForm({ ...form, actionTaken: event.target.value })} required />
          <div className="md:col-span-2 xl:col-span-3">
            <button type="submit" className="rounded-2xl bg-rose-600 px-5 py-3 text-sm font-semibold text-white">Add Incident</button>
          </div>
        </form>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <div className={`rounded-3xl border p-6 ${severityWarning === 'High Risk' ? 'border-rose-500/30 bg-rose-500/10' : 'border-amber-500/20 bg-amber-500/10'}`}>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">Breach Severity Assistant</p>
          <h3 className="mt-3 text-xl font-semibold text-white">{severityWarning} warning</h3>
          <p className="mt-2 text-sm text-slate-200">
            {severityWarning === 'High Risk'
              ? 'Escalate to the incident commander and notify leadership immediately.'
              : 'Maintain monitoring and review evidence collection within the next 24 hours.'}
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">AI Breach Summary Generator</p>
              <h3 className="mt-2 text-xl font-semibold text-white">Simulated incident recommendation</h3>
            </div>
            <button className="rounded-2xl bg-slate-800 px-4 py-2 text-sm font-medium text-slate-100" onClick={() => setSummary(generateBreachSummary(form))}>
              Generate AI Summary
            </button>
          </div>
          <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-300">
            {summary || 'No summary generated yet. Use the AI generator to create a recommended response plan.'}
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <table className="min-w-full divide-y divide-slate-800 text-left text-sm">
          <thead className="bg-slate-950/80 text-slate-400">
            <tr>
              <th className="px-4 py-3">Incident</th>
              <th className="px-4 py-3">Data Affected</th>
              <th className="px-4 py-3">Affected Users</th>
              <th className="px-4 py-3">Severity</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action Taken</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 bg-slate-900/60 text-slate-200">
            {incidents.map((incident) => (
              <tr key={incident.id}>
                <td className="px-4 py-3 font-medium text-white">{incident.title}</td>
                <td className="px-4 py-3">{incident.dataAffected}</td>
                <td className="px-4 py-3">{incident.affectedUsers}</td>
                <td className="px-4 py-3">{incident.severity}</td>
                <td className="px-4 py-3"><StatusBadge status={incident.status} /></td>
                <td className="px-4 py-3">{incident.actionTaken}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
