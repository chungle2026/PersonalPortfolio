import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Media from "@/components/media";
import Contact from "@/components/contact";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const targetId = target.getAttribute("href")?.substring(1);
        if (targetId) {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Media />
        <Contact />
      </main>
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-display font-semibold mb-4">
                Lewis Chung
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Classical composer and pianist dedicated to creating meaningful
                musical experiences that bridge tradition and innovation.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-display font-semibold mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a
                    href="#about"
                    className="hover:text-accent transition-colors duration-200"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#media"
                    className="hover:text-accent transition-colors duration-200"
                  >
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-accent transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-display font-semibold mb-4">
                Connect
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.youtube.com/@musiclew007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/lewischungmusic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Lewis Chung. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
