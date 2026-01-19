"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <Image
          src="/image7.jpg"
          alt="Featured photography by Gafia Graphics - artistic portrait in natural light"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-5xl mx-auto">
        <p
          className="text-primary-foreground/80 text-sm md:text-base tracking-[0.3em] uppercase mb-6 md:mb-8"
          style={{
            opacity: Math.max(0, 1 - scrollY / 400),
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          Photography Portfolio
        </p>
        <h1
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-tight text-balance"
          style={{
            opacity: Math.max(0, 1 - scrollY / 500),
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        >
          Capturing Moments
          <br />
          <span className="italic font-normal">with Artistry</span>
        </h1>
        <div
          className="mt-10 md:mt-16"
          style={{
            opacity: Math.max(0, 1 - scrollY / 350),
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <a
            href="#work"
            className="inline-flex items-center gap-3 text-primary-foreground text-sm tracking-widest uppercase border border-primary-foreground/50 px-8 py-4 hover:bg-primary-foreground hover:text-foreground transition-all duration-500"
          >
            View Portfolio
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="animate-bounce"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/70 rounded-full mt-2 animate-scroll" />
        </div>
      </div>
    </section>
  );
}
