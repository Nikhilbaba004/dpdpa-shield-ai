import { useState } from 'react';
import { Routes, Route, Navigate, useLocation, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ConsentManagement from './pages/ConsentManagement';
import RightsRequests from './pages/RightsRequests';
import BreachResponse from './pages/BreachResponse';
import AIPrivacyNotice from './pages/AIPrivacyNotice';
import ComplianceChecklist from './pages/ComplianceChecklist';
import AuditTimeline from './pages/AuditTimeline';
import Reports from './pages/Reports';
import DataInventory from './pages/DataInventory';
import Settings from './pages/Settings';

function AppLayout() {
  const location = useLocation();
  const title = location.pathname === '/' ? 'AI Dashboard' : 'Workspace';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <main className="p-6 lg:p-8">
            <div className="mb-6 rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-300">
              <span className="font-semibold text-white">{title}</span> • AI-powered privacy governance for BrightLearn Academy
            </div>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
      <Route element={isLoggedIn ? <AppLayout /> : <Navigate to="/login" replace />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/consents" element={<ConsentManagement />} />
        <Route path="/requests" element={<RightsRequests />} />
        <Route path="/breaches" element={<BreachResponse />} />
        <Route path="/ai-notice" element={<AIPrivacyNotice />} />
        <Route path="/checklist" element={<ComplianceChecklist />} />
        <Route path="/data-inventory" element={<DataInventory />} />
        <Route path="/audit-timeline" element={<AuditTimeline />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
