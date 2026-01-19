"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div
          className={cn(
            "text-center transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground block mb-6">
            Get in Touch
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground mb-8 text-balance">
            {"Let's Create Something"}
            <br />
            <span className="italic">Beautiful Together</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12 text-pretty">
            Ready to bring your vision to life? Whether you have a specific
            project in mind or simply want to explore possibilities, I would love
            to hear from you. Every collaboration begins with a conversation.
          </p>

          <div
            className={cn(
              "transition-all duration-1000 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            )}
          >
            <a
              href="mailto:hello@gafiagraphics.com"
              className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-5 text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-500"
            >
              Start a Conversation
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Contact Details */}
          <div
            className={cn(
              "grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border transition-all duration-1000 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            )}
          >
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                Email
              </h3>
              <a
                href="mailto:hello@gafiagraphics.com"
                className="text-foreground hover:text-muted-foreground transition-colors duration-300"
              >
                hello@gafiagraphics.com
              </a>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                Location
              </h3>
              <p className="text-foreground">Norton, Zimbabwe</p>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                Social
              </h3>
              <div className="flex justify-center md:justify-start gap-4">
                <a
                  href="https://instagram.com/gafiagraphics"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Gafia Graphics on Instagram"
                  className="text-foreground hover:text-muted-foreground transition-colors duration-300"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/gafiagraphics"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Gafia Graphics on Twitter"
                  className="text-foreground hover:text-muted-foreground transition-colors duration-300"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/gafiagraphics"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with Gafia Graphics on LinkedIn"
                  className="text-foreground hover:text-muted-foreground transition-colors duration-300"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
