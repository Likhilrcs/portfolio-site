import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Hospital Management System",
      description: "Complete visual and content overhaul of a leading lifestyle magazine, resulting in 150% increase in digital engagement.",
      category: "Editorial Design",
      year: "2023",
      tags: ["Design", "Content Strategy", "Digital Publishing"],
      githubUrl: "https://github.com/Likhilrcs/hospital",
      overviewurl: ""
    },
    {
      title: "Movie Booking ",
      description: "Developed and executed a multi-platform content campaign for a tech startup, driving 200% growth in brand awareness.",
      category: "Content Marketing",
      year: "2023",
      tags: ["Marketing", "Strategy", "Brand Development"],
      githubUrl: "https://github.com/Likhilrcs/Booking",
      overviewurl: ""
    },
    {
      title: "Protfolio Website",
      description: "Streamlined editorial workflows and implemented new tools, reducing production time by 30% while improving quality.",
      category: "Process Improvement",
      year: "2022",
      tags: ["Operations", "Workflow", "Team Management"],
      githubUrl: "https://github.com/Likhilrcs/protfolio",
      overviewurl: ""
    },
    
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Projects</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work spanning editorial design, content strategy, 
              and digital innovation projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        {project.category} • {project.year}
                      </CardDescription>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a href={project.overviewurl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      </a>
                      <a href={project.githubUrl} target="_blank">
                        <Button size="sm" variant="outline">
                          <Github className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-muted text-xs rounded-md text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Interested in collaborating?</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              I'm always open to discussing new projects and opportunities. 
              Let's create something amazing together.
            </p>
            <a href="./contact">
            <Button size="lg" className="bg-contact hover:bg-contact/90 text-contact-foreground">
              Get In Touch
            </Button>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;