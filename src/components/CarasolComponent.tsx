"use client";
import React from "react";
// @ts-ignore
import Slider from "react-slick";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  buttonText: string;
}

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-6 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-3 rounded-full transition"
    >
      <ChevronRight className="text-white w-6 h-6" />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-6 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-3 rounded-full transition"
    >
      <ChevronLeft className="text-white w-6 h-6" />
    </button>
  );
};

const CarasolComponent: React.FC = () => {
  const slides: Slide[] = [
    {
      id: 1,
      title: "Yosemite",
      subtitle: "National Park",
      description:
        "Join us now to experience Yosemite's Majesty on our Private 1-Day tour! Yosemite Private Tours presents an exclusive 12-hour journey from San Francisco to Yosemite National Park.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2340&q=80",
      buttonText: "View Details",
    },
    {
      id: 2,
      title: "Grand Canyon",
      subtitle: "Arizona Wonder",
      description:
        "Discover the breathtaking beauty of the Grand Canyon with our exclusive guided tours. Experience the majestic views and rich geological history of this natural wonder.",
      image:
        "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=2340&q=80",
      buttonText: "Explore Now",
    },
    {
      id: 3,
      title: "Yellowstone",
      subtitle: "Wildlife Paradise",
      description:
        "Immerse yourself in the wonders of America's first national park. From geysers to wildlife, experience the natural beauty that makes Yellowstone truly special.",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=2340&q=80",
      buttonText: "Book Tour",
    },
    {
      id: 4,
      title: "Zion",
      subtitle: "Utah's Treasure",
      description:
        "Journey through towering red cliffs and emerald pools in Zion National Park. Our expert guides will show you hidden gems and spectacular viewpoints.",
      image:
        "https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=2340&q=80",
      buttonText: "Learn More",
    },
    {
      id: 5,
      title: "Glacier",
      subtitle: "Montana Wilderness",
      description:
        "Experience the pristine wilderness of Glacier National Park with its stunning mountain peaks, pristine lakes, and diverse wildlife in their natural habitat.",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2340&q=80",
      buttonText: "Discover",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: any) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
        }}
      >
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-white/50 rounded-full hover:bg-white transition"></div>
    ),
  };

  return (
    <div className="slider-container w-full h-screen overflow-hidden relative">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            {/* Background */}
            <div
              className="w-full h-[80vh] bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0  bg-opacity-40"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-6 lg:px-12">
                  <div className="max-w-2xl">
                    <h1 className="text-5xl lg:text-7xl font-bold text-white mb-2 leading-tight">
                      {slide.title}
                    </h1>
                    <h2 className="text-3xl lg:text-4xl font-light text-white mb-6 opacity-90">
                      {slide.subtitle}
                    </h2>
                    <p className="text-lg lg:text-xl text-white mb-8 leading-relaxed opacity-80 max-w-xl">
                      {slide.description}
                    </p>
                    <button className="inline-flex items-center px-8 py-3 bg-white backdrop-blur-sm font-semibold rounded-full text-black hover:bg-white transition-all duration-300 border border-white/30 hover:border-white/50 group ">
                      {slide.buttonText}
                      <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarasolComponent;
