import Image from "next/image";
import Project from "./projectitem";

export default function mywork() {
  return (
    <div className="font-sans w-full h-auto bg-white px-[10%] md:px-[100px] pt-24">
      <h4 id="projects" className="font-mono text-xl font-thin text-[#222]">
        (MY PROJECTS)
      </h4>
      <h3 className="mt-6 text-4xl capitalize font-extrabold text-black">
        what i’ve done
      </h3>

      <div className="flex flex-wrap justify-between gap-10 mt-6">
        <Project
          backgroundImg="/assets/petsimplified.png"
          tag1="UX Design"
          tag2="Business Strategy"
          url="/projects/pet-simplified"
        />
        <Project
          backgroundImg="/assets/thedesk.png"
          tag1="Consulting"
          tag2="CSV Strategy"
          url="/projects/thedesk"
          width={120}
        />
        <Project
          backgroundImg="/assets/nola.png"
          tag1="Startup Lead"
          tag2="Product Development"
          url="/projects/nola"
        />
        <Project
          backgroundImg="/assets/eso.png"
          tag1="Venture Capital"
          tag2="Education"
          url="/projects/eso"
        />
        <Project
          backgroundImg="/assets/hksv.png"
          tag1="Pro Bono Consulting"
          tag2="Education"
          url="/projects/hksv"
        />
        <Project
          backgroundImg="/assets/caesd.png"
          tag1="Startup Lead"
          tag2="E-Commerce"
          url="/projects/caesd"
        />
      </div>
    </div>
  );
}
