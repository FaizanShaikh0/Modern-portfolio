"use client";

import { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Server,
  Smartphone,
  ArrowDown,
  MapPin,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsVisible(true);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (mounted) {
      document.documentElement.classList.toggle("dark");
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const response = await fetch("https://formspree.io/f/xyzgyend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      const data = await response.json();
      setErrorMessage(data.error || "Oops! Something went wrong.");
      setStatus("error");
    }
  }

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  const skills = [
    { name: "MongoDB", level: 85, icon: "🍃" },
    { name: "Express.js", level: 88, icon: "🚀" },
    { name: "React", level: 90, icon: "⚛️" },
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "JavaScript", level: 95, icon: "🟨" },
    { name: "MySQL", level: 75, icon: "🐬" },
    { name: "Next.js", level: 82, icon: "▲" },
    { name: "TypeScript", level: 80, icon: "🔷" },
  ];

  const projects = [
    {
      title: "Tasty Burger - Food Ordering Web App",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Razorpay"],
      image: "/project1.jpg",
      github: "https://github.com/FaizanShaikh0/burgerapp",
      live: "https://burgerapp-five.vercel.app/",
    },
    {
      title: "Expense Tracker - Personal Finance Manager",
      description: "Collaborative task management with real-time updates",
      tech: ["Next.js", "Context Api", "React Hooks"],
      image: "/Expense-tracker.jpg",
      github: "https://github.com/FaizanShaikh0/Expense-Tracker",
      live: "https://expense-tracker-sigma-umber-11.vercel.app/",
    },
    {
      title: "Todo Master - Advanced Todo App",
      description: "Beautiful weather app with location-based forecasts",
      tech: ["React", "LocalStorage", "Bootstrap"],
      image: "/todo.jpg",
      github: "https://github.com/FaizanShaikh0/Todo-Master",
      live: "https://todo-master-pi.vercel.app/",
    },
  ];


  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Faizan Shaikh
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="rounded-full"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/profile.png"
                    alt="Profile"
                    width={128}
                    height={128}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Full Stack
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">Developer</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Passionate full-stack developer with 1 year of experience at
                Vyavsaay Digiworld Pvt Ltd, crafting modern web applications
                with React, Node.js, and cutting-edge technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:faizanshaikh0730@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Get In Touch
                  </Button>
                </a>
                <a
                  href="https://github.com/FaizanShaikh0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline">
                    <Github className="mr-2 h-5 w-5" />
                    View Projects
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <ArrowDown className="h-6 w-6 mx-auto animate-bounce text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Get to know me better
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a dedicated full-stack developer with a passion for creating
                innovative web solutions. Currently working at Vyavsaay
                Digiworld Pvt Ltd, where I've spent the last year honing my
                skills in modern web technologies and delivering high-quality
                applications.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                My expertise spans across frontend technologies like React and
                Next.js, backend development with Node.js and Express, and
                database management with MongoDB and MySQL. I love turning
                complex problems into simple, beautiful, and intuitive
                solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Problem Solver</Badge>
                <Badge variant="secondary">Team Player</Badge>
                <Badge variant="secondary">Quick Learner</Badge>
                <Badge variant="secondary">Detail Oriented</Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6">
                <Code className="h-8 w-8 mx-auto mb-4 text-blue-600" />
                <h4 className="font-bold mb-2">Frontend</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  React, Next.js, JavaScript
                </p>
              </Card>
              <Card className="text-center p-6">
                <Server className="h-8 w-8 mx-auto mb-4 text-green-600" />
                <h4 className="font-bold mb-2">Backend</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Node.js, Express
                </p>
              </Card>
              <Card className="text-center p-6">
                <Database className="h-8 w-8 mx-auto mb-4 text-purple-600" />
                <h4 className="font-bold mb-2">Database</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  MongoDB, MySQL
                </p>
              </Card>
              <Card className="text-center p-6">
                <Smartphone className="h-8 w-8 mx-auto mb-4 text-orange-600" />
                <h4 className="font-bold mb-2">Deployment</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  GitHub, Vercel, Netlify
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              My professional journey
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Current Experience */}
            <Card className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                  VD
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">
                    Full Stack Web Developer
                  </h3>
                  <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-4">
                    Vyavsaay Digiworld Pvt Ltd
                  </h4>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>1 Year Experience</span>
                    <MapPin className="h-4 w-4 ml-4 mr-2" />
                    <span>Remote/On-site</span>
                  </div>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>
                      • Developed and maintained full-stack web applications
                      using React, Node.js, and MongoDB
                    </li>
                    <li>
                      • Collaborated with cross-functional teams to deliver
                      high-quality software solutions
                    </li>
                    <li>
                      • Implemented responsive designs and optimized application
                      performance
                    </li>
                    <li>
                      • Participated in code reviews and maintained clean,
                      scalable codebases
                    </li>
                    <li>
                      • Worked with RESTful APIs and integrated third-party
                      services
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Previous Experience */}
            <Card className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
                  BI
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">
                    Frontend Developer
                  </h3>
                  <h4 className="text-lg text-green-600 dark:text-green-400 mb-4">
                    Barari iTech Pvt Ltd
                  </h4>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>4 Months Internship</span>
                    <MapPin className="h-4 w-4 ml-4 mr-2" />
                    <span>On-site</span>
                  </div>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>
                      • Developed responsive and user-friendly interfaces using
                      HTML5, CSS3, Bootstrap, and JavaScript.
                    </li>
                    <li>
                      • Collaborated with design team to implement pixel-perfect
                      UI components
                    </li>
                    <li>
                      • Gained hands-on experience with version control using
                      Git and GitHub
                    </li>
                    <li>
                      • Learned industry best practices for frontend development
                      and code organization
                    </li>
                    <li>
                      • Optimized front-end code for performance and faster load
                      times
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Skills</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Technologies I work with
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl mb-4">{skill.icon}</div>
                  <h3 className="font-bold mb-4">{skill.name}</h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  {/* <span className="text-sm text-gray-600 dark:text-gray-300">{skill.level}%</span> */}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Some of my recent work
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="sm" variant="outline" className="w-full">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="sm" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Let's work together on your next project
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span><a href="mailto:faizanshaikh0730@gmail.com">faizanshaikh0730@gmail.com</a></span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="h-5 w-5 text-blue-600" />
                  <span><a href="https://www.linkedin.com/in/faizan-shaikh-994784208" target="_blank">faizan-shaikh-994784208</a></span>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="h-5 w-5 text-blue-600" />
                  <span><a href="https://github.com/FaizanShaikh0" target="_blank">https://github.com/FaizanShaikh0</a></span>
                </div>
              </div>
            </div>
            <Card className="p-6">
              {/* <form className="space-y-4">
                <div>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div>
                  <Input placeholder="Subject" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" rows={4} />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Send Message
                </Button>
              </form> */}
              <form onSubmit={handleSubmit} className="space-y-4 ">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </Button>

                {status === "success" && (
                  <p className="text-green-600 mt-2">
                    Thank you! Your message was sent successfully.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 mt-2">{errorMessage}</p>
                )}
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2024 Faizan Shaikh. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
