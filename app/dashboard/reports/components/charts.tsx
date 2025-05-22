'use client';

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  BarChart,
  Bar,
} from 'recharts';

const monthlyData = [
  { month: "Jan", users: 2100, analyses: 15200, revenue: 12500 },
  { month: "Feb", users: 2300, analyses: 16800, revenue: 14200 },
  { month: "Mar", users: 2800, analyses: 18400, revenue: 16800 },
  { month: "Apr", users: 3200, analyses: 21000, revenue: 19500 },
  { month: "May", users: 3800, analyses: 24600, revenue: 22000 },
  { month: "Jun", users: 4200, analyses: 27200, revenue: 24800 },
];

const dailyAnalyses = [
  { day: "Mon", completed: 450, failed: 23 },
  { day: "Tue", completed: 520, failed: 18 },
  { day: "Wed", completed: 480, failed: 25 },
  { day: "Thu", completed: 510, failed: 20 },
  { day: "Fri", completed: 490, failed: 17 },
  { day: "Sat", completed: 380, failed: 15 },
  { day: "Sun", completed: 360, failed: 12 },
];

export function GrowthChart({ isReady }: { isReady: boolean }) {
  if (!isReady) return null;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={monthlyData}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="users"
          stroke="hsl(var(--chart-1))"
          strokeWidth={2}
          name="Users"
        />
        <Line
          type="monotone"
          dataKey="analyses"
          stroke="hsl(var(--chart-2))"
          strokeWidth={2}
          name="Analyses"
        />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="hsl(var(--chart-3))"
          strokeWidth={2}
          name="Revenue"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function AnalysisChart({ isReady }: { isReady: boolean }) {
  if (!isReady) return null;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={dailyAnalyses}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="completed"
          fill="hsl(var(--chart-4))"
          name="Completed"
        />
        <Bar
          dataKey="failed"
          fill="hsl(var(--chart-5))"
          name="Failed"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
