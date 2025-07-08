import Link from "next/link";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Portfolio
            </h3>
            <p className="mb-4 text-gray-300 max-w-md">
              Thank you for visiting my portfolio. If you’re interested in
              collaborating or have any questions, feel free to get in touch
              with me.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/thientan2528/"
                target="_blank"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/thientan2812/"
                target="_blank"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/t%E1%BA%A5n-d%C6%B0%C6%A1ng-321186343/"
                target="_blank"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/ttnb2528"
                target="_blank"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="block">Email:</span>
                <Link
                  href="mailto:thientan2812@gmail.com"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  thientan2812@gmail.com
                </Link>
              </li>
              <li className="text-gray-300">
                <span className="block">Phone:</span>
                <Link
                  href="tel:+0941214495"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  +84941 21 44 95
                </Link>
              </li>
              <li className="text-gray-300">
                <span className="block">Address:</span>
                <span>Cho Moi District, An Giang Province, VietNam</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-900/30 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
