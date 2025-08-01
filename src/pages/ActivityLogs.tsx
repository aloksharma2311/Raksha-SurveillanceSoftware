import { Navigation } from "@/components/Layout/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "@/components/ui/status-badge";
import { 
  Activity, 
  Search, 
  Filter, 
  Download, 
  Calendar, 
  Clock,
  Eye,
  AlertTriangle,
  Users,
  Camera,
  ChevronDown,
  FileText
} from "lucide-react";
import { useState } from "react";

const ActivityLogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const activityLogs = [
    {
      id: "1",
      timestamp: "2024-01-15 14:32:15",
      type: "face_detection",
      event: "Known face detected",
      details: "John Doe detected at Front Door",
      camera: "Front Door",
      confidence: "98%",
      status: "safe",
      alert: false
    },
    {
      id: "2",
      timestamp: "2024-01-15 13:45:22",
      type: "unknown_face",
      event: "Unknown face detected",
      details: "Unidentified person at Back Garden",
      camera: "Back Garden",
      confidence: "N/A",
      status: "warning",
      alert: true
    },
    {
      id: "3",
      timestamp: "2024-01-15 12:20:45",
      type: "motion",
      event: "Motion detected",
      details: "Movement detected in Living Room",
      camera: "Living Room",
      confidence: "N/A",
      status: "warning",
      alert: false
    },
    {
      id: "4",
      timestamp: "2024-01-15 11:15:30",
      type: "face_detection",
      event: "Known face detected",
      details: "Sarah Smith detected at Front Door",
      camera: "Front Door", 
      confidence: "95%",
      status: "safe",
      alert: false
    },
    {
      id: "5",
      timestamp: "2024-01-15 10:45:12",
      type: "system",
      event: "Camera offline",
      details: "Garage camera connection lost",
      camera: "Garage",
      confidence: "N/A",
      status: "offline",
      alert: true
    },
    {
      id: "6",
      timestamp: "2024-01-15 09:30:18",
      type: "motion",
      event: "Motion detected",
      details: "Movement detected in Driveway",
      camera: "Driveway",
      confidence: "N/A",
      status: "warning",
      alert: false
    },
    {
      id: "7",
      timestamp: "2024-01-15 08:15:55",
      type: "face_detection",
      event: "Known face detected",
      details: "Emily Davis detected at Front Door",
      camera: "Front Door",
      confidence: "97%",
      status: "safe",
      alert: false
    },
    {
      id: "8",
      timestamp: "2024-01-15 07:45:33",
      type: "unknown_face",
      event: "Unknown face detected",
      details: "Delivery person at Front Door",
      camera: "Front Door",
      confidence: "N/A",
      status: "warning",
      alert: true
    }
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case "face_detection": return <Users className="h-4 w-4" />;
      case "unknown_face": return <AlertTriangle className="h-4 w-4" />;
      case "motion": return <Activity className="h-4 w-4" />;
      case "system": return <Camera className="h-4 w-4" />;
      default: return <Eye className="h-4 w-4" />;
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "safe": return "safe";
      case "warning": return "warning";
      case "offline": return "offline";
      default: return "safe";
    }
  };

  const filteredLogs = activityLogs.filter(log => {
    const matchesSearch = log.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.camera.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === "all" || log.type === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: activityLogs.length,
    alerts: activityLogs.filter(log => log.alert).length,
    faceDetections: activityLogs.filter(log => log.type === "face_detection").length,
    motionEvents: activityLogs.filter(log => log.type === "motion").length,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Activity Logs</h1>
            <p className="text-muted-foreground mt-1">Monitor all security events and activities</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Date Range
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Logs
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Stats Cards */}
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Events</p>
                    <p className="text-2xl font-bold text-foreground">{stats.total}</p>
                  </div>
                  <Activity className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Alerts</p>
                    <p className="text-2xl font-bold text-foreground">{stats.alerts}</p>
                  </div>
                  <AlertTriangle className="h-8 w-8 text-warning" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Face Detections</p>
                    <p className="text-2xl font-bold text-foreground">{stats.faceDetections}</p>
                  </div>
                  <Users className="h-8 w-8 text-success" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Motion Events</p>
                    <p className="text-2xl font-bold text-foreground">{stats.motionEvents}</p>
                  </div>
                  <Activity className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Activity Timeline
                  </CardTitle>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search logs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <div className="relative">
                      <select 
                        value={selectedFilter}
                        onChange={(e) => setSelectedFilter(e.target.value)}
                        className="appearance-none bg-background border border-input rounded-md px-3 py-2 pr-8 text-sm"
                      >
                        <option value="all">All Events</option>
                        <option value="face_detection">Face Detection</option>
                        <option value="unknown_face">Unknown Faces</option>
                        <option value="motion">Motion</option>
                        <option value="system">System</option>
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {filteredLogs.map((log) => (
                    <div key={log.id} className="p-4 border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                            {getEventIcon(log.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              <p className="text-sm font-medium text-foreground">{log.event}</p>
                              {log.alert && (
                                <StatusBadge variant="warning">Alert</StatusBadge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{log.details}</p>
                            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                              <span className="flex items-center">
                                <Camera className="h-3 w-3 mr-1" />
                                {log.camera}
                              </span>
                              <span className="flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {log.timestamp}
                              </span>
                              {log.confidence !== "N/A" && (
                                <span>Confidence: {log.confidence}</span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <StatusBadge variant={getStatusVariant(log.status)}>
                            {log.status}
                          </StatusBadge>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Export Options */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Export Options
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export as PDF
                </Button>
                <Button className="w-full" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export as CSV
                </Button>
                <Button className="w-full" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Email Report
                </Button>
              </CardContent>
            </Card>

            {/* Quick Filters */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Quick Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  className="w-full justify-start" 
                  variant={selectedFilter === "all" ? "default" : "ghost"}
                  onClick={() => setSelectedFilter("all")}
                >
                  All Events
                </Button>
                <Button 
                  className="w-full justify-start" 
                  variant={selectedFilter === "face_detection" ? "default" : "ghost"}
                  onClick={() => setSelectedFilter("face_detection")}
                >
                  <Users className="h-4 w-4 mr-2" />
                  Face Detections
                </Button>
                <Button 
                  className="w-full justify-start" 
                  variant={selectedFilter === "unknown_face" ? "default" : "ghost"}
                  onClick={() => setSelectedFilter("unknown_face")}
                >
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Unknown Faces
                </Button>
                <Button 
                  className="w-full justify-start" 
                  variant={selectedFilter === "motion" ? "default" : "ghost"}
                  onClick={() => setSelectedFilter("motion")}
                >
                  <Activity className="h-4 w-4 mr-2" />
                  Motion Events
                </Button>
              </CardContent>
            </Card>

            {/* Today's Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Today's Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Face Detections</span>
                  <span className="text-sm font-medium text-success">4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Unknown Faces</span>
                  <span className="text-sm font-medium text-warning">2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Motion Events</span>
                  <span className="text-sm font-medium text-accent">2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">System Alerts</span>
                  <span className="text-sm font-medium text-destructive">1</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityLogs;