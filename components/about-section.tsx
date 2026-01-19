"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function AboutSection() {
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
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-secondary"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={cn(
              "relative aspect-[3/4] overflow-hidden transition-all duration-1000",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            )}
          >
            <Image
              src="/about.jpeg"
              alt="Professional photographer at Gafia Graphics with camera"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div
            className={cn(
              "flex flex-col transition-all duration-1000 delay-200",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            )}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              About the Artist
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 text-balance">
              Crafting Stories
              <br />
              <span className="italic">Through Light</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-pretty">
                With over a 5 Years of experience, Gafia Graphics has established
                a reputation for creating compelling visual narratives that
                transcend the ordinary. Every photograph is an opportunity to
                capture the essence of a moment, a feeling, a story waiting to
                be told.
              </p>
              <p className="text-pretty">
                From intimate portraits to sweeping landscapes, editorial shoots
                to wedding celebrations, the approach remains the same: an
                unwavering commitment to artistic excellence and authentic
                storytelling.
              </p>
              <p className="text-pretty">
                Based in Norton Zimbabwe but available worldwide, Gafia Graphics brings
                a unique perspective to every project, combining technical
                mastery with an intuitive eye for beauty and emotion.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              {[
                { number: "10+", label: "Years Experience" },
                { number: "500+", label: "Projects Completed" },
                { number: "50+", label: "Awards Received" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={cn(
                    "transition-all duration-700",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  )}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="font-serif text-2xl md:text-3xl text-foreground mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs tracking-wider uppercase text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
