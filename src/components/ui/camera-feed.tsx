import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { StatusBadge } from "@/components/ui/status-badge";
import { Button } from "@/components/ui/button";
import { Camera, Settings, Play, Pause, Maximize } from "lucide-react";
import { cn } from "@/lib/utils";

interface CameraFeedProps {
  title: string;
  location: string;
  status: "online" | "offline" | "recording" | "motion";
  className?: string;
  showControls?: boolean;
  isFullscreen?: boolean;
}

export function CameraFeed({ 
  title, 
  location, 
  status, 
  className, 
  showControls = true,
  isFullscreen = false 
}: CameraFeedProps) {
  const [isPlaying, setIsPlaying] = React.useState(true);

  const getStatusText = (status: string) => {
    switch (status) {
      case "online": return "Live";
      case "offline": return "Offline";
      case "recording": return "Recording";
      case "motion": return "Motion Detected";
      default: return "Unknown";
    }
  };

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-0">
        <div className="relative">
          {/* Video Feed Area */}
          <div className={cn(
            "bg-black flex items-center justify-center relative",
            isFullscreen ? "h-96" : "h-48"
          )}>
            {status === "offline" ? (
              <div className="text-muted-foreground text-center">
                <Camera className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>Camera Offline</p>
              </div>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <Camera className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-primary text-sm">Live Feed Simulation</p>
                  <div className="mt-2 w-2 h-2 bg-success rounded-full mx-auto animate-pulse"></div>
                </div>
              </div>
            )}
            
            {/* Status Badge Overlay */}
            <div className="absolute top-2 left-2">
              <StatusBadge variant={status}>
                {getStatusText(status)}
              </StatusBadge>
            </div>
            
            {/* Recording Indicator */}
            {status === "recording" && (
              <div className="absolute top-2 right-2">
                <div className="flex items-center space-x-1 bg-destructive/20 backdrop-blur-sm rounded px-2 py-1">
                  <div className="w-2 h-2 bg-destructive rounded-full animate-pulse"></div>
                  <span className="text-destructive text-xs font-medium">REC</span>
                </div>
              </div>
            )}
          </div>
          
          {/* Camera Info */}
          <div className="p-3 bg-card">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-sm text-foreground">{title}</h3>
                <p className="text-xs text-muted-foreground">{location}</p>
              </div>
              
              {showControls && (
                <div className="flex space-x-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsPlaying(!isPlaying)}
                    disabled={status === "offline"}
                  >
                    {isPlaying ? (
                      <Pause className="h-3 w-3" />
                    ) : (
                      <Play className="h-3 w-3" />
                    )}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Maximize className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Settings className="h-3 w-3" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}