import CarouselComponent from "@/components/CarasolComponent";
import ExcellentBanner from "@/components/common/ExcellentBanner";
import Footer from "@/components/common/Footer";
import FooterTopBanner from "@/components/common/FooterTopBanner";
import Header from "@/components/common/Header";
import CustomerSupport from "@/components/CustomerSupport";
import FAQSection from "@/components/FAQ/FaqSection";
import Freecancelation from "@/components/Freecancelation";
import TestimonialsSection from "@/components/Testimonial/TestimonialSection";
import TopDestinations from "@/components/TopDestinations";
import TourCarousel from "@/components/TourCarousel";
import YosemiteFeatures from "@/components/YosemiteFeature";
import YosemiteTour from "@/components/YosemiteTour";
import FullTemplate from "@/templates/FullTemplate";
import HalfTemplate from "@/templates/HalfTemplate";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />
      <CarouselComponent />
      <ExcellentBanner />
      <YosemiteFeatures />
      <YosemiteTour />
      <TourCarousel />
      <Freecancelation />
      <TopDestinations />

      <Image
        width={1000}
        height={1000}
        alt=""
        src={"/mountain-xb.png"}
        className="w-full h-36 mt-5"
      />
      <CustomerSupport />
      <TestimonialsSection />
      <FAQSection />

      <FooterTopBanner />

      <Footer />
    </div>
  );
};

export default Home;
