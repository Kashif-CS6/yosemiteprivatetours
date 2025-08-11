import FAQItem from "./FaqItem";

const faqs = [
  {
    question: "What is included in a Yosemite Private Tour?",
    answer:
      "Our private tours include transportation, a knowledgeable guide, customized itineraries, park entry fees, and plenty of stops for sightseeing and photography.",
  },
  {
    question: "How long does a typical private tour last?",
    answer:
      "A typical private tour can last anywhere from 6 to 10 hours depending on your chosen itinerary.",
  },
  {
    question: "Can we customize the tour according to our preferences?",
    answer:
      "Yes, we offer fully customizable tours to suit your interests and schedule.",
  },
  {
    question: "What is the best time of year to take a Yosemite Private Tour?",
    answer:
      "Spring and fall are ideal for pleasant weather, fewer crowds, and beautiful scenery.",
  },
  {
    question: "Is the tour suitable for families and children?",
    answer:
      "Yes, our tours are family-friendly and can be adapted for children of all ages.",
  },
  {
    question: "What should we bring for the tour?",
    answer:
      "Comfortable shoes, weather-appropriate clothing, water, snacks, and a camera.",
  },
  {
    question: "How far in advance should I book my Yosemite Private Tour?",
    answer:
      "We recommend booking at least 2-4 weeks in advance to secure your preferred date.",
  },
];

export default function FAQList() {
  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <FAQItem
          key={idx}
          question={faq.question}
          answer={faq.answer}
          defaultOpen={idx === 0} // ✅ First one open by default
        />
      ))}
    </div>
  );
}
