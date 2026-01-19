"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const portfolioItems = [
  {
    id: 1,
    title: "Wanderlust",
    category: "Landscape",
    image: "/image2.jpg",
    description: "Capturing the majesty of untouched landscapes",
  },
  {
    id: 2,
    title: "Spaces",
    category: "Architecture",
    image: "/image3.jpg",
    description: "The poetry of light and structure",
  },
  {
    id: 3,
    title: "Eternal Bonds",
    category: "Wedding",
    image: "/image4.jpg",
    description: "Intimate moments of love and celebration",
  },
  {
    id: 4,
    title: "Luxe",
    category: "Commercial",
    image: "/image5.jpg",
    description: "Elevating brands through visual storytelling",
  },
];

function PortfolioItem({
  item,
  index,
}: {
  item: (typeof portfolioItems)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center transition-all duration-1000",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
        isEven ? "" : "lg:direction-rtl"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={cn(
          "relative aspect-[4/5] md:aspect-[3/4] overflow-hidden group",
          isEven ? "" : "lg:order-2"
        )}
      >
        <Image
          src={item.image || "/placeholder.svg"}
          alt={`${item.title} - ${item.category} photography by Gafia Graphics`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
      </div>

      <div
        className={cn(
          "flex flex-col justify-center py-8 lg:py-0",
          isEven ? "" : "lg:order-1 lg:text-right"
        )}
      >
        <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          {item.category}
        </span>
        <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 text-foreground">
          {item.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed max-w-md text-pretty">
          {item.description}
        </p>
        <a
          href="#contact"
          className={cn(
            "inline-flex items-center gap-2 mt-6 text-sm tracking-widest uppercase text-foreground hover:text-muted-foreground transition-colors duration-300 group/link",
            isEven ? "" : "lg:justify-end"
          )}
        >
          View Project
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export function PortfolioSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadingVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div
          ref={headingRef}
          className={cn(
            "text-center mb-16 md:mb-24 transition-all duration-1000",
            headingVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          )}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground block mb-4">
            Selected Work
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground text-balance">
            A Visual Journey
          </h2>
        </div>

        <div className="flex flex-col gap-20 md:gap-32">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
