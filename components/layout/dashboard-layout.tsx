"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { DASHBOARD_NAV_ITEMS } from "@/lib/constants";
import { 
  Brain, 
  Bell, 
  ChevronLeft,
  ChevronRight,
  LogOut,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  // Convert icon string to Lucide icon
  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      "layout-dashboard": <div className="h-5 w-5" />,
      "users": <div className="h-5 w-5" />,
      "bar-chart": <div className="h-5 w-5" />,
      "brain": <div className="h-5 w-5" />,
      "list-checks": <div className="h-5 w-5" />,
      "settings": <div className="h-5 w-5" />,
      "help-circle": <div className="h-5 w-5" />,
    };
    
    return icons[iconName] || <div className="h-5 w-5" />;
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Sidebar */}
      <aside
        className={cn(
          "flex flex-col fixed inset-y-0 bg-white dark:bg-slate-950 border-r border-gray-200 dark:border-gray-800 z-30 transition-all duration-300 ease-in-out",
          collapsed ? "w-[80px]" : "w-[250px]"
        )}
      >
        {/* Sidebar Header */}
        <div className="h-16 flex items-center px-4 border-b border-gray-200 dark:border-gray-800">
          <Link href="/" className="flex items-center gap-2">
            <Brain className="h-7 w-7 text-osaz-red" />
            {!collapsed && (
              <span className="font-heading font-bold text-xl text-osaz-red">ByOsaz</span>
            )}
          </Link>
        </div>

        {/* Sidebar Navigation */}
        <div className="flex-1 py-6 px-3 overflow-y-auto">
          <nav className="space-y-1">
            {DASHBOARD_NAV_ITEMS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                  pathname === item.href
                    ? "bg-osaz-orange/10 text-osaz-orange"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
              >
                {getIcon(item.icon)}
                {!collapsed && <span>{item.title}</span>}
              </Link>
            ))}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className="w-full justify-center"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className={cn(
        "flex-1 transition-all duration-300 ease-in-out",
        collapsed ? "ml-[80px]" : "ml-[250px]"
      )}>
        {/* Top Header */}
        <header className="h-16 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-950 flex items-center justify-between px-6">
          <h1 className="font-heading font-semibold text-xl">
            {DASHBOARD_NAV_ITEMS.find((item) => item.href === pathname)?.title || "Dashboard"}
          </h1>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="p-1 h-auto" aria-label="User menu">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                    <AvatarFallback className="bg-osaz-blue text-white">
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        
        {/* Page Content */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}