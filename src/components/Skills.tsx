"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Server,
  Layers,
  Github,
  MessageCircle,
  Clock,
  Brain,
  Lightbulb,
  FileJson,
  Globe,
  Palette,
} from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import Three.js components with no SSR
const ThreeComponents = dynamic(() => import("@/components/ThreeComponent"), {
  ssr: false,
});

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Technical skills with icons
  const technicalSkills = [
    { name: "HTML & CSS", level: 90, icon: <Globe className="h-6 w-6" /> },
    { name: "JavaScript", level: 85, icon: <FileJson className="h-6 w-6" /> },
    { name: "React.js", level: 80, icon: <Layers className="h-6 w-6" /> },
    { name: "Node.js", level: 65, icon: <Server className="h-6 w-6" /> },
    { name: "UI/UX Design", level: 70, icon: <Palette className="h-6 w-6" /> },
    { name: "Git & GitHub", level: 75, icon: <Github className="h-6 w-6" /> },
  ];

  // Soft skills with icons
  const softSkills = [
    {
      name: "Effective Communication",
      icon: <MessageCircle className="h-5 w-5" />,
    },
    { name: "Time Management", icon: <Clock className="h-5 w-5" /> },
    { name: "Problem Solving", icon: <Brain className="h-5 w-5" /> },
    { name: "Creative Thinking", icon: <Lightbulb className="h-5 w-5" /> },
  ];

  interface ProgressValues {
    [key: string]: number;
  }

  const [progressValues, setProgressValues] = useState<ProgressValues>({});

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const newValues: ProgressValues = {};
        technicalSkills.forEach((skill) => {
          newValues[skill.name] = skill.level;
        });
        setProgressValues(newValues);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section
      id="skills"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto"></div>
        </motion.div>

        {/* 3D Icons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <ThreeComponents />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              Technical Skills
            </h3>

            <div className="space-y-5">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-md bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3 text-purple-400">
                        {skill.icon}
                      </div>
                      <span className="font-medium text-white">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-purple-400">
                      {progressValues[skill.name] || 0}%
                    </span>
                  </div>

                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: `${progressValues[skill.name] || 0}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              Soft Skills
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {softSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.03 }}
                  className="bg-slate-800/50 p-5 rounded-lg border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 shadow-lg shadow-purple-900/10"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center mr-4">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{skill.name}</h4>
                      <div className="w-full mt-2">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`h-1.5 rounded-full flex-1 ${
                                i < 4
                                  ? "bg-gradient-to-r from-purple-500 to-indigo-500"
                                  : "bg-slate-700"
                              }`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
