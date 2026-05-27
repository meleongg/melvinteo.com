"use client";
import {
  getRevealMotion,
  useMotionPrefs,
  VIEWPORT_ONCE,
} from "@/app/lib/motion";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Stamped",
    description:
      "Track your travels on an interactive world map, then share and compare maps with friends.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "D3.js",
      "Vercel Analytics",
    ],
    github: "https://github.com/meleongg/personal-world-map",
    live: "https://stamped-travel.vercel.app",
    image: "/images/stamped.png",
  },
  {
    title: "ChefPath",
    description:
      "AI-powered cooking mentor that generates adaptive weekly meal plans, guides step-by-step cooking, and personalizes future recipes from your feedback.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL (Supabase)",
      "SQLAlchemy",
      "LangChain/LangGraph",
    ],
    github: "https://github.com/meleongg/chef-path",
    live: "https://chefpath.vercel.app",
    image: "/images/chefpath.png",
  },
  {
    title: "Flashlearn",
    description:
      "AI-powered language learning app with smart flashcards, translations, and personalized example sentences.",
    technologies: [
      "Next.js",
      "NeonDB",
      "Tailwind CSS",
      "TypeScript",
      "FastAPI",
    ],
    github: "https://github.com/meleongg/flashcard-frontend",
    live: "https://flashcard-frontend-one.vercel.app/",
    image: "/images/flashlearn.png",
  },
  {
    title: "Fitflow",
    description:
      "Full-stack fitness tracker with workout logging, progress visualization, and performance analytics.",
    technologies: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/fitflow",
    live: "https://fitflow-pi.vercel.app/",
    image: "/images/fitflow.png",
  },
  {
    title: "Holistic Health Tracker",
    description:
      "AI-powered health app tracking pharmaceutical and lifestyle treatments for complete care management.",
    technologies: ["Next.js", "Supabase", "Firebase", "TypeScript", "OpenAI"],
    github: "https://github.com/holistic-health-tracker",
    live: "https://holistic-health-tracker.vercel.app/",
    image: "/images/holistic-health-tracker.png",
  },
  {
    title: "AI News Summarizer",
    description:
      "Smart news tool using NLP models to condense articles and analyze sentiment for quick insights.",
    technologies: ["FastAPI", "Hugging Face", "NLTK", "TypeScript", "Next.js"],
    github: "https://github.com/news-summarizer-frontend",
    live: "https://news-summarizer-frontend.vercel.app/",
    image: "/images/ai-news-summarizer.png",
  },
  {
    title: "HackerHare",
    description:
      "Chrome extension that intentionally slows form filling to promote mindful data entry habits.",
    technologies: ["Chrome Manifest V3", "HTML", "CSS"],
    github: "https://github.com/DonaldKLee/Stormhacks-2024",
    live: "https://stormhacks-2024-site.vercel.app/",
    image: "/images/hackerhare.png",
  },
  {
    title: "🏆 expawdition",
    description:
      "AI trip planner creating personalized itineraries. 1st place winner at SFU Stormhacks 2023.",
    technologies: ["React", "Express", "Firebase", "Node.js", "Next.js"],
    github: "https://github.com/expawdition",
    live: undefined,
    image: "/images/expawdition.jpg",
  },
  {
    title: "liftz",
    description:
      "Comprehensive workout tracker with exercise library, history calendar, and plate calculator.",
    technologies: ["React", "Express", "MongoDB", "Node.js", "Next.js"],
    github: undefined,
    live: "https://liftz-workout-tracker.vercel.app/",
    image: "/images/liftz.png",
  },
  {
    title: "phreview",
    description:
      "Chrome extension enhancing language learning through customizable active recall quizzes.",
    technologies: ["Manifest V3", "HTML", "CSS", "JS"],
    github: undefined,
    live: "https://chromewebstore.google.com/detail/phreview-custom-language/fmdbfblejhabdfpejeemcedelgkdoggj?hl=en",
    image: "/images/phreview.png",
  },
];

export function Projects() {
  const { reducedMotion, stagger } = useMotionPrefs();

  return (
    <section id="projects" className="scroll-mt-24 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-heading">Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              {...getRevealMotion(reducedMotion, stagger(index, 0.05, 0.3))}
              viewport={VIEWPORT_ONCE}
              className="card-surface group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-blue-100/70 to-indigo-100/60 dark:from-blue-900/30 dark:to-indigo-900/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
                  {project.description}
                </p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300 sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-blue-300 hover:text-primary-light dark:border-gray-600 dark:text-gray-200 dark:hover:border-blue-400 dark:hover:text-white"
                    >
                      <FaGithub size={18} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-md bg-primary-light px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-link-light dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
