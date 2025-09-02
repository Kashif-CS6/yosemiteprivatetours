import CarasolComponent from "@/components/CarasolComponent";
import ExpertOption from "@/components/Home2Components/ExpertOption";
import Footer2 from "@/components/Home2Components/Footer2";
import FooterTopBanner2 from "@/components/Home2Components/FooterTopBanner2";
import Header2 from "@/components/Home2Components/Header2";
import HeroSearch from "@/components/Home2Components/HeroSearch";
import Navbar2 from "@/components/Home2Components/Navbar2";
import TestimonialCard from "@/components/Home2Components/Testimonial2/TestimonialCard";
import TestimonialsSection from "@/components/Home2Components/Testimonial2/TestimonialSection";
import TourExperts from "@/components/Home2Components/TourExperts";
import FullTemplate from "@/templates/FullTemplate";
import HalfTemplate from "@/templates/HalfTemplate";
import { WatchIcon } from "lucide-react";
import Image from "next/image";
import ImageHandler from "@/components/custom/ImageHandler";
import FabolusTours from "@/components/Home2Components/FabolusTours";
import FeaturedCollections from "@/components/Home2Components/FeaturedCollections";

const Home2 = () => {
  return (
    <div>
      <div className="bg-[#04A7B6]">
        <Navbar2 />
      </div>
      <Header2 />
      <div className="relative">
        <CarasolComponent />
        <div className="flex items-center justify-center">
          <HeroSearch />
        </div>
      </div>
      <HalfTemplate>
        <TourExperts />
        <TestimonialsSection />
        <FabolusTours />
        <FeaturedCollections />
      </HalfTemplate>
      <ImageHandler
        srcImage="/mountain-xb.png"
        ImageHeight={1000}
        ImageWidth={1000}
        altImg="mountain"
        className="w-full h-36 mt-5"
      />

      <FooterTopBanner2 />
    </div>
  );
};

export default Home2;
