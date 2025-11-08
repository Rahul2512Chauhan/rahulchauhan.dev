"use client";

import Link from "next/link";
import { Github } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Page Header */}
        <div className="text-center mb-12 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="gradient-text text-4xl sm:text-5xl md:text-6xl font-bold font-heading mb-8 glow-hover"
          >
            Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-gray-400"
          >
            Selected AI & Full Stack Work
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                rotate: 0.5,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                },
              }}
            >
              <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all duration-300 flex flex-col">
                {/* Project Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-4 flex-1">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 rounded-xl px-2 py-1 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <div className="mt-auto">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-cyan-400/40 hover:text-cyan-300 transition-all duration-300"
                  >
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
