import { Navigation } from "@/components/Layout/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CameraFeed } from "@/components/ui/camera-feed";
import { StatusBadge } from "@/components/ui/status-badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Users, 
  Activity, 
  AlertTriangle, 
  Camera, 
  Clock,
  Eye,
  Settings 
} from "lucide-react";

const Dashboard = () => {
  const systemStats = [
    { label: "Active Cameras", value: "4", icon: Camera, status: "online" },
    { label: "Known Faces", value: "12", icon: Users, status: "safe" },
    { label: "Today's Events", value: "23", icon: Activity, status: "safe" },
    { label: "Alerts", value: "2", icon: AlertTriangle, status: "warning" },
  ];

  const recentEvents = [
    { time: "14:32", event: "John Doe detected at Front Door", type: "known", status: "safe" },
    { time: "13:45", event: "Unknown person at Back Garden", type: "unknown", status: "warning" },
    { time: "12:20", event: "Motion detected in Living Room", type: "motion", status: "warning" },
    { time: "11:15", event: "Sarah Smith detected at Front Door", type: "known", status: "safe" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Security Dashboard</h1>
            <p className="text-muted-foreground mt-1">Monitor your home security in real-time</p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <StatusBadge variant="online">
              <Eye className="h-3 w-3 mr-1" />
              <span className="hidden sm:inline">System Online</span>
              <span className="sm:hidden">Online</span>
            </StatusBadge>
            <Button variant="outline" size="sm" className="w-full sm:w-auto">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {systemStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Camera Feeds */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Camera className="h-5 w-5 mr-2" />
                  Live Camera Feeds
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <CameraFeed
                    title="Front Door"
                    location="Main Entrance"
                    status="online"
                    showControls={false}
                  />
                  <CameraFeed
                    title="Back Garden"
                    location="Outdoor Area"
                    status="motion"
                    showControls={false}
                  />
                  <CameraFeed
                    title="Living Room"
                    location="Interior"
                    status="online"
                    showControls={false}
                  />
                  <CameraFeed
                    title="Garage"
                    location="Side Entrance"
                    status="offline"
                    showControls={false}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Content */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Clock className="h-5 w-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1 max-h-64 lg:max-h-80 overflow-y-auto">
                  {recentEvents.map((event, index) => (
                    <div key={index} className="p-3 sm:p-4 border-b border-border last:border-b-0 hover:bg-muted/50">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground">
                            {event.event}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">{event.time}</p>
                        </div>
                        <StatusBadge variant={event.status === "safe" ? "safe" : "warning"} className="self-start">
                          {event.type}
                        </StatusBadge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Shield className="h-5 w-5 mr-2" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Add New Face
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Activity className="h-4 w-4 mr-2" />
                  View All Logs
                </Button>
                <Button className="w-full justify-start bg-gradient-danger">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Emergency Alert
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;