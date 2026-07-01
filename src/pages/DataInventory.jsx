import { useState } from 'react';
import { dataInventory as initialInventory } from '../data/sampleData';
import { classifyDataRisk } from '../utils/aiSimulator';

const blankForm = {
  fieldName: '',
  dataCategory: '',
  purpose: '',
  storageLocation: '',
  riskLevel: 'Low',
};

export default function DataInventory() {
  const [inventory, setInventory] = useState(initialInventory);
  const [form, setForm] = useState(blankForm);
  const [suggestedRisk, setSuggestedRisk] = useState('Low');

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextRisk = classifyDataRisk(form.fieldName);
    const entry = {
      id: Date.now(),
      fieldName: form.fieldName,
      category: form.dataCategory,
      purpose: form.purpose,
      storageLocation: form.storageLocation,
      riskLevel: nextRisk,
    };
    setInventory([entry, ...inventory]);
    setForm(blankForm);
    setSuggestedRisk('Low');
    // TODO: Replace local state with Supabase persistence when the backend is ready.
  };

  const updateSuggestedRisk = (value) => {
    setForm({ ...form, fieldName: value });
    setSuggestedRisk(classifyDataRisk(value));
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">AI Data Inventory Mapper</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Classify personal data fields with AI-assisted risk hints</h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" placeholder="Data field name" value={form.fieldName} onChange={(event) => updateSuggestedRisk(event.target.value)} />
          <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" placeholder="Data category" value={form.dataCategory} onChange={(event) => setForm({ ...form, dataCategory: event.target.value })} />
          <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" placeholder="Purpose" value={form.purpose} onChange={(event) => setForm({ ...form, purpose: event.target.value })} />
          <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" placeholder="Storage location" value={form.storageLocation} onChange={(event) => setForm({ ...form, storageLocation: event.target.value })} />
          <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" placeholder="Risk level" value={form.riskLevel} onChange={(event) => setForm({ ...form, riskLevel: event.target.value })} />
          <div className="md:col-span-2 xl:col-span-5">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-300">
              Suggested risk: <span className="font-semibold text-white">{suggestedRisk}</span>
            </div>
          </div>
          <div className="md:col-span-2 xl:col-span-5">
            <button type="submit" className="rounded-2xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white">Add Data Field</button>
          </div>
        </form>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <table className="min-w-full divide-y divide-slate-800 text-left text-sm">
          <thead className="bg-slate-950/80 text-slate-400">
            <tr>
              <th className="px-4 py-3">Field Name</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Purpose</th>
              <th className="px-4 py-3">Storage</th>
              <th className="px-4 py-3">Risk</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 bg-slate-900/60 text-slate-200">
            {inventory.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-3 font-medium text-white">{item.fieldName}</td>
                <td className="px-4 py-3">{item.category}</td>
                <td className="px-4 py-3">{item.purpose}</td>
                <td className="px-4 py-3">{item.storageLocation}</td>
                <td className="px-4 py-3">{item.riskLevel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
