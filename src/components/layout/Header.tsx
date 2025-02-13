
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Heart className="w-6 h-6 text-primary" />
            <span className="text-xl font-semibold text-gray-900">SympTrack</span>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-gray-700 hover:text-gray-900"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/symptoms")}
              className="text-gray-700 hover:text-gray-900"
            >
              Check Symptoms
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/history")}
              className="text-gray-700 hover:text-gray-900"
            >
              History
            </Button>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={() => navigate("/login")}>
              Sign In
            </Button>
            <Button onClick={() => navigate("/register")}>Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  );
};
