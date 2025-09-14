import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  TrendingUp, 
  Shield,
  Settings,
  BarChart3,
  UserPlus,
  AlertCircle,
  CheckCircle
} from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    { title: "Total Users", value: "1,284", icon: Users, color: "text-blue-600", change: "+12%" },
    { title: "Teachers", value: "45", icon: GraduationCap, color: "text-green-600", change: "+3%" },
    { title: "Students", value: "1,239", icon: BookOpen, color: "text-purple-600", change: "+15%" },
    { title: "Active Courses", value: "28", icon: TrendingUp, color: "text-orange-600", change: "+5%" },
  ];

  const recentUsers = [
    { name: "Dr. Sarah Johnson", email: "sarah.j@school.edu", role: "Teacher", status: "active", joinDate: "2024-01-10" },
    { name: "Michael Chen", email: "m.chen@student.edu", role: "Student", status: "active", joinDate: "2024-01-09" },
    { name: "Prof. David Wilson", email: "d.wilson@school.edu", role: "Teacher", status: "pending", joinDate: "2024-01-08" },
    { name: "Emma Davis", email: "e.davis@student.edu", role: "Student", status: "active", joinDate: "2024-01-07" },
  ];

  const systemAlerts = [
    { type: "warning", message: "Server maintenance scheduled for tonight", time: "2 hours ago" },
    { type: "info", message: "New feature update deployed successfully", time: "1 day ago" },
    { type: "error", message: "Database backup completed with warnings", time: "2 days ago" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "default";
      case "pending": return "secondary";
      case "inactive": return "destructive";
      default: return "outline";
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "warning": return <AlertCircle className="h-4 w-4 text-orange-500" />;
      case "error": return <AlertCircle className="h-4 w-4 text-red-500" />;
      case "info": return <CheckCircle className="h-4 w-4 text-blue-500" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">System overview and management</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link to="/admin/users">
              <Button className="gap-2">
                <UserPlus className="h-4 w-4" />
                Manage Users
              </Button>
            </Link>
            <Link to="/admin/settings">
              <Button variant="outline" className="gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-green-600 font-medium">{stat.change} from last month</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Recent Users */}
          <Card className="xl:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Recent User Registrations
              </CardTitle>
              <CardDescription>Latest users who joined the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentUsers.map((user, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold">{user.name}</h3>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                      <p className="text-xs text-muted-foreground">Joined: {user.joinDate}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{user.role}</Badge>
                      <Badge variant={getStatusColor(user.status)}>
                        {user.status}
                      </Badge>
                    </div>
                  </div>
                ))}
                <Link to="/admin/users">
                  <Button variant="outline" className="w-full">
                    View All Users
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* System Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                System Alerts
              </CardTitle>
              <CardDescription>Important system notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {systemAlerts.map((alert, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
                    {getAlertIcon(alert.type)}
                    <div className="flex-1">
                      <p className="text-sm font-medium">{alert.message}</p>
                      <p className="text-xs text-muted-foreground">{alert.time}</p>
                    </div>
                  </div>
                ))}
                <Link to="/admin/alerts">
                  <Button variant="outline" className="w-full">
                    View All Alerts
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                System Management
              </CardTitle>
              <CardDescription>Quick administrative actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Link to="/admin/users" className="block">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Users className="h-4 w-4" />
                    User Management
                  </Button>
                </Link>
                <Link to="/admin/courses" className="block">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <BookOpen className="h-4 w-4" />
                    Course Management
                  </Button>
                </Link>
                <Link to="/admin/analytics" className="block">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <BarChart3 className="h-4 w-4" />
                    System Analytics
                  </Button>
                </Link>
                <Link to="/admin/settings" className="block">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Settings className="h-4 w-4" />
                    System Settings
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Platform Analytics */}
          <Card className="xl:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Platform Analytics
              </CardTitle>
              <CardDescription>Key performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold">User Activity</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Daily Active Users</span>
                      <span className="text-sm font-medium">892</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Weekly Active Users</span>
                      <span className="text-sm font-medium">1,156</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Monthly Active Users</span>
                      <span className="text-sm font-medium">1,284</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Platform Usage</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Assignments Created</span>
                      <span className="text-sm font-medium">156</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Exams Conducted</span>
                      <span className="text-sm font-medium">28</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Submissions</span>
                      <span className="text-sm font-medium">2,341</span>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/admin/analytics">
                <Button variant="outline" className="w-full mt-4">
                  View Detailed Analytics
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;