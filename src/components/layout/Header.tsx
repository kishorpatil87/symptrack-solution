
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-morphism">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Heart className="w-6 h-6 text-primary" />
            <span className="text-xl font-semibold text-white">SympTrack</span>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-white/80 hover:text-white hover:bg-white/10"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/symptoms")}
              className="text-white/80 hover:text-white hover:bg-white/10"
            >
              Check Symptoms
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/history")}
              className="text-white/80 hover:text-white hover:bg-white/10"
            >
              History
            </Button>
          </nav>
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/login")}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Sign In
            </Button>
            <Button 
              onClick={() => navigate("/register")}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
