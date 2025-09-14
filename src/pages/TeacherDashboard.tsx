import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Users, 
  FileText, 
  Calendar, 
  TrendingUp, 
  Plus,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const TeacherDashboard = () => {
  const stats = [
    { title: "Total Students", value: "124", icon: Users, color: "text-blue-600" },
    { title: "Active Assignments", value: "8", icon: FileText, color: "text-green-600" },
    { title: "Pending Reviews", value: "15", icon: Clock, color: "text-orange-600" },
    { title: "Completed Exams", value: "3", icon: CheckCircle, color: "text-purple-600" },
  ];

  const recentAssignments = [
    { id: 1, title: "Mathematical Functions", subject: "Mathematics", dueDate: "2024-01-15", submissions: 45, total: 50 },
    { id: 2, title: "Cell Biology Report", subject: "Biology", dueDate: "2024-01-18", submissions: 38, total: 48 },
    { id: 3, title: "World War II Essay", subject: "History", dueDate: "2024-01-20", submissions: 42, total: 52 },
  ];

  const upcomingExams = [
    { id: 1, title: "Algebra Mid-term", date: "2024-01-25", time: "10:00 AM", students: 50 },
    { id: 2, title: "Science Quiz", date: "2024-01-28", time: "2:00 PM", students: 48 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Teacher Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Prof. Johnson</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link to="/create-assignment">
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                New Assignment
              </Button>
            </Link>
            <Link to="/create-exam">
              <Button variant="outline" className="gap-2">
                <Calendar className="h-4 w-4" />
                Create Exam
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
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Assignments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Recent Assignments
              </CardTitle>
              <CardDescription>Track assignment progress and submissions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentAssignments.map((assignment) => (
                <div key={assignment.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold">{assignment.title}</h3>
                    <p className="text-sm text-muted-foreground">{assignment.subject}</p>
                    <p className="text-sm text-muted-foreground">Due: {assignment.dueDate}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant={assignment.submissions === assignment.total ? "default" : "secondary"}>
                      {assignment.submissions}/{assignment.total}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">Submissions</p>
                  </div>
                </div>
              ))}
              <Link to="/assignments">
                <Button variant="outline" className="w-full">
                  View All Assignments
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Upcoming Exams */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Exams
              </CardTitle>
              <CardDescription>Scheduled examinations and assessments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingExams.map((exam) => (
                <div key={exam.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold">{exam.title}</h3>
                    <p className="text-sm text-muted-foreground">{exam.date} at {exam.time}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline">
                      {exam.students} Students
                    </Badge>
                  </div>
                </div>
              ))}
              <Link to="/exams">
                <Button variant="outline" className="w-full">
                  View All Exams
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Performance Analytics
              </CardTitle>
              <CardDescription>Student progress overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Average Grade</span>
                  <Badge variant="default">85%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Submission Rate</span>
                  <Badge variant="secondary">92%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Active Students</span>
                  <Badge variant="outline">118/124</Badge>
                </div>
                <Link to="/analytics">
                  <Button variant="outline" className="w-full">
                    View Detailed Analytics
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Recent Notifications
              </CardTitle>
              <CardDescription>Important updates and alerts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">New submission received</p>
                    <p className="text-xs text-muted-foreground">Sarah completed the Math assignment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Assignment deadline approaching</p>
                    <p className="text-xs text-muted-foreground">Biology report due in 2 days</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Exam scheduled</p>
                    <p className="text-xs text-muted-foreground">Algebra mid-term created successfully</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;