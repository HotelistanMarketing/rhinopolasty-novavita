"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import { UiLink } from '@/utils';
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '@/constants/ContactInformation';
import { useI18n } from '@/locales/client';

const cards = [
  {
    graft: 3500,
    technique: 'FUE',
    age: 34,
    country: 'USA',
    image: '/before-afters/ba1.jpeg',
  },
  {
    graft: 3500,
    technique: 'FUE',
    age: 34,
    country: 'USA',
    image: '/before-afters/ba2.jpeg',
  },
  {
    graft: 3500,
    technique: 'FUE',
    age: 34,
    country: 'USA',
    image: '/before-afters/ba3.jpeg',
  },
  {
    graft: 3500,
    technique: 'FUE',
    age: 34,
    country: 'USA',
    image: '/before-afters/ba4.jpeg',
  },
  {
    graft: 3500,
    technique: 'FUE',
    age: 34,
    country: 'USA',
    image: '/before-afters/ba5.jpeg',
  },
];

const BeforeAfterExamples: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const t = useI18n();

  const InfoItem = ({ label, value }: { label: string; value: string | number }) => (
    <div className="flex flex-col items-center gap-[5.52px]">
      <div className="flex flex-row justify-center items-center gap-[6.9px] h-[19px]">
        <span className="font-rubik text-xs lg:text-[16px] leading-[19px] text-black text-center font-normal">{label}</span>
      </div>
      <span className="font-rubik text-[15px] lg:text-[20.71px] leading-[25px] text-black font-semibold text-center h-[25px]">{value}</span>
    </div>
  );

  return (
    <section className="relative flex flex-col items-center w-full py-[41px] bg-[#10194A] overflow-x-hidden mt-4 lg:mt-0">
      {/* Heading */}
      <h2 className="font-rubik font-semibold text-2xl lg:text-[52px] lg:leading-[62px] text-[#E6BF96] text-center mb-2">{t("BEFORE & AFTER")}</h2>
      <p className="font-rubik text-sm lg:text-[16px] lg:leading-[19px] text-[#C2C2C2] text-center mb-8 max-w-xl lg:whitespace-nowrap">
        {t("SEE THE REAL TRANSFORMATIONS OF OUR HAPPY PATIENTS WITH NATURAL-LOOKING NOSE")}
      </p>
      {/* Swiper Slider */}
      <div className="container w-full mb-[32px] px-5 lg:px-0">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={12}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            1024: { slidesPerView: 3 },
            // 1440: { slidesPerView: 3 },
          }}
          className="before-after-swiper !overflow-visible"
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
        >
          {cards.map((card, idx) => (
            <SwiperSlide key={idx} className="flex justify-center">
              <div className="flex flex-col items-center h-[370px] lg:h-[516.48px] rounded-[13.8px] bg-white shadow-lg overflow-hidden relative">
                <div className="relative w-[300px] h-[300px] lg:w-[435px] lg:h-[435px]">
                  <Image
                    src={card.image}
                    alt="Before and after example"
                    fill
                    // className="w-full h-[435px] "
                    loading="lazy"
                  />
                </div>

                <div className="w-full h-[81.48px] bg-[#E6BF96] rounded-t-[13.8px] flex items-center justify-center absolute left-0 bottom-0 z-10" style={{ transform: 'scaleY(-1)' }}>
                  <div className="flex flex-row items-center gap-[31px] lg:gap-[44.19px] scale-y-[-1]">
                    <InfoItem label={t("GRAFT")} value={card.graft} />
                    <InfoItem label={t("TECHNIQUES")} value={card.technique} />
                    <InfoItem label={t("AGE")} value={card.age} />
                    <InfoItem label={t("COUNTRY")} value={card.country} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Custom Slider Dots */}
      <div className="hidden lg:flex flex-row items-center gap-4 mb-8">
        {cards.map((_, idx) => (
          <button
            key={idx}
            aria-label={`${t("GO TO SLIDE")} ${idx + 1}`}
            className={`w-[18px] h-[18px] rounded-full block border-2 border-transparent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E6BF96] ${activeIndex === idx ? 'w-[24px] h-[24px] bg-primaty' : 'bg-[#BFD2F8]'}`}
            onClick={() => swiperRef.current?.slideToLoop(idx)}
            type="button"
          />
        ))}
      </div>
      {/* Button */}
      <UiLink
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
        target='_blank' className="flex flex-row justify-center items-center px-16 py-4 gap-2 w-[338px] h-[56px] bg-[#E6BF96] rounded-full cursor-pointer text-center">
        <span className="font-rubik font-semibold text-sm lg:text-[20px] lg:leading-[24px] text-black">{t("REQUEST MORE PHOTOS")}</span>
      </UiLink>
    </section>
  );
};

export default BeforeAfterExamples; 