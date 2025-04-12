import { Brain, Search, Link, PenTool, FolderKanban, Sparkles, Send, ArrowRight, Check, Github, Twitter, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate  = useNavigate();
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-white py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Brain className="h-20 w-20 mx-auto mb-8 opacity-90" />
          <h1 className="text-6xl font-bold mb-8 tracking-tight">Your Second Brain in the Cloud</h1>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-indigo-50">
            Capture thoughts, connect ideas, and never lose track of knowledge again.
          </p>
          <div className="flex gap-6 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors flex items-center gap-2 shadow-lg" onClick={()=>{navigate("/signup")}}>
              Get Started <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Features() {
  const features = [
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Capture Everything",
      description: "Quickly jot down ideas, tasks, and inspiration in one central place"
    },
    {
      icon: <Link className="h-8 w-8" />,
      title: "Connect Ideas",
      description: "Link related thoughts and concepts effortlessly to deepen understanding"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Find Instantly",
      description: "Search through all your notes and thoughts with lightning speed"
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Use a Second Brain?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-indigo-600 mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Capture",
      description: "Step 1 of your second-brain workflow to master your knowledge"
    },
    {
      icon: <FolderKanban className="h-8 w-8" />,
      title: "Organize",
      description: "Step 2 of your second-brain workflow to master your knowledge"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Distill",
      description: "Step 3 of your second-brain workflow to master your knowledge"
    },
    {
      icon: <Send className="h-8 w-8" />,
      title: "Express",
      description: "Step 4 of your second-brain workflow to master your knowledge"
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="text-indigo-600">{step.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "Jane Doe",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100",
      quote: "This app changed the way I work and think."
    },
    {
      name: "Alex Smith",
      role: "Content Creator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100",
      quote: "This app changed the way I work and think."
    },
    {
      name: "Sarah Johnson",
      role: "Entrepreneur",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100",
      quote: "This app changed the way I work and think."
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Users Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-xl"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: ["Note syncing", "Knowledge linking", "Multi-device access"]
    },
    {
      name: "Pro",
      price: "$9",
      features: ["Note syncing", "Knowledge linking", "Multi-device access"]
    },
    {
      name: "Team",
      price: "$29",
      features: ["Note syncing", "Knowledge linking", "Multi-device access"]
    }
  ];
  const navigate  = useNavigate();
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-4xl font-bold text-indigo-600 mb-8">{plan.price}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-indigo-600" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors" onClick={()=>{navigate("/signup")}}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/ronakmaheshwari",
      label: "GitHub"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://x.com/0xronak077",
      label: "Twitter"
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      href: "https://medium.com/@ronakmaheshwari077",
      label: "Medium"
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 text-white mb-4">
              <Brain className="h-8 w-8" />
              <span className="text-xl font-bold">SecondBrain</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Capture thoughts, connect ideas, and never lose track of knowledge again. Build your second brain in the cloud.
            </p>
          </div>
          <div className="md:text-right">
            <h3 className="text-white text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-6 md:justify-end">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} SecondBrain. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-sm hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}
