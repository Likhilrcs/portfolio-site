import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CircularButtonProps {
  to: string;
  children: React.ReactNode;
  variant: "resume" | "projects" | "contact";
  className?: string;
}

const CircularButton = ({ to, children, variant, className }: CircularButtonProps) => {
  const variantStyles = {
    resume: "bg-resume text-resume-foreground hover:scale-110 hover:shadow-xl hover:shadow-resume/30 hover:-translate-y-1 active:scale-95",
    projects: "bg-projects text-projects-foreground hover:scale-110 hover:shadow-xl hover:shadow-projects/30 hover:-translate-y-1 active:scale-95",
    contact: "bg-contact text-contact-foreground hover:scale-110 hover:shadow-xl hover:shadow-contact/30 hover:-translate-y-1 active:scale-95",
  };

  return (
    <Link
      to={to}
      className={cn(
        "w-24 h-24 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 transform hover:rotate-3 group relative overflow-hidden",
        variantStyles[variant],
        className
      )}
    >
      <span className="relative z-10 group-hover:scale-110 transition-transform duration-200">
        {children}
      </span>
      <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
    </Link>
  );
};

export default CircularButton;