"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [showMore, setShowMore] = useState(false);

  const featuredProjects = [
    {
      id: 1,
      title: "iPhone 14 Dynamic Islands",
      description:
        "An interactive CSS-only recreation of iPhone 14's Dynamic Island feature with smooth animations and color theme switching. Features realistic phone design, hover/focus interactions, music player interface, and multiple color variants including Deep Purple, Gold, Space Black, and Silver.",
      image:
        "https://res.cloudinary.com/thientan/image/upload/demo_iphoneUI_p3ftju.png",
      tags: [
        "HTML",
        "CSS",
        "CSS Animations",
        "Interactive Design",
        "Pure CSS",
        "UI/UX",
        "Responsive Design",
        "CSS Grid",
        "CSS Custom Properties",
      ],
      githubUrl: "https://github.com/ttnb2528/Iphone-14",
      liveUrl: "https://ttnb2528.github.io/Iphone-14/",
    },
    {
      id: 2,
      title: "Synchronous Chat App",
      description:
        "A full-stack real-time messaging application with direct messaging and group channels. Features include file sharing, emoji picker, user authentication, profile management, and real-time notifications. Built with modern web technologies and deployed on Render.",
      image:
        "https://res.cloudinary.com/thientan/image/upload/demo_chat_app_vumgrg.png",
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "Tailwind CSS",
        "Zustand",
        "JWT",
        "Cloudinary",
        "Vite",
      ],
      githubUrl: "https://github.com/ttnb2528/Sync-chat-app",
      liveUrl: "https://sync-chat-app.onrender.com/",
    },
    {
      id: 3,
      title: "Pharmacy Management System",
      description:
        "A comprehensive pharmacy e-commerce platform with admin dashboard, ML content moderation, and complete business management features. Includes inventory management, prescription handling, payment integration (PayPal/VNPay), loyalty program, and AI-powered toxic comment detection using PhoBERT model.",
      image: "https://res.cloudinary.com/thientan/image/upload/demo_pharmacySystem_euvant.png",
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Python",
        "Flask",
        "PhoBERT",
        "Machine Learning",
        "PayPal",
        "VNPay",
        "Tailwind CSS",
        "Zustand",
        "Cloudinary",
        "JWT",
        "Shadcn UI",
      ],
      githubUrl: "https://github.com/ttnb2528/Pharmacy",
      liveUrl: "#",
    },
  ];

  // const additionalProjects = [
  //   {
  //     id: 4,
  //     title: "Project 4",
  //     description:
  //       "A small project to practice using external APIs and handling asynchronous data.",
  //     image: "/placeholder.svg?height=300&width=500",
  //     tags: ["React", "Fetch API", "Async/Await"],
  //     githubUrl: "#",
  //     liveUrl: "#",
  //   },
  //   {
  //     id: 5,
  //     title: "Project 5",
  //     description:
  //       "A simple task management app with features to add, edit, delete, and filter tasks.",
  //     image: "/placeholder.svg?height=300&width=500",
  //     tags: ["React", "LocalStorage", "CSS"],
  //     githubUrl: "#",
  //     liveUrl: "#",
  //   },
  //   {
  //     id: 6,
  //     title: "Project 6",
  //     description:
  //       "A product landing page with responsive design and smooth transition effects.",
  //     image: "/placeholder.svg?height=300&width=500",
  //     tags: ["HTML", "CSS", "JavaScript"],
  //     githubUrl: "#",
  //     liveUrl: "#",
  //   },
  // ];

  const toggleShowMore = () => setShowMore(!showMore);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-16 md:py-24 bg-slate-900/50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Below are some projects I’ve built to learn and practice my
            programming skills.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variants={itemVariants}
            />
          ))}
        </motion.div>

        {/* <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
            >
              {additionalProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          )}
        </AnimatePresence> */}

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="border-purple-500 text-purple-400 hover:bg-purple-900/50 group px-6"
            onClick={toggleShowMore}
          >
            <span className="flex items-center">
              {showMore ? "Show Less" : "Show More Projects"}
              <ChevronDown
                className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                  showMore ? "rotate-180" : ""
                }`}
              />
            </span>
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
}

function ProjectCard({ project, variants }: { project: any; variants?: any }) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <Card className="overflow-hidden bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 shadow-xl shadow-purple-900/10 h-full flex flex-col">
        <div className="aspect-video overflow-hidden relative group">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <CardContent className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
          <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-xs font-medium bg-purple-900/50 text-purple-300 px-2.5 py-0.5 rounded-full border border-purple-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="border-purple-500 text-purple-400 hover:bg-purple-900/50"
            >
              <Link href={project.githubUrl} className="flex items-center">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0"
            >
              <Link href={project.liveUrl} className="flex items-center">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
