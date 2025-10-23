export default function footer() {
  return (
    <div className="font-sans w-full pt-24 bg-white px-[10%] md:px-[100px]">
      <h4 id="contact" className="font-mono text-xl font-thin text-[#222]">
        (CONTACT)
      </h4>
      <h3 className="mt-6 text-4xl capitalize font-extrabold text-black">
        how to reach me
      </h3>
      <p className="font-mono font-thin text-2xl md:text-3xl text-[#222] mt-6 md:w-6/12">
        Looking to grow or build your startup?
      </p>
      <p className="font-mono font-thin text-2xl md:text-3xl text-[#222] mt-12 md:w-6/12">
        Reach out, let’s get the conversation started and bounce some ideas.
      </p>

      <h1 className="mt-24 uppercase text-5xl md:text-7xl font-extrabold text-black">
        Devansh Gandhi <br /> Venture builder
      </h1>

      <div className="mt-6 w-full flex flex-row flex-wrap justify-between md:text-xl text-[#222]">
        <div>
          <a
            target="new"
            href="https://instagram.com/itzdgofficial"
            className="hover:text-[#8a3ab9]"
          >
            Instagram
          </a>
          <a
            target="new"
            className="ml-12 hover:text-[#1DA1F2]"
            href="https://x.com/itzdgofficial"
          >
            X
          </a>
          <a
            target="new"
            className="ml-12 hover:text-[#0a66c2]"
            href="https://linkedin.com/in/gdevansh/"
          >
            LinkedIn
          </a>
        </div>

        <p>Copyright© Devansh Gandhi</p>
      </div>

      <div className="mt-6 w-full flex justify-center pb-24">
        <a className="text-xl text-[#222]" href="#top">
          Back to top ↑
        </a>
      </div>
    </div>
  );
}
