import Image from "next/image";

export default function mywork() {
  return (
    <div className="font-sans pt-[96px] w-full bg-white px-[10%] md:px-[100px]">
      <h4 className="font-mono text-xl font-thin text-[#222]">
        (SELECTED WORK)
      </h4>
      <h3 className="mt-6 text-4xl capitalize font-extrabold text-black">
        Nola<span className="font-light">©</span>
      </h3>

      <div className="bg-black w-full h-[595px] flex flex-col items-center justify-center rounded-xl mt-6">
        <Image
          src="/assets/nola.png"
          alt="alt"
          width={200}
          height={200}
          className="my-auto pt-12"
        />
      </div>
      <div className="mt-6 flex flex-row justify-between text-[#222] text-xl font-mono font-thin">
        <h6>
          A foodtech & consumer tech startup that made granola bars at the click
          of a button.
        </h6>
        <p>(2022)</p>
      </div>

      <h3 className="mt-24 text-4xl capitalize font-extrabold text-black">
        entrepreneur society hKU<span className="font-light">©</span>
      </h3>

      <div className="bg-black w-full h-[595px] flex flex-col items-center justify-center rounded-xl mt-6">
        <Image
          src="/assets/eso.png"
          alt="alt"
          width={200}
          height={200}
          className="my-auto pt-12"
        />
      </div>
      <div className="mt-6 flex flex-row justify-between text-[#222] text-xl font-mono font-thin">
        <h6>
          A student-led angel investment network, fostering future founders.
        </h6>
        <p>(2019 - 2023)</p>
      </div>
    </div>
  );
}
