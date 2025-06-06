"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const calculateTransform = (x: number, y: number, strength = 0.02) => {
    if (!isMounted) return "translate(0px, 0px)";

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = (x - centerX) * strength;
    const deltaY = (y - centerY) * strength;
    return `translate(${deltaX}px, ${deltaY}px)`;
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <Navbar />

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-700/20 blur-3xl"
          style={{
            transform: calculateTransform(
              mousePosition.x,
              mousePosition.y,
              0.01
            ),
          }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-700/20 blur-3xl"
          style={{
            transform: calculateTransform(
              mousePosition.x,
              mousePosition.y,
              0.02
            ),
          }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full bg-cyan-700/20 blur-3xl"
          style={{
            transform: calculateTransform(
              mousePosition.x,
              mousePosition.y,
              0.015
            ),
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Hi,
              </span>{" "}
              My name's
              <span className="block mt-2">Duong Thien Tan 😎</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              I’m particularly passionate about React and am actively expanding
              my knowledge by building projects with Next.js.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 text-lg py-6 px-8 shadow-lg shadow-purple-700/20">
                <Link href="#projects">See Projects</Link>
              </Button>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-400 bg-transparent hover:bg-purple-950/50 hover:text-white text-lg py-6 px-8"
              >
                <Link href="#contact">Contact</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl shadow-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/thientan/image/upload/v1749197744/avatar_wjeicc.webp"
                  alt="Avatar"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <Link
          href="#about"
          className="text-purple-400 hover:text-purple-300 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
