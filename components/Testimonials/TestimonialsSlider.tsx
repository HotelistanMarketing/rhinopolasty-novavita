'use client'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, Pagination } from "../../utils/Swiper";
import type { Swiper as SwiperType } from 'swiper';
import TestimonialCard from "./TestimonialCard";
import Reviews from "./Reviews";
import BritainFlag from "@/public/icons/BritainFlag";
import { useI18n } from '@/locales/client';

const testimonials = [
  {
    name: "John Doe",
    countryFlag: <BritainFlag className="w-7 h-7 rounded-full" />,
    graftCount: "3500 Graft",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
  },
  {
    name: "Jane Smith",
    countryFlag: <BritainFlag className="w-7 h-7 rounded-full" />,
    graftCount: "3200 Graft",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
  },
  {
    name: "Alex Brown",
    countryFlag: <BritainFlag className="w-7 h-7 rounded-full" />,
    graftCount: "4000 Graft",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
  },
  {
    name: "Alex Brown",
    countryFlag: <BritainFlag className="w-7 h-7 rounded-full" />,
    graftCount: "4000 Graft",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
  },
  {
    name: "Alex Brown",
    countryFlag: <BritainFlag className="w-7 h-7 rounded-full" />,
    graftCount: "4000 Graft",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
  },
];

const TestimonialsSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const t = useI18n();

  return (
    <section className="relative w-full flex flex-col items-center bg-[#EAF2FF] py-5 lg:py-[56px] overflow-x-hidden">
      {/* Title */}
      <h2 className="container text-[#1F2B6C] font-rubik font-semibold text-2xl lg:text-[52px] lg:leading-[62px] lg:text-left mb-4 lg:mb-[72px] w-full text-center ">
        {t("OUR HAPPY PATIENTS")}
      </h2>
      {/* Reviews (top right, absolute for desktop, static for mobile) */}
      <div className="absolute h-[156px] justify-end rounded-bl-[100px] px-[86px] mb-8 right-0 top-0 z-10 hidden lg:flex bg-white">
        <Reviews wrapperClassNames="" />
      </div>
      {/* Cards Slider */}
      <div className="w-full flex justify-center">
        <div className="container px-8 lg:px-0">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={24}
            onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
            breakpoints={{
              1024: { slidesPerView: 3 },
            }}
            className="testimonials-swiper"
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: true,
            }}
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx} className="flex justify-center">
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Custom Slider Dots */}
      <div className="flex flex-row items-center gap-4 mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-[18px] h-[18px] rounded-full block border-2 border-transparent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E6BF96] ${activeIndex === idx ? 'bg-[#E6BF96]' : 'bg-[#1F2B6C]'}`}
            onClick={() => swiperRef.current?.slideToLoop(idx)}
            type="button"
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSlider; 