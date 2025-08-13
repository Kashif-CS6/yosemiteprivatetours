import HalfTemplate from "@/templates/HalfTemplate";
import FAQList from "./FaqList";

export default function FAQSection() {
  return (
    <HalfTemplate>
      <section className="w-6/12 mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-8 tracking-wider">
          Frequently asked questions
        </h2>

        <FAQList />

        <button className="mt-8 px-18 font-bold py-2 border border-black rounded-full   transition">
          See all
        </button>
      </section>
    </HalfTemplate>
  );
}
