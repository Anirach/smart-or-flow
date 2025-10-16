import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Download, Filter, User, Clock, FileText, AlertCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const AuditLog = () => {
  const auditEvents = [
    {
      id: "AUD-2025-001",
      timestamp: "2025-01-15 09:45:23",
      user: "Dr. Anderson",
      role: "Surgeon",
      action: "Override AI Suggestion",
      entity: "Case #PT-4523",
      details: "Changed duration from 112 min to 105 min",
      reason: "Based on recent similar cases",
      impact: "Schedule adjusted -7 min",
      modelVersion: "v2.3.1",
      status: "approved"
    },
    {
      id: "AUD-2025-002",
      timestamp: "2025-01-15 08:30:15",
      user: "Sarah Chen",
      role: "OR Planner",
      action: "Applied AI Optimization",
      entity: "OR Schedule - Monday",
      details: "Accepted block allocation suggestion",
      reason: "Improved utilization by 4.2%",
      impact: "Utilization +4.2%, OT 0 min",
      modelVersion: "v2.3.1",
      status: "completed"
    },
    {
      id: "AUD-2025-003",
      timestamp: "2025-01-15 07:15:42",
      user: "Michael Rodriguez",
      role: "OR Manager",
      action: "Locked Schedule",
      entity: "OR 1, OR 2",
      details: "Locked first-case slots for rooms 1-2",
      reason: "Equipment maintenance confirmed",
      impact: "No schedule changes allowed",
      modelVersion: "N/A",
      status: "active"
    },
    {
      id: "AUD-2025-004",
      timestamp: "2025-01-14 16:22:08",
      user: "System",
      role: "AI Engine",
      action: "Model Prediction",
      entity: "Case #PT-4521",
      details: "Duration predicted: 98 min (P80: 105 min)",
      reason: "High confidence prediction",
      impact: "Schedule optimized",
      modelVersion: "v2.3.1",
      status: "completed"
    },
    {
      id: "AUD-2025-005",
      timestamp: "2025-01-14 15:45:33",
      user: "Dr. Patel",
      role: "Surgeon",
      action: "Rejected AI Suggestion",
      entity: "Block Allocation",
      details: "Declined Tuesday 14:00 slot allocation",
      reason: "Clinic commitment conflict",
      impact: "Slot reallocated to Dr. Martinez",
      modelVersion: "v2.3.1",
      status: "resolved"
    },
    {
      id: "AUD-2025-006",
      timestamp: "2025-01-14 14:10:19",
      user: "Lisa Thompson",
      role: "PACU Lead",
      action: "Capacity Alert",
      entity: "PACU Recovery",
      details: "Flagged capacity constraint 10:30-11:30",
      reason: "Staffing limitation",
      impact: "Schedule adjusted for staggering",
      modelVersion: "N/A",
      status: "resolved"
    },
    {
      id: "AUD-2025-007",
      timestamp: "2025-01-14 13:05:44",
      user: "James Wilson",
      role: "Data Analyst",
      action: "Model Retrain Request",
      entity: "Duration Prediction Model",
      details: "Initiated quarterly retraining cycle",
      reason: "Scheduled maintenance",
      impact: "Pending stakeholder review",
      modelVersion: "v2.3.0 → v2.3.1",
      status: "pending"
    },
    {
      id: "AUD-2025-008",
      timestamp: "2025-01-14 11:30:27",
      user: "Sarah Chen",
      role: "OR Planner",
      action: "Add-On Case Sequenced",
      entity: "Emergency Case #PT-4530",
      details: "Inserted urgent case in OR 3 at 13:45",
      reason: "Emergency appendectomy",
      impact: "Minimal disruption: +5 min delay",
      modelVersion: "v2.3.1",
      status: "completed"
    }
  ];

  const getActionColor = (action: string) => {
    if (action.includes("Override") || action.includes("Rejected")) return "warning";
    if (action.includes("Applied") || action.includes("Completed")) return "success";
    if (action.includes("Alert") || action.includes("Flagged")) return "destructive";
    return "default";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-success/10 text-success border-success/20";
      case "active": return "bg-primary/10 text-primary border-primary/20";
      case "pending": return "bg-warning/10 text-warning border-warning/20";
      case "resolved": return "bg-muted text-muted-foreground border-border";
      default: return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Audit Log</h1>
            <p className="text-muted-foreground mt-1">Immutable record of all system actions and decisions</p>
          </div>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Export Audit Trail
          </Button>
        </div>

        <Card className="border-border">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Activity Timeline</CardTitle>
                <CardDescription>Searchable, filterable event history with cryptographic verification</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                  <div className="h-2 w-2 rounded-full bg-success mr-1 animate-pulse"></div>
                  Audit Active
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Filters */}
            <div className="flex items-center gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by user, action, or entity..." 
                  className="pl-9"
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Action type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Actions</SelectItem>
                  <SelectItem value="override">Overrides</SelectItem>
                  <SelectItem value="optimization">Optimizations</SelectItem>
                  <SelectItem value="alert">Alerts</SelectItem>
                  <SelectItem value="model">Model Events</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="7">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Time period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Last 24 hours</SelectItem>
                  <SelectItem value="7">Last 7 days</SelectItem>
                  <SelectItem value="30">Last 30 days</SelectItem>
                  <SelectItem value="all">All time</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>

            <Separator />

            {/* Audit Events */}
            <div className="space-y-3">
              {auditEvents.map((event) => (
                <div key={event.id} className="p-4 border border-border rounded-lg hover:shadow-md transition-all space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={getStatusColor(event.status)}>
                          {event.status}
                        </Badge>
                        <Badge variant="secondary">{event.id}</Badge>
                        <span className="text-xs text-muted-foreground">{event.modelVersion}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <User className="h-3 w-3 text-muted-foreground" />
                        <span className="font-medium text-foreground">{event.user}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{event.role}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{event.timestamp}</span>
                      </div>
                    </div>
                    <Badge variant={getActionColor(event.action) as any}>
                      {event.action}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground text-xs">Entity</p>
                        <p className="font-medium text-foreground">{event.entity}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs">Impact</p>
                        <p className="font-medium text-foreground">{event.impact}</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-muted-foreground text-xs mb-1">Details</p>
                      <p className="text-sm text-foreground">{event.details}</p>
                    </div>

                    {event.reason && (
                      <div className="p-2 rounded bg-muted/50 border border-border">
                        <div className="flex items-start gap-2">
                          <FileText className="h-3 w-3 text-muted-foreground mt-0.5" />
                          <div>
                            <p className="text-xs text-muted-foreground">Reason Code</p>
                            <p className="text-sm text-foreground">{event.reason}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <AlertCircle className="h-3 w-3" />
                      <span>Hash: 0x8f2a...d41c</span>
                      <span>•</span>
                      <span>Previous: 0x7e1b...c32a</span>
                    </div>
                    <Button variant="ghost" size="sm" className="h-7 text-xs">
                      View Full Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center py-4">
              <Button variant="outline">Load More Events</Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Summary */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Events</p>
                  <p className="text-2xl font-bold text-foreground">2,847</p>
                </div>
                <FileText className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Overrides</p>
                  <p className="text-2xl font-bold text-foreground">147</p>
                </div>
                <AlertCircle className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">AI Suggestions</p>
                  <p className="text-2xl font-bold text-foreground">1,234</p>
                </div>
                <FileText className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                  <p className="text-2xl font-bold text-foreground">28</p>
                </div>
                <User className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AuditLog;
