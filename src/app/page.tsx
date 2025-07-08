import About from "@/components/About";
import Hero from "@/components/Hero";
import ParticleBackground from "@/components/ParticleBackground";
import React from "react";

const page = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-purple-950 text-white relative overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Hero />
        <About />
      </div>
    </main>
  );
};

export default page;
