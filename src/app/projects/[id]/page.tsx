import projectsData from "./projects.json";
import { notFound } from "next/navigation";
import Image from "next/image";
import Head from "next/head";

export async function generateStaticParams() {
  return projectsData.map((post: any) => ({
    id: String(post.id),
  }));
}

async function fetchPost(id: string) {
  const post = projectsData.find((post: any) => String(post.id) === id);
  return post;
}

export default async function BlogPost({ params, searchParams }: any) {
  const { id } = params;

  const post = await fetchPost(id);

  if (!post) {
    notFound();
  }
  return (
    <>
      <Head>
        <title>Devansh G.</title>
        <meta
          name="description"
          content="This is the personal website for Devansh Gandhi."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-sans pt-[96px] w-full bg-white flex px-[10%] lg:px-[100px] flex-col">
        <h1 className="uppercase text-5xl md:text-7xl font-extrabold text-[#000] md:w-6/12">
          {post.title}
          <span className="font-light">©</span>
        </h1>
        <h2 className="font-mono font-thin text-xl md:text-3xl text-[#222] mt-2 md:w-6/12">
          {post.subheading}
        </h2>

        <div className="bg-black w-full h-[595px] flex flex-col items-center justify-center rounded-xl mt-24">
          <Image
            src={post.image1}
            alt="alt"
            width={200}
            height={200}
            className="my-auto pt-12"
          />
        </div>

        <h4
          id="projects"
          className="font-mono text-xl font-thin text-[#222] mt-24"
        >
          (DESCRIPTION)
        </h4>
        <h3 className="mt-6 text-4xl capitalize font-extrabold text-black">
          What the project was
        </h3>

        <p className="mt-6 text-xl text-[#222]">{post.description1}</p>
        <p className="mt-4 text-xl text-[#222]">{post.description2}</p>

        <div className="bg-black w-full h-[595px] flex flex-col items-center justify-center rounded-xl mt-24">
          <Image
            src={post.image2}
            alt="alt"
            width={200}
            height={200}
            className="my-auto pt-12"
          />
        </div>
        <div className="mt-6 flex flex-row justify-between text-[#222] text-xl font-mono font-thin">
          <h6>{post.caption1}</h6>
          <p>({post.caption1year})</p>
        </div>

        <div className="bg-black w-full h-[595px] flex flex-col items-center justify-center rounded-xl mt-9">
          <Image
            src={post.image3}
            alt="alt"
            width={200}
            height={200}
            className="my-auto pt-12"
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
