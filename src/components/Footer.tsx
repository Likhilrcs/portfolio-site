import { Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-sm text-muted-foreground">+91 9121462325</p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">Email</h3>
            <p className="text-sm text-muted-foreground">likhilbachanaboina219@gmail.com</p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">Follow Me</h3>
            <div className="flex space-x-3">
              <a 
                href="https://www.linkedin.com/in/likhilbachanaboina" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
                target="_blank"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-right">
          <p className="text-xs text-muted-foreground">
            © 2025 By Likhil Bachanaboina. Powered and secured 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;