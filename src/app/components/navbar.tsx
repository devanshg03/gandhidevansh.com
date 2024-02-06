export default function navbar() {
  return (
    <div className="font-sans w-full h-20 bg-white flex justify-center items-center">
      <a href="/" className="lg:ml-[100px] text-[#279AF1] font-bold text-xl">
        Devansh
        <span className="font-light">©</span>
      </a>
      <div className="ml-[585px] text-[#222222] invisible hidden lg:inline lg:visible">
        <a href="/#about">About</a>
        <a className="ml-[48px]" href="/#projects">
          Projects
        </a>
      </div>
      <a
        href=""
        className="ml-auto mr-[100px] text-[#222222] invisible hidden lg:inline lg:visible"
      >
        hello@gandhidevansh.com
      </a>
    </div>
  );
}
