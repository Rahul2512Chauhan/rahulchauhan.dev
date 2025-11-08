export interface Experience {
  company: string;
  role: string;
  duration: string;
  points: string[];
}

export const experiences: Experience[] = [
  {
    company: "Piermind AI",
    role: "Artificial Intelligence Intern",
    duration: "Aug 2025 – Oct 2025",
    points: [
      "Built and deployed LangGraph pipelines for multi-tenant agentic workflows.",
      "Collaborated with product managers on AI integration and workflow optimization.",
      "Developed backend modules in Python, Go, and LangChain for scalable agent deployment.",
    ],
  },
  {
    company: "Nitrolens AI (Silicon Valley)",
    role: "AI Engineering Intern",
    duration: "May 2025 – Jul 2025",
    points: [
      "Built and tested multi-agent AI co-pilot systems using LangGraph, CrewAI, and LangChain.",
      "Contributed to agent orchestration and inter-agent communication for strategy automation.",
      "Worked directly with founders to ship prototype-driven features.",
    ],
  },
  {
    company: "Profcess (now Kokoro.doctor)",
    role: "Tech Intern",
    duration: "May 2024 – Jul 2024",
    points: [
      "Shipped production features across React, Django, and SQL.",
      "Designed and optimized REST APIs ensuring smooth data integration.",
      "Delivered quickly under startup constraints improving product stability.",
    ],
  },
];

