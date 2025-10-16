import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, AlertCircle, TrendingUp, Lock, Sparkles } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Schedule = () => {
  const scheduledCases = [
    {
      id: 1,
      room: "OR 1",
      time: "07:30 - 09:15",
      surgeon: "Dr. Anderson",
      procedure: "Laparoscopic Cholecystectomy",
      patient: "PT-4521",
      duration: { scheduled: 105, predicted: 98, confidence: "high" },
      status: "confirmed",
      aiSuggestion: "On track - First case priority"
    },
    {
      id: 2,
      room: "OR 1",
      time: "09:45 - 11:30",
      surgeon: "Dr. Anderson",
      procedure: "Inguinal Hernia Repair",
      patient: "PT-4523",
      duration: { scheduled: 105, predicted: 112, confidence: "medium" },
      status: "ai-adjusted",
      aiSuggestion: "Duration extended +7min based on surgeon history"
    },
    {
      id: 3,
      room: "OR 2",
      time: "07:30 - 10:00",
      surgeon: "Dr. Chen",
      procedure: "Sigmoid Colectomy",
      patient: "PT-4522",
      duration: { scheduled: 150, predicted: 145, confidence: "high" },
      status: "confirmed",
      aiSuggestion: "Equipment ready - PACU capacity confirmed"
    },
    {
      id: 4,
      room: "OR 2",
      time: "10:30 - 12:15",
      surgeon: "Dr. Chen",
      procedure: "Small Bowel Resection",
      patient: "PT-4525",
      duration: { scheduled: 105, predicted: 118, confidence: "medium" },
      status: "risk-flagged",
      aiSuggestion: "Risk: High variance procedure - suggest P90 buffer"
    }
  ];

  const aiSuggestions = [
    {
      type: "optimization",
      priority: "high",
      title: "First-Case Start Time Optimization",
      description: "Moving OR 3 start to 07:45 improves overall utilization by 4.2% with no overtime impact",
      impact: { utilization: "+4.2%", overtime: "0 min", confidence: 0.89 }
    },
    {
      type: "warning",
      priority: "medium",
      title: "PACU Capacity Alert",
      description: "Peak recovery expected 10:30-11:30. Consider staggering OR 4 & OR 5 cases",
      impact: { utilization: "0%", overtime: "potential +15 min", confidence: 0.76 }
    },
    {
      type: "turnover",
      priority: "low",
      title: "Turnover Efficiency",
      description: "OR 1 turnover predicted 28 min (usual: 32 min). Simple equipment setup",
      impact: { utilization: "+1.8%", overtime: "0 min", confidence: 0.92 }
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">OR Schedule Workspace</h1>
            <p className="text-muted-foreground mt-1">Monday, January 15, 2025 • General Surgery</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Lock className="h-4 w-4 mr-2" />
              Lock Schedule
            </Button>
            <Button size="sm">
              <Sparkles className="h-4 w-4 mr-2" />
              Run What-If Scenario
            </Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Schedule View */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Today's Cases</CardTitle>
                  <div className="flex items-center gap-2 text-sm">
                    <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                      4 On Track
                    </Badge>
                    <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
                      1 Flagged
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {scheduledCases.map((case_) => (
                  <div key={case_.id} className="p-4 border border-border rounded-lg hover:shadow-md transition-all space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="font-semibold">
                            {case_.room}
                          </Badge>
                          <span className="text-sm font-medium text-muted-foreground">{case_.time}</span>
                          {case_.status === "ai-adjusted" && (
                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                              <Sparkles className="h-3 w-3 mr-1" />
                              AI Adjusted
                            </Badge>
                          )}
                          {case_.status === "risk-flagged" && (
                            <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
                              <AlertCircle className="h-3 w-3 mr-1" />
                              Risk
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-semibold text-foreground">{case_.procedure}</h3>
                        <p className="text-sm text-muted-foreground">{case_.surgeon} • {case_.patient}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-sm">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span className="font-medium text-foreground">{case_.duration.predicted} min</span>
                          <span className="text-muted-foreground">(est: {case_.duration.scheduled})</span>
                        </div>
                        <Badge variant="outline" className={`mt-1 text-xs ${
                          case_.duration.confidence === 'high' ? 'bg-success/10 text-success border-success/20' :
                          'bg-warning/10 text-warning border-warning/20'
                        }`}>
                          {case_.duration.confidence === 'high' ? '89%' : '76%'} confidence
                        </Badge>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Sparkles className="h-3 w-3 text-primary" />
                        <span className="text-xs">{case_.aiSuggestion}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-xs h-7">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* AI Suggestions Panel */}
          <div className="space-y-4">
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <CardTitle>AI Suggestions</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {aiSuggestions.map((suggestion, i) => (
                  <div key={i} className={`p-3 rounded-lg border ${
                    suggestion.priority === 'high' ? 'border-primary/30 bg-primary/5' :
                    suggestion.priority === 'medium' ? 'border-warning/30 bg-warning/5' :
                    'border-border bg-muted/30'
                  }`}>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant={suggestion.priority === 'high' ? 'default' : 'outline'} className="text-xs">
                        {suggestion.priority}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <TrendingUp className="h-3 w-3" />
                        <span>{Math.round(suggestion.impact.confidence * 100)}%</span>
                      </div>
                    </div>
                    
                    <h4 className="font-semibold text-sm text-foreground mb-1">{suggestion.title}</h4>
                    <p className="text-xs text-muted-foreground mb-3">{suggestion.description}</p>
                    
                    <div className="flex items-center gap-2 text-xs">
                      <Badge variant="outline" className="bg-background">
                        Util: {suggestion.impact.utilization}
                      </Badge>
                      <Badge variant="outline" className="bg-background">
                        OT: {suggestion.impact.overtime}
                      </Badge>
                    </div>

                    <div className="flex gap-2 mt-3">
                      <Button size="sm" className="flex-1 h-7 text-xs">
                        Apply
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 h-7 text-xs">
                        Simulate
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-sm">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Total Cases</span>
                  <span className="font-semibold text-foreground">18</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Active Rooms</span>
                  <span className="font-semibold text-foreground">5</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Avg Block Use</span>
                  <span className="font-semibold text-success">84.2%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Projected OT</span>
                  <span className="font-semibold text-foreground">45 min</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
