"use client";

export default function notFound() {
  return (
    <div className="font-sans px-[10%] flex flex-col items-center bg-black md:px-[100px] lg:px-[20%] py-48">
      <h1 className="text-5xl font-bold text-center">
        Oops! Something's missing.
      </h1>
      <h2 className="mt-6">
        Unfortunately, the page you are looking for has escaped. We have
        dispatched a team of GPT-4 Augmented AI Robots in thought-controlled
        rocket ships to capture it.
      </h2>
      <a
        className="border-solid border-2 border-white px-8 py-3 rounded-lg mt-6"
        href="/"
      >
        Back to Home
      </a>
    </div>
  );
}
