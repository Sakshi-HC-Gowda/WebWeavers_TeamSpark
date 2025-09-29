import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Calendar, Users, BookOpen, Target } from "lucide-react";

const Achievements = () => {
  const highlights = [
    {
      icon: Trophy,
      title: "IEEE Student Paper Competition",
      year: "2024",
      description: "First Prize at Regional Level",
      details: "Our research on 'AI-Powered IoT Systems for Smart Agriculture' won the prestigious regional competition."
    },
    {
      icon: Medal,
      title: "Outstanding Student Branch Award",
      year: "2023",
      description: "IEEE India Council Recognition",
      details: "Recognized for excellence in student activities, technical events, and community engagement."
    },
    {
      icon: Award,
      title: "Best Technical Event",
      year: "2024",
      description: "TECHNOVATE 2024",
      details: "Our flagship technical symposium was recognized as the best student-organized technical event in the region."
    },
    {
      icon: Target,
      title: "Research Excellence",
      year: "2023",
      description: "50+ Publications",
      details: "Students and faculty achieved milestone of 50+ research publications in IEEE journals and conferences."
    }
  ];

  const competitions = [
    {
      event: "IEEE SIGHT Global Competition",
      year: "2024",
      position: "2nd Place",
      participants: "Team of 5 students",
      project: "Solar-Powered Water Purification System for Rural Communities"
    },
    {
      event: "IEEE Young Professionals Innovation Challenge",
      year: "2024",
      position: "Winner",
      participants: "Priya Nair, Arjun Sharma",
      project: "Smart Healthcare Monitoring using IoT and Machine Learning"
    },
    {
      event: "IEEE Computer Society Programming Contest",
      year: "2023",
      position: "1st Place",
      participants: "Team CodeMasters",
      project: "Real-time Traffic Management System using Computer Vision"
    },
    {
      event: "IEEE WIE Technical Paper Presentation",
      year: "2023",
      position: "Best Paper Award",
      participants: "Sneha Reddy",
      project: "Women in STEM: Breaking Barriers through Technology"
    },
    {
      event: "National Level Robotics Competition",
      year: "2023",
      position: "3rd Place",
      participants: "Team RoboTech",
      project: "Autonomous Disaster Response Robot"
    }
  ];

  const publications = [
    {
      title: "Machine Learning Approaches for Predictive Maintenance in Industrial IoT",
      authors: "Arjun Sharma, Dr. Rajesh Patil",
      journal: "IEEE Internet of Things Journal",
      year: "2024",
      impact: "IF: 10.238"
    },
    {
      title: "Energy-Efficient Wireless Sensor Networks for Environmental Monitoring",
      authors: "Priya Nair, Prof. Sunitha Rao",
      journal: "IEEE Sensors Journal",
      year: "2024", 
      impact: "IF: 4.325"
    },
    {
      title: "Deep Learning for Smart Grid Optimization and Fault Detection",
      authors: "Rahul Kumar, Dr. Mohan Krishna",
      journal: "IEEE Transactions on Smart Grid",
      year: "2023",
      impact: "IF: 10.486"
    },
    {
      title: "Blockchain-Based Secure Communication in IoT Networks",
      authors: "Sneha Reddy, Dr. Rajesh Patil",
      conference: "IEEE International Conference on Communications (ICC)",
      year: "2023",
      location: "Rome, Italy"
    }
  ];

  const certifications = [
    { name: "IEEE Certified Software Development Professional", count: 15 },
    { name: "IEEE Power & Energy Society Certification", count: 12 },
    { name: "IEEE Computer Society Certification", count: 20 },
    { name: "IEEE Communications Society Certification", count: 8 }
  ];

  const stats = [
    { number: "150+", label: "Competition Participations", icon: Users },
    { number: "45+", label: "Awards Won", icon: Trophy },
    { number: "60+", label: "Research Papers", icon: BookOpen },
    { number: "25+", label: "Technical Presentations", icon: Target }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ieee-light-blue to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-ieee-light-blue text-ieee-blue">
              Our Achievements
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Excellence in
              <span className="block text-ieee-blue">Innovation & Research</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Celebrating the outstanding accomplishments of our IEEE Student Branch members 
              in research, competitions, and technological innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-none shadow-md">
                <CardContent className="pt-6">
                  <stat.icon className="h-12 w-12 text-ieee-blue mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Major Highlights */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Major Highlights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our most significant achievements that showcase the excellence of our IEEE Student Branch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-academic-gold">
                <CardHeader className="text-center">
                  <highlight.icon className="h-12 w-12 text-academic-gold mx-auto mb-4" />
                  <Badge variant="secondary" className="mb-2 bg-academic-gold/10 text-academic-gold">
                    {highlight.year}
                  </Badge>
                  <CardTitle className="text-lg">{highlight.title}</CardTitle>
                  <CardDescription className="font-medium text-ieee-blue">{highlight.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{highlight.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Results */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Competition Results</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Outstanding performance of our students in national and international IEEE competitions.
            </p>
          </div>

          <div className="space-y-6 max-w-6xl mx-auto">
            {competitions.map((comp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{comp.event}</h3>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{comp.year}</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <Badge 
                        variant={comp.position.includes('1st') || comp.position.includes('Winner') ? 'default' : 'secondary'}
                        className={comp.position.includes('1st') || comp.position.includes('Winner') 
                          ? 'bg-academic-gold text-foreground' 
                          : 'bg-ieee-light-blue text-ieee-blue'
                        }
                      >
                        {comp.position}
                      </Badge>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{comp.participants}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{comp.project}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Recent Publications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              High-impact research publications by our students and faculty in renowned IEEE journals and conferences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {publications.map((pub, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg leading-tight">{pub.title}</CardTitle>
                  <CardDescription>
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-ieee-blue">{pub.authors}</div>
                      <div className="text-sm text-muted-foreground">
                        {pub.journal || pub.conference} ({pub.year})
                      </div>
                      {pub.impact && (
                        <Badge variant="outline" className="text-xs">
                          {pub.impact}
                        </Badge>
                      )}
                      {pub.location && (
                        <div className="text-xs text-muted-foreground">{pub.location}</div>
                      )}
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Professional Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              IEEE professional certifications earned by our students, enhancing their technical expertise and career prospects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Award className="h-10 w-10 text-ieee-blue mx-auto mb-4" />
                  <div className="text-2xl font-bold text-ieee-blue mb-2">{cert.count}</div>
                  <div className="text-sm text-foreground font-medium">{cert.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-16 bg-gradient-to-r from-ieee-blue to-ieee-dark-blue text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Future Goals</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We continue to strive for excellence and set ambitious goals for the coming years.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-primary-foreground/10 rounded-lg p-6">
              <div className="text-2xl font-bold mb-2">100+</div>
              <div className="text-sm opacity-90">Research Publications by 2025</div>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-6">
              <div className="text-2xl font-bold mb-2">Top 10</div>
              <div className="text-sm opacity-90">Student Branch Ranking in India</div>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-6">
              <div className="text-2xl font-bold mb-2">250+</div>
              <div className="text-sm opacity-90">Active Members</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Achievements;