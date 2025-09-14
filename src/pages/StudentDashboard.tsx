import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  FileText, 
  Calendar, 
  TrendingUp, 
  Clock,
  CheckCircle,
  AlertTriangle,
  Award
} from "lucide-react";

const StudentDashboard = () => {
  const stats = [
    { title: "Enrolled Courses", value: "6", icon: BookOpen, color: "text-blue-600" },
    { title: "Pending Assignments", value: "4", icon: Clock, color: "text-orange-600" },
    { title: "Completed Tasks", value: "12", icon: CheckCircle, color: "text-green-600" },
    { title: "Overall Grade", value: "88%", icon: Award, color: "text-purple-600" },
  ];

  const assignments = [
    { 
      id: 1, 
      title: "Mathematical Functions", 
      subject: "Mathematics", 
      dueDate: "2024-01-15", 
      status: "pending",
      progress: 60
    },
    { 
      id: 2, 
      title: "Cell Biology Report", 
      subject: "Biology", 
      dueDate: "2024-01-18", 
      status: "submitted",
      progress: 100
    },
    { 
      id: 3, 
      title: "World War II Essay", 
      subject: "History", 
      dueDate: "2024-01-20", 
      status: "overdue",
      progress: 25
    },
  ];

  const upcomingExams = [
    { id: 1, title: "Algebra Mid-term", date: "2024-01-25", time: "10:00 AM", subject: "Mathematics" },
    { id: 2, title: "Science Quiz", date: "2024-01-28", time: "2:00 PM", subject: "Biology" },
  ];

  const recentGrades = [
    { subject: "Mathematics", assignment: "Calculus Quiz", grade: "92%", date: "2024-01-10" },
    { subject: "Biology", assignment: "Lab Report", grade: "88%", date: "2024-01-08" },
    { subject: "History", assignment: "Timeline Project", grade: "95%", date: "2024-01-05" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "default";
      case "submitted": return "secondary";
      case "pending": return "outline";
      case "overdue": return "destructive";
      default: return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Student Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Alex Johnson</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link to="/assignments">
              <Button className="gap-2">
                <FileText className="h-4 w-4" />
                View Assignments
              </Button>
            </Link>
            <Link to="/grades">
              <Button variant="outline" className="gap-2">
                <TrendingUp className="h-4 w-4" />
                View Grades
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
          {/* Assignments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                My Assignments
              </CardTitle>
              <CardDescription>Track your assignment progress</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {assignments.map((assignment) => (
                <div key={assignment.id} className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold">{assignment.title}</h3>
                      <p className="text-sm text-muted-foreground">{assignment.subject}</p>
                      <p className="text-sm text-muted-foreground">Due: {assignment.dueDate}</p>
                    </div>
                    <Badge variant={getStatusColor(assignment.status)}>
                      {assignment.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{assignment.progress}%</span>
                    </div>
                    <Progress value={assignment.progress} className="h-2" />
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
              <CardDescription>Scheduled examinations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingExams.map((exam) => (
                <div key={exam.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold">{exam.title}</h3>
                    <p className="text-sm text-muted-foreground">{exam.subject}</p>
                    <p className="text-sm text-muted-foreground">{exam.date} at {exam.time}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline">
                      {new Date(exam.date) > new Date() ? "Upcoming" : "Today"}
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

          {/* Recent Grades */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Recent Grades
              </CardTitle>
              <CardDescription>Your latest assignment results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentGrades.map((grade, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">{grade.assignment}</h4>
                      <p className="text-sm text-muted-foreground">{grade.subject}</p>
                      <p className="text-xs text-muted-foreground">{grade.date}</p>
                    </div>
                    <Badge variant="default" className="text-lg px-3 py-1">
                      {grade.grade}
                    </Badge>
                  </div>
                ))}
                <Link to="/grades">
                  <Button variant="outline" className="w-full">
                    View All Grades
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Action Required
              </CardTitle>
              <CardDescription>Tasks that need your attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                  <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Assignment Overdue</p>
                    <p className="text-xs text-muted-foreground">World War II Essay - Submit now</p>
                    <Button size="sm" variant="outline" className="mt-2">
                      Submit Now
                    </Button>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <Clock className="h-4 w-4 text-blue-600 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Exam Tomorrow</p>
                    <p className="text-xs text-muted-foreground">Algebra Mid-term at 10:00 AM</p>
                    <Button size="sm" variant="outline" className="mt-2">
                      Review Material
                    </Button>
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

export default StudentDashboard;