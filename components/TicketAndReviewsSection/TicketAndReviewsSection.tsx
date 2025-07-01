import React from 'react';
import { UiImage } from '@/utils';
import Reviews from '../Testimonials/Reviews';

const TicketAndReviewsSection: React.FC = () => {
  return (
    <section
      className="w-full bg-[#EAF5FB] rounded-[16px] flex items-center px-[27px] md:hidden z-50 mt-[24px]"
    >
      {/* Flight Ticket Image */}
      <div className="relative flex-shrink-0">
        <UiImage
          src="/flight-ticket-included.png"
          alt="Flight Ticket Included"
          width={145}
          height={145}
          className=""
          quality={100}
        />
      </div>
      {/* Reviews */}
      <div className="flex flex-col justify-center ml-[12px]">
        <Reviews
          wrapperClassNames="flex flex-col gap-2 w-full"
          googleClassNames="!w-[159px] !h-[61px]"
          trustPilotClassNames="!w-[165px] !h-[69px]"
          trustPilotSummaryVersion={true}
        />
        {/* Texts below reviews (optional, if not in Reviews images) */}
        {/* <div className="mt-1">
          <div className="text-[#666] text-[11px] leading-[12px] font-medium pl-[2px]">5 Stars | 300 Reviews</div>
          <div className="text-[#666] text-[11px] leading-[12px] font-medium pl-[2px] mt-[2px]">4.7 TrustScore | 672 Reviews</div>
        </div> */}
      </div>
    </section>
  );
};

export default TicketAndReviewsSection;
