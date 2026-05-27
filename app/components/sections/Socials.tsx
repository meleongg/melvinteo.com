import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export const Socials = () => {
  const iconClassName =
    "focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full text-gray-600 transition-all hover:-translate-y-0.5 dark:text-gray-300";

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
      <a
        href="mailto:mthteo@gmail.com"
        className={`${iconClassName} hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-500/10 dark:hover:text-rose-300`}
        aria-label="Email"
      >
        <MdEmail className="h-6 w-6" />
      </a>
      <a
        href="https://github.com/meleongg"
        target="_blank"
        rel="noopener noreferrer"
        className={`${iconClassName} hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-700/80 dark:hover:text-white`}
        aria-label="GitHub"
      >
        <FaGithub className="h-5 w-5" />
      </a>
      <a
        href="https://www.linkedin.com/in/melvinhteo/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${iconClassName} hover:bg-sky-50 hover:text-sky-700 dark:hover:bg-sky-500/10 dark:hover:text-sky-300`}
        aria-label="LinkedIn"
      >
        <FaLinkedin className="h-5 w-5" />
      </a>
      <a
        href="https://x.com/meleongg"
        target="_blank"
        rel="noopener noreferrer"
        className={`${iconClassName} hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-700/80 dark:hover:text-white`}
        aria-label="Twitter"
      >
        <FaXTwitter className="h-5 w-5" />
      </a>
    </div>
  );
};
