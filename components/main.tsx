export default function main() {
  return (
    <section className="font-sans w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl tracking-tight text-black">
          Devansh Gandhi
        </h1>
        <p className="text-base md:text-lg text-[#333] mt-3 max-w-lg mx-auto">
          I build humanistic simulations, foster communities, and craft products
          that make you go "wow."
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center h-10 px-4 rounded-full border border-black/10 bg-white text-black hover:bg-black/5"
          >
            Look at my projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center h-10 px-4 rounded-full border border-black/10 bg-black text-white hover:bg-black/90"
          >
            Say hi
          </a>
        </div>
      </div>
    </section>
  );
}
