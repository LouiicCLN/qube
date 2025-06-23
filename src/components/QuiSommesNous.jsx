import useInView from "../useInView";

export default function SectionQuiSommesNous() {
  const [ref, isVisible] = useInView({ threshold: 0.3 });

  return (
    <section
      id="section2"
      ref={ref}
      className={`relative max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-10 transition-opacity duration-700 ease-out
        ${isVisible ? "opacity-100 animate-fadeUp" : "opacity-0"}`}
    >
      <h3 className="text-3xl font-bold mb-4">Qui sommes-nous ?</h3>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
      </p>
    </section>
  );
}
