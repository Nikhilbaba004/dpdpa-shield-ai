import { NavLink } from 'react-router-dom';

const navigation = [
  { label: 'AI Dashboard', path: '/' },
  { label: 'Consent Management', path: '/consents' },
  { label: 'Rights Requests', path: '/requests' },
  { label: 'Breach Response', path: '/breaches' },
  { label: 'AI Privacy Notice', path: '/ai-notice' },
  { label: 'Compliance Checklist', path: '/checklist' },
  { label: 'Data Inventory', path: '/data-inventory' },
  { label: 'Audit Timeline', path: '/audit-timeline' },
  { label: 'Reports', path: '/reports' },
  { label: 'Settings', path: '/settings' },
];

export default function Sidebar() {
  return (
    <aside className="hidden w-72 flex-col border-r border-slate-800 bg-slate-950/90 lg:flex">
      <div className="border-b border-slate-800 p-6">
        <div className="inline-flex items-center gap-3 rounded-2xl border border-blue-500/30 bg-blue-500/10 px-3 py-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-400" />
          <div>
            <p className="text-sm font-semibold text-white">DPDPA Shield AI</p>
            <p className="text-xs text-slate-400">Privacy OS for India</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center rounded-xl px-3 py-3 text-sm font-medium transition ${
                isActive
                  ? 'bg-blue-500/15 text-blue-300 shadow-soft'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`
            }
          >
            <span className="mr-3 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="m-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-100">
        <p className="font-semibold">AI posture ready</p>
        <p className="mt-1 text-xs text-emerald-200/90">Your compliance workflows are synced and ready for review.</p>
      </div>
    </aside>
  );
}
