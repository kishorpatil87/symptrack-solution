
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import {
  Activity,
  User,
  MapPin,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Activity,
      title: "Symptom Analysis",
      description: "Advanced symptom tracking and analysis for accurate predictions",
    },
    {
      icon: User,
      title: "Specialist Matching",
      description: "Connect with the right medical specialists for your condition",
    },
    {
      icon: MapPin,
      title: "Location-Based",
      description: "Find healthcare providers in your area",
    },
    {
      icon: MessageSquare,
      title: "Feedback System",
      description: "Contribute to improving diagnosis accuracy",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fadeIn">
            Smart Health Diagnosis Assistant
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fadeIn">
            Track your symptoms, get preliminary diagnoses, and connect with
            specialists near you.
          </p>
          <div className="flex justify-center gap-4 animate-fadeIn">
            <Button
              size="lg"
              onClick={() => navigate("/symptoms")}
              className="group"
            >
              Check Symptoms
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/register")}
            >
              Create Account
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-fadeIn"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
