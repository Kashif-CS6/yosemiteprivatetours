import TestimonialsList from "./TestimonialsList";

export default function TestimonialsSection() {
  return (
    <section className=" mx-auto px-4 py-12 text-center">
      <h2 className="text-2xl font-bold mb-8 tracking-wide">What travellers say</h2>

      <TestimonialsList />

      <button className="mt-8 px-18 font-bold py-2 border border-gray-800 rounded-full   transition">
        See all
      </button>
    </section>
  );
}
