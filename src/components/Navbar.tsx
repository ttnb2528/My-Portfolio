"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20 py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
        >
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks className="flex space-x-6" />
          <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0">
            <Link href="#contact">Contact</Link>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <Button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-purple-400" />
          ) : (
            <Menu className="h-6 w-6 text-purple-400" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-purple-500/20 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLinks
              className="flex flex-col space-y-4"
              onClick={toggleMenu}
            />
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 w-full">
              <Link href="#contact" onClick={toggleMenu}>
                Liên hệ
              </Link>
            </Button>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;

type NavLinksProps = {
  className: string;
  onClick?: () => void;
};

function NavLinks({ className, onClick }: NavLinksProps) {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#certificates", label: "Certificates" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <div className={cn("text-gray-300", className)}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="hover:text-purple-400 transition-colors relative group"
          onClick={onClick}
        >
          {link.label}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
    </div>
  );
}
