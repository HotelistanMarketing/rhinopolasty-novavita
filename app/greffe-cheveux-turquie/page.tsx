import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhyChoose from '@/components/WhyChoose';
import BeforeAfterBanner from '@/components/BeforeAfter/BeforeAfterBanner';
import WhatWeOfferSection from '@/components/Offerings/WhatWeOfferSection';
import JourneyStepsSection from '@/components/JourneyStepsSection';
import PatientJourneySlider from '@/components/PatientJourneySlider/PatientJourneySlider';
import BeforeAfterExamples from '@/components/BeforeAfterExamples/BeforeAfterExamples';
import { FolycureComparison, GetConsultation, TestimonialsSlider } from '@/components';
import { FolicountAISection } from '@/components';
import TicketAndReviewsSection from '@/components/TicketAndReviewsSection/TicketAndReviewsSection';
import Reviews from '@/components/Testimonials/Reviews';
import BeforeAfterBannerMobile from '@/components/BeforeAfter/BeforeAfterBannerMobile';
import TypesOfTransplant from '@/components/Procedures/TypesOfTransplant';
import FAQSection from '@/components/FAQ/FAQSection';
import CallToActionFormVariant3 from '@/components/CallToActionFormVariant3/CallToActionFormVariant3';

export default function GreffeCheveuxTurquiePage() {
  return (
    <>
      <Header hideLangPicker={true} />
      <HeroSection />
      <div id="why-folycure">
        <WhyChoose />
      </div>
      <div className='hidden lg:block'>
        <BeforeAfterBanner />
      </div>
      <WhatWeOfferSection />
      <div id="before-after">
        <BeforeAfterExamples />
      </div>
      <TicketAndReviewsSection />
      <div id="your-journey">
        <JourneyStepsSection />
      </div>
      <PatientJourneySlider />
      <div className='mt-12 hidden lg:block'>
        <BeforeAfterBanner />
      </div>
      <div>
        <Reviews
          wrapperClassNames="flex flex-row gap-2 w-full bg-white px-6 py-3 lg:hidden"
          googleClassNames="!w-[159px] !h-[61px]"
          trustPilotClassNames="!w-[165px] !h-[69px]"
          trustPilotSummaryVersion={true}
        />
      </div>
      <div id="happy-patients">
        <TestimonialsSlider />
      </div>
      <div className='lg:hidden block'>
        <BeforeAfterBannerMobile />
      </div>
      <FolicountAISection />
      <div id="contact-us">
        <GetConsultation />
      </div>
      <TypesOfTransplant />
      <FolycureComparison /> 
      <div className='hidden lg:block'>
        <BeforeAfterBanner />
      </div>
      
      <FAQSection />
      <CallToActionFormVariant3 />
    </>
  );
} 