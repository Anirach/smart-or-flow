import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Settings as SettingsIcon, 
  Database, 
  Bell, 
  Shield, 
  Cpu, 
  Calendar,
  Clock,
  AlertCircle,
  Save
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Settings = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Settings</h1>
            <p className="text-muted-foreground mt-1">Configure system preferences and AI parameters</p>
          </div>
        </div>

        <Tabs defaultValue="general" className="space-y-4">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="ai-model">AI Model</TabsTrigger>
            <TabsTrigger value="scheduling">Scheduling</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="integration">Integrations</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>System Configuration</CardTitle>
                <CardDescription>General application settings and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Pilot Mode</Label>
                      <p className="text-sm text-muted-foreground">
                        Currently in pilot phase for General Surgery - Mondays
                      </p>
                    </div>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      Active
                    </Badge>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label>Default Service Line</Label>
                    <Select defaultValue="general">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Surgery</SelectItem>
                        <SelectItem value="ortho">Orthopedic Surgery</SelectItem>
                        <SelectItem value="cardio">Cardiovascular Surgery</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Time Zone</Label>
                    <Select defaultValue="pst">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                        <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                        <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Auto-Save Changes</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically save schedule modifications
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Enable Dark Mode</Label>
                      <p className="text-sm text-muted-foreground">
                        Switch to dark theme for reduced eye strain
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button variant="outline">Cancel</Button>
                  <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai-model" className="space-y-4">
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>AI Model Configuration</CardTitle>
                    <CardDescription>Prediction parameters and model settings</CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                    v2.3.1
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-base mb-3 block">Duration Prediction Settings</Label>
                    <div className="space-y-4 pl-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label>Confidence Interval</Label>
                          <span className="text-sm text-muted-foreground">P80 (80th percentile)</span>
                        </div>
                        <Select defaultValue="p80">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="p50">P50 (50th percentile)</SelectItem>
                            <SelectItem value="p80">P80 (80th percentile)</SelectItem>
                            <SelectItem value="p90">P90 (90th percentile)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Safety Buffer for High Variance Procedures</Label>
                        <div className="flex items-center gap-2">
                          <Input type="number" defaultValue="15" className="w-24" />
                          <span className="text-sm text-muted-foreground">minutes</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Per-Surgeon Calibration</Label>
                          <p className="text-sm text-muted-foreground">
                            Adjust predictions based on individual surgeon patterns
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <Label className="text-base mb-3 block">Optimization Objectives</Label>
                    <div className="space-y-4 pl-4">
                      <div className="space-y-2">
                        <Label>Primary Objective</Label>
                        <Select defaultValue="utilization">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="utilization">Maximize Utilization</SelectItem>
                            <SelectItem value="overtime">Minimize Overtime</SelectItem>
                            <SelectItem value="balanced">Balanced Approach</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Overtime Penalty Weight (λ₁)</Label>
                        <Input type="number" step="0.1" defaultValue="0.5" />
                      </div>

                      <div className="space-y-2">
                        <Label>PACU Constraint Penalty (λ₂)</Label>
                        <Input type="number" step="0.1" defaultValue="0.3" />
                      </div>

                      <div className="space-y-2">
                        <Label>Fairness Weight (λ₃)</Label>
                        <Input type="number" step="0.1" defaultValue="0.2" />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <Label className="text-base mb-3 block">Model Retraining</Label>
                    <div className="space-y-4 pl-4">
                      <div className="space-y-2">
                        <Label>Automatic Retraining Schedule</Label>
                        <Select defaultValue="quarterly">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="quarterly">Quarterly</SelectItem>
                            <SelectItem value="manual">Manual Only</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Drift Detection Alerts</Label>
                          <p className="text-sm text-muted-foreground">
                            Notify when model performance degrades
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="p-3 bg-muted/50 rounded-lg border border-border">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-primary mt-0.5" />
                          <div className="text-sm">
                            <p className="font-medium text-foreground">Next Retraining: March 15, 2025</p>
                            <p className="text-muted-foreground">Last trained: December 15, 2024</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button variant="outline">Restore Defaults</Button>
                  <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Apply Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="scheduling" className="space-y-4">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Scheduling Preferences</CardTitle>
                <CardDescription>Configure scheduling rules and constraints</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Default First-Case Start Time</Label>
                    <Input type="time" defaultValue="07:30" />
                  </div>

                  <div className="space-y-2">
                    <Label>Standard Turnover Time</Label>
                    <div className="flex items-center gap-2">
                      <Input type="number" defaultValue="30" className="w-24" />
                      <span className="text-sm text-muted-foreground">minutes</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Require Surgeon Approval for Changes</Label>
                      <p className="text-sm text-muted-foreground">
                        Surgeons must approve block allocation changes
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Mandatory Override Reasons</Label>
                      <p className="text-sm text-muted-foreground">
                        Require reason codes when overriding AI suggestions
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Allow Day-of Schedule Changes</Label>
                      <p className="text-sm text-muted-foreground">
                        Permit schedule modifications on procedure day
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label>PACU Capacity Buffer</Label>
                    <div className="flex items-center gap-2">
                      <Input type="number" defaultValue="2" className="w-24" />
                      <span className="text-sm text-muted-foreground">beds</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Block Reallocation Limit</Label>
                    <div className="flex items-center gap-2">
                      <Input type="number" defaultValue="15" className="w-24" />
                      <span className="text-sm text-muted-foreground">% per period</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button variant="outline">Cancel</Button>
                  <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Configure alert settings and delivery methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">First-Case Jeopardy Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Alert at T-30 and T-15 minutes before scheduled start
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">PACU Capacity Warnings</Label>
                      <p className="text-sm text-muted-foreground">
                        Notify when recovery capacity reaches threshold
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Turnover Delay Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Alert when turnover exceeds predicted time
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Schedule Change Confirmations</Label>
                      <p className="text-sm text-muted-foreground">
                        Send confirmation when schedule is modified
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label>Delivery Method</Label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Switch id="email-notif" defaultChecked />
                        <Label htmlFor="email-notif" className="cursor-pointer">Email Notifications</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch id="in-app-notif" defaultChecked />
                        <Label htmlFor="in-app-notif" className="cursor-pointer">In-App Notifications</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch id="sms-notif" />
                        <Label htmlFor="sms-notif" className="cursor-pointer">SMS Alerts (Critical Only)</Label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button variant="outline">Cancel</Button>
                  <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Save Preferences
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="integration" className="space-y-4">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>System Integrations</CardTitle>
                <CardDescription>Manage connections to external systems</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "OR Scheduling System", status: "connected", lastSync: "2 min ago" },
                    { name: "Anesthesia Management", status: "connected", lastSync: "5 min ago" },
                    { name: "Sterile Services", status: "connected", lastSync: "10 min ago" },
                    { name: "PACU Board", status: "connected", lastSync: "1 min ago" },
                    { name: "Epic EMR", status: "pending", lastSync: "N/A" }
                  ].map((integration, i) => (
                    <div key={i} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Database className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">{integration.name}</p>
                          <p className="text-sm text-muted-foreground">Last sync: {integration.lastSync}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant="outline" 
                          className={integration.status === "connected" 
                            ? "bg-success/10 text-success border-success/20" 
                            : "bg-warning/10 text-warning border-warning/20"}
                        >
                          {integration.status}
                        </Badge>
                        <Button variant="outline" size="sm">Configure</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-4">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Security & Compliance</CardTitle>
                <CardDescription>Manage security settings and audit controls</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">
                        Require 2FA for all user accounts
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Immutable Audit Logging</Label>
                      <p className="text-sm text-muted-foreground">
                        Cryptographically secure audit trail
                      </p>
                    </div>
                    <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                      Enabled
                    </Badge>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label>Session Timeout</Label>
                    <Select defaultValue="30">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="60">60 minutes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Data Retention Period</Label>
                    <Select defaultValue="12">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6">6 months</SelectItem>
                        <SelectItem value="12">12 months</SelectItem>
                        <SelectItem value="24">24 months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Separator />

                  <div className="p-4 bg-muted/50 rounded-lg border border-border">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-primary mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-medium text-foreground">Compliance Status</p>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p>✓ PDPA Compliant</p>
                          <p>✓ GDPR Compliant</p>
                          <p>✓ HIPAA Security Rule</p>
                          <p>✓ Data Protection Impact Assessment (DPIA) Completed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button variant="outline">View Compliance Report</Button>
                  <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
