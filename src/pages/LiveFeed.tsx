import { Navigation } from "@/components/Layout/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CameraFeed } from "@/components/ui/camera-feed";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { 
  Camera, 
  Grid, 
  Maximize, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX,
  Circle,
  Download
} from "lucide-react";
import { useState } from "react";

const LiveFeed = () => {
  const [selectedCamera, setSelectedCamera] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const cameras = [
    { id: "1", title: "Front Door", location: "Main Entrance", status: "online" as const },
    { id: "2", title: "Back Garden", location: "Outdoor Area", status: "motion" as const },
    { id: "3", title: "Living Room", location: "Interior", status: "online" as const },
    { id: "4", title: "Kitchen", location: "Interior", status: "online" as const },
    { id: "5", title: "Garage", location: "Side Entrance", status: "offline" as const },
    { id: "6", title: "Driveway", location: "Outdoor Area", status: "recording" as const },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Live Camera Feed</h1>
            <p className="text-muted-foreground mt-1">Real-time monitoring from all cameras</p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <StatusBadge variant="online">
              <span className="hidden sm:inline">{cameras.filter(c => c.status === "online").length} Cameras Online</span>
              <span className="sm:hidden">{cameras.filter(c => c.status === "online").length} Online</span>
            </StatusBadge>
            <Button 
              variant={isRecording ? "destructive" : "outline"}
              onClick={() => setIsRecording(!isRecording)}
              className="w-full sm:w-auto"
            >
              <Circle className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">{isRecording ? "Stop Recording" : "Start Recording"}</span>
              <span className="sm:hidden">{isRecording ? "Stop" : "Record"}</span>
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Feed */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            {selectedCamera ? (
              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <CardTitle className="flex items-center text-lg">
                      <Camera className="h-5 w-5 mr-2" />
                      <span className="hidden sm:inline">{cameras.find(c => c.id === selectedCamera)?.title} - Full View</span>
                      <span className="sm:hidden">{cameras.find(c => c.id === selectedCamera)?.title}</span>
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" onClick={() => setIsMuted(!isMuted)}>
                        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => setSelectedCamera(null)}>
                        <Grid className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CameraFeed
                    title={cameras.find(c => c.id === selectedCamera)?.title || ""}
                    location={cameras.find(c => c.id === selectedCamera)?.location || ""}
                    status={cameras.find(c => c.id === selectedCamera)?.status || "online"}
                    isFullscreen={true}
                  />
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Grid className="h-5 w-5 mr-2" />
                    All Cameras Grid View
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                    {cameras.map((camera) => (
                      <div 
                        key={camera.id}
                        className="cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => setSelectedCamera(camera.id)}
                      >
                        <CameraFeed
                          title={camera.title}
                          location={camera.location}
                          status={camera.status}
                          showControls={false}
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Camera List & Controls */}
          <div className="order-1 lg:order-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Camera className="h-5 w-5 mr-2" />
                  Camera List
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1 max-h-64 lg:max-h-80 overflow-y-auto">
                  {cameras.map((camera) => (
                    <div 
                      key={camera.id}
                      className={`p-3 sm:p-4 border-b border-border last:border-b-0 hover:bg-muted/50 cursor-pointer transition-colors ${
                        selectedCamera === camera.id ? 'bg-primary/10' : ''
                      }`}
                      onClick={() => setSelectedCamera(selectedCamera === camera.id ? null : camera.id)}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-foreground truncate">{camera.title}</p>
                          <p className="text-xs text-muted-foreground">{camera.location}</p>
                        </div>
                        <StatusBadge variant={camera.status} className="flex-shrink-0">
                          {camera.status}
                        </StatusBadge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Playback Controls */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Playback Controls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Play className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Pause className="h-4 w-4" />
                  </Button>
                </div>
                <Button className="w-full justify-start" variant="outline">
                  <Maximize className="h-4 w-4 mr-2" />
                  Fullscreen Mode
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Recording
                </Button>
              </CardContent>
            </Card>

            {/* Camera Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">System Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Online Cameras</span>
                    <span className="text-sm font-medium text-success">
                      {cameras.filter(c => c.status === "online" || c.status === "recording" || c.status === "motion").length}/{cameras.length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Recording</span>
                    <span className="text-sm font-medium text-destructive">
                      {cameras.filter(c => c.status === "recording").length} active
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Motion Alerts</span>
                    <span className="text-sm font-medium text-warning">
                      {cameras.filter(c => c.status === "motion").length} detected
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveFeed;