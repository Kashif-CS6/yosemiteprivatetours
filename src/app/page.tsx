import CarouselComponent from "@/components/CarasolComponent";
import Footer from "@/components/common/Footer";
import FooterTopBanner from "@/components/common/FooterTopBanner";
import Header from "@/components/common/Header";
import FAQSection from "@/components/FAQ/FaqSection";
import TestimonialsSection from "@/components/Testimonial/TestimonialSection";
import FullTemplate from "@/templates/FullTemplate";
import HalfTemplate from "@/templates/HalfTemplate";
import React from "react";

const Home = () => {
  return (
    <div>
      <HalfTemplate>
        <Header />
      </HalfTemplate>
      <CarouselComponent/>
      <TestimonialsSection />
      <FAQSection />
      <FullTemplate color="#22543d">
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
