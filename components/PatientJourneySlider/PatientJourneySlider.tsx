"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Custom hooks
import { useSwiper } from '../../hooks/useSwiper';

// Components
import PatientCard from '../PatientCard/PatientCard';
import NavigationButton from '../NavigationButton';

// Icons
import ChevronLeftIcon from '../../public/icons/ChevronLeftIcon';
import ChevronRightIcon from '../../public/icons/ChevronRightIcon';

// Constants and types
import { PATIENT_JOURNEY_CONFIG, PATIENT_JOURNEY_BREAKPOINTS } from '../../constants/patientJourney';
import { Patient } from '../../types/patient';
import { useI18n } from '@/locales/client';

interface PatientJourneySliderProps {
  title?: string;
  className?: string;
  onPatientVideoClick?: (patient: Patient) => void;
}

/**
 * PatientJourneySlider Component
 * 
 * A responsive slider showcasing patient journey videos with navigation controls.
 * Follows SOLID principles with separated concerns and reusable components.
 * 
 * @param title - Optional custom title for the section
 * @param className - Additional CSS classes
 * @param onPatientVideoClick - Callback when a patient video is clicked
 */
const PatientJourneySlider: React.FC<PatientJourneySliderProps> = ({
  title,
  className = "",
  onPatientVideoClick
}) => {
  const { prevRef, nextRef, setSwiperInstance } = useSwiper();
  const t = useI18n();

  // Use provided title or default to translated title
  const displayTitle = title || t("OUR PATIENT JOURNEY");

  const handlePatientVideoClick = (patient: Patient) => {
    onPatientVideoClick?.(patient);
    // Could also handle default behavior like opening a modal
    console.log(`Playing video for ${patient.name}`);
  };

  return (
    <section className={`w-full flex flex-col items-center lg:pt-[64px] bg-transparent overflow-hidden pb-4 lg:pb-0 ${className}`}>
      {/* Section Title */}
      <header className="mb-8 lg:mb-12">
        <h2 className="font-rubik font-semibold text-2xl lg:text-[52px] lg:leading-[62px] text-[#1F2B6C] text-center max-w-[779px]">
          {displayTitle}
        </h2>
      </header>

      {/* Slider Container */}
      <div className='w-full flex flex-col lg:flex-row items-center lg:gap-6'>
        {/* Desktop Navigation Buttons */}
        <NavigationButton
          ref={prevRef}
          direction="prev"
          className="hidden lg:flex"
        >
          <ChevronLeftIcon />
        </NavigationButton>

        <div className="lg:h-[613px] flex flex-col lg:flex-row items-center w-full lg:max-w-[1106px] mx-auto gap-6 px-[47px] lg:px-0">
          {/* Swiper Slider */}
          <div className="flex-1 min-w-0 w-full">
            <Swiper
              modules={[Navigation, Autoplay]}
              onSwiper={setSwiperInstance}
              spaceBetween={PATIENT_JOURNEY_CONFIG.spaceBetween}
              slidesPerView={PATIENT_JOURNEY_CONFIG.slidesPerView.mobile}
              breakpoints={PATIENT_JOURNEY_BREAKPOINTS}
              loop={false}
              grabCursor={true}
              watchSlidesProgress={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              className="patient-journey-swiper"
            >
              {PATIENT_JOURNEY_CONFIG.patients.map((patient) => (
                <SwiperSlide key={patient.id} className="flex justify-center !h-[489px] lg:!h-[613px]">
                  <PatientCard
                    patient={patient}
                    onPlayClick={handlePatientVideoClick}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Desktop Navigation Button */}
        <NavigationButton
          ref={nextRef}
          direction="next"
          className="hidden lg:flex mb-4"
        >
          <ChevronRightIcon />
        </NavigationButton>

        {/* Mobile Navigation Buttons */}
        <div className="flex lg:hidden gap-4 mt-4">
          <NavigationButton
            ref={prevRef}
            direction="prev"
          >
            <ChevronLeftIcon />
          </NavigationButton>
          <NavigationButton
            ref={nextRef}
            direction="next"
          >
            <ChevronRightIcon />
          </NavigationButton>
        </div>
      </div>
    </section>
  );
};

export default PatientJourneySlider; 