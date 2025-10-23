export default function main() {
  return (
    <section className="font-sans w-full bg-white">
      <div className="diagonal-pattern border-y border-black/5">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h5 id="about" className="text-sm text-[#555]">
              ✦ What did I do?
            </h5>
            <h3 className="mt-3 text-3xl md:text-4xl text-black">
              A Curated Collection of Projects
            </h3>
          </div>
          <p className="text-[#333] md:pt-8">
            Projects that demonstrate how I solve business and product
            challenges using design, tech, and finance.
          </p>
        </div>
      </div>
    </section>
  );
}
