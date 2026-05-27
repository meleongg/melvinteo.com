import { useReducedMotion } from "framer-motion";

export const VIEWPORT_ONCE = {
  once: true,
  margin: "-48px 0px -48px 0px",
} as const;

/** Caps stagger so later items don't feel sluggish. */
export function cappedStagger(index: number, step = 0.06, max = 0.36): number {
  return Math.min(index * step, max);
}

export function useMotionPrefs() {
  const reducedMotion = useReducedMotion() ?? false;

  return {
    reducedMotion,
    stagger: (index: number, step = 0.06, max = 0.36) =>
      reducedMotion ? 0 : cappedStagger(index, step, max),
    duration: reducedMotion ? 0.2 : 0.45,
    ease: [0.25, 0.1, 0.25, 1] as const,
  };
}

type RevealAxis = "y" | "x" | "scale";

export function getRevealMotion(
  reducedMotion: boolean,
  delay = 0,
  axis: RevealAxis = "y",
) {
  if (reducedMotion) {
    return {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      transition: { duration: 0.2 },
    };
  }

  const hidden =
    axis === "scale"
      ? { opacity: 0, scale: 0.92 }
      : axis === "x"
        ? { opacity: 0, x: -16 }
        : { opacity: 0, y: 16 };

  const visible =
    axis === "scale"
      ? { opacity: 1, scale: 1 }
      : axis === "x"
        ? { opacity: 1, x: 0 }
        : { opacity: 1, y: 0 };

  return {
    initial: hidden,
    whileInView: visible,
    transition: {
      duration: 0.45,
      delay,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  };
}

/** Same as reveal, but for above-the-fold mount animations (e.g. Hero). */
export function getEnterMotion(
  reducedMotion: boolean,
  delay = 0,
  axis: RevealAxis = "y",
) {
  const reveal = getRevealMotion(reducedMotion, delay, axis);
  return {
    initial: reveal.initial,
    animate: reveal.whileInView,
    transition: reveal.transition,
  };
}
