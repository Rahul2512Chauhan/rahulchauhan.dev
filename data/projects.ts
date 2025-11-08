export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
}

export const projects: Project[] = [
  {
    title: "Ragas — Open Source Contribution",
    description: "Contributed to Ragas, the evaluation framework for RAG applications. Fixed caching and embedding issues, enhanced metric tracing, and improved developer experience with LangSmith integrations.",
    tech: ["Python", "LangChain", "Ragas", "LangSmith", "Open Source"],
    github: "https://github.com/explodinggradients/ragas",
  },
  {
    title: "Codebase Copilot",
    description: "AI system to query GitHub repos in natural language with embeddings and LLM reasoning. Includes repo ingestion, retrieval, and auto-generated documentation frontend.",
    tech: ["Python", "FastAPI", "ChromaDB", "LangChain", "Next.js"],
    github: "https://github.com/Rahul2512Chauhan/CodebaseCopilot",
  },
  {
    title: "RAG-EngineX",
    description: "Modular Retrieval-Augmented Generation framework with reranking, evaluation metrics, and Streamlit UI for workflow configuration.",
    tech: ["LangChain", "Pinecone", "FAISS", "Python", "Streamlit"],
    github: "https://github.com/Rahul2512Chauhan/RAG-EngineX",
  },
  {
    title: "Auto-Researcher",
    description: "LLM-powered research assistant for literature search, summarization, and citation extraction with autonomous agent workflows.",
    tech: ["LangChain", "Agents", "Web Scraping", "Python"],
    github: "https://github.com/Rahul2512Chauhan/Auto-Researcher",
  },
  {
    title: "TinyLlama + LoRA",
    description: "Low-resource fine-tuning proof-of-concept for TinyLlama-1.1B-Chat using LoRA adapters. Demonstrated stable training with minimal compute.",
    tech: ["PyTorch", "HuggingFace", "PEFT", "LoRA"],
    github: "#",
  },
  {
    title: "Reverse Supply Chain Optimizer",
    description: "End-to-end ML pipeline for reverse logistics: predicts product returns, optimizes costs, and selects return centers using heuristic optimization.",
    tech: ["XGBoost", "scikit-learn", "Pandas", "Python"],
    github: "#",
  },
];
