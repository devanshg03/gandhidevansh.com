import React from "react";

export function Footer(): React.JSX.Element {
  return (
    <footer className="font-sans w-full bg-white">
      <div className="diagonal-pattern border-y border-black/5">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h5 id="contact" className="text-sm text-[#555]">
              ✦ Let's talk
            </h5>
            <h3 className="mt-4 text-3xl md:text-4xl text-black">
              Open to interesting conversations
            </h3>
          </div>
          <div className="md:pt-8 flex items-start md:justify-end gap-2">
            <a
              href="#projects"
              className="inline-flex items-center h-10 px-4 rounded-lg border border-black/10 bg-white text-black hover:bg-black/5 transition-all duration-200"
            >
              Look at my projects
            </a>
            <a
              href="mailto:hello@gandhidevansh.com"
              className="inline-flex items-center h-10 px-4 rounded-lg border border-black/10 bg-black text-white hover:bg-black/80 transition-all duration-200"
            >
              Say hi
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-black/5">
        <div className="max-w-6xl mx-auto px-6 py-4 md:h-14 md:py-0 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 text-sm text-[#555]">
          <div className="flex items-center gap-2 flex-wrap">
            <span>Devansh Gandhi</span>
            <span className="text-[#999]">·</span>
            <a
              href="https://www.mahlke.design/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Inspired by Aaron Mahlke
            </a>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="mailto:hello@gandhidevansh.com"
              className="hover:underline"
            >
              Email
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/itzdgofficial"
              className="hover:underline"
            >
              X
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
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
