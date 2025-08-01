import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Video, 
  Users, 
  Activity, 
  Settings as SettingsIcon,
  Shield,
  Eye,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { path: "/dashboard", label: "Dashboard", icon: Home },
  { path: "/live-feed", label: "Live Feed", icon: Video },
  { path: "/face-management", label: "Face Management", icon: Users },
  { path: "/activity-logs", label: "Activity Logs", icon: Activity },
  { path: "/settings", label: "Settings", icon: SettingsIcon },
];

export const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground hidden sm:block">SecureVision</span>
              <span className="text-lg font-bold text-foreground sm:hidden">SV</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "border-b-2 border-primary text-primary"
                      : "text-muted-foreground hover:text-foreground hover:border-b-2 hover:border-muted-foreground"
                  )}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  <span className="hidden lg:block">{item.label}</span>
                  <span className="lg:hidden">{item.label.split(' ')[0]}</span>
                </Link>
              );
            })}
          </div>
          
          {/* Status & Mobile Menu Button */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-sm">
              <Eye className="h-4 w-4 text-success" />
              <span className="text-success font-medium hidden lg:block">System Online</span>
              <span className="text-success font-medium lg:hidden">Online</span>
            </div>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-200",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};