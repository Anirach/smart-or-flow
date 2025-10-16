import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, UserPlus, Mail, Shield, MoreVertical, CheckCircle2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UserManagement = () => {
  const users = [
    {
      id: 1,
      name: "Dr. Sarah Anderson",
      email: "s.anderson@hospital.org",
      role: "Surgeon",
      status: "active",
      lastActive: "2 hours ago",
      permissions: ["View Schedule", "Request Changes", "Override AI"],
      cases: 42,
      utilization: 89
    },
    {
      id: 2,
      name: "Sarah Chen",
      email: "s.chen@hospital.org",
      role: "OR Planner",
      status: "active",
      lastActive: "5 minutes ago",
      permissions: ["View Schedule", "Edit Schedule", "Apply AI", "Lock Slots"],
      cases: 0,
      utilization: 0
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      email: "m.rodriguez@hospital.org",
      role: "OR Manager",
      status: "active",
      lastActive: "1 hour ago",
      permissions: ["View Schedule", "Edit Schedule", "Apply AI", "Lock Slots", "Approve Changes", "View Analytics"],
      cases: 0,
      utilization: 0
    },
    {
      id: 4,
      name: "Dr. James Chen",
      email: "j.chen@hospital.org",
      role: "Surgeon",
      status: "active",
      lastActive: "3 hours ago",
      permissions: ["View Schedule", "Request Changes", "Override AI"],
      cases: 38,
      utilization: 85
    },
    {
      id: 5,
      name: "Lisa Thompson",
      email: "l.thompson@hospital.org",
      role: "PACU Lead",
      status: "active",
      lastActive: "30 minutes ago",
      permissions: ["View Schedule", "Flag Capacity", "View Analytics"],
      cases: 0,
      utilization: 0
    },
    {
      id: 6,
      name: "Dr. Priya Patel",
      email: "p.patel@hospital.org",
      role: "Surgeon",
      status: "active",
      lastActive: "4 hours ago",
      permissions: ["View Schedule", "Request Changes", "Override AI"],
      cases: 31,
      utilization: 78
    },
    {
      id: 7,
      name: "James Wilson",
      email: "j.wilson@hospital.org",
      role: "Data Analyst",
      status: "active",
      lastActive: "1 day ago",
      permissions: ["View Analytics", "Export Data", "Monitor Models"],
      cases: 0,
      utilization: 0
    },
    {
      id: 8,
      name: "Dr. Maria Garcia",
      email: "m.garcia@hospital.org",
      role: "Anesthesia Lead",
      status: "active",
      lastActive: "2 hours ago",
      permissions: ["View Schedule", "Flag Constraints", "View Analytics"],
      cases: 0,
      utilization: 0
    }
  ];

  const roles = [
    { name: "OR Planner", count: 3, color: "primary" },
    { name: "Surgeon", count: 12, color: "secondary" },
    { name: "OR Manager", count: 2, color: "success" },
    { name: "Anesthesia Lead", count: 4, color: "warning" },
    { name: "PACU Lead", count: 3, color: "default" },
    { name: "Data Analyst", count: 2, color: "default" },
    { name: "Sterile Services", count: 2, color: "default" }
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getRoleBadgeColor = (role: string) => {
    if (role.includes("Manager")) return "default";
    if (role.includes("Surgeon")) return "secondary";
    if (role.includes("Planner")) return "outline";
    return "outline";
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">User Management</h1>
            <p className="text-muted-foreground mt-1">Manage roles, permissions, and access control</p>
          </div>
          <Button>
            <UserPlus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>

        <Tabs defaultValue="users" className="space-y-4">
          <TabsList>
            <TabsTrigger value="users">Active Users</TabsTrigger>
            <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
            <TabsTrigger value="activity">Activity Log</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-4">
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>User Directory</CardTitle>
                    <CardDescription>28 active users across all roles</CardDescription>
                  </div>
                  <div className="relative w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search users..." 
                      className="pl-9"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {users.map((user) => (
                    <div key={user.id} className="p-4 border border-border rounded-lg hover:shadow-md transition-all">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                              {getInitials(user.name)}
                            </AvatarFallback>
                          </Avatar>
                          
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold text-foreground">{user.name}</h3>
                              <Badge variant={getRoleBadgeColor(user.role) as any}>
                                {user.role}
                              </Badge>
                              {user.status === "active" && (
                                <CheckCircle2 className="h-4 w-4 text-success" />
                              )}
                            </div>
                            
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Mail className="h-3 w-3" />
                                <span>{user.email}</span>
                              </div>
                              <span>•</span>
                              <span>Last active: {user.lastActive}</span>
                            </div>

                            {user.cases > 0 && (
                              <div className="flex items-center gap-4 text-sm">
                                <span className="text-muted-foreground">Cases: <span className="font-medium text-foreground">{user.cases}</span></span>
                                <span className="text-muted-foreground">Utilization: <span className="font-medium text-foreground">{user.utilization}%</span></span>
                              </div>
                            )}

                            <div className="flex items-center gap-1 flex-wrap">
                              {user.permissions.map((permission, i) => (
                                <Badge key={i} variant="outline" className="text-xs bg-muted">
                                  {permission}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit Permissions</DropdownMenuItem>
                            <DropdownMenuItem>Change Role</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">Deactivate User</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="roles" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {roles.map((role) => (
                <Card key={role.name} className="border-border">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{role.name}</CardTitle>
                      <Badge variant={role.color as any}>{role.count} users</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">Permissions</span>
                      </div>
                      {role.name === "OR Planner" && (
                        <div className="space-y-1 pl-6">
                          <p className="text-foreground">• View & Edit Schedule</p>
                          <p className="text-foreground">• Apply AI Suggestions</p>
                          <p className="text-foreground">• Lock Time Slots</p>
                          <p className="text-foreground">• What-If Scenarios</p>
                        </div>
                      )}
                      {role.name === "Surgeon" && (
                        <div className="space-y-1 pl-6">
                          <p className="text-foreground">• View Own Schedule</p>
                          <p className="text-foreground">• Request Changes</p>
                          <p className="text-foreground">• Override AI (with reason)</p>
                          <p className="text-foreground">• Block Preferences</p>
                        </div>
                      )}
                      {role.name === "OR Manager" && (
                        <div className="space-y-1 pl-6">
                          <p className="text-foreground">• Full Schedule Access</p>
                          <p className="text-foreground">• Approve Changes</p>
                          <p className="text-foreground">• View All Analytics</p>
                          <p className="text-foreground">• User Management</p>
                        </div>
                      )}
                      {role.name !== "OR Planner" && role.name !== "Surgeon" && role.name !== "OR Manager" && (
                        <div className="space-y-1 pl-6">
                          <p className="text-foreground">• View Schedule</p>
                          <p className="text-foreground">• Flag Constraints</p>
                          <p className="text-foreground">• View Analytics</p>
                        </div>
                      )}
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Edit Role
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-4">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Recent User Activity</CardTitle>
                <CardDescription>Login events and access patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { user: "Sarah Chen", action: "Logged in", time: "5 minutes ago", location: "Workstation 12" },
                    { user: "Lisa Thompson", action: "Accessed PACU Dashboard", time: "30 minutes ago", location: "Workstation 8" },
                    { user: "Dr. Anderson", action: "Modified Schedule", time: "2 hours ago", location: "Mobile App" },
                    { user: "Michael Rodriguez", action: "Generated Report", time: "3 hours ago", location: "Workstation 5" },
                    { user: "James Wilson", action: "Logged in", time: "1 day ago", location: "Remote VPN" }
                  ].map((activity, i) => (
                    <div key={i} className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-muted text-xs">
                            {getInitials(activity.user)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium text-foreground">{activity.user}</p>
                          <p className="text-xs text-muted-foreground">{activity.action}</p>
                        </div>
                      </div>
                      <div className="text-right text-xs text-muted-foreground">
                        <p>{activity.time}</p>
                        <p>{activity.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserManagement;
