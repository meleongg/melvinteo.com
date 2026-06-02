"use client";
import {
  getRevealMotion,
  useMotionPrefs,
  VIEWPORT_ONCE,
} from "@/app/lib/motion";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const RESUME_URL = "https://meleongg.github.io/resume/";
const MAX_HIGHLIGHTS = 3;

interface Experience {
  organization: string;
  subtitle?: string;
  role: string;
  period: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    organization: "Amazon",
    role: "Software Engineer",
    period: "Jun. 2026 – Present",
    highlights: ["Joining Amazon as a Software Engineer in June 2026."],
  },
  {
    organization: "Spoddr",
    subtitle: "Social fitness platform",
    role: "Co-Founder",
    period: "Sept. 2025 – Apr. 2026",
    highlights: [
      "Co-founded with a team of six, spanning customer discovery to full-stack MVP launch.",
      "Built Expo + FastAPI + BLE/Arduino tracking on AWS (ECS, RDS, Cognito) to automate gym logging.",
    ],
  },
  {
    organization: "University of British Columbia",
    subtitle: "NLP & model interpretability research",
    role: "Undergraduate Student Researcher",
    period: "Sept. 2025 – Apr. 2026",
    highlights: [
      "Studied disentangled latent structure in a 70M-parameter transformer with sparse autoencoders (93%+ R² on 600K tokens).",
      "Unified messy NLP corpora (UD, WordNet, VerbNet, Wiktionary) into one ETL pipeline; presented at Language Sciences and CS research conferences.",
    ],
  },
  {
    organization: "Amazon Payments",
    role: "Software Engineer Intern",
    period: "May – Aug. 2025",
    highlights: [
      "Built a CloudWatch MCP server in TypeScript so internal teams could wire AI agents into ops workflows.",
      "Accelerated integration test generation by ~90% using service logs and agentic tooling.",
    ],
  },
  {
    organization: "nwPlus",
    subtitle:
      "Student org behind Western Canada's largest hackathons (HackCamp, nwHacks, cmd-f)",
    role: "Co-President, Software Development Director, Logistics Director",
    period: "May 2022 – May 2025",
    highlights: [
      "Led a 55-person team running three major hackathons (1,150+ participants, 79 sponsors).",
      "Managed six engineers shipping eight internal tools used by 1,700+ people.",
    ],
  },
  {
    organization: "Amazon Prime",
    subtitle: "Customer Engagement & Retention",
    role: "Software Engineer Intern · Amazon Future Engineer Intern",
    period: "May – Aug 2024 · May – Aug 2023 · May – Aug 2022",
    highlights: [
      "Self-service customer-state app that cut PM onboarding time by 98% (React, JSON Schema, DynamoDB, Java).",
      "Cancellation pipeline work: 33% faster processing, TypeScript CloudWatch dashboards, and Java tooling for A/B QA.",
      "Retention emails/widgets plus Bash deployment automation (~43% infra cost, ~49% dev time savings).",
    ],
  },
];

export function Experience() {
  const { reducedMotion, stagger } = useMotionPrefs();

  return (
    <section id="experience" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="section-heading mb-0">Experience</h2>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-link-light transition-colors hover:text-primary-light dark:text-link-dark dark:hover:text-white"
          >
            View full resume
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
        </div>
        <div className="card-surface space-y-12 p-6 sm:p-8">
          {experiences.map((exp, index) => {
            const highlights = exp.highlights.slice(0, MAX_HIGHLIGHTS);

            return (
              <motion.article
                key={`${exp.organization}-${exp.role}-${exp.period}`}
                {...getRevealMotion(
                  reducedMotion,
                  stagger(index, 0.06, 0.36),
                  "x",
                )}
                viewport={VIEWPORT_ONCE}
                className="relative border-l-2 border-blue-500/70 pl-8 dark:border-blue-400/60"
              >
                <div
                  className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-blue-500 dark:bg-blue-400"
                  aria-hidden
                />
                <header className="mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
                    {exp.role}
                  </h3>
                  <p className="mt-0.5 font-medium text-gray-800 dark:text-gray-100">
                    {exp.organization}
                  </p>
                  {exp.subtitle ? (
                    <p className="mt-1 text-sm leading-snug text-gray-600 dark:text-gray-400">
                      {exp.subtitle}
                    </p>
                  ) : null}
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {exp.period}
                  </p>
                </header>
                {highlights.length > 0 ? (
                  <ul className="list-outside list-disc space-y-2 pl-5 text-[0.95rem] leading-relaxed text-gray-700 dark:text-gray-200">
                    {highlights.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
