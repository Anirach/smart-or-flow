import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, TrendingDown, Clock, Users, Activity, CalendarDays } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Analytics = () => {
  const surgeonPerformance = [
    { name: "Dr. Anderson", cases: 42, avgDuration: 98, variance: "Low", utilization: 89, onTime: 95 },
    { name: "Dr. Chen", cases: 38, avgDuration: 145, variance: "Medium", utilization: 85, onTime: 92 },
    { name: "Dr. Martinez", cases: 35, avgDuration: 112, variance: "Low", utilization: 91, onTime: 97 },
    { name: "Dr. Patel", cases: 31, avgDuration: 128, variance: "High", utilization: 78, onTime: 84 },
    { name: "Dr. Williams", cases: 29, avgDuration: 105, variance: "Medium", utilization: 82, onTime: 88 },
  ];

  const procedureTypes = [
    { name: "Laparoscopic Cholecystectomy", count: 48, avgTime: 95, accuracy: 94 },
    { name: "Inguinal Hernia Repair", count: 42, avgTime: 108, accuracy: 89 },
    { name: "Sigmoid Colectomy", count: 28, avgTime: 152, accuracy: 81 },
    { name: "Appendectomy", count: 35, avgTime: 68, accuracy: 96 },
    { name: "Small Bowel Resection", count: 24, avgTime: 118, accuracy: 86 },
  ];

  const weeklyTrends = [
    { week: "Week 1", utilization: 78, overtime: 45, otfcs: 82, cancellations: 6.2 },
    { week: "Week 2", utilization: 81, overtime: 38, otfcs: 85, cancellations: 5.1 },
    { week: "Week 3", utilization: 83, overtime: 32, otfcs: 87, cancellations: 4.8 },
    { week: "Week 4", utilization: 85, overtime: 28, otfcs: 91, cancellations: 3.9 },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Analytics & Insights</h1>
            <p className="text-muted-foreground mt-1">Performance metrics and AI model accuracy</p>
          </div>
          <div className="flex items-center gap-3">
            <Select defaultValue="30">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Time period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Last 7 days</SelectItem>
                <SelectItem value="30">Last 30 days</SelectItem>
                <SelectItem value="90">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="surgeons">By Surgeon</TabsTrigger>
            <TabsTrigger value="procedures">By Procedure</TabsTrigger>
            <TabsTrigger value="ai-performance">AI Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-4">
              <Card className="border-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Cases</CardTitle>
                  <Activity className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">175</div>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3 text-success" />
                    <p className="text-xs text-success">+12.3% vs last month</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg Utilization</CardTitle>
                  <TrendingUp className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">84.2%</div>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3 text-success" />
                    <p className="text-xs text-success">+8.1% improvement</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg Overtime</CardTitle>
                  <Clock className="h-4 w-4 text-warning" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">28 min</div>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingDown className="h-3 w-3 text-success rotate-180" />
                    <p className="text-xs text-success">-18.7% reduction</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Surgeons</CardTitle>
                  <Users className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">12</div>
                  <p className="text-xs text-muted-foreground mt-1">General Surgery</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Weekly Performance Trends</CardTitle>
                <CardDescription>Key metrics progression over the pilot period</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {weeklyTrends.map((week, index) => (
                    <div key={week.week} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-foreground">{week.week}</span>
                        <div className="flex items-center gap-6 text-muted-foreground">
                          <span>Util: {week.utilization}%</span>
                          <span>OT: {week.overtime}min</span>
                          <span>OTFCS: {week.otfcs}%</span>
                          <span>Cancel: {week.cancellations}%</span>
                        </div>
                      </div>
                      <Progress value={week.utilization} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="surgeons" className="space-y-4">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Surgeon Performance Analysis</CardTitle>
                <CardDescription>Individual surgeon metrics and AI prediction accuracy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {surgeonPerformance.map((surgeon) => (
                    <div key={surgeon.name} className="p-4 border border-border rounded-lg space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-foreground">{surgeon.name}</h3>
                          <p className="text-sm text-muted-foreground">{surgeon.cases} cases completed</p>
                        </div>
                        <Badge variant={surgeon.variance === "Low" ? "default" : surgeon.variance === "Medium" ? "outline" : "secondary"}>
                          {surgeon.variance} Variance
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Avg Duration</p>
                          <p className="font-semibold text-foreground">{surgeon.avgDuration} min</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Utilization</p>
                          <p className="font-semibold text-foreground">{surgeon.utilization}%</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">On-Time Starts</p>
                          <p className="font-semibold text-success">{surgeon.onTime}%</p>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Block Utilization</span>
                          <span>{surgeon.utilization}%</span>
                        </div>
                        <Progress value={surgeon.utilization} className="h-1.5" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="procedures" className="space-y-4">
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Procedure Type Analysis</CardTitle>
                <CardDescription>Duration accuracy and frequency by procedure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {procedureTypes.map((procedure) => (
                    <div key={procedure.name} className="p-4 border border-border rounded-lg space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-foreground">{procedure.name}</h3>
                          <p className="text-sm text-muted-foreground">{procedure.count} cases</p>
                        </div>
                        <Badge variant="outline" className={procedure.accuracy >= 90 ? "bg-success/10 text-success border-success/20" : "bg-warning/10 text-warning border-warning/20"}>
                          {procedure.accuracy}% accurate
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div>
                          <p className="text-muted-foreground">Avg Duration</p>
                          <p className="font-semibold text-foreground">{procedure.avgTime} min</p>
                        </div>
                        <div className="text-right">
                          <p className="text-muted-foreground">AI Prediction Accuracy</p>
                          <p className="font-semibold text-foreground">{procedure.accuracy}%</p>
                        </div>
                      </div>

                      <Progress value={procedure.accuracy} className="h-1.5" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai-performance" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-base">Duration Prediction</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-muted-foreground">P50 Coverage</span>
                        <span className="font-semibold text-foreground">89.2%</span>
                      </div>
                      <Progress value={89} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-muted-foreground">P80 Coverage</span>
                        <span className="font-semibold text-foreground">81.5%</span>
                      </div>
                      <Progress value={81} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-muted-foreground">P90 Coverage</span>
                        <span className="font-semibold text-foreground">76.8%</span>
                      </div>
                      <Progress value={76} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-base">Turnover Forecasting</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Avg Accuracy</span>
                      <span className="text-lg font-bold text-foreground">87.3%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Avg Error</span>
                      <span className="text-lg font-bold text-foreground">±4.2 min</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Predictions</span>
                      <span className="text-lg font-bold text-foreground">248</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-base">Model Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Drift Detection</span>
                      <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                        Normal
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Last Retrain</span>
                      <span className="text-sm font-medium text-foreground">14 days ago</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Model Version</span>
                      <span className="text-sm font-medium text-foreground">v2.3.1</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Bias & Fairness Monitoring</CardTitle>
                <CardDescription>Error distribution across surgeon groups and services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-foreground">By Surgeon Experience</h4>
                      <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                        Within Threshold
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Senior (10+ yrs)</p>
                        <p className="font-semibold text-foreground">MAPE: 8.2%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Mid-level (5-10 yrs)</p>
                        <p className="font-semibold text-foreground">MAPE: 9.1%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Junior (&lt;5 yrs)</p>
                        <p className="font-semibold text-foreground">MAPE: 10.5%</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-foreground">By Procedure Complexity</h4>
                      <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                        Balanced
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">High Complexity</p>
                        <p className="font-semibold text-foreground">MAPE: 11.3%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Medium Complexity</p>
                        <p className="font-semibold text-foreground">MAPE: 8.7%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Low Complexity</p>
                        <p className="font-semibold text-foreground">MAPE: 6.4%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analytics;
