import CollectionCard from "./CollectionCard";

const collections = [
  {
    image: "/london.jpg",
    title: "Yosemite National Park private 1-day custom tour",
    description:
      "Join us now to experience Yosemite’s Majesty on our Private...",
  },
  {
    image: "/rome.jpg",
    title: "Yosemite National Park private 1-day custom tour",
    description:
      "Join us now to experience Yosemite’s Majesty on our Private...",
    badge: "Latest News",
  },
  {
    image: "/washington-dc.jpg",
    title: "Yosemite National Park private 1-day custom tour",
    description:
      "Join us now to experience Yosemite’s Majesty on our Private...",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-center text-green-800 mb-8">
        Featured Collections
      </h2>

      <div className="flex items-center justify-center flex-wrap gap-10">
        {collections.map((item, idx) => (
          <CollectionCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}
