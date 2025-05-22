import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Brain, Download, Filter, Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const recentOutputs = [
  {
    id: "AO-2025-001",
    type: "Skin Analysis",
    status: "completed",
    confidence: "98%",
    date: "2025-05-01 14:30",
    user: "Sarah Johnson"
  },
  {
    id: "AO-2025-002",
    type: "Product Match",
    status: "completed",
    confidence: "95%",
    date: "2025-05-01 13:15",
    user: "Michael Chen"
  },
  {
    id: "AO-2025-003",
    type: "Ingredient Analysis",
    status: "processing",
    confidence: "-",
    date: "2025-05-01 12:45",
    user: "Emma Wilson"
  },
  {
    id: "AO-2025-004",
    type: "Skin Analysis",
    status: "failed",
    confidence: "-",
    date: "2025-05-01 11:30",
    user: "James Brown"
  },
  {
    id: "AO-2025-005",
    type: "Product Match",
    status: "completed",
    confidence: "97%",
    date: "2025-05-01 10:15",
    user: "Lisa Anderson"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-green-500 hover:bg-green-600';
    case 'processing':
      return 'bg-blue-500 hover:bg-blue-600';
    case 'failed':
      return 'bg-red-500 hover:bg-red-600';
    default:
      return 'bg-gray-500 hover:bg-gray-600';
  }
};

export default function AIOutputsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">AI Outputs</h1>
            <p className="text-muted-foreground">
              View and manage AI analysis results and outputs
            </p>
          </div>
          <Button className="bg-osaz-red hover:bg-osaz-red/90 text-white">
            <Plus className="h-4 w-4 mr-2" />
            New Analysis
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Analyses</CardTitle>
              <Brain className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15,728</div>
              <p className="text-xs text-muted-foreground mt-1">
                +2.5% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              <Brain className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98.3%</div>
              <p className="text-xs text-muted-foreground mt-1">
                +0.5% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Confidence</CardTitle>
              <Brain className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">96.7%</div>
              <p className="text-xs text-muted-foreground mt-1">
                +1.2% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Processing Time</CardTitle>
              <Brain className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.2s</div>
              <p className="text-xs text-muted-foreground mt-1">
                -0.3s from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Outputs */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Outputs</CardTitle>
            <CardDescription>
              View and manage recent AI analysis outputs
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search outputs..."
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="w-full md:w-auto">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" className="w-full md:w-auto">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            {/* Outputs Table */}
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Output ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Confidence</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>User</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentOutputs.map((output) => (
                    <TableRow key={output.id}>
                      <TableCell className="font-medium">{output.id}</TableCell>
                      <TableCell>{output.type}</TableCell>
                      <TableCell>
                        <Badge className={`${getStatusColor(output.status)} text-white`}>
                          {output.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{output.confidence}</TableCell>
                      <TableCell>{output.date}</TableCell>
                      <TableCell>{output.user}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}