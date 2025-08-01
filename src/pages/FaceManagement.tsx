import { Navigation } from "@/components/Layout/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Upload, 
  Eye,
  Shield,
  Clock,
  UserCheck
} from "lucide-react";
import { useState } from "react";

const FaceManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const whitelistedFaces = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "Owner",
      lastSeen: "2 hours ago",
      detectionCount: 156,
      status: "active",
      avatar: "JD"
    },
    {
      id: "2", 
      name: "Sarah Smith",
      email: "sarah@example.com",
      role: "Family",
      lastSeen: "1 day ago",
      detectionCount: 89,
      status: "active",
      avatar: "SS"
    },
    {
      id: "3",
      name: "Mike Johnson", 
      email: "mike@example.com",
      role: "Guest",
      lastSeen: "3 days ago",
      detectionCount: 12,
      status: "inactive",
      avatar: "MJ"
    },
    {
      id: "4",
      name: "Emily Davis",
      email: "emily@example.com", 
      role: "Family",
      lastSeen: "5 hours ago",
      detectionCount: 203,
      status: "active",
      avatar: "ED"
    }
  ];

  const recentDetections = [
    { name: "John Doe", location: "Front Door", time: "2:30 PM", confidence: "98%" },
    { name: "Unknown Person", location: "Back Garden", time: "1:45 PM", confidence: "N/A" },
    { name: "Sarah Smith", location: "Front Door", time: "12:20 PM", confidence: "95%" },
    { name: "Emily Davis", location: "Living Room", time: "11:15 AM", confidence: "97%" },
  ];

  const filteredFaces = whitelistedFaces.filter(face =>
    face.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    face.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Face Management</h1>
            <p className="text-muted-foreground mt-1">Manage whitelisted faces and recognition settings</p>
          </div>
          <Button onClick={() => setShowAddForm(!showAddForm)}>
            <Plus className="h-4 w-4 mr-2" />
            Add New Face
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Add Face Form */}
            {showAddForm && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Plus className="h-5 w-5 mr-2" />
                    Add New Whitelisted Face
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter full name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter email" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="role">Role</Label>
                    <select className="w-full p-2 border border-input rounded-md bg-background">
                      <option value="family">Family Member</option>
                      <option value="guest">Guest</option>
                      <option value="service">Service Provider</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <Label>Face Image</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                      <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">Click to upload or drag and drop</p>
                      <p className="text-xs text-muted-foreground mt-2">PNG, JPG up to 10MB</p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <Button>Save Face</Button>
                    <Button variant="outline" onClick={() => setShowAddForm(false)}>Cancel</Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Search and Filter */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Whitelisted Faces ({filteredFaces.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search faces by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <div className="space-y-4">
                  {filteredFaces.map((face) => (
                    <div key={face.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={`/placeholder-${face.id}.jpg`} alt={face.name} />
                          <AvatarFallback className="bg-primary/10 text-primary">{face.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-foreground">{face.name}</h3>
                          <p className="text-sm text-muted-foreground">{face.email}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant={face.status === "active" ? "default" : "secondary"}>
                              {face.role}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {face.detectionCount} detections
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-right mr-4">
                          <p className="text-sm font-medium text-foreground">Last seen</p>
                          <p className="text-xs text-muted-foreground">{face.lastSeen}</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Statistics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Recognition Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Total Faces</span>
                  <span className="text-sm font-medium">{whitelistedFaces.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Active</span>
                  <span className="text-sm font-medium text-success">
                    {whitelistedFaces.filter(f => f.status === "active").length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Total Detections</span>
                  <span className="text-sm font-medium">
                    {whitelistedFaces.reduce((sum, f) => sum + f.detectionCount, 0)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Accuracy Rate</span>
                  <span className="text-sm font-medium text-success">96.5%</span>
                </div>
              </CardContent>
            </Card>

            {/* Recent Detections */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Recent Detections
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {recentDetections.map((detection, index) => (
                    <div key={index} className="p-4 border-b border-border last:border-b-0">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-foreground">{detection.name}</p>
                          <p className="text-xs text-muted-foreground">{detection.location}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">{detection.time}</p>
                          <p className="text-xs text-success">{detection.confidence}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <UserCheck className="h-5 w-5 mr-2" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Bulk Import
                </Button>
                <Button className="w-full" variant="outline">
                  <Shield className="h-4 w-4 mr-2" />
                  Recognition Settings
                </Button>
                <Button className="w-full" variant="outline">
                  <Eye className="h-4 w-4 mr-2" />
                  Training Status
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaceManagement;