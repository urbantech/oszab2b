import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, MoreHorizontal } from "lucide-react";

export const metadata = {
  title: "Users | ByOsaz Dashboard",
};

const users = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "Admin",
    status: "active",
    lastActive: "2 hours ago",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael@example.com",
    role: "User",
    status: "active",
    lastActive: "5 minutes ago",
  },
  {
    id: 3,
    name: "Emma Wilson",
    email: "emma@example.com",
    role: "User",
    status: "inactive",
    lastActive: "2 days ago",
  },
  {
    id: 4,
    name: "James Brown",
    email: "james@example.com",
    role: "User",
    status: "active",
    lastActive: "1 hour ago",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    email: "lisa@example.com",
    role: "Admin",
    status: "active",
    lastActive: "Just now",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'bg-green-500 hover:bg-green-600';
    case 'inactive':
      return 'bg-red-500 hover:bg-red-600';
    default:
      return 'bg-gray-500 hover:bg-gray-600';
  }
};

export default function UsersPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Users</h1>
            <p className="text-muted-foreground">
              Manage user accounts and permissions
            </p>
          </div>
          <Button className="bg-osaz-red hover:bg-osaz-red/90 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>

        {/* Users List */}
        <Card>
          <CardHeader>
            <CardTitle>All Users</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Search and Filter */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search users..."
                  className="pl-10"
                />
              </div>
            </div>

            {/* Users Table */}
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Active</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>
                        <Badge className={`${getStatusColor(user.status)} text-white`}>
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{user.lastActive}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
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