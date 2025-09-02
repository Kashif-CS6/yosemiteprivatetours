import HalfTemplate from "@/templates/HalfTemplate";
import TestimonialsList from "./TestimonialsList";

export default function TestimonialsSection() {
  return (
    <HalfTemplate>
      <section className=" mx-auto px-4 py-12 text-center">
        <h2 className="text-[32px] text-center font-[600]  text-[#193E1A] mb-8 tracking-wide">
          What our clients says about us
        </h2>

        <TestimonialsList />
      </section>
    </HalfTemplate>
  );
}
