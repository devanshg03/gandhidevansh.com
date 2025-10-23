export default function footer() {
  return (
    <footer className="font-sans w-full bg-white">
      <div className="diagonal-pattern border-y border-black/5">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h5 id="contact" className="text-sm text-[#555]">
              ✦ Let's talk
            </h5>
            <h3 className="mt-3 text-3xl md:text-4xl text-black">
              Ready to level up your design?
            </h3>
          </div>
          <div className="md:pt-8 flex items-start md:justify-end gap-3">
            <a
              href="#projects"
              className="inline-flex items-center h-10 px-4 rounded-full border border-black/10 bg-white text-black hover:bg-black/5"
            >
              Look at my projects
            </a>
            <a
              href="mailto:hello@gandhidevansh.com"
              className="inline-flex items-center h-10 px-4 rounded-full border border-black/10 bg-black text-white hover:bg-black/90"
            >
              Say hi
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-black/5">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between text-sm text-[#555]">
          <span>Devansh Gandhi</span>
          <div className="flex items-center gap-4">
            <a
              target="_blank"
              href="mailto:hello@gandhidevansh.com"
              className="hover:underline"
            >
              Email
            </a>
            <a
              target="_blank"
              href="https://x.com/itzdgofficial"
              className="hover:underline"
            >
              X
            </a>
            <a
              target="_blank"
              href="https://linkedin.com/in/gdevansh/"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
