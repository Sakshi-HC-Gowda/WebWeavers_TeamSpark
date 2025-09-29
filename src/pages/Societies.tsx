import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Code, Zap, Users, Calendar, Award, ArrowRight, Target, BookOpen, Lightbulb } from "lucide-react";

const Societies = () => {
  const societies = [
    {
      name: "Communication Society",
      acronym: "ComSoc",
      icon: Globe,
      description: "Advancing the science and application of communications technology",
      established: "2020",
      members: 45,
      chairperson: "Priya Nair",
      email: "comsoc@ieee-smvitm.org",
      focusAreas: [
        "5G and 6G Wireless Networks",
        "Signal Processing",
        "Optical Communications",
        "Satellite Communications",
        "Network Security"
      ],
      recentActivities: [
        "Workshop on 5G Technology and Applications",
        "Guest Lecture on Quantum Communications",
        "Research Paper Competition on Wireless Networks",
        "Industry Visit to Telecom Companies"
      ],
      upcomingEvents: [
        "International Conference on Communications (ICC) Local Event",
        "5G Testbed Development Workshop",
        "ComSoc Student Competition 2024"
      ],
      achievements: [
        "Best Student Chapter Award 2023",
        "Outstanding Volunteer Recognition",
        "Research Excellence in Wireless Communications"
      ]
    },
    {
      name: "Computer Society",
      acronym: "CS",
      icon: Code,
      description: "Promoting excellence in computer science and engineering innovation",
      established: "2020",
      members: 60,
      chairperson: "Arjun Sharma",
      email: "cs@ieee-smvitm.org",
      focusAreas: [
        "Artificial Intelligence",
        "Machine Learning",
        "Software Engineering",
        "Cybersecurity",
        "Cloud Computing"
      ],
      recentActivities: [
        "AI/ML Workshop Series",
        "Hackathon: Code for Good",
        "Software Engineering Best Practices Seminar",
        "Open Source Contribution Drive"
      ],
      upcomingEvents: [
        "IEEE Computer Society Programming Contest",
        "Women in Computing Symposium",
        "Industry-Academia Collaboration Meet"
      ],
      achievements: [
        "Winner - IEEE CS Programming Competition 2024",
        "Outstanding Student Branch Activity Award",
        "Best Technical Presentation Award"
      ]
    },
    {
      name: "SIGHT",
      acronym: "SIGHT",
      icon: Zap,
      description: "Special Interest Group on Humanitarian Technology",
      established: "2024",
      members: 30,
      chairperson: "Rahul Kumar",
      email: "sight@ieee-smvitm.org",
      focusAreas: [
        "Sustainable Technology Solutions",
        "Rural Development Projects",
        "Healthcare Technology",
        "Environmental Monitoring",
        "Educational Technology"
      ],
      recentActivities: [
        "Solar Power System Installation in Local Schools",
        "Water Quality Monitoring Project",
        "Digital Literacy Program for Rural Communities",
        "Healthcare IoT Solutions for Remote Areas"
      ],
      upcomingEvents: [
        "SIGHT Global Competition 2024",
        "Humanitarian Technology Summit",
        "Community Outreach Program"
      ],
      achievements: [
        "2nd Place - IEEE SIGHT Global Competition 2024",
        "Community Impact Award",
        "Sustainable Innovation Recognition"
      ]
    },
    {
      name: "Women in Engineering",
      acronym: "WIE",
      icon: Users,
      description: "Inspiring, engaging, and empowering women in engineering",
      established: "2018",
      members: 40,
      chairperson: "Sneha Reddy",
      email: "wie@ieee-smvitm.org",
      focusAreas: [
        "Women Leadership Development",
        "STEM Education Outreach",
        "Career Mentorship",
        "Gender Equality in Technology",
        "Professional Networking"
      ],
      recentActivities: [
        "Women in STEM Conference",
        "Mentorship Program Launch",
        "Girls in Engineering Workshop",
        "Industry Leader Panel Discussion"
      ],
      upcomingEvents: [
        "WIE International Leadership Conference",
        "Breaking Barriers in Technology Symposium",
        "Young Women Engineer Awards"
      ],
      achievements: [
        "Outstanding WIE Affinity Group Award 2023",
        "Best Outreach Program Recognition",
        "Leadership Excellence Award"
      ]
    }
  ];

  const overallStats = [
    { icon: Users, label: "Total Members", value: "175+" },
    { icon: Calendar, label: "Events Organized", value: "120+" },
    { icon: Award, label: "Awards Won", value: "15+" },
    { icon: Target, label: "Projects Completed", value: "25+" }
  ];

  const collaborations = [
    {
      title: "Industry Partnership Program",
      description: "Collaborating with leading tech companies for internships and projects",
      partners: ["Infosys", "TCS", "Wipro", "Microsoft", "Google"]
    },
    {
      title: "Academic Research Collaboration",
      description: "Joint research projects with international universities",
      partners: ["MIT", "Stanford", "IIT Delhi", "IISc Bangalore", "CERN"]
    },
    {
      title: "Government Initiatives",
      description: "Supporting national technology missions and smart city projects",
      partners: ["Digital India", "Smart Cities Mission", "ISRO", "DRDO"]
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ieee-light-blue to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-ieee-light-blue text-ieee-blue">
              IEEE Societies
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Specialized Communities for
              <span className="block text-ieee-blue">Technical Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our vibrant IEEE society chapters and connect with like-minded professionals 
              advancing specific fields of technology and engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Overall Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {overallStats.map((stat, index) => (
              <Card key={index} className="text-center border-none shadow-md">
                <CardContent className="pt-6">
                  <stat.icon className="h-12 w-12 text-ieee-blue mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Society Details */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Society Chapters</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our active IEEE society chapters, each focusing on specific technical domains and professional development.
            </p>
          </div>

          <div className="space-y-12">
            {societies.map((society, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Main Info */}
                  <div className="lg:col-span-2 p-6">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-ieee-blue to-ieee-dark-blue rounded-xl flex items-center justify-center">
                          <society.icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-foreground">{society.name}</CardTitle>
                          <CardDescription className="text-lg text-ieee-blue font-medium">
                            IEEE {society.acronym}
                          </CardDescription>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-base">{society.description}</p>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      {/* Society Stats */}
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-ieee-blue">{society.members}</div>
                          <div className="text-sm text-muted-foreground">Members</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-ieee-blue">{society.established}</div>
                          <div className="text-sm text-muted-foreground">Established</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-ieee-blue">{society.chairperson}</div>
                          <div className="text-sm text-muted-foreground">Chairperson</div>
                        </div>
                      </div>

                      {/* Focus Areas */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <Target className="h-4 w-4 mr-2 text-ieee-blue" />
                          Focus Areas
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {society.focusAreas.map((area, i) => (
                            <Badge key={i} variant="outline" className="border-ieee-blue text-ieee-blue">
                              {area}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Recent Activities */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-ieee-blue" />
                          Recent Activities
                        </h4>
                        <ul className="space-y-2">
                          {society.recentActivities.map((activity, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start">
                              <span className="w-2 h-2 bg-ieee-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>

                  {/* Sidebar */}
                  <div className="bg-ieee-light-blue/20 p-6 space-y-6">
                    {/* Contact */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Contact</h4>
                      <div className="text-sm text-muted-foreground">
                        <div className="mb-1">{society.email}</div>
                      </div>
                    </div>

                    {/* Upcoming Events */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        Upcoming Events
                      </h4>
                      <ul className="space-y-2">
                        {society.upcomingEvents.map((event, i) => (
                          <li key={i} className="text-sm text-muted-foreground">
                            • {event}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <Award className="h-4 w-4 mr-2 text-academic-gold" />
                        Achievements
                      </h4>
                      <ul className="space-y-2">
                        {society.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground">
                            🏆 {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Join Button */}
                    <Button className="w-full bg-ieee-blue hover:bg-ieee-dark-blue">
                      Join {society.acronym}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Collaborations & Partnerships</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our societies actively collaborate with industry, academia, and government organizations 
              to create meaningful impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {collaborations.map((collab, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-ieee-blue">
                <CardHeader>
                  <CardTitle className="text-lg">{collab.title}</CardTitle>
                  <CardDescription>{collab.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-medium mb-2">Key Partners:</div>
                  <div className="flex flex-wrap gap-2">
                    {collab.partners.map((partner, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {partner}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Why Join IEEE Societies?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <BookOpen className="h-12 w-12 text-ieee-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Access to Knowledge</h3>
                <p className="text-muted-foreground">
                  Exclusive access to IEEE journals, conferences, and technical resources in your field of interest.
                </p>
              </div>
              
              <div className="text-center">
                <Users className="h-12 w-12 text-ieee-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Professional Network</h3>
                <p className="text-muted-foreground">
                  Connect with industry professionals, researchers, and peers worldwide through society events.
                </p>
              </div>
              
              <div className="text-center">
                <Lightbulb className="h-12 w-12 text-ieee-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Career Development</h3>
                <p className="text-muted-foreground">
                  Enhance your skills through workshops, certifications, and leadership opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 bg-gradient-to-r from-ieee-blue to-ieee-dark-blue text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join a Society?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Take the next step in your professional journey. Join an IEEE society chapter 
            that aligns with your interests and career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Browse All Societies
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-ieee-blue">
              Membership Benefits
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Societies;