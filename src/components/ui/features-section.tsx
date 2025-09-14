import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  ClipboardList, 
  BarChart3, 
  FileText, 
  GraduationCap, 
  PieChart,
  Users,
  Shield,
  Brain
} from "lucide-react";

const FeaturesSection = () => {
  const teacherFeatures = [
    {
      icon: <ClipboardList className="h-8 w-8" />,
      title: "Create & Assign Tasks",
      description: "Design custom assignments and distribute them to students with due dates and instructions."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Conduct Exams",
      description: "Create online assessments with various question types and automated grading systems."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Evaluate Progress",
      description: "Track student performance with detailed analytics and progress reports."
    }
  ];

  const studentFeatures = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Submit Assignments",
      description: "Upload and submit homework, projects, and assignments directly through the platform."
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Take Exams",
      description: "Complete online assessments with intuitive interface and instant feedback."
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: "View Grades",
      description: "Monitor your academic progress with detailed grade reports and performance insights."
    }
  ];

  const adminFeatures = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "User Management",
      description: "Manage teacher and student accounts with comprehensive administrative controls."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "System Monitoring",
      description: "Monitor platform performance and usage with real-time system analytics."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics Dashboard",
      description: "Comprehensive insights into platform usage, performance metrics, and trends."
    }
  ];

  return (
    <section className="py-20 bg-muted/50" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
            Powerful Features for Everyone
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SkillNest provides comprehensive tools for teachers, students, and administrators to create an optimal learning environment.
          </p>
        </div>

        <div className="space-y-16">
          {/* Teacher Features */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <Badge variant="secondary" className="px-6 py-2 text-lg font-semibold">
                <Users className="mr-2 h-5 w-5" />
                For Teachers
              </Badge>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {teacherFeatures.map((feature, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 transform hover:scale-105 bg-gradient-card">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Student Features */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <Badge variant="outline" className="px-6 py-2 text-lg font-semibold border-secondary text-secondary">
                <GraduationCap className="mr-2 h-5 w-5" />
                For Students
              </Badge>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {studentFeatures.map((feature, index) => (
                <Card key={index} className="border-2 hover:border-secondary/50 transition-all duration-300 transform hover:scale-105 bg-gradient-card">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Admin Features */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <Badge className="px-6 py-2 text-lg font-semibold bg-accent text-accent-foreground">
                <Shield className="mr-2 h-5 w-5" />
                For Administrators
              </Badge>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {adminFeatures.map((feature, index) => (
                <Card key={index} className="border-2 hover:border-accent/50 transition-all duration-300 transform hover:scale-105 bg-gradient-card">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Security Badge */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 bg-primary/10 rounded-full">
            <Shield className="mr-3 h-6 w-6 text-primary" />
            <span className="text-lg font-semibold text-primary">
              Enterprise-Grade Security • Role-Based Access • Data Encryption
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;