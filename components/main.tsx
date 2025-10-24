"use client";

import React, { useEffect, useRef } from "react";
import { animate } from "animejs";
import DecisionsLabCitation from "./decisions-lab-citation";
import CursorCitation from "./cursor-citation";

export function HeroSection(): React.JSX.Element {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (nameRef.current) {
      animate(nameRef.current, {
        opacity: [0, 1],
        translateY: [40, 0],
        scale: [0.95, 1],
        duration: 1500,
        easing: "easeOutExpo",
      });
    }

    if (descRef.current) {
      animate(descRef.current, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1200,
        easing: "easeOutExpo",
        delay: 400,
      });
    }
  }, []);

  return (
    <section className="font-sans w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-28 text-center">
        <h1
          ref={nameRef}
          className="text-4xl md:text-6xl tracking-tight text-black opacity-0"
        >
          Devansh Gandhi
        </h1>
        <div
          ref={descRef}
          className="text-base md:text-lg text-black/50 mt-4 max-w-lg mx-auto opacity-0"
        >
          I work on human simulations <DecisionsLabCitation /> and build cool
          communities <CursorCitation />.
        </div>
        <div className="mt-8 flex items-center justify-center gap-2">
          <a
            href="#projects"
            className="inline-flex items-center h-10 px-4 rounded-lg border border-black/10 bg-white text-black hover:bg-black/5 transition-all duration-200"
          >
            Look at my projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center h-10 px-4 rounded-lg border border-black/10 bg-black text-white hover:bg-black/80 transition-all duration-200"
          >
            Say hi
          </a>
        </div>
      </div>
    </section>
  );
}
