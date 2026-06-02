"use client";
import {
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

function ToolTile({ tool, accentClass }: { tool: Tool; accentClass: string }) {
  const Icon = tool.icon;
  return (
    <div
      className={`group relative flex h-14 flex-col items-center justify-center gap-1 rounded-lg px-2 py-1.5 ring-1 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm sm:h-[3.25rem] ${accentClass}`}
    >
      <Icon size={26} aria-hidden />
      <span className="max-w-full truncate text-[10px] font-medium leading-none text-current/90 sm:text-[11px]">
        {tool.name}
      </span>
    </div>
  );
}

const toolCategories: ToolCategory[] = [
  {
    category: "Languages",
    tools: [
      { name: "Python", icon: SiPython },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Java", icon: DiJava },
      { name: "Go", icon: SiGo },
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "SQL", icon: SiMysql },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
    ],
  },
  {
    category: "Full-stack & cloud",
    tools: [
      { name: "React", icon: SiReact },
      { name: "Expo", icon: SiExpo },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Express", icon: SiExpress },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Supabase", icon: SiSupabase },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase", icon: SiFirebase },
      { name: "AWS", icon: DiAws },
      { name: "Docker", icon: SiDocker },
      { name: "Vercel", icon: SiVercel },
      { name: "Railway", icon: SiRailway },
      { name: "Git", icon: SiGit },
      { name: "GitHub Actions", icon: SiGithubactions },
    ],
  },
  {
    category: "ML / NLP",
    tools: [
      { name: "PyTorch", icon: SiPytorch },
      { name: "Hugging Face", icon: SiHuggingface },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "spaCy", icon: SiSpacy },
      { name: "NumPy", icon: SiNumpy },
    ],
  },
];

export function Tools() {
  const { reducedMotion } = useMotionPrefs();

  return (
    <section id="tools" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="section-heading">Technical Skills</h2>
        <motion.div
          {...getRevealMotion(reducedMotion)}
          viewport={VIEWPORT_ONCE}
          className="card-surface divide-y divide-slate-200/80 p-4 dark:divide-slate-700/80 sm:p-5"
        >
          {toolCategories.map((category, categoryIndex) => (
            <section
              key={category.category}
              className={categoryIndex === 0 ? "pb-5" : "py-5 last:pb-0"}
            >
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400">
                {category.category}
              </h3>
              <div className="grid grid-cols-4 gap-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7">
                {category.tools.map((tool, toolIndex) => (
                  <ToolTile
                    key={tool.name}
                    tool={tool}
                    accentClass={
                      toolAccentClasses[
                        (categoryIndex + toolIndex) % toolAccentClasses.length
                      ]
                    }
                  />
                ))}
              </div>
            </section>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
