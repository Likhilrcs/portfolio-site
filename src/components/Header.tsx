import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: "Resume", path: "/resume" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border animate-fade-in-down">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 hover:opacity-80 transition-all duration-300 group"
          >
            <div className="w-8 h-8 bg-primary rounded-full border-2 border-border mt-1 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300"></div>
            <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">LB.</span>
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">Developer</span>
          </Link>
          
          <nav className="flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 relative group ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;