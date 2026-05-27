import { Hero } from "./components/sections/Hero";
import { AboutMe } from "./components/sections/AboutMe";
import { Tools } from "./components/sections/Tools";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
      <Header />
      <main className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <Hero />
        <AboutMe />
        <Tools />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
