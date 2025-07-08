"use client";

import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Code, GraduationCap, Laptop } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Introduce</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 mb-6"
            >
              Hello! I'm Tan, a passionate programmer constantly learning to
              enhance my skills.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 mb-6"
            >
              Currently, I'm using React.js for personal projects and preparing
              to expand into Next.js for web development.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg text-gray-300">
              Besides coding, I'm also deeply interested in exploring innovative
              technologies and staying up to date with the latest tech trends. I
              believe maintaining a balance between learning, practical
              application, and personal life is the key to well-rounded growth.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 gap-6"
          >
            <motion.div variants={itemVariants}>
              <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 shadow-xl shadow-purple-900/10">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 bg-gradient-to-br from-purple-600 to-indigo-600 p-3 rounded-full">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        Keep Learning
                      </h3>
                      <p className="text-gray-300">
                        Continuously learning and building modern web
                        applications with React.js, and expanding skills into
                        Next.js and cutting-edge web technologies.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 shadow-xl shadow-purple-900/10">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-gradient-to-br from-purple-600 to-indigo-600 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      Build Projects
                    </h3>
                    <p className="text-gray-300">
                      Applying new skills by building personal and collaborative
                      projects, turning ideas into functional and creative web
                      applications.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 shadow-xl shadow-purple-900/10">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-gradient-to-br from-purple-600 to-indigo-600 p-3 rounded-full">
                    <Laptop className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      Explore Technology
                    </h3>
                    <p className="text-gray-300">
                      Passionate about exploring innovative technologies,
                      staying up to date with the latest trends, and constantly
                      improving my development skills.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
