import { Navigation } from "@/components/Layout/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Settings as SettingsIcon, 
  Camera, 
  Bell, 
  Shield, 
  Mail, 
  Database,
  Users,
  Activity,
  Smartphone,
  Save,
  RefreshCw
} from "lucide-react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Settings</h1>
            <p className="text-muted-foreground mt-1">Configure your surveillance system</p>
          </div>
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Save All Changes
          </Button>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="cameras">Cameras</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="integration">Integration</TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <SettingsIcon className="h-5 w-5 mr-2" />
                    System Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="system-name">System Name</Label>
                    <Input id="system-name" placeholder="SecureVision Home" />
                  </div>
                  
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="Home Address" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Auto-Arm System</Label>
                      <p className="text-sm text-muted-foreground">Automatically arm when nobody is home</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Night Mode</Label>
                      <p className="text-sm text-muted-foreground">Enhanced monitoring during night hours</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Privacy Mode</Label>
                      <p className="text-sm text-muted-foreground">Disable indoor cameras when home</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 mr-2" />
                    Performance Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="detection-sensitivity">Detection Sensitivity</Label>
                    <div className="mt-2">
                      <input 
                        type="range" 
                        min="1" 
                        max="10" 
                        defaultValue="7"
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>Low</span>
                        <span>High</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="recording-quality">Recording Quality</Label>
                    <select className="w-full p-2 border border-input rounded-md bg-background mt-2">
                      <option value="720p">720p (Standard)</option>
                      <option value="1080p" selected>1080p (HD)</option>
                      <option value="4k">4K (Ultra HD)</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="storage-retention">Storage Retention</Label>
                    <select className="w-full p-2 border border-input rounded-md bg-background mt-2">
                      <option value="7">7 days</option>
                      <option value="14">14 days</option>
                      <option value="30" selected>30 days</option>
                      <option value="90">90 days</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Cloud Backup</Label>
                      <p className="text-sm text-muted-foreground">Backup recordings to cloud storage</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Camera Settings */}
          <TabsContent value="cameras">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Camera className="h-5 w-5 mr-2" />
                    Camera Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      { name: "Front Door", ip: "192.168.1.101", status: "online" },
                      { name: "Back Garden", ip: "192.168.1.102", status: "online" },
                      { name: "Living Room", ip: "192.168.1.103", status: "online" },
                      { name: "Garage", ip: "192.168.1.104", status: "offline" },
                    ].map((camera, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <Camera className="h-8 w-8 text-primary" />
                          <div>
                            <h3 className="font-semibold text-foreground">{camera.name}</h3>
                            <p className="text-sm text-muted-foreground">{camera.ip}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className={`text-sm ${camera.status === 'online' ? 'text-success' : 'text-destructive'}`}>
                            {camera.status}
                          </span>
                          <Button variant="outline" size="sm">Configure</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <Button>
                      <Camera className="h-4 w-4 mr-2" />
                      Add New Camera
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Notification Settings */}
          <TabsContent value="notifications">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="h-5 w-5 mr-2" />
                    Alert Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Face Detection Alerts</Label>
                      <p className="text-sm text-muted-foreground">Get notified when faces are detected</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Unknown Person Alerts</Label>
                      <p className="text-sm text-muted-foreground">Alert for unrecognized faces</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Motion Detection Alerts</Label>
                      <p className="text-sm text-muted-foreground">Notify on motion detection</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>System Status Alerts</Label>
                      <p className="text-sm text-muted-foreground">Camera offline/online notifications</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div>
                    <Label htmlFor="alert-cooldown">Alert Cooldown Period</Label>
                    <select className="w-full p-2 border border-input rounded-md bg-background mt-2">
                      <option value="0">No cooldown</option>
                      <option value="5">5 minutes</option>
                      <option value="15" selected>15 minutes</option>
                      <option value="30">30 minutes</option>
                    </select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 mr-2" />
                    Email Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="smtp-server">SMTP Server</Label>
                    <Input id="smtp-server" placeholder="smtp.gmail.com" />
                  </div>

                  <div>
                    <Label htmlFor="smtp-port">SMTP Port</Label>
                    <Input id="smtp-port" placeholder="587" />
                  </div>

                  <div>
                    <Label htmlFor="email-username">Email Username</Label>
                    <Input id="email-username" placeholder="your-email@gmail.com" />
                  </div>

                  <div>
                    <Label htmlFor="email-password">Email Password</Label>
                    <Input id="email-password" type="password" placeholder="App password" />
                  </div>

                  <div>
                    <Label htmlFor="recipient-emails">Recipient Emails</Label>
                    <Input id="recipient-emails" placeholder="admin@example.com, security@example.com" />
                  </div>

                  <Button variant="outline" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Test Email Configuration
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Access Control
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="admin-password">Change Admin Password</Label>
                    <Input id="admin-password" type="password" placeholder="Enter new password" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Add extra security to your account</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Session Timeout</Label>
                      <p className="text-sm text-muted-foreground">Auto logout after inactivity</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div>
                    <Label htmlFor="timeout-duration">Timeout Duration</Label>
                    <select className="w-full p-2 border border-input rounded-md bg-background mt-2">
                      <option value="15">15 minutes</option>
                      <option value="30" selected>30 minutes</option>
                      <option value="60">1 hour</option>
                      <option value="120">2 hours</option>
                    </select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Face Recognition
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="recognition-threshold">Recognition Confidence Threshold</Label>
                    <div className="mt-2">
                      <input 
                        type="range" 
                        min="50" 
                        max="99" 
                        defaultValue="85"
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>50%</span>
                        <span>85%</span>
                        <span>99%</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Learning Mode</Label>
                      <p className="text-sm text-muted-foreground">Continuously improve recognition accuracy</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Store Unknown Faces</Label>
                      <p className="text-sm text-muted-foreground">Save images of unrecognized faces</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <Button variant="outline" className="w-full">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Retrain Recognition Model
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Integration Settings */}
          <TabsContent value="integration">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="h-5 w-5 mr-2" />
                    Firebase Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="firebase-config">Firebase Config JSON</Label>
                    <textarea 
                      id="firebase-config"
                      className="w-full p-3 border border-input rounded-md bg-background min-h-[120px] text-sm"
                      placeholder="Paste your Firebase configuration here..."
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Real-time Sync</Label>
                      <p className="text-sm text-muted-foreground">Sync data with Firebase in real-time</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <Button variant="outline" className="w-full">
                    <Database className="h-4 w-4 mr-2" />
                    Test Firebase Connection
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Smartphone className="h-5 w-5 mr-2" />
                    Mobile App Integration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="mobile-api-key">Mobile App API Key</Label>
                    <Input id="mobile-api-key" placeholder="Generated API key for mobile access" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">Send alerts to mobile devices</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Remote Access</Label>
                      <p className="text-sm text-muted-foreground">Allow mobile app remote monitoring</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <Button variant="outline" className="w-full">
                    <Smartphone className="h-4 w-4 mr-2" />
                    Generate New API Key
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;