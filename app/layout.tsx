import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rahulchauhan.dev"),
  title: "Rahul Chauhan | Generative AI & Full Stack Engineer",
  description:
    "Portfolio of Rahul Chauhan — Building RAG systems, agentic workflows, and LLM evaluation tools.",
  keywords: [
    "Rahul Chauhan",
    "Generative AI Engineer",
    "LangChain",
    "RAG",
    "AI Portfolio",
    "IIT Roorkee",
    "Full Stack Engineer",
    "LLM Evaluation",
    "Agentic Systems",
  ],
  authors: [{ name: "Rahul Chauhan" }],
  creator: "Rahul Chauhan",
  openGraph: {
    title: "Rahul Chauhan | Generative AI & Full Stack Engineer",
    description:
      "Portfolio showcasing RAG pipelines, LangGraph agents, and open-source AI work.",
    url: "https://rahulchauhan.dev",
    siteName: "Rahul Chauhan Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Rahul Chauhan - Generative AI & Full Stack Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Chauhan | Generative AI & Full Stack Engineer",
    description:
      "Portfolio showcasing RAG pipelines, LangGraph agents, and open-source AI work.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <div className="relative min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#0c1c2a] to-[#000000] overflow-hidden">
          {/* Animated Radial Overlay */}
          <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,255,0.05),transparent_70%)] pointer-events-none z-0" />
          <div className="fixed inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.03),transparent_70%)] pointer-events-none z-0" />
          <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.02),transparent_70%)] pointer-events-none z-0" />

          <div className="relative z-10">
            <Navbar />
            <main className="min-h-screen pt-16">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

