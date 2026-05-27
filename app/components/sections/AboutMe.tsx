"use client";
import {
  getRevealMotion,
  useMotionPrefs,
  VIEWPORT_ONCE,
} from "@/app/lib/motion";
import { motion } from "framer-motion";

export function AboutMe() {
  const { reducedMotion } = useMotionPrefs();

  return (
    <section id="about" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          {...getRevealMotion(reducedMotion)}
          viewport={VIEWPORT_ONCE}
        >
          <h2 className="section-heading">About Me</h2>
          <div className="card-surface p-6 sm:p-8">
            <div className="prose max-w-none dark:prose-invert">
              <p className="space-y-4 text-gray-700 dark:text-gray-200">
                I&apos;m a Software Engineer passionate about building products
                that boost productivity and simplify daily lives. Recently,
                I&apos;ve developed a growing interest in natural language
                processing and uncovering the &quot;black box&quot; of LLMs.
              </p>

              <p className="mt-4 text-gray-700 dark:text-gray-200">
                Through internships, hackathons, and projects, I&apos;ve gained
                hands-on experience in Full-Stack Web Development and AI
                Engineering while collaborating with designers, product
                managers, and other engineers.
              </p>

              <p className="mt-4 text-gray-700 dark:text-gray-200">
                In my free time, I enjoy travelling the world, playing
                volleyball, and learning foreign languages.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
