import ProjectCard from "@/components/projectitem";
import Main from "@/components/main";
import About from "@/components/about";

export default function Home() {
  return (
    <>
      <Main />
      <About />
      {/** Projects Grid */}
      <section className="font-sans w-full bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="projects">
            <ProjectCard
              title="Cursor Hong Kong"
              subtitle="Building Hong Kong's Cursor community"
              image="/assets/cursor-hk.png"
              url="/projects/cursor-hong-kong"
            />
            <ProjectCard
              title="Localhost"
              subtitle="Hong Kong's first coworking for builders"
              image="/assets/localhost.png"
              url="/projects/localhost"
            />
            <ProjectCard
              title="HKU AI Literacy 1"
              subtitle="Hong Kong's first UG-level AI literacy course"
              image="/assets/hku-ai.png"
              url="/projects/hku-ai-literacy"
            />
            <ProjectCard
              title="Nola"
              subtitle="Create without limitations!"
              image="/assets/nola/1.jpg"
              url="/projects/nola"
            />
            <ProjectCard
              title="Entrepreneur Society HKU"
              subtitle="Angel investing network for students"
              image="/assets/eso/1.jpg"
              url="/projects/eso"
            />
            <ProjectCard
              title="CAESD"
              subtitle="Customized phone cases on-demand"
              image="/assets/caesd/1.png"
              url="/projects/caesd"
            />
          </div>
        </div>
      </section>
    </>
  );
}
