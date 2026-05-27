"use client";
import {
  cappedStagger,
  getRevealMotion,
  useMotionPrefs,
  VIEWPORT_ONCE,
} from "@/app/lib/motion";
import { motion } from "framer-motion";
import { DiAws, DiJava } from "react-icons/di";
import type { IconType } from "react-icons/lib";
import {
  SiC,
  SiCplusplus,
  SiCss,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiGit,
  SiGithubactions,
  SiGo,
  SiHuggingface,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiNumpy,
  SiPytorch,
  SiPython,
  SiRailway,
  SiReact,
  SiScikitlearn,
  SiSpacy,
  SiSupabase,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

interface Tool {
  name: string;
  icon: IconType;
}

interface ToolCategory {
  category: string;
  tools: Tool[];
}

const toolAccentClasses = [
  "bg-blue-50 text-blue-600 ring-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:ring-blue-500/30",
  "bg-violet-50 text-violet-600 ring-violet-200 dark:bg-violet-500/10 dark:text-violet-300 dark:ring-violet-500/30",
  "bg-emerald-50 text-emerald-600 ring-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/30",
  "bg-orange-50 text-orange-600 ring-orange-200 dark:bg-orange-500/10 dark:text-orange-300 dark:ring-orange-500/30",
  "bg-cyan-50 text-cyan-600 ring-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-300 dark:ring-cyan-500/30",
];

function ToolIcon({ tool }: { tool: Tool }) {
  const Icon = tool.icon;
  return <Icon size={34} aria-label={tool.name} />;
}

const toolCategories: ToolCategory[] = [
  {
    category: "Languages",
    tools: [
      {
        name: "Python",
        icon: SiPython,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        name: "Java",
        icon: DiJava,
      },
      {
        name: "Go",
        icon: SiGo,
      },
      {
        name: "C",
        icon: SiC,
      },
      {
        name: "C++",
        icon: SiCplusplus,
      },
      {
        name: "SQL",
        icon: SiMysql,
      },
      {
        name: "HTML5",
        icon: SiHtml5,
      },
      {
        name: "CSS3",
        icon: SiCss,
      },
    ],
  },
  {
    category: "Frameworks & Databases",
    tools: [
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "Expo (React Native)",
        icon: SiExpo,
      },
      {
        name: "FastAPI",
        icon: SiFastapi,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
      },
      {
        name: "Supabase",
        icon: SiSupabase,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "Firebase",
        icon: SiFirebase,
      },
    ],
  },
  {
    category: "Developer Tools",
    tools: [
      {
        name: "AWS",
        icon: DiAws,
      },
      {
        name: "Railway",
        icon: SiRailway,
      },
      {
        name: "Vercel",
        icon: SiVercel,
      },
      {
        name: "Docker",
        icon: SiDocker,
      },
      {
        name: "Git",
        icon: SiGit,
      },
      {
        name: "GitHub Actions",
        icon: SiGithubactions,
      },
    ],
  },
  {
    category: "Libraries",
    tools: [
      {
        name: "PyTorch",
        icon: SiPytorch,
      },
      {
        name: "Transformers (HF)",
        icon: SiHuggingface,
      },
      {
        name: "Scikit-learn",
        icon: SiScikitlearn,
      },
      {
        name: "spaCy",
        icon: SiSpacy,
      },
      {
        name: "NumPy",
        icon: SiNumpy,
      },
    ],
  },
];

export function Tools() {
  const { reducedMotion, stagger } = useMotionPrefs();

  return (
    <section id="tools" className="scroll-mt-24 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="section-heading">Technical Skills</h2>
        <div className="space-y-10">
          {toolCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              {...getRevealMotion(
                reducedMotion,
                stagger(categoryIndex, 0.08, 0.24),
              )}
              viewport={VIEWPORT_ONCE}
              className="card-surface space-y-5 p-5 sm:p-6"
            >
              <h3 className="border-b border-slate-200 pb-2 text-lg font-semibold text-slate-800 dark:border-slate-700 dark:text-slate-200 sm:text-xl">
                {category.category}
              </h3>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool.name}
                    {...getRevealMotion(
                      reducedMotion,
                      reducedMotion
                        ? 0
                        : cappedStagger(
                            categoryIndex * 4 + toolIndex,
                            0.03,
                            0.28,
                          ),
                      "scale",
                    )}
                    viewport={VIEWPORT_ONCE}
                    className={`group relative flex h-16 items-center justify-center rounded-xl p-3 ring-1 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${toolAccentClasses[toolIndex % toolAccentClasses.length]}`}
                  >
                    <ToolIcon tool={tool} />
                    {/* Tooltip */}
                    <div className="pointer-events-none absolute -top-10 left-1/2 z-10 hidden -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
                      {tool.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
