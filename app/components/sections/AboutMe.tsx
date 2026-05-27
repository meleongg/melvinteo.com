"use client";
import { motion } from "framer-motion";

export function AboutMe() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-primary-light dark:text-white mb-8">
            About Me
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 space-y-4">
              I&apos;m a Software Engineer passionate about building products
              that boost productivity and simplify daily lives. Recently,
              I&apos;ve developed a growing interest in natural language
              processing and uncovering the "black box" of LLMs.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Through internships, hackathons, and projects, I&apos;ve gained
              hands-on experience in Full-Stack Web Development and AI
              Engineering while collaborating with designers, product managers,
              and other engineers.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mt-4">
              In my free time, I enjoy travelling the world, playing volleyball,
              and learning foreign languages.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
