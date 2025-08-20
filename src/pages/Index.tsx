import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CircularButton from "@/components/CircularButton";

import profilePhoto1 from "@/assets/profile-photo1.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="min-h-[calc(100vh-200px)] flex flex-col md:flex-row items-center justify-center gap-16">
            {/* Profile Photo */}
            <div className="flex-shrink-0 animate-fade-in-left">
              <div className="w-80 h-80 rounded-full overflow-hidden bg-muted shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group cursor-pointer">
                <img 
                  src={profilePhoto1} 
                  alt="Likhil Bachanaboina" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 max-w-lg text-center md:text-left">
              <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-8 animate-fade-in-right hover:text-primary transition-colors duration-300">
                Hello
              </h1>
              
              <div className="mb-12 animate-fade-in-up-delay-100">
                <h2 className="text-xl font-semibold text-foreground mb-4 hover:text-primary transition-colors duration-300">
                  A Bit About Me
                </h2>
                <p className="text-muted-foreground leading-relaxed ">
                  I’m <span className="text-2xl font-bold">Likhil Bachanaboina</span>, a passionate web developer from Telangana. I’m currently pursuing my B.Tech at Chaitanya Deemed to Be University. I enjoy solving problems with technology and have hands-on experience in building projects like a Hospital Management System, which improves patient records and hospital workflow.
                </p>
              </div>

              {/* Circular Navigation Buttons */}
              <div className="flex flex-wrap justify-center md:justify-start gap-6 animate-fade-in-up-delay-200">
                <div className="animate-scale-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                  <CircularButton to="/resume" variant="resume">
                    Resume
                  </CircularButton>
                </div>
                <div className="animate-scale-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                  <CircularButton to="/projects" variant="projects">
                    Projects
                  </CircularButton>
                </div>
                <div className="animate-scale-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                  <CircularButton to="/contact" variant="contact">
                    Contact
                  </CircularButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
