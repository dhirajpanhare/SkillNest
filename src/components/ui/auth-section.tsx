import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AuthSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Role
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join SkillNest today and start your educational journey. Select your role to get started with features tailored for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Teacher Card */}
          <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 transform hover:scale-105 bg-gradient-card group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
            <CardHeader className="text-center relative z-10">
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="h-10 w-10" />
              </div>
              <Badge variant="secondary" className="w-fit mx-auto mb-2">Popular</Badge>
              <CardTitle className="text-2xl text-gradient-primary">Teacher</CardTitle>
              <CardDescription className="text-base">
                Create courses, assign tasks, conduct exams, and track student progress
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Create & assign tasks
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Conduct online exams
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Evaluate student progress
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Analytics dashboard
                </div>
              </div>
            <Link to="/register">  <Button className="w-full mt-6 bg-primary hover:bg-primary-hover" size="lg">
                Register as Teacher
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button></Link>
            </CardContent>
          </Card>

          {/* Student Card */}
          <Card className="relative overflow-hidden border-2 hover:border-secondary/50 transition-all duration-300 transform hover:scale-105 bg-gradient-card group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-16 translate-x-16"></div>
            <CardHeader className="text-center relative z-10">
              <div className="mx-auto w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary/20 transition-colors">
                <GraduationCap className="h-10 w-10" />
              </div>
              <Badge variant="outline" className="w-fit mx-auto mb-2 border-secondary text-secondary">Free</Badge>
              <CardTitle className="text-2xl text-gradient-secondary">Student</CardTitle>
              <CardDescription className="text-base">
                Access courses, submit assignments, take exams, and track your academic progress
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Submit assignments
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Take online exams
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  View grades & feedback
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Progress tracking
                </div>
              </div>
           <Link to="/register">   <Button className="w-full mt-6 bg-secondary hover:bg-secondary-hover" size="lg">
                Register as Student
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button></Link>
            </CardContent>
          </Card>

          {/* Admin Card */}
          <Card className="relative overflow-hidden border-2 hover:border-accent/50 transition-all duration-300 transform hover:scale-105 bg-gradient-card group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-16 translate-x-16"></div>
            <CardHeader className="text-center relative z-10">
              <div className="mx-auto w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-4 group-hover:bg-accent/20 transition-colors">
                <Shield className="h-10 w-10" />
              </div>
              <Badge className="w-fit mx-auto mb-2 bg-accent text-accent-foreground">Premium</Badge>
              <CardTitle className="text-2xl text-gradient-accent">Administrator</CardTitle>
              <CardDescription className="text-base">
                Manage users, monitor system, access analytics, and oversee platform operations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  User management
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  System monitoring
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Advanced analytics
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Platform oversight
                </div>
              </div>
              <Button className="w-full mt-6 bg-accent hover:bg-accent-hover text-accent-foreground" size="lg">
                Request Admin Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Already have an account?</p>
         <Link to="/login"> <Button variant="outline" size="lg" className="px-8">
            Sign In to Your Account
          </Button></Link>
        </div>
      </div>
    </section>
  );
};

export default AuthSection;