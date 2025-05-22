'use client';

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Key, Bell, Shield, Globe } from "lucide-react";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account settings and preferences
          </p>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="api">API</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>
                  Update your basic account preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" defaultValue="ByOsaz Inc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <select
                    id="timezone"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    defaultValue="UTC-5"
                  >
                    <option>UTC-8 (Pacific Time)</option>
                    <option>UTC-7 (Mountain Time)</option>
                    <option>UTC-6 (Central Time)</option>
                    <option>UTC-5 (Eastern Time)</option>
                    <option>UTC+0 (GMT)</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Toggle dark mode theme
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-osaz-red" />
                  <CardTitle>Security Settings</CardTitle>
                </div>
                <CardDescription>
                  Manage your security preferences and authentication settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Label>Two-Factor Authentication</Label>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
                <div className="space-y-4">
                  <Label>Session Management</Label>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Currently active sessions
                    </p>
                    <Button variant="outline" className="w-full justify-start text-left">
                      <Globe className="mr-2 h-4 w-4" />
                      Chrome on Windows • Active now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-osaz-blue" />
                  <CardTitle>Notification Preferences</CardTitle>
                </div>
                <CardDescription>
                  Choose what notifications you want to receive
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive email updates about your account
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>API Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified about API usage and limits
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Marketing Updates</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive news about new features and updates
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Key className="h-5 w-5 text-osaz-orange" />
                  <CardTitle>API Settings</CardTitle>
                </div>
                <CardDescription>
                  Manage your API keys and access tokens
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Production API Key</Label>
                    <div className="flex gap-2">
                      <Input
                        type="password"
                        value="sk_live_123456789"
                        readOnly
                      />
                      <Button variant="outline">Copy</Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Development API Key</Label>
                    <div className="flex gap-2">
                      <Input
                        type="password"
                        value="sk_test_987654321"
                        readOnly
                      />
                      <Button variant="outline">Copy</Button>
                    </div>
                  </div>
                  <Button className="bg-osaz-red hover:bg-osaz-red/90 text-white">
                    Generate New API Key
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}