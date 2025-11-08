"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { Card, CardContent } from "@/components/ui/card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="gradient-text text-4xl sm:text-5xl md:text-6xl font-bold font-heading glow-hover"
          >
            Experience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-gray-400"
          >
            Professional Journey & Internships
          </motion.p>
        </div>

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative pb-8"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/50 hidden md:block"></div>
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/50 md:hidden"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                variants={itemVariants}
                className="relative"
              >
                {/* Desktop: Alternate left and right */}
                <div className="hidden md:flex md:items-center md:gap-8">
                  {/* Left side (even index) */}
                  {index % 2 === 0 && (
                    <>
                      <div className="flex-1"></div>
                      <div className="relative w-full max-w-md">
                        {/* Timeline Dot */}
                        <div className="absolute -left-8 top-6 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-gray-900 shadow-lg z-10 ring-4 ring-gray-900/50"></div>
                        {/* Experience Card */}
                        <Card className="bg-white/5 backdrop-blur-md border-white/10 text-white hover:shadow-lg hover:shadow-white/10 transition-all duration-300 hover:scale-[1.02]">
                          <CardContent className="p-6">
                            {/* Company Name */}
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {experience.company}
                            </h3>
                            {/* Role */}
                            <p className="text-lg text-gray-300 italic mb-2">
                              {experience.role}
                            </p>
                            {/* Duration */}
                            <p className="text-sm text-blue-400 mb-4 font-medium">
                              {experience.duration}
                            </p>
                            {/* Key Points */}
                            <ul className="space-y-2.5">
                              {experience.points.map((point, pointIndex) => (
                                <li
                                  key={pointIndex}
                                  className="flex items-start text-gray-300"
                                >
                                  <span className="text-blue-400 mr-3 mt-1.5 font-bold">▸</span>
                                  <span className="text-sm leading-relaxed">{point}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </>
                  )}

                  {/* Right side (odd index) */}
                  {index % 2 === 1 && (
                    <>
                      <div className="relative w-full max-w-md">
                        {/* Timeline Dot */}
                        <div className="absolute -right-8 top-6 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-gray-900 shadow-lg z-10 ring-4 ring-gray-900/50"></div>
                        {/* Experience Card */}
                        <Card className="bg-white/5 backdrop-blur-md border-white/10 text-white hover:shadow-lg hover:shadow-white/10 transition-all duration-300 hover:scale-[1.02]">
                          <CardContent className="p-6">
                            {/* Company Name */}
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {experience.company}
                            </h3>
                            {/* Role */}
                            <p className="text-lg text-gray-300 italic mb-2">
                              {experience.role}
                            </p>
                            {/* Duration */}
                            <p className="text-sm text-blue-400 mb-4 font-medium">
                              {experience.duration}
                            </p>
                            {/* Key Points */}
                            <ul className="space-y-2.5">
                              {experience.points.map((point, pointIndex) => (
                                <li
                                  key={pointIndex}
                                  className="flex items-start text-gray-300"
                                >
                                  <span className="text-blue-400 mr-3 mt-1.5 font-bold">▸</span>
                                  <span className="text-sm leading-relaxed">{point}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="flex-1"></div>
                    </>
                  )}
                </div>

                {/* Mobile: Stacked layout */}
                <div className="md:hidden pl-12">
                  {/* Timeline Dot */}
                  <div className="absolute left-2 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-gray-900 shadow-lg z-10"></div>
                  {/* Experience Card */}
                  <Card className="bg-white/5 backdrop-blur-md border-white/10 text-white hover:shadow-lg hover:shadow-white/10 transition-all duration-300">
                    <CardContent className="p-6">
                      {/* Company Name */}
                      <h3 className="text-xl font-bold text-white mb-2">
                        {experience.company}
                      </h3>
                      {/* Role */}
                      <p className="text-base text-gray-300 italic mb-2">
                        {experience.role}
                      </p>
                      {/* Duration */}
                      <p className="text-sm text-blue-400 mb-4 font-medium">
                        {experience.duration}
                      </p>
                      {/* Key Points */}
                      <ul className="space-y-2.5">
                        {experience.points.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="flex items-start text-gray-300"
                          >
                            <span className="text-blue-400 mr-3 mt-1.5 font-bold">▸</span>
                            <span className="text-sm leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </div>
      </div>
    </div>
  );
}

