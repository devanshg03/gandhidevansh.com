import React from "react";
import projectsData from "./projects.json";
import { notFound } from "next/navigation";
import Image from "next/image";
import type { Project } from "@/types/project";

export async function generateStaticParams() {
  return projectsData.map((post: Project) => ({
    id: String(post.id),
  }));
}

async function fetchPost(id: string): Promise<Project | undefined> {
  const post = projectsData.find((post: Project) => String(post.id) === id);
  return post;
}

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const post = await fetchPost(id);

  return {
    title: post ? `${post.title} | Devansh G.` : "Devansh G.",
    description: post
      ? post.subheading
      : "This is the personal website for Devansh Gandhi.",
  };
}

export default async function BlogPost({
  params,
}: PageProps): Promise<React.JSX.Element> {
  const { id } = await params;

  const post = await fetchPost(id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="font-sans w-full bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <a
            href="/projects"
            className="inline-flex items-center h-8 px-3 rounded-lg border border-black/10 bg-white text-black text-sm hover:bg-black/5 transition-all duration-200"
          >
            ← Back to projects
          </a>

          <h1 className="mt-8 text-4xl md:text-6xl tracking-tight text-black whitespace-pre-line">
            {post.title}
          </h1>
          <p className="text-base md:text-lg text-[#333] mt-4 max-w-3xl">
            {post.subheading}
          </p>

          <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-xl border border-black/5">
            <Image
              src={post.image1}
              alt={`${post.title} - ${post.subheading}`}
              fill
              className="object-cover"
            />
          </div>

          <h5 id="projects" className="text-sm text-[#555] mt-16">
            ✦ Description
          </h5>
          <h3 className="mt-4 text-2xl md:text-3xl text-black">
            What the project was
          </h3>

          <p className="mt-6 text-[#333] text-base md:text-lg">
            {post.description1}
          </p>
          <p className="mt-4 text-[#333] text-base md:text-lg">
            {post.description2}
          </p>

          {post.image2 && (
            <>
              <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-xl border border-black/5">
                <Image
                  src={post.image2}
                  alt={
                    post.caption1
                      ? `${post.title} - ${post.caption1}`
                      : `${post.title} project image`
                  }
                  fill
                  className="object-cover"
                />
              </div>
              {(post.caption1 || post.caption1year) && (
                <div className="mt-4 flex items-center justify-between text-[#666] text-sm">
                  <h6>{post.caption1}</h6>
                  {post.caption1year && <p>({post.caption1year})</p>}
                </div>
              )}
            </>
          )}

          {post.image3 && (
            <>
              <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-xl border border-black/5">
                <Image
                  src={post.image3}
                  alt={
                    post.caption2
                      ? `${post.title} - ${post.caption2}`
                      : `${post.title} project image`
                  }
                  fill
                  className="object-cover"
                />
              </div>
              {(post.caption2 || post.caption2year) && (
                <div className="mt-4 flex items-center justify-between text-[#666] text-sm">
                  <h6>{post.caption2}</h6>
                  {post.caption2year && <p>({post.caption2year})</p>}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
