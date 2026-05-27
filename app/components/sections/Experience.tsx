"use client";
import {
  getRevealMotion,
  useMotionPrefs,
  VIEWPORT_ONCE,
} from "@/app/lib/motion";
import { motion } from "framer-motion";

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string | string[];
}

const experiences: Experience[] = [
  {
    company: "Amazon",
    position: "Software Engineer",
    period: "Jun. 2026 - Present",
    description: [],
  },
  {
    company: "Co-Founder",
    position: "Spoddr",
    period: "Sept. 2025 - Apr. 2026",
    description: [
      "Co-founded a social fitness platform as a team of 6 (2 Software Engineers, 1 Hardware Engineer, 1 Product Manager, 1 Finance, 1 Marketing) from initial customer discovery and validation to full-stack MVP launch",
      "Architected the core mobile-web client (Expo), SQL database schemas, FastAPI business logic, and BLE/Arduino hardware integration to automate rep/weight tracking and eliminate manual logging friction",
      "Engineered the AWS cloud infrastructure (ECS, RDS, Cognito) and observability stack (CloudWatch)",
    ],
  },
  {
    company: "The University of British Columbia",
    position: "Undergraduate Student Researcher",
    period: "Sept. 2025 - Apr. 2026",
    description: [
      "Designed and trained a Sparse Autoencoder (SAE) to map and disentangle latent representations of a 70M-parameter transformer model, achieving an 93\%+ reconstruction score (R²) on a 600K-token dataset",
      "Built an ETL pipeline to aggregate, clean, and resolve conflicting schemas across disparate NLP data sources (Universal Dependencies, WordNet, VerbNet, Wiktionary) into a unified sparse matrix",
      "Presented research abstract at both the Language Sciences and CS Student Research Conferences",
    ],
  },
  {
    company: "Amazon Payments",
    position: "Software Engineer Intern",
    period: "May - Aug. 2025",
    description: [
      "Engineered a CloudWatch MCP Server in TypeScript for internal teams to automate workflows with AI agents",
      "Accelerated integration test generation by 90% by leveraging CloudWatch service logs, AI agents, and MCP servers",
      "Automated CloudWatch metrics comparison with a hybrid shell script and agentic AI workflow with MCP servers",
    ],
  },
  {
    company:
      "nwPlus - Organizers of the largest hackathons in Western Canada (HackCamp, nwHacks, cmd-f)",
    position: "Co-President, Software Development Director, Logistics Director",
    period: "May 2022 - May 2025",
    description: [
      "Led 55-member team to organize 3 major hackathons, welcoming 1,150+ participants and 79 sponsors",
      "Managed 6-engineer team shipping 8 projects supporting 1,700+ users",
      "Spearheaded the largest beginner-friendly hackathon in Western Canada, attracting 100+ first-time hackers",
    ],
  },
  {
    company: "Amazon Prime - Customer Engagement",
    position: "Software Engineer Intern",
    period: "May - Aug. 2024",
    description: [
      "Reduced onboarding time for PMs by 98% by building a 100% self-service customer state management web app",
      "Implemented dynamic React forms using JSON Form Schema to populate content from DynamoDB schema",
      "Refactored Java API controllers to adopt new DynamoDB schema and support JSON serialization",
    ],
  },
  {
    company: "Amazon Prime - Customer Retention",
    position: "Software Engineer Intern",
    period: "May - Aug. 2023",
    description: [
      "Reduced Prime membership cancellation processing time by 33% by optimizing AWS service configurations",
      "Refactored CloudWatch dashboards and alarms in TypeScript to improve observability of cancellation traffic",
      "Simplified QA work in A/B testing by building a browser cookie override tool in Java, saving 15 mins/test",
    ],
  },
  {
    company: "Amazon Prime - Customer Retention",
    position: "Amazon Future Engineer Intern",
    period: "May - Aug. 2022",
    description: [
      "Retained 10,000+ annual Prime customers by developing targeted retention emails and personalized widgets",
      "Cut costs by 43% and development time by 49% by automating feature deployment with Bash shell scripts",
      "Performed manual QA testing and data validation using customer mocking tools",
    ],
  },
];

export function Experience() {
  const { reducedMotion, stagger } = useMotionPrefs();

  return (
    <section id="experience" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="section-heading">Experience</h2>
        <div className="card-surface space-y-10 p-6 sm:p-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              {...getRevealMotion(
                reducedMotion,
                stagger(index, 0.06, 0.36),
                "x",
              )}
              viewport={VIEWPORT_ONCE}
              className="relative border-l-2 border-blue-500/70 pl-8 dark:border-blue-400/60"
            >
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-blue-500 dark:bg-blue-400" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
                {exp.position}
              </h3>
              <p className="mb-2 text-gray-700 dark:text-gray-200">
                {exp.company}
              </p>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                {exp.period}
              </p>
              <div className="text-gray-700 dark:text-gray-200">
                {Array.isArray(exp.description) ? (
                  <ul className="list-inside list-disc space-y-1.5">
                    {exp.description.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{exp.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
