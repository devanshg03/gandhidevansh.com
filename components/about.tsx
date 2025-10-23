"use client";

import React, { useEffect, useRef } from "react";
import { animate } from "animejs";

export function ProjectsIntro(): React.JSX.Element {
  const titleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      animate(titleRef.current, {
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1200,
        easing: "easeOutExpo",
      });
    }

    if (descRef.current) {
      animate(descRef.current, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
        easing: "easeOutExpo",
        delay: 300,
      });
    }
  }, []);

  return (
    <section className="font-sans w-full bg-white">
      <div className="diagonal-pattern border-y border-black/5">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div ref={titleRef} className="opacity-0">
            <h5 id="about" className="text-sm text-[#555]">
              ✦ What did I do?
            </h5>
            <h3 className="mt-4 text-3xl md:text-4xl text-black">
              A Curated Collection of Projects
            </h3>
          </div>
          <p ref={descRef} className="text-[#333] md:pt-8 opacity-0">
            From humanistic simulations to community-driven platforms. Explore
            the products and experiences I've built to inspire and connect.
          </p>
        </div>
      </div>
    </section>
  );
}
