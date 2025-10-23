import React from "react";
import { ProjectsGrid } from "@/components/projects-grid";

export const metadata = {
  title: "Projects | Devansh G.",
  description:
    "Explore a curated collection of projects spanning communities, products, and experiences.",
};

export default function ProjectsPage(): React.JSX.Element {
  return (
    <>
      <section className="font-sans w-full bg-white">
        <div className="diagonal-pattern border-y border-black/5">
          <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h5 className="text-sm text-[#555]">✦ Projects</h5>
              <h1 className="mt-4 text-4xl md:text-5xl tracking-tight text-black">
                A Curated Collection
              </h1>
            </div>
            <p className="text-[#333] md:pt-8">
              From humanistic simulations to community-driven platforms — a
              selection of things I built, organized, and shipped.
            </p>
          </div>
        </div>
      </section>

      <ProjectsGrid />
    </>
  );
}
