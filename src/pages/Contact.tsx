import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import emailjs from "emailjs-com"; // Ensure you have emailjs-com installed

  
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_dgm6typ",    // from EmailJS
        "template_5d0qomn",   // from EmailJS
        e.target,
        "A7owHa_8SOwAQ-eut"        // from EmailJS
      )
      .then(
        (result) => {
          alert("✅ Message sent! You'll receive an automatic reply.");
          e.target.reset();
          setLoading(false);
        },
        (error) => {
          alert("❌ Something went wrong.");
          setLoading(false);
        }
      );
  };
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Contact</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to start a conversation? I'd love to hear from you. 
              Let's discuss your next project or collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-contact" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">likhilbachanaboina219@gmail.com</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    I typically respond within 24 hours
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-contact" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">+91 9121462325</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Available Monday - Friday, 9 AM - 6 PM EST
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-contact" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Warangal,Telangana,India</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Open to remote collaboration worldwide
                  </p>
                </CardContent>
              </Card>

              <div className="pt-6">
                <h3 className="font-semibold text-foreground mb-3">What I can help with:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Editorial and content strategy consulting</li>
                  <li>• Creative direction and project management</li>
                  <li>• Digital publishing and platform development</li>
                  <li>• Team training and workflow optimization</li>
                  <li>• Brand content and storytelling campaigns</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6" >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email"  name="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="What's this about?" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Tell me about your project or how I can help..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button type="submit" disabled={loading} size="lg" className="w-full bg-contact hover:bg-contact/90 text-contact-foreground">
                    <Send className="w-4 h-4 mr-2" />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Let's create something amazing</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Whether you have a specific project in mind or just want to explore possibilities, 
              I'm here to help bring your ideas to life.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;