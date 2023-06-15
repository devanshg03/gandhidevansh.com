import Image from "next/image";
import Head from "next/head";
import Main from "./components/main";
import About from "./components/about";
import Work from "./components/mywork";
import Selected from "./components/selected";
import Link from "next/link";

export default function Home() {
  const projects = [
    { slug: "project1", title: "Project 1", description: "Description 1" },
    { slug: "project2", title: "Project 2", description: "Description 2" },
    { slug: "project3", title: "Project 3", description: "Description 3" },
    // Add more projects here
  ];

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
      <Main />
      <About />
      <Work />
      <Selected />
    </>
  );
}
