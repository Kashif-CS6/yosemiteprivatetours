import CarouselComponent from "@/components/CarasolComponent";
import ExcellentBanner from "@/components/common/ExcellentBanner";
import Footer from "@/components/common/Footer";
import FooterTopBanner from "@/components/common/FooterTopBanner";
import Header from "@/components/common/Header";
import FAQSection from "@/components/FAQ/FaqSection";
import TestimonialsSection from "@/components/Testimonial/TestimonialSection";
import TopDestinations from "@/components/TopDestinations";
import TourCarousel from "@/components/TourCarousel";
import YosemiteTour from "@/components/YosemiteTour";
import FullTemplate from "@/templates/FullTemplate";
import HalfTemplate from "@/templates/HalfTemplate";
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

      <FullTemplate color="bg-gray-50" shd="shadow-none">
        <HalfTemplate>
          <YosemiteTour />
        </HalfTemplate>
      </FullTemplate>
      <HalfTemplate>
        <TourCarousel />
      </HalfTemplate>
      <HalfTemplate>
        <TopDestinations />
      </HalfTemplate>

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
