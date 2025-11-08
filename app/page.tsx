"use client";

import Link from "next/link";
import { Github, Linkedin, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const socialButtons = [
  {
    name: "GitHub",
    href: "https://github.com/Rahul2512Chauhan",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/rahul-chauhan",
    icon: Linkedin,
  },
  {
    name: "Resume",
    href: "/resume.pdf",
    icon: FileText,
  },
];

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Floating Elements - Parallax Effect */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-24 h-24 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full bg-violet-500/10 blur-3xl pointer-events-none"
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Glassmorphism background for content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 sm:p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-violet-500/5 opacity-50" />
            
            <div className="relative z-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight"
              >
                <span className="gradient-text glow-hover">
                  Rahul Chauhan
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 font-medium"
              >
                Generative AI & Full Stack Engineer @ IIT Roorkee
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
              >
                Building agentic systems, RAG pipelines, and LLM evaluation
                tools.
              </motion.p>

              {/* Social Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                className="flex flex-wrap items-center justify-center gap-4 mt-10"
              >
                {socialButtons.map((button) => {
                  const Icon = button.icon;
                  return (
                    <motion.div
                      key={button.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        asChild
                        variant="outline"
                        className="neon-button backdrop-blur-sm"
                      >
                        <Link
                          href={button.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Icon size={18} />
                          <span>{button.name}</span>
                        </Link>
                      </Button>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
