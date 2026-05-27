"use client";
import { getEnterMotion, useMotionPrefs } from "@/app/lib/motion";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { Socials } from "./Socials";

export function Hero() {
  const { reducedMotion } = useMotionPrefs();
  const prefersReducedMotion = useReducedMotion() ?? false;
  const { scrollY } = useScroll();
  const scrollCueOpacity = useTransform(
    scrollY,
    [0, 200],
    prefersReducedMotion ? [1, 1] : [1, 0],
  );

  const heroEnter = getEnterMotion(reducedMotion);
  const photoEnter = getEnterMotion(reducedMotion, 0, "scale");

  return (
    <section className="relative flex min-h-screen items-center justify-center py-20">
      <motion.div {...heroEnter} className="text-center">
        <motion.div {...photoEnter} className="mb-8 flex justify-center">
          <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-blue-600/90 shadow-lg shadow-blue-200/50 dark:border-blue-300/80 dark:shadow-blue-900/40 md:h-56 md:w-56">
            <Image
              src="/images/profile.jpg"
              alt="Profile photo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <h1 className="mb-6 text-5xl font-bold text-primary-light dark:text-white md:text-7xl">
          Melvin Teo
        </h1>
        <h2 className="mb-8 text-2xl text-gray-600 dark:text-gray-200 md:text-3xl">
          Software Engineer
        </h2>

        <Socials />

        <div className="mb-8 mt-8">
          <a
            href="https://meleongg.github.io/resume/"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-lg bg-primary-light px-6 py-3 font-medium text-white transition-colors hover:bg-link-light dark:bg-white dark:text-gray-900 dark:hover:bg-slate-200"
          >
            View Resume
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>

        <p className="mb-16 text-lg text-gray-600 dark:text-gray-300">
          Check out my projects and experiences below!
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: reducedMotion ? 0 : 0.6,
            duration: reducedMotion ? 0.2 : 0.4,
          }}
          style={{ opacity: scrollCueOpacity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-8"
        >
          <a
            href="#about"
            className="focus-ring inline-flex flex-col items-center rounded-full px-3 py-2 text-gray-500 transition-colors hover:text-primary-light dark:text-gray-300 dark:hover:text-blue-300"
            aria-label="Scroll to About section"
          >
            {reducedMotion ? (
              <span className="flex flex-col items-center">
                <span className="mb-2 text-xs font-semibold tracking-wide md:text-sm">
                  Scroll Down
                </span>
                <svg
                  className="h-8 w-8 md:h-9 md:w-9"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </span>
            ) : (
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex flex-col items-center"
              >
                <span className="mb-2 text-xs font-semibold tracking-wide md:text-sm">
                  Scroll Down
                </span>
                <svg
                  className="h-8 w-8 md:h-9 md:w-9"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.span>
            )}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
