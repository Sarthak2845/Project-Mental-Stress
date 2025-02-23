import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 w-full mt-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Side - Brand & Copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <motion.div
            className="text-2xl font-bold bg-clip-text text-transparent"
            style={{
              background: "linear-gradient(to right, #40E0D0, #FF8C00, #FF0080)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BrainCircuit size={32} className="inline-block text-white m-2 text-center" />
            MindMetrics
          </motion.div>
          <p className="text-sm">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>

        {/* Middle Section - Quick Links */}
        <nav className="mb-4 md:mb-0">
          <ul className="flex flex-wrap gap-4 text-sm">
            <li><a href="/privacy" className="hover:text-amber-400">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-amber-400">Terms of Service</a></li>
            <li><a href="/contact" className="hover:text-amber-400">Contact Us</a></li>
          </ul>
        </nav>

        {/* Right Side - Social Media Links */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-amber-400">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-amber-400">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-amber-400">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
