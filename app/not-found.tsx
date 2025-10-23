import React from "react";

export default function NotFound(): React.JSX.Element {
  return (
    <section className="font-sans w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-28 text-center">
        <h1 className="text-4xl md:text-6xl tracking-tight text-black">
          Oops! Something's missing.
        </h1>
        <p className="text-base md:text-lg text-[#333] mt-4 max-w-lg mx-auto">
          The page you're looking for doesn't exist or has moved.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="/"
            className="inline-flex items-center h-10 px-4 rounded-full border border-black/10 bg-black text-white hover:bg-black/90"
          >
            Back to Home
          </a>
          <a
            href="/#projects"
            className="inline-flex items-center h-10 px-4 rounded-full border border-black/10 bg-white text-black hover:bg-black/5"
          >
            View projects
          </a>
        </div>
      </div>
    </section>
  );
}
