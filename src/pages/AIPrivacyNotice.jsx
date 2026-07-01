import { useState } from 'react';
import { generatePrivacyNotice } from '../utils/aiSimulator';

const blankForm = {
  industry: 'EdTech',
  companyName: 'BrightLearn Academy',
  dataCollected: 'Student name, email, phone number, attendance, and payment status',
  purpose: 'To deliver educational services and communication',
  retentionPeriod: 'For 3 years after course completion or until legal obligations end',
  contactEmail: 'privacy@brightlearn.ai',
  userRightsContact: 'grievance@brightlearn.ai',
};

export default function AIPrivacyNotice() {
  const [form, setForm] = useState(blankForm);
  const [notice, setNotice] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotice(generatePrivacyNotice(form));
  };

  const handleCopy = async () => {
    if (!notice) return;
    const text = `${notice.title}\n\nWhat data we collect\n${notice.dataCollected}\n\nWhy we collect it\n${notice.purpose}\n\nConsent statement\n${notice.consentStatement}\n\nUser rights\n${notice.rights}\n\nWithdrawal option\n${notice.withdrawal}\n\nRetention period\n${notice.retention}\n\nContact information\n${notice.contact}`;
    try {
      await navigator.clipboard.writeText(text);
      window.alert('Privacy notice copied to clipboard.');
    } catch {
      window.alert('Copy failed. You can still use the preview text.');
    }
  };

  const handleReset = () => {
    setForm(blankForm);
    setNotice(null);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">AI Privacy Notice</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Generate a polished notice for your business in seconds</h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
          <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" placeholder="Industry" value={form.industry} onChange={(event) => setForm({ ...form, industry: event.target.value })} />
          <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" placeholder="Company name" value={form.companyName} onChange={(event) => setForm({ ...form, companyName: event.target.value })} />
          <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" placeholder="Data collected" value={form.dataCollected} onChange={(event) => setForm({ ...form, dataCollected: event.target.value })} />
          <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" placeholder="Purpose of data collection" value={form.purpose} onChange={(event) => setForm({ ...form, purpose: event.target.value })} />
          <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" placeholder="Data retention period" value={form.retentionPeriod} onChange={(event) => setForm({ ...form, retentionPeriod: event.target.value })} />
          <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none" placeholder="Contact / DPO email" value={form.contactEmail} onChange={(event) => setForm({ ...form, contactEmail: event.target.value })} />
          <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none md:col-span-2" placeholder="User rights contact" value={form.userRightsContact} onChange={(event) => setForm({ ...form, userRightsContact: event.target.value })} />
          <div className="flex gap-3 md:col-span-2">
            <button type="submit" className="rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white">Generate AI Privacy Notice</button>
            <button type="button" className="rounded-2xl border border-slate-700 bg-slate-950 px-5 py-3 text-sm font-semibold text-slate-200" onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div>

      {notice && (
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">Preview</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{notice.title}</h3>
            </div>
            <button className="rounded-2xl border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200" onClick={handleCopy}>
              Copy Notice
            </button>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-5 text-sm text-slate-300">
            <div>
              <p className="font-semibold text-white">What data we collect</p>
              <p className="mt-1">{notice.dataCollected}</p>
            </div>
            <div>
              <p className="font-semibold text-white">Why we collect it</p>
              <p className="mt-1">{notice.purpose}</p>
            </div>
            <div>
              <p className="font-semibold text-white">Consent statement</p>
              <p className="mt-1">{notice.consentStatement}</p>
            </div>
            <div>
              <p className="font-semibold text-white">User rights</p>
              <p className="mt-1">{notice.rights}</p>
            </div>
            <div>
              <p className="font-semibold text-white">Withdrawal option</p>
              <p className="mt-1">{notice.withdrawal}</p>
            </div>
            <div>
              <p className="font-semibold text-white">Retention period</p>
              <p className="mt-1">{notice.retention}</p>
            </div>
            <div>
              <p className="font-semibold text-white">Contact information</p>
              <p className="mt-1">{notice.contact}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
