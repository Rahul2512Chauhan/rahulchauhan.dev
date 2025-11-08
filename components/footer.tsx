"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

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
    name: "Email",
    href: "mailto:rahul_c@me.iitr.ac.in",
    icon: Mail,
  },
];

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col space-y-6">
          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

          {/* Copyright and Social Links */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Rahul Chauhan — Built with{" "}
              <Heart
                size={14}
                className="inline-block mx-1 text-red-500 fill-red-500"
              />{" "}
              using Next.js & Tailwind
            </p>
            <div className="flex items-center space-x-6">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300"
                    aria-label={link.name}
                  >
                    <Icon size={20} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

