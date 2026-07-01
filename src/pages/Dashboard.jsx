import StatCard from '../components/StatCard';
import ProgressBar from '../components/ProgressBar';
import ActivityTimeline from '../components/ActivityTimeline';
import { stats, aiInsights } from '../data/sampleData';
import { calculateComplianceScore, getRiskLevel } from '../utils/riskCalculator';
import { checklistItems } from '../data/sampleData';

const topMetrics = [
  { label: 'Interviews', value: '15%' },
  { label: 'Hired', value: '15%' },
  { label: 'Project time', value: '60%' },
  { label: 'Output', value: '10%' },
];

const summaryCards = [
  { label: 'Employees', value: '78' },
  { label: 'Hirings', value: '56' },
  { label: 'Projects', value: '203' },
];

const recentActivities = [
  { title: 'Consent notice generated', description: 'A new privacy notice was published for the parent communication channel.', time: '08:15 AM' },
  { title: 'Data deletion request submitted', description: 'A data deletion request is awaiting verification from the compliance desk.', time: '10:30 AM' },
  { title: 'Breach incident reviewed', description: 'The latest incident was closed after the investigation report was approved.', time: '12:45 PM' },
  { title: 'Compliance report generated', description: 'The monthly executive report was created with AI-driven recommendations.', time: '03:05 PM' },
];

export default function Dashboard() {
  const scoreData = calculateComplianceScore({ checklistItems });
  const riskLevel = getRiskLevel(scoreData.score);
  const timeTrackerPercent = 73;

  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-950/95 via-slate-900 to-slate-950/90 p-8 shadow-soft">
        <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <span className="inline-flex rounded-full border border-slate-700 bg-slate-900/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">Dashboard</span>
            <h1 className="mt-5 text-4xl font-semibold text-white sm:text-5xl">Welcome in, Nikhil</h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-400 sm:text-base">
              BrightLearn Academy privacy operations in one premium control center. Track consents, requests, breaches, and compliance performance with AI guidance.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {['Dashboard', 'People', 'Hiring', 'Devices', 'Apps', 'Salary', 'Calendar', 'Reviews', 'Setting'].map((item) => (
              <button key={item} className={`rounded-full px-4 py-2 text-sm font-medium ${item === 'Dashboard' ? 'bg-slate-100 text-slate-950' : 'bg-slate-950/70 text-slate-300 hover:bg-slate-900'}`}>
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1.7fr_1fr]">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {topMetrics.map((metric) => (
                <div key={metric.label} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-300">
                  <p className="font-semibold text-white">{metric.label}</p>
                  <p className="mt-4 text-3xl font-semibold text-white">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {summaryCards.map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-800 bg-slate-950/95 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
                <p className="mt-3 text-4xl font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-6 shadow-soft">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Student experience</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">AI-driven privacy and engagement health</h2>
            </div>
            <div className="rounded-[1.8rem] border border-slate-800 bg-slate-900/90 p-4 text-sm text-slate-300">
              <p className="font-medium text-white">Learning experience score</p>
              <p className="mt-3 text-4xl font-semibold text-emerald-300">82</p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.8rem] border border-slate-800 bg-slate-900/90 p-6">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-blue-500 to-emerald-400" />
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">BrightLearn Academy</p>
                  <p className="mt-2 text-2xl font-semibold text-white">EdTech compliance hub</p>
                </div>
              </div>
              <div className="mt-8 space-y-3 text-sm text-slate-300">
                <p>Annual compliance coverage for coaching, admissions, and student communication.</p>
                <p className="rounded-3xl border border-slate-800 bg-slate-950/80 px-4 py-3">Next review: 14 Jul 2026</p>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-slate-800 bg-slate-900/90 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Progress</p>
              <div className="mt-4 flex items-end gap-4">
                <div className="flex-1">
                  <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
                    <span>Work time this week</span>
                    <span className="text-white">6.1h</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-slate-800">
                    <div className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400" style={{ width: '62%' }} />
                  </div>
                </div>
                <div className="rounded-3xl bg-slate-950/90 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-400">5h 23m</div>
              </div>
              <div className="mt-6 flex justify-between text-sm text-slate-400">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                  <div key={day} className="text-center">{day}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Time tracker</p>
                <p className="mt-2 text-xl font-semibold text-white">02:35 Work Time</p>
              </div>
              <div className="h-28 w-28 rounded-full bg-gradient-to-br from-sky-500/20 via-slate-900 to-slate-950 p-4">
                <div className="relative flex h-full w-full items-center justify-center rounded-full bg-slate-950">
                  <div className="absolute inset-0 rounded-full border border-slate-800" />
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-500 to-emerald-400" style={{ clipPath: `polygon(50% 50%, 100% 50%, 100% 0, 50% 0)` }} />
                  <div className="absolute inset-6 rounded-full bg-slate-950 flex items-center justify-center text-xs font-semibold text-white">73%</div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <button className="rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white">Play</button>
              <button className="rounded-2xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200">Pause</button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Onboarding</p>
                <p className="mt-2 text-2xl font-semibold text-white">18%</p>
              </div>
              <div className="rounded-full bg-slate-900 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">2/8</div>
            </div>
            <div className="mt-5 space-y-4">
              {[
                'Interview - Sep 13, 08:30',
                'Team Meeting - Sep 13, 10:30',
                'Project Update - Sep 13, 13:00',
                'Discuss Q3 Goals - Sep 13, 14:45',
                'HR Policy Review - Sep 13, 16:30',
              ].map((task) => (
                <div key={task} className="rounded-3xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-slate-300">
                  {task}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-6">
          <p className="text-sm uppercase tracking-[0.24em] text-blue-300">AI Insights</p>
          <div className="mt-5 space-y-4">
            {aiInsights.map((insight) => (
              <div key={insight} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 text-sm text-slate-300">
                {insight}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-blue-300">Recent Activity</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Operational timeline</h2>
            </div>
          </div>
          <ActivityTimeline items={recentActivities} />
        </div>
      </div>
    </div>
  );
}
