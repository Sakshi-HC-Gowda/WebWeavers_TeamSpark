import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink, Download, Calendar, Users, Award, TrendingUp } from "lucide-react";

const Publications = () => {
  const featuredPublications = [
    {
      title: "AI-Driven IoT Framework for Smart City Infrastructure",
      authors: ["Arjun Sharma", "Dr. Rajesh Patil", "Prof. Sunitha Rao"],
      journal: "IEEE Internet of Things Journal",
      year: 2024,
      volume: "Vol. 11, No. 8",
      pages: "pp. 13245-13258",
      impact: "IF: 10.238",
      citations: 45,
      doi: "10.1109/JIOT.2024.1234567",
      abstract: "This paper presents a novel AI-driven framework for optimizing smart city infrastructure using IoT sensors and machine learning algorithms.",
      keywords: ["IoT", "Smart Cities", "Artificial Intelligence", "Urban Planning"],
      type: "journal"
    },
    {
      title: "Quantum-Enhanced Communication Protocols for 6G Networks",
      authors: ["Priya Nair", "Dr. Mohan Krishna"],
      journal: "IEEE Communications Magazine",
      year: 2024,
      volume: "Vol. 62, No. 3",
      pages: "pp. 78-85",
      impact: "IF: 9.618",
      citations: 32,
      doi: "10.1109/MCOM.2024.2345678",
      abstract: "A comprehensive study on implementing quantum communication protocols in next-generation 6G wireless networks.",
      keywords: ["6G", "Quantum Communication", "Wireless Networks", "Security"],
      type: "journal"
    }
  ];

  const recentPublications = [
    {
      title: "Machine Learning for Predictive Maintenance in Industrial IoT Systems",
      authors: ["Rahul Kumar", "Sneha Reddy", "Dr. Rajesh Patil"],
      venue: "IEEE International Conference on Industrial IoT (IIoT 2024)",
      year: 2024,
      location: "Singapore",
      pages: "pp. 234-239",
      type: "conference"
    },
    {
      title: "Blockchain-Based Secure Data Sharing in Healthcare IoT Networks",
      authors: ["Kavya Shetty", "Prof. Sunitha Rao"],
      venue: "IEEE Journal of Biomedical and Health Informatics",
      year: 2024,
      impact: "IF: 7.021",
      type: "journal"
    },
    {
      title: "Energy-Efficient Routing Protocols for Wireless Sensor Networks",
      authors: ["Aditya Patel", "Dr. Mohan Krishna"],
      venue: "IEEE Transactions on Green Communications and Networking",
      year: 2023,
      impact: "IF: 5.893",
      type: "journal"
    },
    {
      title: "Deep Learning Approaches for Smart Grid Fault Detection",
      authors: ["Meera Joshi", "Nikhil Gowda", "Dr. Rajesh Patil"],
      venue: "IEEE Power & Energy Society General Meeting 2023",
      year: 2023,
      location: "Orlando, USA",
      type: "conference"
    },
    {
      title: "Cognitive Radio Networks: A Comprehensive Survey",
      authors: ["Rohan Desai", "Prof. Sunitha Rao"],
      venue: "IEEE Communications Surveys & Tutorials",
      year: 2023,
      impact: "IF: 25.249",
      type: "journal"
    },
    {
      title: "Edge Computing for Real-Time Traffic Management Systems",
      authors: ["Vivek Rao", "Divya Hegde"],
      venue: "IEEE International Conference on Edge Computing (EDGE 2023)",
      year: 2023,
      location: "Chicago, USA",
      type: "conference"
    }
  ];

  const researchAreas = [
    {
      area: "Internet of Things (IoT)",
      publications: 18,
      icon: "🌐",
      description: "Smart sensors, edge computing, and IoT security"
    },
    {
      area: "Machine Learning & AI",
      publications: 15,
      icon: "🤖",
      description: "Deep learning, computer vision, and intelligent systems"
    },
    {
      area: "Wireless Communications",
      publications: 12,
      icon: "📡",
      description: "5G/6G networks, cognitive radio, and signal processing"
    },
    {
      area: "Power Systems",
      publications: 8,
      icon: "⚡",
      description: "Smart grids, renewable energy, and power electronics"
    },
    {
      area: "Cybersecurity",
      publications: 7,
      icon: "🔒",
      description: "Blockchain, cryptography, and network security"
    },
    {
      area: "Biomedical Engineering",
      publications: 5,
      icon: "🩺",
      description: "Medical devices, healthcare IoT, and telemedicine"
    }
  ];

  const stats = [
    { icon: BookOpen, label: "Total Publications", value: "65+" },
    { icon: Award, label: "IEEE Journals", value: "35+" },
    { icon: Users, label: "Conference Papers", value: "30+" },
    { icon: TrendingUp, label: "Total Citations", value: "850+" }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ieee-light-blue to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-ieee-light-blue text-ieee-blue">
              Research Publications
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Advancing Knowledge Through
              <span className="block text-ieee-blue">Research Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the cutting-edge research contributions by our IEEE Student Branch members 
              in top-tier journals and international conferences.
            </p>
          </div>
        </div>
      </section>

      {/* Publication Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
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

      {/* Featured Publications */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Publications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Highlighting our most impactful research contributions in high-ranking IEEE journals.
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {featuredPublications.map((pub, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl leading-tight mb-3">{pub.title}</CardTitle>
                      <div className="space-y-2">
                        <div className="text-sm text-ieee-blue font-medium">
                          {pub.authors.join(", ")}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium">{pub.journal}</span> ({pub.year})
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {pub.volume}, {pub.pages}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <Badge variant="default" className="bg-academic-gold text-foreground">
                        {pub.impact}
                      </Badge>
                      <Badge variant="outline" className="border-ieee-blue text-ieee-blue">
                        {pub.citations} citations
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">{pub.abstract}</p>
                    <div>
                      <div className="text-sm font-medium mb-2">Keywords:</div>
                      <div className="flex flex-wrap gap-2">
                        {pub.keywords.map((keyword, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 pt-4">
                      <Button variant="outline" size="sm" className="border-ieee-blue text-ieee-blue hover:bg-ieee-light-blue">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View DOI
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Research Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diverse research portfolio spans multiple cutting-edge domains in electrical and computer engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-ieee-blue">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{area.icon}</span>
                    <div>
                      <CardTitle className="text-lg">{area.area}</CardTitle>
                      <CardDescription className="text-ieee-blue font-medium">
                        {area.publications} publications
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Recent Publications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Latest research outputs from our active researchers and graduate students.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {recentPublications.map((pub, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight">{pub.title}</CardTitle>
                    </div>
                    <Badge 
                      variant={pub.type === 'journal' ? 'default' : 'secondary'}
                      className={pub.type === 'journal' ? 'bg-ieee-blue' : 'bg-academic-gold text-foreground'}
                    >
                      {pub.type}
                    </Badge>
                  </div>
                  <CardDescription>
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-ieee-blue">
                        {pub.authors.join(", ")}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {pub.venue} ({pub.year})
                      </div>
                      {pub.location && (
                        <div className="text-sm text-muted-foreground">{pub.location}</div>
                      )}
                      {pub.pages && (
                        <div className="text-sm text-muted-foreground">{pub.pages}</div>
                      )}
                      {pub.impact && (
                        <Badge variant="outline" className="text-xs mt-2">
                          {pub.impact}
                        </Badge>
                      )}
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Research CTA */}
      <section className="py-16 bg-gradient-to-r from-ieee-blue to-ieee-dark-blue text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your Research</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contribute to our growing repository of research publications. 
            Submit your papers and join our community of researchers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Submit Publication
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-ieee-blue">
              Research Guidelines
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Publications;