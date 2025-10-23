import React from "react";

export function Navbar(): React.JSX.Element {
  return (
    <div className="font-sans w-full h-16 bg-white/80 backdrop-blur supports-backdrop-filter:bg-white/70 sticky top-0 z-50 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 flex items-center h-full">
        <a href="/" className="text-black tracking-tight">
          Devansh
        </a>
        <div className="ml-auto flex items-center gap-4 text-[#222]">
          <a
            href="https://github.com/devanshg03"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-black"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.14 8.96 7.49 10.41.55.1.75-.24.75-.54 0-.27-.01-1.16-.02-2.11-3.05.66-3.7-1.3-3.7-1.3-.5-1.26-1.22-1.6-1.22-1.6-.99-.67.08-.66.08-.66 1.09.08 1.66 1.12 1.66 1.12.98 1.67 2.58 1.19 3.21.91.1-.71.38-1.19.69-1.46-2.44-.28-5.01-1.22-5.01-5.43 0-1.2.43-2.17 1.12-2.94-.11-.28-.48-1.42.11-2.96 0 0 .92-.29 3.02 1.12.87-.24 1.8-.36 2.73-.36.93 0 1.86.12 2.73.36 2.1-1.41 3.02-1.12 3.02-1.12.59 1.54.22 2.68.11 2.96.69.77 1.12 1.74 1.12 2.94 0 4.22-2.57 5.15-5.02 5.42.39.34.73 1.01.73 2.04 0 1.47-.01 2.65-.01 3.01 0 .3.2.65.76.54 4.35-1.45 7.49-5.56 7.49-10.41C23.02 5.24 18.27.5 12 .5z" />
            </svg>
          </a>
          <a
            href="https://x.com/itzdgofficial"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="hover:text-black"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/gdevansh/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-black"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.45 2H3.55C2.7 2 2 2.7 2 3.55v16.9C2 21.3 2.7 22 3.55 22h16.9c.85 0 1.55-.7 1.55-1.55V3.55C22 2.7 21.3 2 20.45 2zM7.4 18H5V9.6h2.4V18zM6.2 8.5c-.77 0-1.4-.63-1.4-1.4 0-.78.63-1.4 1.4-1.4.78 0 1.4.62 1.4 1.4 0 .77-.62 1.4-1.4 1.4zM19 18h-2.4v-4.5c0-1.07-.02-2.45-1.5-2.45-1.5 0-1.73 1.17-1.73 2.38V18H11V9.6h2.3v1.16h.03c.32-.6 1.1-1.23 2.26-1.23 2.42 0 3.41 1.6 3.41 3.67V18z" />
            </svg>
          </a>
          <a
            href="mailto:hello@gandhidevansh.com"
            className="inline-flex items-center h-8 px-3 rounded-lg border border-black/10 bg-black text-white text-sm hover:bg-black/80 transition-all duration-200"
          >
            Say hi
          </a>
        </div>
      </div>
    </div>
  );
}
