import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { FileText, Calendar, Upload, Plus, X } from "lucide-react";

const CreateAssignment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    subject: "",
    dueDate: "",
    dueTime: "23:59",
    maxScore: 100,
    instructions: "",
    allowLateSubmission: false,
    latePenalty: 10,
  });
  const [attachments, setAttachments] = useState<string[]>([]);
  const [criteria, setCriteria] = useState([{ name: "", points: 0 }]);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addCriteria = () => {
    setCriteria([...criteria, { name: "", points: 0 }]);
  };

  const removeCriteria = (index: number) => {
    setCriteria(criteria.filter((_, i) => i !== index));
  };

  const updateCriteria = (index: number, field: string, value: any) => {
    const updated = criteria.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    );
    setCriteria(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual assignment creation
    console.log("Creating assignment:", { ...formData, criteria, attachments });
    navigate("/teacher-dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container mx-auto p-6 max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="outline" 
            onClick={() => navigate("/teacher-dashboard")}
          >
            ← Back to Dashboard
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Create Assignment</h1>
            <p className="text-muted-foreground">Design a new assignment for your students</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Basic Information
              </CardTitle>
              <CardDescription>
                Set up the fundamental details of your assignment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Assignment Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter assignment title"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select onValueChange={(value) => handleInputChange("subject", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select subject" />
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
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Provide a brief description of the assignment"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="instructions">Detailed Instructions</Label>
                <Textarea
                  id="instructions"
                  placeholder="Provide detailed instructions for students"
                  value={formData.instructions}
                  onChange={(e) => handleInputChange("instructions", e.target.value)}
                  rows={5}
                />
              </div>
            </CardContent>
          </Card>

          {/* Deadline and Scoring */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Deadline & Scoring
              </CardTitle>
              <CardDescription>
                Configure submission deadlines and grading criteria
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="dueDate">Due Date</Label>
                  <Input
                    id="dueDate"
                    type="date"
                    value={formData.dueDate}
                    onChange={(e) => handleInputChange("dueDate", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dueTime">Due Time</Label>
                  <Input
                    id="dueTime"
                    type="time"
                    value={formData.dueTime}
                    onChange={(e) => handleInputChange("dueTime", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxScore">Maximum Score</Label>
                  <Input
                    id="maxScore"
                    type="number"
                    min="1"
                    placeholder="100"
                    value={formData.maxScore}
                    onChange={(e) => handleInputChange("maxScore", parseInt(e.target.value))}
                  />
                </div>
              </div>

              {/* Late Submission Settings */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Allow Late Submissions</Label>
                    <p className="text-sm text-muted-foreground">
                      Students can submit after the deadline with penalty
                    </p>
                  </div>
                  <Switch
                    checked={formData.allowLateSubmission}
                    onCheckedChange={(checked) => handleInputChange("allowLateSubmission", checked)}
                  />
                </div>
                {formData.allowLateSubmission && (
                  <div className="space-y-2">
                    <Label htmlFor="latePenalty">Late Penalty (%)</Label>
                    <Input
                      id="latePenalty"
                      type="number"
                      min="0"
                      max="100"
                      placeholder="10"
                      value={formData.latePenalty}
                      onChange={(e) => handleInputChange("latePenalty", parseInt(e.target.value))}
                    />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Grading Criteria */}
          <Card>
            <CardHeader>
              <CardTitle>Grading Criteria</CardTitle>
              <CardDescription>
                Define specific criteria for evaluating submissions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {criteria.map((criterion, index) => (
                <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Criteria name (e.g., Content Quality)"
                      value={criterion.name}
                      onChange={(e) => updateCriteria(index, "name", e.target.value)}
                    />
                    <Input
                      type="number"
                      min="0"
                      placeholder="Points"
                      value={criterion.points}
                      onChange={(e) => updateCriteria(index, "points", parseInt(e.target.value) || 0)}
                    />
                  </div>
                  {criteria.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeCriteria(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={addCriteria}
                className="w-full"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Criteria
              </Button>
            </CardContent>
          </Card>

          {/* Attachments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Attachments
              </CardTitle>
              <CardDescription>
                Upload reference materials, templates, or resources
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-2">
                  Drag and drop files here or click to browse
                </p>
                <Button variant="outline" type="button">
                  Choose Files
                </Button>
              </div>
              {attachments.length > 0 && (
                <div className="space-y-2">
                  <Label>Attached Files:</Label>
                  {attachments.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-secondary rounded">
                      <span className="text-sm">{file}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setAttachments(attachments.filter((_, i) => i !== index))}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/teacher-dashboard")}
            >
              Cancel
            </Button>
            <Button type="button" variant="secondary">
              Save as Draft
            </Button>
            <Button type="submit">
              Create Assignment
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAssignment;