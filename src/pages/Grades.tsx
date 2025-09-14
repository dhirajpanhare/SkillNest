import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { TrendingUp, Award, BookOpen, Calendar, Download, Filter } from "lucide-react";

const Grades = () => {
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedTerm, setSelectedTerm] = useState("current");

  const gradeData = [
    {
      id: 1,
      subject: "Mathematics",
      assignment: "Algebra Test",
      type: "exam",
      grade: "92%",
      score: 92,
      maxScore: 100,
      date: "2024-01-15",
      feedback: "Excellent work on complex equations. Minor calculation error in question 7.",
    },
    {
      id: 2,
      subject: "Biology",
      assignment: "Cell Structure Lab Report",
      type: "assignment",
      grade: "88%",
      score: 44,
      maxScore: 50,
      date: "2024-01-12",
      feedback: "Great observation skills. Include more detailed analysis of cellular components.",
    },
    {
      id: 3,
      subject: "History",
      assignment: "World War II Timeline",
      type: "project",
      grade: "95%",
      score: 95,
      maxScore: 100,
      date: "2024-01-10",
      feedback: "Outstanding research and presentation. Very comprehensive timeline.",
    },
    {
      id: 4,
      subject: "English",
      assignment: "Shakespeare Essay",
      type: "assignment",
      grade: "85%",
      score: 85,
      maxScore: 100,
      date: "2024-01-08",
      feedback: "Good analysis of themes. Work on paragraph transitions and citations.",
    },
    {
      id: 5,
      subject: "Mathematics",
      assignment: "Geometry Quiz",
      type: "quiz",
      grade: "78%",
      score: 78,
      maxScore: 100,
      date: "2024-01-05",
      feedback: "Review angle relationships. Practice more geometric proofs.",
    },
  ];

  const subjectStats = [
    { subject: "Mathematics", average: 85, grade: "B+", assignments: 8, color: "text-blue-600" },
    { subject: "Biology", average: 91, grade: "A-", assignments: 6, color: "text-green-600" },
    { subject: "History", average: 94, grade: "A", assignments: 5, color: "text-purple-600" },
    { subject: "English", average: 87, grade: "B+", assignments: 7, color: "text-orange-600" },
  ];

  const overallStats = {
    gpa: 3.7,
    totalAssignments: 26,
    averageGrade: 89,
    rank: 15,
    totalStudents: 120,
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "exam": return "default";
      case "assignment": return "secondary";
      case "project": return "outline";
      case "quiz": return "destructive";
      default: return "outline";
    }
  };

  const filteredGrades = gradeData.filter(grade => 
    selectedSubject === "all" || grade.subject.toLowerCase() === selectedSubject
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">My Grades</h1>
            <p className="text-muted-foreground">Track your academic performance and progress</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Overall GPA</p>
                  <p className="text-2xl font-bold">{overallStats.gpa}</p>
                </div>
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Average Grade</p>
                  <p className="text-2xl font-bold">{overallStats.averageGrade}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Assignments</p>
                  <p className="text-2xl font-bold">{overallStats.totalAssignments}</p>
                </div>
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Class Rank</p>
                  <p className="text-2xl font-bold">{overallStats.rank}/{overallStats.totalStudents}</p>
                </div>
                <Award className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Grade List */}
          <div className="xl:col-span-2 space-y-6">
            {/* Filters */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-4">
                  <div className="flex-1 min-w-[200px]">
                    <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                      <SelectTrigger>
                        <SelectValue placeholder="Filter by subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Subjects</SelectItem>
                        <SelectItem value="mathematics">Mathematics</SelectItem>
                        <SelectItem value="biology">Biology</SelectItem>
                        <SelectItem value="history">History</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-1 min-w-[200px]">
                    <Select value={selectedTerm} onValueChange={setSelectedTerm}>
                      <SelectTrigger>
                        <SelectValue placeholder="Filter by term" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="current">Current Term</SelectItem>
                        <SelectItem value="previous">Previous Term</SelectItem>
                        <SelectItem value="all">All Terms</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Grades List */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Grades</CardTitle>
                <CardDescription>Your latest assignment and exam results</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {filteredGrades.map((grade) => (
                  <div key={grade.id} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold">{grade.assignment}</h3>
                        <p className="text-sm text-muted-foreground">{grade.subject}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {grade.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={getTypeColor(grade.type)}>
                          {grade.type}
                        </Badge>
                        <Badge variant="default" className="text-lg px-3 py-1">
                          {grade.grade}
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Score: {grade.score}/{grade.maxScore}</span>
                        <span>{Math.round((grade.score / grade.maxScore) * 100)}%</span>
                      </div>
                      <Progress value={(grade.score / grade.maxScore) * 100} className="h-2" />
                    </div>
                    {grade.feedback && (
                      <div className="bg-secondary/50 p-3 rounded-md">
                        <p className="text-sm font-medium mb-1">Teacher Feedback:</p>
                        <p className="text-sm text-muted-foreground">{grade.feedback}</p>
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Subject Performance */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Subject Performance</CardTitle>
                <CardDescription>Your performance across different subjects</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {subjectStats.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{stat.subject}</span>
                      <Badge variant="outline">{stat.grade}</Badge>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{stat.average}% average</span>
                      <span>{stat.assignments} assignments</span>
                    </div>
                    <Progress value={stat.average} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Trends</CardTitle>
                <CardDescription>Your progress over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">This Month</span>
                    <span className="text-sm font-medium text-green-600">+5% improvement</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Last Month</span>
                    <span className="text-sm font-medium">87% average</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Best Subject</span>
                    <span className="text-sm font-medium">History (94%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Focus Area</span>
                    <span className="text-sm font-medium">Mathematics</span>
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

export default Grades;