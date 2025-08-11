import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Mike and Jane",
    location: "Sydney",
    image: "/logo.jpg",
    rating: 4,
    review:
      "Magical & Majestic - believe every good thing you read about this tour company, you will not be disappointed!",
  },
  {
    name: "Katheryn Kennedy",
    location: "London",
    image: "/logo.jpg",
    rating: 5,
    review:
      "Our Bucket List Overflowed, a wonderful day in an amazing park with the perfect tour guide!",
  },
  {
    name: "Yarmila",
    location: "Prague Czech Republic",
    image: "/logo.jpg",
    rating: 5,
    review:
      "10 Stars! Fun, informative, flexible, indulgent, patient, & very professional guides in a warm & engaging manner.",
  },
  {
    name: "Erin Newcastle",
    location: "UK",
    image: "/logo.jpg",
    rating: 5,
    review:
      "A wonderful day in Yosemite National Park wilderness, totally exceeded expectations! The best experience ever!",
  },
  {
    name: "Loreena's family",
    location: "Madrid, Spain",
    image: "/logo.jpg",
    rating: 5,
    review:
      "Treated like a King & Queen! Breathtaking, OUTSTANDING and A MUST See!! Without any hesitation, 5 stars!",
  },
  {
    name: "Rob & Martha, Baton Rouge",
    location: "Canada",
    image: "/logo.jpg",
    rating: 5,
    review:
      "They are consummate professionals who really care about their customers’ wellbeing and experience - a must do!",
  },
];

export default function TestimonialsList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((t, idx) => (
        <TestimonialCard key={idx} {...t} />
      ))}
    </div>
  );
}
