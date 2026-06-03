import { Socials } from "../sections/Socials";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/90 py-10 dark:border-slate-700/80 dark:bg-slate-950/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <p className="text-gray-700 dark:text-gray-200">
            © {new Date().getFullYear()} Melvin Teo. All rights reserved.
          </p>
        </div>
        <Socials />
      </div>
    </footer>
  );
}
