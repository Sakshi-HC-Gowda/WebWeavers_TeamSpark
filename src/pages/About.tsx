import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Award, Users, BookOpen, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Striving for the highest standards in technical education and research"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strong partnerships within academia and industry"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Fostering creativity and breakthrough solutions to global challenges"
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Maintaining ethical standards in all our endeavors"
    }
  ];

  const milestones = [
    { year: "2010", event: "IEEE Student Branch Established at SMVITM" },
    { year: "2015", event: "First International Conference organized" },
    { year: "2018", event: "WIE Affinity Group formed" },
    { year: "2020", event: "Computer Society Chapter established" },
    { year: "2022", event: "Communication Society Chapter launched" },
    { year: "2024", event: "SIGHT Chapter inaugurated" }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ieee-light-blue to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-ieee-light-blue text-ieee-blue">
              About IEEE SMVITM
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Advancing Technology for
              <span className="block text-ieee-blue">Humanity</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The IEEE Student Branch at SMVITM has been at the forefront of technological innovation 
              and professional development since 2010, empowering students to shape the future of engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-ieee-blue">
              <CardHeader>
                <Target className="h-10 w-10 text-ieee-blue mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To foster innovation, advance technology, and inspire the next generation of engineers 
                  through quality education, cutting-edge research, and meaningful industry partnerships 
                  that benefit society.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-academic-gold">
              <CardHeader>
                <Eye className="h-10 w-10 text-academic-gold mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To be a globally recognized center of excellence in engineering education and research, 
                  producing skilled professionals who contribute to technological advancement and 
                  sustainable development worldwide.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our actions and define our commitment to excellence in everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-ieee-blue mx-auto mb-4" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About IEEE */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">About IEEE</h2>
              <p className="text-lg text-muted-foreground">
                Understanding the global organization that connects us to the world's technology community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-ieee-blue mb-2">420,000+</div>
                <div className="text-muted-foreground">Global Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-ieee-blue mb-2">160+</div>
                <div className="text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-ieee-blue mb-2">3,000+</div>
                <div className="text-muted-foreground">Student Branches</div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                IEEE (Institute of Electrical and Electronics Engineers) is the world's largest technical 
                professional organization dedicated to advancing technology for the benefit of humanity. 
                IEEE and its members inspire a global community through highly cited publications, 
                conferences, technology standards, and professional and educational activities.
              </p>
              
              <p className="text-muted-foreground">
                As an IEEE Student Branch, we are part of this global network, providing our students 
                with access to cutting-edge research, industry connections, and professional development 
                opportunities that prepare them for successful careers in technology and engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              Key milestones in the growth and development of IEEE Student Branch SMVITM.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-ieee-blue/30"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center mb-8">
                  <div className="w-16 h-16 bg-ieee-blue rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mr-6 shadow-lg">
                    {milestone.year}
                  </div>
                  <Card className="flex-1">
                    <CardContent className="py-4">
                      <p className="font-medium text-foreground">{milestone.event}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;