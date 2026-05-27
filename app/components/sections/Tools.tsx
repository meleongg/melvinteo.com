"use client";
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

function ToolIcon({ tool }: { tool: Tool }) {
  const Icon = tool.icon;
  return (
    <Icon
      size={38}
      aria-label={tool.name}
      className="text-gray-700 dark:text-gray-200"
    />
  );
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
  return (
    <section id="tools" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary-light dark:text-white mb-12">
          Technical Skills
        </h2>
        <div className="space-y-10">
          {toolCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 pb-2">
                {category.category}
              </h3>
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: categoryIndex * 0.2 + toolIndex * 0.05,
                    }}
                    className="group relative flex items-center justify-center p-3 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <ToolIcon tool={tool} />
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
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
