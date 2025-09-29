import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github, Award } from "lucide-react";

type ExecutiveMember = {
  name: string;
  position: string;
  year: string;
  branch: string;
  email: string;
  linkedin?: string;
  achievements: string[];
  photo?: string;
};

type Coordinator = {
  name: string;
  position: string;
  department: string;
  email: string;
  expertise?: string;
  photo?: string;
};

type Committee = {
  name: string;
  focus: string;
  members: string[];
};

type TeamData = {
  year?: string;
  executiveBoard: ExecutiveMember[];
  coordinators: Coordinator[];
  committees: Committee[];
};

const fallbackData: TeamData = {
  executiveBoard: [
    {
      name: "Arjun Sharma",
      position: "Chairperson",
      year: "Final Year",
      branch: "Electronics & Communication",
      email: "arjun.sharma@smvitm.ac.in",
      linkedin: "linkedin.com/in/arjunsharma",
      achievements: ["Best Student Leader 2024", "IEEE Young Professional Award"]
    },
    {
      name: "Priya Nair",
      position: "Vice Chairperson",
      year: "Third Year",
      branch: "Computer Science",
      email: "priya.nair@smvitm.ac.in",
      linkedin: "linkedin.com/in/priyanair",
      achievements: ["Google Code-in Mentor", "IEEE WIE Volunteer"]
    },
    {
      name: "Rahul Kumar",
      position: "Secretary",
      year: "Third Year",
      branch: "Electrical & Electronics",
      email: "rahul.kumar@smvitm.ac.in",
      linkedin: "linkedin.com/in/rahulkumar",
      achievements: ["IEEE Student Paper Competition Winner"]
    },
    {
      name: "Sneha Reddy",
      position: "Treasurer",
      year: "Second Year",
      branch: "Electronics & Communication",
      email: "sneha.reddy@smvitm.ac.in",
      linkedin: "linkedin.com/in/snehareddy",
      achievements: ["Outstanding Volunteer Award"]
    }
  ],
  coordinators: [
    {
      name: "Dr. Rajesh Patil",
      position: "Faculty Advisor",
      department: "ECE Department",
      email: "rajesh.patil@smvitm.ac.in",
      expertise: "Signal Processing, IoT"
    },
    {
      name: "Prof. Sunitha Rao",
      position: "Faculty Coordinator",
      department: "CSE Department", 
      email: "sunitha.rao@smvitm.ac.in",
      expertise: "Machine Learning, AI"
    },
    {
      name: "Dr. Mohan Krishna",
      position: "Research Coordinator",
      department: "EEE Department",
      email: "mohan.krishna@smvitm.ac.in",
      expertise: "Power Systems, Renewable Energy"
    }
  ],
  committees: [
    {
      name: "Technical Committee",
      members: ["Aditya Patel", "Kavya Shetty", "Rohan Desai", "Meera Joshi"],
      focus: "Organizing technical workshops and seminars"
    },
    {
      name: "Event Management",
      members: ["Nikhil Gowda", "Asha Kumari", "Vivek Rao", "Divya Hegde"],
      focus: "Planning and executing IEEE events"
    },
    {
      name: "Publications Team",
      members: ["Suresh Nayak", "Lakshmi Bhat", "Kiran Kumar", "Pooja Shenoy"],
      focus: "Research publications and newsletters"
    },
    {
      name: "Outreach Committee",
      members: ["Ganesh Pai", "Rekha Acharya", "Sachin Kamath", "Shweta Nair"],
      focus: "Community engagement and partnerships"
    }
  ]
};

const Team = () => {
  const [data, setData] = useState<TeamData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/team.json", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to load team.json");
        const json = (await res.json()) as TeamData;
        // basic shape guard
        if (!json.executiveBoard || !json.coordinators || !json.committees) {
          throw new Error("Invalid team.json structure");
        }
        setData(json);
      } catch (e: unknown) {
        const message = e instanceof Error ? e.message : "Error loading team data";
        setError(message);
        setData(fallbackData);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  const executiveBoard = (data ?? fallbackData).executiveBoard;
  const coordinators = (data ?? fallbackData).coordinators;
  const committees = (data ?? fallbackData).committees;

  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-muted-foreground">Loading team...</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ieee-light-blue to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-ieee-light-blue text-ieee-blue">
              Meet Our Team
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Leadership & 
              <span className="block text-ieee-blue">Innovation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our dedicated team of students and faculty members working together to advance 
              technology and foster innovation at SMVITM.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Board */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-1">Executive Board</h2>
            {data?.year && (
              <div className="text-sm text-muted-foreground mb-3">Academic Year: {data.year}</div>
            )}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The student leaders driving our IEEE Student Branch forward with vision and dedication.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {executiveBoard.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-ieee-blue">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-ieee-blue to-ieee-dark-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-ieee-blue">{member.position}</CardDescription>
                  <div className="text-sm text-muted-foreground">
                    <div>{member.year}</div>
                    <div>{member.branch}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground truncate">{member.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Linkedin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground truncate">{member.linkedin}</span>
                    </div>
                    <div className="mt-4">
                      <div className="text-sm font-medium mb-2 flex items-center">
                        <Award className="h-4 w-4 mr-1 text-academic-gold" />
                        Achievements
                      </div>
                      {member.achievements.map((achievement, i) => (
                        <Badge key={i} variant="secondary" className="mr-1 mb-1 text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Coordinators */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Faculty Coordinators</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced faculty members providing guidance and mentorship to our student activities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {coordinators.map((coordinator, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-academic-gold to-ieee-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary-foreground">
                      {coordinator.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{coordinator.name}</CardTitle>
                  <CardDescription className="font-medium text-ieee-blue">{coordinator.position}</CardDescription>
                  <div className="text-sm text-muted-foreground">{coordinator.department}</div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{coordinator.email}</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Expertise</div>
                      <div className="text-sm text-muted-foreground">{coordinator.expertise}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Committee Structure */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Committee Structure</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized committees working on different aspects of our IEEE activities and initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {committees.map((committee, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-ieee-blue">{committee.name}</CardTitle>
                  <CardDescription className="text-base">{committee.focus}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-medium mb-2">Committee Members</div>
                  <div className="flex flex-wrap gap-2">
                    {committee.members.map((member, i) => (
                      <Badge key={i} variant="outline" className="border-ieee-blue text-ieee-blue">
                        {member}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-gradient-to-r from-ieee-blue to-ieee-dark-blue text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Be part of our dynamic team and contribute to the IEEE community at SMVITM. 
            Leadership opportunities and volunteer positions are available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary-foreground text-ieee-blue rounded-lg font-medium hover:bg-opacity-90 transition-colors">
              Apply for Leadership
            </button>
            <button className="px-8 py-3 border border-primary-foreground text-primary-foreground rounded-lg font-medium hover:bg-primary-foreground hover:text-ieee-blue transition-colors">
              Volunteer with Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Team;