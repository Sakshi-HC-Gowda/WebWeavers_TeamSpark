import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Trophy, BookOpen, Calendar, ArrowRight, Zap, Globe, Code } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const stats = [
    { icon: Users, label: "Active Members", value: "150+" },
    { icon: Trophy, label: "Achievements", value: "25+" },
    { icon: BookOpen, label: "Publications", value: "40+" },
    { icon: Calendar, label: "Events/Year", value: "30+" },
  ];

  const societies = [
    {
      name: "Communication Society",
      description: "Advancing communication technologies and systems",
      icon: Globe,
    },
    {
      name: "Computer Society",
      description: "Promoting excellence in computer science and engineering",
      icon: Code,
    },
    {
      name: "SIGHT",
      description: "Special Interest Group on Humanitarian Technology",
      icon: Zap,
    },
    {
      name: "WIE",
      description: "Women in Engineering - Inspiring, Engaging, Empowering",
      icon: Users,
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-ieee-light-blue via-background to-accent/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-ieee-light-blue text-ieee-blue">
              Advancing Technology for Humanity
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              IEEE Student Branch
              <span className="block text-ieee-blue">SMVITM</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Empowering students through innovation, research, and professional development in electrical and electronics engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-ieee-blue hover:bg-ieee-dark-blue">
                Join IEEE <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Explore Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-none shadow-md">
                <CardContent className="pt-6">
                  <stat.icon className="h-10 w-10 text-ieee-blue mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">About IEEE SMVITM</h2>
            <p className="text-lg text-muted-foreground">
              The IEEE Student Branch at Shri Madhwa Vadiraja Institute of Technology & Management 
              is dedicated to fostering innovation, technical excellence, and professional growth 
              among engineering students.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                To advance technology for humanity by providing students with opportunities to 
                engage in cutting-edge research, develop technical skills, and build professional networks.
              </p>
              <Link to="/about">
                <Button variant="outline" className="border-ieee-blue text-ieee-blue hover:bg-ieee-light-blue">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-ieee-blue to-ieee-dark-blue rounded-lg p-8 text-primary-foreground">
              <h4 className="text-xl font-semibold mb-4">What We Offer</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  <span>Technical workshops and seminars</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  <span>Research collaboration opportunities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  <span>Professional networking events</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  <span>Industry mentorship programs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IEEE Societies */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">IEEE Societies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore specialized communities within IEEE that focus on specific technical areas and professional interests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {societies.map((society, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-ieee-blue">
                <CardHeader className="pb-3">
                  <society.icon className="h-8 w-8 text-ieee-blue mb-2" />
                  <CardTitle className="text-lg">{society.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{society.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/societies">
              <Button variant="outline" className="border-ieee-blue text-ieee-blue hover:bg-ieee-light-blue">
                Explore All Societies <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-ieee-blue to-ieee-dark-blue text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join IEEE?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Become part of the world's largest technical professional organization and advance your career in technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Student Membership
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-ieee-blue">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;