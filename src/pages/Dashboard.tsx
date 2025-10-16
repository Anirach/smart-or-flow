import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Clock, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const kpis = [
    {
      title: "On-Time First-Case Starts",
      value: "87.3%",
      change: "+18.2%",
      trend: "up",
      icon: CheckCircle2,
      target: "+15-25%",
      color: "text-success"
    },
    {
      title: "Block Utilization",
      value: "82.5%",
      change: "+12.1%",
      trend: "up",
      icon: Activity,
      target: "+10-15%",
      color: "text-primary"
    },
    {
      title: "Overtime Hours",
      value: "23.4 hrs",
      change: "-21.3%",
      trend: "down",
      icon: Clock,
      target: "-15-25%",
      color: "text-secondary"
    },
    {
      title: "Day-of Cancellations",
      value: "4.2%",
      change: "-26.5%",
      trend: "down",
      icon: AlertTriangle,
      target: "-20-30%",
      color: "text-warning"
    }
  ];

  const roomUtilization = [
    { room: "OR 1", utilization: 92, cases: 8, overtime: 0 },
    { room: "OR 2", utilization: 88, cases: 7, overtime: 1.5 },
    { room: "OR 3", utilization: 79, cases: 6, overtime: 0 },
    { room: "OR 4", utilization: 85, cases: 7, overtime: 0.5 },
    { room: "OR 5", utilization: 76, cases: 6, overtime: 0 },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">OR Performance Dashboard</h1>
            <p className="text-muted-foreground mt-1">Pilot: General Surgery - Mondays</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-success animate-pulse"></div>
              <span>AI Active</span>
            </div>
            <span className="text-muted-foreground/50">•</span>
            <span>Last updated: 2 min ago</span>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi) => {
            const Icon = kpi.icon;
            return (
              <Card key={kpi.title} className="border-border hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {kpi.title}
                  </CardTitle>
                  <Icon className={`h-4 w-4 ${kpi.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{kpi.value}</div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1">
                      <TrendingUp className={`h-3 w-3 ${kpi.trend === 'up' ? 'text-success' : 'text-secondary'} ${kpi.trend === 'down' ? 'rotate-180' : ''}`} />
                      <p className="text-xs font-medium text-success">
                        {kpi.change} vs baseline
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground">Target: {kpi.target}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Room Utilization */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Room Utilization Today</CardTitle>
              <CardDescription>Block time usage by operating room</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {roomUtilization.map((room) => (
                <div key={room.room} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">{room.room}</span>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <span>{room.cases} cases</span>
                      {room.overtime > 0 && (
                        <span className="text-warning">+{room.overtime}h OT</span>
                      )}
                      <span className="font-semibold text-foreground">{room.utilization}%</span>
                    </div>
                  </div>
                  <Progress value={room.utilization} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle>AI Optimization Impact</CardTitle>
              <CardDescription>Week-over-week comparison</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Schedule Adherence</span>
                    <span className="text-sm font-semibold text-foreground">94.2%</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Prediction Accuracy (P80)</span>
                    <span className="text-sm font-semibold text-foreground">81.5%</span>
                  </div>
                  <Progress value={81} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Turnover Variance</span>
                    <span className="text-sm font-semibold text-success">-8.3 min avg</span>
                  </div>
                  <Progress value={68} className="h-2" />
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">AI Suggestions Accepted</span>
                    <span className="font-semibold text-foreground">76% this week</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Alerts */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Recent Alerts & Actions</CardTitle>
            <CardDescription>System notifications and scheduling adjustments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { type: "success", time: "8:15 AM", message: "OR 2: First case started on time - predicted within 3 min" },
                { type: "warning", time: "7:45 AM", message: "OR 4: Turnover delay detected - Sterile Services notified" },
                { type: "info", time: "7:30 AM", message: "Add-on case sequenced successfully - minimal schedule impact" },
                { type: "success", time: "7:00 AM", message: "Night-before check completed - 2 duration adjustments made" },
              ].map((alert, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <div className={`h-2 w-2 rounded-full mt-1.5 ${
                    alert.type === 'success' ? 'bg-success' : 
                    alert.type === 'warning' ? 'bg-warning' : 
                    'bg-primary'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm text-foreground">{alert.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
