import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ParticleBackground from "@/components/ParticleBackground";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

import React from "react";

const page = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-purple-950 text-white relative overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default page;
