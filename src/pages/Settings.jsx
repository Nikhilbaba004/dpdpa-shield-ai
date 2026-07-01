import { useState } from 'react';
import { companyProfile } from '../data/sampleData';

export default function Settings() {
  const [form, setForm] = useState(companyProfile);

  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert('Settings saved locally. Backend integration can be added later.');
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">Settings</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">Update business, admin, and DPO profile details</h2>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
        <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" placeholder="Company name" value={form.companyName} onChange={(event) => setForm({ ...form, companyName: event.target.value })} />
        <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" placeholder="Industry" value={form.industry} onChange={(event) => setForm({ ...form, industry: event.target.value })} />
        <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" placeholder="Admin name" value={form.adminName} onChange={(event) => setForm({ ...form, adminName: event.target.value })} />
        <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" placeholder="Admin email" value={form.adminEmail} onChange={(event) => setForm({ ...form, adminEmail: event.target.value })} />
        <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" placeholder="DPO name" value={form.dpoName} onChange={(event) => setForm({ ...form, dpoName: event.target.value })} />
        <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" placeholder="DPO email" value={form.dpoEmail} onChange={(event) => setForm({ ...form, dpoEmail: event.target.value })} />
        <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" placeholder="Grievance officer name" value={form.grievanceOfficerName} onChange={(event) => setForm({ ...form, grievanceOfficerName: event.target.value })} />
        <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" placeholder="Grievance email" value={form.grievanceEmail} onChange={(event) => setForm({ ...form, grievanceEmail: event.target.value })} />
        <textarea className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none md:col-span-2" rows="3" placeholder="Business address" value={form.businessAddress} onChange={(event) => setForm({ ...form, businessAddress: event.target.value })} />
        <div className="md:col-span-2">
          <button type="submit" className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white">Save</button>
        </div>
      </form>
    </div>
  );
}
