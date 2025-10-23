import React from "react";
import { HeroSection } from "@/components/main";
import { ProjectsIntro } from "@/components/about";
import { ProjectsGrid } from "@/components/projects-grid";

export default function HomePage(): React.JSX.Element {
  return (
    <>
      <HeroSection />
      <ProjectsIntro />
      <ProjectsGrid />
    </>
  );
}
