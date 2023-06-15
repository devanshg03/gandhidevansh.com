export default function navbar() {
  return (
    <div className="font-sans w-full h-20 bg-white flex items-center">
      <a href="/" className="ml-[100px] text-[#279AF1] font-bold text-xl">
        Devansh
        <span className="font-light">©</span>
      </a>
      <div className="ml-[585px] text-[#222222]">
        <a href="/#about">About</a>
        <a className="ml-[48px]" href="/#projects">
          Projects
        </a>
      </div>
      <a href="" className="ml-auto mr-[100px] text-[#222222]">
        hello@gandhidevansh.com
      </a>
    </div>
  );
}
