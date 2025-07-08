"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const certificates = [
    {
      id: 1,
      title: "React - The Complete Guide",
      issuer: "Udemy",
      date: "March 2023",
      image: "/placeholder.svg?height=80&width=80",
      skills: ["React", "Hooks", "Redux", "Context API"],
      url: "#",
    },
    {
      id: 2,
      title: "JavaScript Advanced Concepts",
      issuer: "Coursera",
      date: "November 2022",
      image: "/placeholder.svg?height=80&width=80",
      skills: ["ES6+", "Closures", "Prototypes", "Async/Await"],
      url: "#",
    },
    {
      id: 3,
      title: "Web Design Fundamentals",
      issuer: "FreeCodeCamp",
      date: "July 2022",
      image: "/placeholder.svg?height=80&width=80",
      skills: ["HTML", "CSS", "Responsive Design", "UX/UI"],
      url: "#",
    },
    {
      id: 4,
      title: "Git & GitHub Mastery",
      issuer: "Udemy",
      date: "May 2023",
      image: "/placeholder.svg?height=80&width=80",
      skills: ["Git", "GitHub", "Version Control", "Collaboration"],
      url: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="certificates"
      ref={ref}
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificates</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Courses and certifications I have completed to expand my programming
            knowledge and skills.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 shadow-xl shadow-purple-900/10 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 mr-4">
                      <div className="p-2 bg-purple-900/50 rounded-lg border border-purple-500/30">
                        <Award className="h-6 w-6 text-purple-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{cert.title}</h3>
                      <p className="text-sm text-gray-400">{cert.issuer}</p>
                    </div>
                  </div>

                  <div className="flex items-center text-xs text-gray-400 mb-4">
                    <Calendar className="h-3.5 w-3.5 mr-1.5" />
                    {cert.date}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="bg-purple-900/30 border-purple-500/30 text-purple-300 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto pt-2">
                    <Link
                      href={cert.url}
                      className="text-xs flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <span className="mr-1">View Certificate</span>
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
