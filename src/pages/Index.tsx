import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Eye, Users, Activity, ArrowRight, Camera } from "lucide-react";
import heroImage from "@/assets/surveillance-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-background/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-12 w-12 sm:h-16 sm:w-16 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Raksha
              <span className="block text-primary mt-2">AI Surveillance System</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto px-4">
              Advanced AI-powered home surveillance with face recognition, motion detection, 
              and intelligent alerts. Keep your home secure with cutting-edge technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Link to="/dashboard" className="w-full sm:w-auto">
                <Button size="lg" className="bg-gradient-primary shadow-glow w-full sm:w-auto">
                  <Eye className="mr-2 h-5 w-5" />
                  Enter Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/live-feed" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Camera className="mr-2 h-5 w-5" />
                  View Live Feed
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Intelligent Security Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered surveillance system provides comprehensive security monitoring
              with advanced features designed for modern home protection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center p-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Face Recognition</h3>
              <p className="text-muted-foreground text-sm">
                Identify known and unknown faces with advanced AI technology
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Activity className="h-7 w-7 sm:h-8 sm:w-8 text-warning" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Motion Detection</h3>
              <p className="text-muted-foreground text-sm">
                Intelligent motion tracking with zone-based monitoring
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Camera className="h-7 w-7 sm:h-8 sm:w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Live Monitoring</h3>
              <p className="text-muted-foreground text-sm">
                Real-time camera feeds with multi-camera support
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-destructive/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-7 w-7 sm:h-8 sm:w-8 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Smart Alerts</h3>
              <p className="text-muted-foreground text-sm">
                Instant email notifications for security events
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
