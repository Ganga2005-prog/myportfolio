"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ["home", "about", "projects", "skills"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "Personal Blog Website",
      description: "Created a responsive blog using React and Tailwind CSS with dark mode support and smooth animations.",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      gradient: "from-blue-400 to-cyan-400",
      icon: "📝"
    },
    {
      title: "Todo App",
      description: "Built a task management app with local storage, drag-and-drop functionality, and filter options.",
      tags: ["HTML", "CSS", "JavaScript"],
      gradient: "from-emerald-400 to-green-400",
      icon: "✅"
    },
    {
      title: "Weather App",
      description: "Developed a weather application using OpenWeather API with current weather and 5-day forecast display.",
      tags: ["React", "API", "CSS3"],
      gradient: "from-orange-400 to-yellow-400",
      icon: "🌤️"
    },
    {
      title: "Portfolio Website",
      description: "Designed and developed my personal portfolio with modern UI/UX and interactive animations.",
      tags: ["Next.js", "Tailwind", "Framer Motion"],
      gradient: "from-pink-400 to-rose-400",
      icon: "🎨"
    }
  ];

  const skills = [
    { 
      category: "Frontend", 
      icon: "💻",
      items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"] 
    },
    { 
      category: "Backend Basics", 
      icon: "🔧",
      items: ["Node.js", "Express", "MongoDB", "REST APIs"] 
    },
    { 
      category: "Tools", 
      icon: "🛠️",
      items: ["Git", "GitHub", "VS Code", "Figma", "Postman"] 
    },
    { 
      category: "Currently Learning", 
      icon: "📚",
      items: ["TypeScript", "Next.js", "PostgreSQL", "Docker"] 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      {/* Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-200 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-teal-200 rounded-full opacity-20"></div>
      </div>



      {/* Mobile Header */}
      <nav className="fixed top-0 w-full z-50 md:hidden bg-white shadow-md">
        <div className="px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Ganga.dev</span>
            </div>
            <button
              className="text-gray-700 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`w-6 h-0.5 bg-gray-700 mb-1.5 transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
              <div className={`w-6 h-0.5 bg-gray-700 mb-1.5 transition-all ${isMenuOpen ? "opacity-0" : ""}`}></div>
              <div className={`w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="bg-white border-t border-gray-200 px-4 py-4">
            {["Home", "About", "Projects", "Skills"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="md:ml-20 relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-20 md:pt-0">
          <div className="max-w-6xl">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-300">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              <span className="text-blue-800 text-sm font-medium">Available for opportunities</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6">
              Ganga K
            </h1>

            <div className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Aspiring Web Developer
              </span>
            </div>

            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-12 leading-relaxed">
              Computer Science student crafting modern web experiences. 
              Passionate about clean code, beautiful design, and continuous learning.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <a
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  View My Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a
                href="mailto:ganga.dev@example.com"
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all border-2 border-blue-600"
              >
                Say Hello 👋
              </a>
            </div>

            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-110">
                <span className="text-2xl">🐙</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-110">
                <span className="text-2xl">💼</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-110">
                <span className="text-2xl">📧</span>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-20">
          <div className="max-w-6xl w-full">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <div className="inline-block px-4 py-2 rounded-full bg-cyan-100 text-cyan-800 text-sm font-medium mb-6 border border-cyan-300">
                  About Me
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Building Digital Experiences
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mb-8 rounded-full"></div>
                
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  I&apos;m a Computer Science student with a passion for creating beautiful, 
                  functional websites that make a difference. Every line of code is an 
                  opportunity to learn something new.
                </p>
                
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  Currently exploring the full spectrum of web development, from crafting 
                  pixel-perfect frontends to building robust backend systems.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white border-2 border-blue-200 rounded-xl p-4 shadow-md hover:shadow-lg transition-all">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1">10+</div>
                    <div className="text-gray-600 text-sm">Projects</div>
                  </div>
                  <div className="bg-white border-2 border-cyan-200 rounded-xl p-4 shadow-md hover:shadow-lg transition-all">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1">CS</div>
                    <div className="text-gray-600 text-sm">Student</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      🎓
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-semibold mb-2">Education</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Pursuing Computer Science degree with focus on software development 
                        and problem-solving
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-cyan-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      💡
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-semibold mb-2">Problem Solver</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Love tackling complex challenges and finding elegant solutions 
                        through code
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-teal-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      🚀
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-semibold mb-2">Always Learning</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Constantly exploring new technologies and best practices in web development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-20">
          <div className="max-w-6xl w-full">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6 border border-blue-300">
              My Work
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mb-12 rounded-full"></div>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105"
                >
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl relative overflow-hidden`}>
                    <span className="relative z-10 group-hover:scale-110 transition-transform">{project.icon}</span>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-xs border border-blue-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium group"
                    >
                      View Project
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-20">
          <div className="max-w-6xl w-full">
            <div className="inline-block px-4 py-2 rounded-full bg-teal-100 text-teal-800 text-sm font-medium mb-6 border border-teal-300">
              Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mb-12 rounded-full"></div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillCategory, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all hover:scale-105"
                >
                  <div className="text-3xl mb-4">{skillCategory.icon}</div>
                  <h3 className="text-gray-900 font-semibold mb-4">{skillCategory.category}</h3>
                  <div className="space-y-2">
                    {skillCategory.items.map((skill, i) => (
                      <div
                        key={i}
                        className="text-gray-700 text-sm"
                      >
                        • {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-2 border-gray-200 px-6 md:px-12 lg:px-20 py-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  Let&apos;s Connect
                </h3>
                <p className="text-gray-700 text-sm">Feel free to reach out for collaborations or just a friendly hello!</p>
              </div>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center border-2 border-blue-200 hover:bg-blue-100 transition-all hover:scale-110">
                  <span className="text-2xl">🐙</span>
                </a>
                <a href="#" className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center border-2 border-cyan-200 hover:bg-cyan-100 transition-all hover:scale-110">
                  <span className="text-2xl">💼</span>
                </a>
                <a href="mailto:ganga.dev@example.com" className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center border-2 border-teal-200 hover:bg-teal-100 transition-all hover:scale-110">
                  <span className="text-2xl">📧</span>
                </a>
              </div>
            </div>
            <div className="text-center text-gray-600 text-sm border-t border-gray-200 pt-8">
              © 2025 Ganga K. Crafted with 💙 and code
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}