import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Badge } from "@/components/ui/badge";
import { BarChart, BarChart2, Users, Activity, ArrowUpRight, ArrowDownRight, Clock } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Dashboard | ByOsaz",
};

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome back, Jessica</h1>
            <p className="text-muted-foreground">
              Here's an overview of your ByOsaz platform activity
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <p className="text-sm text-muted-foreground">Last updated:</p>
            <Badge variant="secondary" className="bg-osaz-cyan text-white">Just now</Badge>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,853</div>
              <div className="flex items-center text-sm text-green-600 mt-1">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                <span>+12% from last month</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">API Requests</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">249,832</div>
              <div className="flex items-center text-sm text-green-600 mt-1">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                <span>+18% from last month</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">AI Analyses</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15,728</div>
              <div className="flex items-center text-sm text-red-600 mt-1">
                <ArrowDownRight className="mr-1 h-4 w-4" />
                <span>-3% from last month</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Response</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">312ms</div>
              <div className="flex items-center text-sm text-green-600 mt-1">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                <span>15ms faster than last month</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Your platform activity for the last 7 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Activity Items */}
                <div className="flex items-start gap-4 border-b border-gray-100 dark:border-gray-800 pb-4">
                  <div className="bg-osaz-orange/10 p-2 rounded-full">
                    <Activity className="h-5 w-5 text-osaz-orange" />
                  </div>
                  <div>
                    <p className="font-medium">API Key Generated</p>
                    <p className="text-sm text-muted-foreground">New API key created for Development environment</p>
                    <p className="text-xs text-muted-foreground mt-1">Today at 10:43 AM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 border-b border-gray-100 dark:border-gray-800 pb-4">
                  <div className="bg-osaz-blue/10 p-2 rounded-full">
                    <Users className="h-5 w-5 text-osaz-blue" />
                  </div>
                  <div>
                    <p className="font-medium">New User Added</p>
                    <p className="text-sm text-muted-foreground">Sarah Johnson (sarah@example.com) joined your organization</p>
                    <p className="text-xs text-muted-foreground mt-1">Yesterday at 4:23 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 border-b border-gray-100 dark:border-gray-800 pb-4">
                  <div className="bg-osaz-cyan/10 p-2 rounded-full">
                    <BarChart2 className="h-5 w-5 text-osaz-cyan" />
                  </div>
                  <div>
                    <p className="font-medium">Report Generated</p>
                    <p className="text-sm text-muted-foreground">Monthly usage report for April 2025 is ready</p>
                    <p className="text-xs text-muted-foreground mt-1">May 1, 2025 at 12:00 AM</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/dashboard/reports" className="text-osaz-blue hover:underline text-sm">
                View all activity
              </Link>
            </CardFooter>
          </Card>
          
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common tasks and shortcuts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Link href="/dashboard/ai-outputs" className="block p-3 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 transition-colors">
                  <div className="font-medium">Run AI Analysis</div>
                  <div className="text-sm text-muted-foreground">Process new skin profiles</div>
                </Link>
                
                <Link href="/dashboard/users" className="block p-3 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 transition-colors">
                  <div className="font-medium">Manage Users</div>
                  <div className="text-sm text-muted-foreground">Add, remove, or update user access</div>
                </Link>
                
                <Link href="/dashboard/recommendations" className="block p-3 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 transition-colors">
                  <div className="font-medium">View Recommendations</div>
                  <div className="text-sm text-muted-foreground">Review recent product matches</div>
                </Link>
                
                <Link href="/dashboard/settings" className="block p-3 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 transition-colors">
                  <div className="font-medium">API Settings</div>
                  <div className="text-sm text-muted-foreground">Manage keys and permissions</div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}