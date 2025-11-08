"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactLinks = [
  {
    name: "Email",
    href: "mailto:rahul_c@me.iitr.ac.in",
    icon: Mail,
    label: "rahul_c@me.iitr.ac.in",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/rahul-chauhan",
    icon: Linkedin,
    label: "linkedin.com/in/rahul-chauhan",
  },
  {
    name: "GitHub",
    href: "https://github.com/Rahul2512Chauhan",
    icon: Github,
    label: "github.com/Rahul2512Chauhan",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/rahul2512chauhan",
    icon: Twitter,
    label: "x.com/rahul2512chauhan",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    // TODO: Integrate with Formspree or EmailJS later
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="gradient-text text-4xl sm:text-5xl md:text-6xl font-bold font-heading glow-hover"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-gray-400"
          >
            Let's build something amazing together.
          </motion.p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact Info */}
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
            className="space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-white mb-4">
                Let's Connect
              </h2>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                I'm always open to AI collaborations, research work, or startup
                projects. Drop me a message or reach out directly!
              </p>
            </motion.div>

            {/* Contact Links */}
            <motion.div variants={fadeInUp} className="space-y-4 pt-4">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                    whileHover={{ scale: 1.02, x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-colors">
                      <Icon
                        size={20}
                        className="text-gray-300 group-hover:text-blue-400 transition-colors"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        {link.name}
                      </p>
                      <p className="text-white text-sm font-medium truncate group-hover:text-blue-400 transition-colors">
                        {link.label}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="lg:pl-8 lg:border-l lg:border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or collaboration idea..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                />
              </div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="neon-button w-full font-medium py-6 text-base"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
        </div>
      </div>
    </div>
  );
}

