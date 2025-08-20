import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Certificates from "../components/Certificates";



const Resume = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Resume</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my professional experience, skills, and education.
            </p>
            <a href="https://likhilresume.tiiny.site/" target="_blank">
              <Button className="mt-6" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </a>
          </div>

          <div className="grid gap-8">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Likhil Bachanaboina</CardTitle>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    likhilbachanaboina219@gmail.com
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    +91 9121462325
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Warangal, Telangana, India
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Professional Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Professional Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Enthusiastic web developer with skills in Java, Python,MERN stack, JavaScript, and MYSQL, currently pursuing B.Tech at Chaitanya Deemed to Be University. Passionate about building efficient applications, solving problems, and contributing to organizational growth while continuously learning.
                </p>
              </CardContent>
            </Card>

            {/* Certificates */}
            <Card>
              <CardHeader>
                <CardTitle>Certificates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Certificates />
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "MERN Stack Development",
                    "java",
                    "Prompt Engineering",
                    "Python",
                    "Basic Figma",
                    "Data Analysis",
                    "MYSQL",
                    "Automation using N8N",
                    "Vibe coding",
                  ].map((skill) => (
                    <div 
                      key={skill}
                      className="px-3 py-2 bg-muted rounded-md text-sm text-center"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <h3 className="font-semibold text-foreground">Bachelor of Technology ( B.Tech )</h3>
                  <p className="text-sm text-muted-foreground">Chaitanya Demeed To Be  University • 2022 - 2026</p>
                  <p className="text-sm text-muted-foreground mt-1">Computer science and Engineering</p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground ">Intermediate</h3>
                  <p className="text-sm text-muted-foreground">Sri Chaitanya Junoir college • 2020 - 2022</p>
                  <p className="text-sm text-muted-foreground mt-1">MPC</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">SSC</h3>
                  <p className="text-sm text-muted-foreground">Thakshashila High School • 2019 - 2020</p>
                  <p className="text-sm text-muted-foreground mt-1">1O th</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;