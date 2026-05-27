"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Tools", href: "#tools" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuId = "mobile-site-navigation";

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // Update URL hash
    window.history.pushState({}, "", href);

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed z-50 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur dark:border-slate-700/80 dark:bg-slate-950/80">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="select-none bg-gradient-to-r from-primary-light to-blue-600 bg-clip-text text-xl font-bold text-transparent dark:from-white dark:to-blue-300">
              melvin teo
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="focus-ring rounded-md px-2 py-1 text-gray-700 transition-colors hover:text-primary-light dark:text-gray-200 dark:hover:text-white"
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="focus-ring ml-3 inline-flex h-11 w-11 items-center justify-center rounded-md text-gray-700 hover:bg-slate-100 dark:text-gray-200 dark:hover:bg-slate-800"
              aria-expanded={mobileMenuOpen}
              aria-controls={mobileMenuId}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div id={mobileMenuId} className="md:hidden">
            <div className="space-y-1 px-2 pb-4 pt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="focus-ring block rounded-md px-3 py-2.5 text-base text-gray-700 transition-colors hover:bg-slate-100 hover:text-primary-light dark:text-gray-200 dark:hover:bg-slate-800 dark:hover:text-white"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
