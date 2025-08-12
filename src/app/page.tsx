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
      <HalfTemplate>
        <Header />
      </HalfTemplate>
      <CarouselComponent />

      <FullTemplate color="white" shd="shadow-xs">
        <HalfTemplate>
          <ExcellentBanner />
        </HalfTemplate>
      </FullTemplate>
      <HalfTemplate>
        <YosemiteFeatures />
      </HalfTemplate>
      <FullTemplate color="bg-gray-50" shd="shadow-none">
        <HalfTemplate>
          <YosemiteTour />
        </HalfTemplate>
      </FullTemplate>
      <HalfTemplate>
        <TourCarousel />
      </HalfTemplate>
      <HalfTemplate>
        <Freecancelation />
        <TopDestinations />
      </HalfTemplate>
      <Image
        width={1000}
        height={1000}
        alt=""
        src={"/mountain-xb.png"}
        className="w-full h-36 mt-5"
      />
      <CustomerSupport />
      <HalfTemplate>
        <TestimonialsSection />
        <FAQSection />
      </HalfTemplate>

      <FullTemplate shd="shadow-none" color="bg-green-900">
        <HalfTemplate>
          <FooterTopBanner />
        </HalfTemplate>
      </FullTemplate>
      <HalfTemplate>
        <Footer />
      </HalfTemplate>
    </div>
  );
};

export default Home;
