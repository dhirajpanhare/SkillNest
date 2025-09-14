import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, Trophy, Shield } from "lucide-react";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-xl animate-bounce-subtle"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-xl animate-bounce-subtle" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center text-white">
          {/* Main Hero Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Welcome to{" "}
              <span className="text-gradient-accent block mt-2">SkillNest</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Empowering educators and students with a comprehensive learning management system. 
              Create, learn, and grow together in our digital classroom.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
            <Link to="/register"><Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary bg-white/90 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Users className="mr-2 h-5 w-5" />
              Get Started as Teacher
            </Button></Link>
          <Link to="/register">  <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white bg-white   text-primary px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Join as Student
            </Button></Link>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Trophy className="h-12 w-12 mb-4 mx-auto text-accent" />
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-white/80">Monitor student performance and achievement with comprehensive analytics and reporting tools.</p>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <BookOpen className="h-12 w-12 mb-4 mx-auto text-secondary" />
              <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
              <p className="text-white/80">Engage students with interactive assignments, quizzes, and multimedia content delivery.</p>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <Shield className="h-12 w-12 mb-4 mx-auto text-warning" />
              <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
              <p className="text-white/80">Enterprise-grade security with role-based access control and data encryption.</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;