import { BookOpen, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">SkillNest</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Empowering educators and students with a comprehensive learning management system for the digital age.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-background/80 hover:text-background transition-colors">Features</a></li>
              <li><a href="#about" className="text-background/80 hover:text-background transition-colors">About Us</a></li>
              <li><a href="#pricing" className="text-background/80 hover:text-background transition-colors">Pricing</a></li>
              <li><a href="#support" className="text-background/80 hover:text-background transition-colors">Support</a></li>
            </ul>
          </div>

          {/* For Users */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Users</h3>
            <ul className="space-y-2">
              <li><a href="#teachers" className="text-background/80 hover:text-background transition-colors">Teachers</a></li>
              <li><a href="#students" className="text-background/80 hover:text-background transition-colors">Students</a></li>
              <li><a href="#admins" className="text-background/80 hover:text-background transition-colors">Administrators</a></li>
              <li><a href="#resources" className="text-background/80 hover:text-background transition-colors">Resources</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-background/60" />
                <span className="text-background/80">support@skillnest.edu</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-background/60" />
                <span className="text-background/80">+91 9303019119</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-background/60" />
                <span className="text-background/80">Indore</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">
            © 2024 SkillNest. All rights reserved. Built with ❤️ for education.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;