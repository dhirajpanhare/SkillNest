import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Eye, EyeOff, User, GraduationCap } from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<"student" | "teacher" | "">("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    // Student specific
    dateOfBirth: "",
    grade: "",
    studentId: "",
    guardianContact: "",
    // Teacher specific
    subject: "",
    employeeId: "",
    experience: "",
  });
  console.log(formData);
  const navigate = useNavigate();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // TODO: Implement actual registration
    console.log("Registration attempt:", { userType, ...formData });
    navigate("/login");
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-primary/5 p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-2xl font-bold text-primary">
            <BookOpen className="h-8 w-8" />
            SkillNest
          </Link>
          <p className="text-muted-foreground mt-2">Join our learning community</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Create Account</CardTitle>
            <CardDescription className="text-center">
              Choose your role and fill in your details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* User Type Selection */}
              <div className="space-y-3">
                <Label>I am a:</Label>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    type="button"
                    variant={userType === "student" ? "default" : "outline"}
                    className="h-20 flex-col gap-2"
                    onClick={() => setUserType("student")}
                  >
                    <GraduationCap className="h-6 w-6" />
                    Student
                  </Button>
                  <Button
                    type="button"
                    variant={userType === "teacher" ? "default" : "outline"}
                    className="h-20 flex-col gap-2"
                    onClick={() => setUserType("teacher")}
                  >
                    <User className="h-6 w-6" />
                    Teacher
                  </Button>
                </div>
              </div>

              {userType && (
                <>
                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create password"
                          value={formData.password}
                          onChange={(e) => handleInputChange("password", e.target.value)}
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>

                  {/* Student Specific Fields */}
                  {userType === "student" && (
                    <div className="space-y-4 border-t pt-4">
                      <h3 className="font-semibold text-lg">Student Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="dateOfBirth">Date of Birth</Label>
                          <Input
                            id="dateOfBirth"
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="grade">Class/Grade</Label>
                          <Select onValueChange={(value) => handleInputChange("grade", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your grade" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="9th">9th Grade</SelectItem>
                              <SelectItem value="10th">10th Grade</SelectItem>
                              <SelectItem value="11th">11th Grade</SelectItem>
                              <SelectItem value="12th">12th Grade</SelectItem>
                              <SelectItem value="college">College Level</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="studentId">Student ID (Optional)</Label>
                          <Input
                            id="studentId"
                            placeholder="Enter your student ID"
                            value={formData.studentId}
                            onChange={(e) => handleInputChange("studentId", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="guardianContact">Guardian Contact (Optional)</Label>
                          <Input
                            id="guardianContact"
                            placeholder="Guardian's phone/email"
                            value={formData.guardianContact}
                            onChange={(e) => handleInputChange("guardianContact", e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Teacher Specific Fields */}
                  {userType === "teacher" && (
                    <div className="space-y-4 border-t pt-4">
                      <h3 className="font-semibold text-lg">Teacher Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject Specialization</Label>
                          <Select onValueChange={(value) => handleInputChange("subject", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mathematics">Mathematics</SelectItem>
                              <SelectItem value="science">Science</SelectItem>
                              <SelectItem value="english">English</SelectItem>
                              <SelectItem value="history">History</SelectItem>
                              <SelectItem value="computer-science">Computer Science</SelectItem>
                              <SelectItem value="physics">Physics</SelectItem>
                              <SelectItem value="chemistry">Chemistry</SelectItem>
                              <SelectItem value="biology">Biology</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="employeeId">Employee ID (Optional)</Label>
                          <Input
                            id="employeeId"
                            placeholder="Enter your employee ID"
                            value={formData.employeeId}
                            onChange={(e) => handleInputChange("employeeId", e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">Teaching Experience (Optional)</Label>
                        <Input
                          id="experience"
                          placeholder="Years of teaching experience"
                          value={formData.experience}
                          onChange={(e) => handleInputChange("experience", e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  <Button type="submit" className="w-full">
                    Create Account
                  </Button>
                </>
              )}
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  );
};

export default Register;