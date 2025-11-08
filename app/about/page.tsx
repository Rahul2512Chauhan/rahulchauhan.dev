"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const researchInterests = [
  "LLM Fine-tuning",
  "RAG Evaluation",
  "Agentic Systems",
  "Multilingual Language Models",
  "Low-Resource AI",
];

const skillGroups = {
  "AI / ML": [
    "LangChain",
    "LangGraph",
    "RAGAS",
    "LangSmith",
    "PyTorch",
    "HuggingFace",
    "LoRA",
    "OpenAI APIs",
    "CrewAI",
  ],
  "Backend": ["Python", "FastAPI", "Go", "Django", "SQL", "REST APIs"],
  "Frontend": [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Shadcn/UI",
    "Framer Motion",
  ],
  "Infra / Tools": [
    "Pinecone",
    "FAISS",
    "ChromaDB",
    "Vercel",
    "Docker",
    "Git",
    "Postman",
  ],
};

const socialLinks = [
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
    name: "Twitter/X",
    href: "https://x.com/rahul2512chauhan",
    icon: Twitter,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function AboutPage() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-4"
        >
          <h1 className="gradient-text text-4xl sm:text-5xl md:text-6xl font-bold font-heading mb-4 glow-hover">
            About Me
          </h1>
          <p className="text-lg sm:text-xl text-gray-400">
            Who I am & what I do
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="flex flex-col items-center lg:items-start space-y-6"
          >
            {/* Profile Image */}
            <motion.div
              variants={fadeInUp}
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                {!imageError ? (
                  <Image
                    src="/profile.jpg"
                    alt="Rahul Chauhan"
                    width={220}
                    height={220}
                    className="rounded-full border-4 border-cyan-400 shadow-[0_0_35px_rgba(0,255,255,0.4)] object-cover mx-auto hover:scale-105 transition-transform duration-300"
                    priority
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-[220px] h-[220px] rounded-full border-4 border-cyan-400 shadow-[0_0_35px_rgba(0,255,255,0.4)] bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mx-auto">
                    <span className="text-6xl font-bold text-white/50">RC</span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Name */}
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-white text-center lg:text-left"
            >
              Rahul Chauhan
            </motion.h2>

            {/* Title */}
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 text-center lg:text-left italic"
            >
              Generative AI & Full Stack Engineer @ IIT Roorkee
            </motion.p>

            {/* Tagline */}
            <motion.p
              variants={fadeInUp}
              className="text-base text-gray-400 text-center lg:text-left"
            >
              Building agentic systems, RAG pipelines, and LLM evaluation tools.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 pt-2"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 relative group"
                    aria-label={social.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon
                      size={24}
                      className="drop-shadow-[0_0_8px_rgba(0,255,255,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(0,255,255,0.6)] transition-all duration-300"
                    />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="space-y-8"
          >
            {/* About Me Section */}
            <motion.section
              variants={fadeInUp}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                About Me
              </h3>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                I'm an undergraduate at IIT Roorkee passionate about Generative
                AI, Retrieval-Augmented Generation (RAG), and LLM evaluation
                frameworks. My work focuses on building agentic systems,
                low-resource fine-tuning, and scalable AI workflows. I enjoy
                contributing to open-source projects and exploring the boundaries
                of autonomous AI.
              </p>
            </motion.section>

            {/* Research Interests Section */}
            <motion.section
              variants={fadeInUp}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-2xl font-bold mb-4 hover:tracking-wider transition-all duration-300">
                Research Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {researchInterests.map((interest) => (
                  <motion.span
                    key={interest}
                    className="bg-cyan-700/20 border border-cyan-400/20 text-cyan-300 rounded-xl px-3 py-1 text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-default"
                    whileHover={{ scale: 1.05 }}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.section>

            {/* Technical Skills Section */}
            <motion.section
              variants={fadeInUp}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-2xl font-bold mb-6 hover:tracking-wider transition-all duration-300">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {Object.entries(skillGroups).map(([category, items]) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 text-lg font-semibold mb-3">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <motion.span
                          key={skill}
                          className="bg-gradient-to-br from-cyan-700/20 to-indigo-800/20 border border-cyan-300/30 rounded-xl px-3 py-1 text-sm font-medium text-gray-200 hover:scale-105 transition-transform duration-300 cursor-default"
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
