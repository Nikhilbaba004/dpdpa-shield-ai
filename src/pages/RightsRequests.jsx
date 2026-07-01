import { useState } from 'react';
import StatusBadge from '../components/StatusBadge';
import { rightsRequests as initialRequests } from '../data/sampleData';
import { generateRequestSuggestion } from '../utils/aiSimulator';

const blankForm = {
  user: '',
  email: '',
  requestType: 'Access',
  priority: 'Medium',
  status: 'Pending',
};

export default function RightsRequests() {
  const [requests, setRequests] = useState(initialRequests);
  const [form, setForm] = useState(blankForm);

  const handleSubmit = (event) => {
    event.preventDefault();
    const entry = {
      id: Date.now(),
      user: form.user,
      email: form.email,
      requestType: form.requestType,
      priority: form.priority,
      status: form.status,
      submittedDate: new Date().toISOString().slice(0, 10),
      dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
      aiAction: generateRequestSuggestion(form.requestType),
    };
    setRequests([entry, ...requests]);
    setForm(blankForm);
    // TODO: Replace local state with Supabase persistence when the backend is ready.
  };

  const updateStatus = (id, status) => {
    setRequests(requests.map((item) => (item.id === id ? { ...item, status } : item)));
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">Rights Requests</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Manage access, correction, deletion, and grievance workflows</h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" placeholder="User name" value={form.user} onChange={(event) => setForm({ ...form, user: event.target.value })} required />
          <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" placeholder="Email" type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required />
          <select className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" value={form.requestType} onChange={(event) => setForm({ ...form, requestType: event.target.value })}>
            <option>Access</option>
            <option>Correction</option>
            <option>Deletion</option>
            <option>Withdraw Consent</option>
            <option>Grievance</option>
          </select>
          <select className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" value={form.priority} onChange={(event) => setForm({ ...form, priority: event.target.value })}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <select className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value })}>
            <option>Pending</option>
            <option>In Review</option>
            <option>Completed</option>
            <option>Rejected</option>
          </select>
          <div className="md:col-span-2 xl:col-span-5">
            <button type="submit" className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white">Add Request</button>
          </div>
        </form>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <table className="min-w-full divide-y divide-slate-800 text-left text-sm">
          <thead className="bg-slate-950/80 text-slate-400">
            <tr>
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Request Type</th>
              <th className="px-4 py-3">Priority</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Submitted</th>
              <th className="px-4 py-3">Due Date</th>
              <th className="px-4 py-3">AI Suggested Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 bg-slate-900/60 text-slate-200">
            {requests.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-3 font-medium text-white">{item.user}</td>
                <td className="px-4 py-3">{item.email}</td>
                <td className="px-4 py-3">{item.requestType}</td>
                <td className="px-4 py-3">{item.priority}</td>
                <td className="px-4 py-3">
                  <select className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white" value={item.status} onChange={(event) => updateStatus(item.id, event.target.value)}>
                    <option>Pending</option>
                    <option>In Review</option>
                    <option>Completed</option>
                    <option>Rejected</option>
                  </select>
                </td>
                <td className="px-4 py-3">{item.submittedDate}</td>
                <td className="px-4 py-3">{item.dueDate}</td>
                <td className="px-4 py-3 text-slate-300">{item.aiAction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
