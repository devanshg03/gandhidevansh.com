import projectsData from "./projects.json";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  return projectsData.map((post: any) => ({
    id: String(post.id),
  }));
}

async function fetchPost(id: string) {
  const post = projectsData.find((post: any) => String(post.id) === id);
  return post;
}

export async function generateMetadata({ params }: any) {
  const { id } = await params;
  const post = await fetchPost(id);

  return {
    title: post ? `${post.title} | Devansh G.` : "Devansh G.",
    description: post
      ? post.subheading
      : "This is the personal website for Devansh Gandhi.",
  };
}

export default async function BlogPost({ params, searchParams }: any) {
  const { id } = await params;

  const post = await fetchPost(id);

  if (!post) {
    notFound();
  }
  return (
    <>
      <div className="font-sans pt-[96px] w-full bg-white flex px-[10%] lg:px-[100px] flex-col">
        <h1 className="uppercase text-4xl md:text-7xl font-extrabold text-black md:w-6/12 wrap-break-word">
          {post.title}
          <span className="font-light">©</span>
        </h1>
        <h2 className="font-mono font-thin text-xl md:text-3xl text-[#222] mt-2 md:w-6/12">
          {post.subheading}
        </h2>

        <div className="bg-black w-full relative aspect-square md:aspect-video flex flex-col items-center justify-center rounded-xl mt-6">
          <Image
            src={post.image1}
            alt="alt"
            fill={true}
            className="my-auto rounded-xl object-cover shadow-xs shadow-black"
          />
        </div>

        <h4
          id="projects"
          className="font-mono text-xl font-thin text-[#222] mt-24"
        >
          (DESCRIPTION)
        </h4>
        <h3 className="mt-6 text-3xl capitalize font-extrabold text-black">
          What the project was
        </h3>

        <p className="mt-6 text-xl text-[#222]">{post.description1}</p>
        <p className="mt-4 text-xl text-[#222]">{post.description2}</p>

        <div className="bg-black w-full relative aspect-square md:aspect-video rounded-xl mt-9">
          <Image
            src={post.image2}
            alt="alt"
            fill={true}
            className="my-auto rounded-xl object-cover shadow-xs shadow-black"
          />
        </div>
        <div className="mt-6 flex flex-row justify-between text-[#222] text-xl font-mono font-thin">
          <h6>{post.caption1}</h6>
          <p>({post.caption1year})</p>
        </div>

        <div className="bg-black w-full relative aspect-square md:aspect-video rounded-xl mt-9">
          <Image
            src={post.image3}
            alt="alt"
            fill={true}
            className="my-auto rounded-xl object-cover shadow-xs shadow-black"
          />
        </div>
        <div className="mt-6 flex flex-row justify-between text-[#222] text-xl font-mono font-thin">
          <h6>{post.caption2}</h6>
          <p>({post.caption2year})</p>
        </div>
      </div>
    </>
  );
}
