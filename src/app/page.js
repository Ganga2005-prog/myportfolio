"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-6000"></div>
      </div>

      {/* Mouse Follower */}
      <div 
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      >
        <div className="w-full h-full bg-white rounded-full animate-ping"></div>
      </div>

      {/* Navigation Bar */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-700 ${
        isScrolled 
          ? "bg-gradient-to-r from-purple-900/90 via-pink-900/90 to-indigo-900/90 backdrop-blur-lg shadow-2xl shadow-purple-500/25" 
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 group">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent hover:scale-110 transform transition-all duration-300 animate-rainbow-text">
                ✨Portfolio
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { name: "Home", color: "from-pink-400 to-rose-400" },
                  { name: "About", color: "from-cyan-400 to-blue-400" },
                  { name: "Projects", color: "from-purple-400 to-indigo-400" },
                  { name: "Contact", color: "from-yellow-400 to-orange-400" }
                ].map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.name.toLowerCase())}
                    className={`relative px-6 py-3 rounded-full text-sm font-bold transition-all duration-500 hover:scale-110 transform hover:rotate-3 group animate-float ${
                      activeSection === item.name.toLowerCase()
                        ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                        : "text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r " + item.color
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {activeSection === item.name.toLowerCase() && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-white hover:text-pink-400 transition-colors duration-300 transform hover:rotate-180 hover:scale-125">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 pt-32 pb-20 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Animated Profile Avatar */}
            <div className="mb-12 relative animate-bounce-in">
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-green-500 p-2 shadow-2xl shadow-purple-500/50 animate-spin-slow hover:animate-spin-fast transition-all duration-300">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 to-purple-900 flex items-center justify-center hover:scale-105 transform transition-all duration-300">
                  <span className="text-5xl font-bold bg-gradient-to-r from-cyan-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent animate-pulse">
                    JD
                  </span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-green-400 to-teal-500 rounded-full animate-bounce animation-delay-1000 shadow-lg"></div>
            </div>

            <h1 className="text-6xl sm:text-8xl font-black text-white mb-8 animate-text-reveal">
              <span className="inline-block bg-gradient-to-r from-pink-400 via-purple-400 via-blue-400 via-green-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-x bg-300% hover:animate-rainbow-text">
                John Doe
              </span>
            </h1>
            
            <p className="text-2xl sm:text-3xl text-transparent bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text mb-4 animate-slide-in-up animation-delay-500 font-semibold">
              Full Stack Developer
            </p>
            <p className="text-lg sm:text-xl text-transparent bg-gradient-to-r from-purple-300 to-yellow-300 bg-clip-text mb-12 animate-slide-in-up animation-delay-700 font-medium">
              Creating Digital Magic ✨ One Line at a Time
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-1000">
              <button 
                onClick={() => scrollToSection("projects")}
                className="group relative px-10 py-5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-full font-bold text-xl shadow-2xl shadow-purple-500/50 hover:shadow-pink-500/50 transform hover:scale-110 transition-all duration-500 overflow-hidden animate-shimmer hover:animate-wiggle"
              >
                <span className="relative z-10 flex items-center gap-3">
                  🚀 View My Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x bg-300%"></div>
              </button>
              
              <button 
                onClick={() => scrollToSection("contact")}
                className="group px-10 py-5 border-3 border-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text rounded-full font-bold text-xl hover:bg-gradient-to-r hover:from-cyan-400 hover:to-pink-400 hover:text-white transform hover:scale-110 transition-all duration-500 relative overflow-hidden hover:animate-pulse"
                style={{ borderImage: 'linear-gradient(45deg, #22d3ee, #ec4899) 1' }}
              >
                💬 Get In Touch
              </button>
            </div>

            {/* Floating Skills */}
            <div className="mt-16 flex flex-wrap justify-center gap-4">
              {[
                { name: "React", color: "from-cyan-400 to-blue-500", icon: "⚛️" },
                { name: "Next.js", color: "from-slate-400 to-slate-600", icon: "▲" },
                { name: "TypeScript", color: "from-blue-500 to-blue-700", icon: "📘" },
                { name: "Node.js", color: "from-green-500 to-green-700", icon: "🟢" },
                { name: "Design", color: "from-pink-500 to-rose-500", icon: "🎨" }
              ].map((skill, index) => (
                <div
                  key={skill.name}
                  className={`px-6 py-3 rounded-full bg-gradient-to-r ${skill.color} text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-float hover:animate-wiggle cursor-pointer`}
                  style={{ animationDelay: `${index * 200 + 1500}ms` }}
                >
                  <span className="flex items-center gap-2">
                    {skill.icon} {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-24 bg-gradient-to-r from-purple-900/50 via-pink-900/50 to-indigo-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent mb-6 animate-bounce-in animate-gradient-x bg-300%">
              🌟 About Me
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full animate-expand"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <p className="text-xl text-gray-200 leading-relaxed mb-8 font-medium">
                I'm a passionate developer who transforms coffee into code and dreams into digital reality! 
                With a love for vibrant designs and smooth animations, I create experiences that don't just work—they dazzle! ✨
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Projects Completed", value: "50+", color: "from-green-400 to-emerald-500" },
                  { label: "Happy Clients", value: "25+", color: "from-blue-400 to-cyan-500" },
                  { label: "Years Experience", value: "5+", color: "from-purple-400 to-pink-500" },
                  { label: "Cups of Coffee", value: "∞", color: "from-yellow-400 to-orange-500" }
                ].map((stat, index) => (
                  <div key={stat.label} className={`text-center p-6 rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up hover:animate-pulse`} style={{ animationDelay: `${index * 200}ms` }}>
                    <div className="text-3xl font-black text-white mb-2">{stat.value}</div>
                    <div className="text-sm font-semibold text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="w-80 h-80 mx-auto rounded-3xl bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 p-8 shadow-2xl shadow-purple-500/50 hover:shadow-pink-500/50 transform hover:rotate-3 transition-all duration-500 animate-float">
                <div className="w-full h-full bg-gradient-to-br from-slate-900 to-purple-900 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4 animate-bounce">🧑‍💻</div>
                    <div className="text-xl font-bold mb-2">Coding Wizard</div>
                    <div className="text-sm opacity-80">Making magic happen!</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold animate-spin-slow shadow-lg">⭐</div>
              <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce shadow-lg">🔥</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 animate-bounce-in animate-gradient-x bg-300%">
              🎯 Featured Projects
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full animate-expand"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "E-Commerce Platform", desc: "Full-stack shopping experience", gradient: "from-pink-500 via-red-500 to-yellow-500", icon: "🛒", tech: ["React", "Node.js", "MongoDB"] },
              { title: "Social Media App", desc: "Connect and share with friends", gradient: "from-purple-500 via-pink-500 to-red-500", icon: "📱", tech: ["React Native", "Firebase", "Redux"] },
              { title: "Portfolio Website", desc: "Stunning personal showcase", gradient: "from-green-400 via-blue-500 to-purple-600", icon: "💼", tech: ["Next.js", "Tailwind", "Framer"] },
              { title: "Task Manager", desc: "Organize your workflow", gradient: "from-yellow-400 via-orange-500 to-red-500", icon: "✅", tech: ["Vue.js", "Express", "PostgreSQL"] },
              { title: "Crypto Tracker", desc: "Real-time market analysis", gradient: "from-indigo-500 via-purple-500 to-pink-500", icon: "₿", tech: ["React", "D3.js", "APIs"] },
              { title: "Chat Application", desc: "Real-time messaging platform", gradient: "from-teal-400 via-blue-500 to-purple-600", icon: "💬", tech: ["Socket.io", "Node.js", "Redis"] }
            ].map((project, index) => (
              <div 
                key={project.title}
                className={`group relative bg-gradient-to-br ${project.gradient} p-1 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 animate-fade-in-up hover:animate-wiggle cursor-pointer`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-slate-900 rounded-xl p-8 h-full">
                  <div className="text-6xl mb-4 animate-bounce">{project.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 font-medium">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-semibold text-white border border-white/20 hover:bg-white/20 transition-all duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-xl hover:from-purple-500 hover:to-pink-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    View Project 🚀
                  </button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-24 bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-pink-900/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-5xl font-black bg-gradient-to-r from-yellow-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-6 animate-bounce-in animate-gradient-x bg-300%">
            🤝 Let's Create Magic Together
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-yellow-500 to-pink-500 mx-auto rounded-full animate-expand mb-12"></div>
          
          <p className="text-2xl text-gray-200 mb-12 font-semibold animate-fade-in-up animation-delay-500">
            Ready to turn your wildest digital dreams into stunning reality? Let's make something incredible! ✨
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: "📧", title: "Email", value: "hello@johndoe.dev", color: "from-blue-400 to-cyan-500" },
              { icon: "📱", title: "Phone", value: "+1 (555) 123-4567", color: "from-green-400 to-emerald-500" },
              { icon: "📍", title: "Location", value: "San Francisco, CA", color: "from-purple-400 to-pink-500" }
            ].map((contact, index) => (
              <div key={contact.title} className={`p-6 rounded-2xl bg-gradient-to-br ${contact.color} text-white shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 animate-fade-in-up hover:animate-wiggle cursor-pointer`} style={{ animationDelay: `${index * 200 + 700}ms` }}>
                <div className="text-4xl mb-3 animate-bounce">{contact.icon}</div>
                <div className="font-bold text-lg mb-1">{contact.title}</div>
                <div className="text-sm opacity-90">{contact.value}</div>
              </div>
            ))}
          </div>
          
          <button className="group relative px-12 py-6 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 text-white rounded-full font-black text-2xl shadow-2xl shadow-pink-500/50 hover:shadow-yellow-500/50 transform hover:scale-110 transition-all duration-500 overflow-hidden animate-shimmer hover:animate-wiggle">
            <span className="relative z-10 flex items-center gap-4">
              🚀 Start a Project
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x bg-300%"></div>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t-2 border-gradient-to-r from-pink-500 to-purple-500">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <div className="flex justify-center space-x-8 mb-8">
            {[
              { name: "GitHub", icon: "🐱", color: "hover:text-purple-400" },
              { name: "LinkedIn", icon: "💼", color: "hover:text-blue-400" },
              { name: "Twitter", icon: "🐦", color: "hover:text-cyan-400" },
              { name: "Instagram", icon: "📷", color: "hover:text-pink-400" }
            ].map((social) => (
              <button key={social.name} className={`text-2xl text-gray-400 ${social.color} transform hover:scale-125 transition-all duration-300 hover:animate-bounce`}>
                {social.icon}
              </button>
            ))}
          </div>
          <p className="text-gray-400 font-semibold">
            © 2024 John Doe. Built with 💜 Next.js & Tailwind CSS
          </p>
          <p className="text-sm text-gray-500 mt-2 animate-pulse">
            Making the web more colorful, one pixel at a time! 🌈
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes rainbow-text {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(3deg); }
          75% { transform: rotate(-3deg); }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-fast {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3) translateY(-100px); }
          50% { transform: scale(1.05) translateY(-30px); }
          70% { transform: scale(0.9) translateY(0); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes text-reveal {
          0% { opacity: 0; transform: translateY(50px) rotateX(90deg); }
          100% { opacity: 1; transform: translateY(0) rotateX(0deg); }
        }

        @keyframes slide-in-up {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-in-left {
          0% { opacity: 0; transform: translateX(-100px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes slide-in-right {
          0% { opacity: 0; transform: translateX(100px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes expand {
          0% { width: 0; }
          100% { width: 8rem; }
        }

        .bg-300% { background-size: 300% 300%; }

        .animate-blob { animation: blob 7s infinite; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-rainbow-text { animation: rainbow-text 2s linear infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-wiggle { animation: wiggle 1s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 2s linear infinite; }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
        .animate-spin-fast { animation: spin-fast 0.5s linear infinite; }
        .animate-bounce-in { animation: bounce-in 1s ease-out forwards; opacity: 0; }
        .animate-text-reveal { animation: text-reveal 1s ease-out forwards; opacity: 0; }
        .animate-slide-in-up { animation: slide-in-up 0.8s ease-out forwards; opacity: 0; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out forwards; opacity: 0; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out forwards; opacity: 0; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
        .animate-expand { animation: expand 1s ease-out forwards; width: 0; }

        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-700 { animation-delay: 700ms; }
        .animation-delay-1000 { animation-delay: 1000ms; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-6000 { animation-delay: 6s; }
      `}</style>
    </div>
  );
}