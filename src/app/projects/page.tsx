import Image from "next/image";
import Head from "next/head";

export default function Home() {
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
        <h1 className="uppercase text-5xl md:text-7xl font-extrabold text-black">
          NOLA<span className="font-light">©</span>
        </h1>
        <h2 className="font-mono font-thin text-xl md:text-3xl text-[#222] mt-2 md:w-6/12">
          A foodtech & consumer tech startup that made granola bars at the click
          of a button.
        </h2>

        <div className="bg-black w-full h-[595px] flex flex-col items-center justify-center rounded-xl mt-24">
          <Image
            src="/assets/petsimplified.png"
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

        <p className="mt-6 text-xl text-[#222]">
          Nola was a startup of mine that started over the summer of 2022. I
          joined the InnoX Summer Camp held by Hong Kong X Foundation.
          Throughout the bootcamp, we applied the design thinking framework,
          along with a LEAN Startup mindset to solve problems we were passionate
          about. With a theme of ‘Green Living’ we decided to focus on getting
          quality, nutritions food on the go, while forgoing plastic waste. We
          settled on the idea of building a granola bar machine.
        </p>
        <p className="mt-4 text-xl text-[#222]">
          After winning the camp, my team and I decided to put the prize money
          from the camp towards product development, and pursue this as a real
          startup. Throughout the course of the next six months, we build
          countless prototypes of the machine, and I had to learn all aspects of
          running a startup, from fund raising to talking to potential customers
          to 3D design and prototyping. My co-founders contributed with their
          knowledge of Food Science and Product Design.
        </p>

        <div className="bg-black w-full h-[595px] flex flex-col items-center justify-center rounded-xl mt-24">
          <Image
            src="/assets/petsimplified.png"
            alt="alt"
            width={200}
            height={200}
            className="my-auto pt-12"
          />
        </div>
        <div className="mt-6 flex flex-row justify-between text-[#222] text-xl font-mono font-thin">
          <h6>
            A foodtech & consumer tech startup that made granola bars at the
            click of a button.
          </h6>
          <p>(2022)</p>
        </div>

        <div className="bg-black w-full h-[595px] flex flex-col items-center justify-center rounded-xl mt-9">
          <Image
            src="/assets/petsimplified.png"
            alt="alt"
            width={200}
            height={200}
            className="my-auto pt-12"
          />
        </div>
        <div className="mt-6 flex flex-row justify-between text-[#222] text-xl font-mono font-thin">
          <h6>
            A foodtech & consumer tech startup that made granola bars at the
            click of a button.
          </h6>
          <p>(2022)</p>
        </div>

        <div className="bg-black w-full h-[595px] flex flex-col items-center justify-center rounded-xl mt-9">
          <Image
            src="/assets/petsimplified.png"
            alt="alt"
            width={200}
            height={200}
            className="my-auto pt-12"
          />
        </div>
        <div className="mt-6 flex flex-row justify-between text-[#222] text-xl font-mono font-thin">
          <h6>
            A foodtech & consumer tech startup that made granola bars at the
            click of a button.
          </h6>
          <p>(2022)</p>
        </div>

        <div className="bg-black w-full h-[595px] flex flex-col items-center justify-center rounded-xl mt-9">
          <Image
            src="/assets/petsimplified.png"
            alt="alt"
            width={200}
            height={200}
            className="my-auto pt-12"
          />
        </div>
        <div className="mt-6 flex flex-row justify-between text-[#222] text-xl font-mono font-thin">
          <h6>
            A foodtech & consumer tech startup that made granola bars at the
            click of a button.
          </h6>
          <p>(2022)</p>
        </div>
      </div>
    </>
  );
}
