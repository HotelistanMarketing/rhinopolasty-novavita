import React from "react";
import QuotationIcon from "@/public/icons/QuotationIcon";
import StarIcon from "@/public/icons/StarIcon";

interface TestimonialCardProps {
  name: string;
  countryFlag: React.ReactNode;
  graftCount: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  countryFlag,
  graftCount,
  text,
}) => (
  <div className="flex flex-col items-center px-6 py-12 lg:py-16 gap-[22px] not-first:lg:gap-6 bg-[#1F2B6C] rounded-tr-[100px] lg:h-[444px] relative">
    {/* Quote Icon */}
    <div className="w-[45px] h-[30px] flex items-center justify-center rounded mb-2">
      {/* SVG for quote */}
     <QuotationIcon />
    </div>
    {/* Stars */}
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i    } />
))}
    </div>
    {/* Testimonial Text */}
    <p className="text-[#FCFEFE] text-center font-rubik text-sm lg:text-base leading-[1.4] lg:w-[364px]">
      {text}
    </p>
    {/* Divider */}
    <div className="border-t border-[#BFD2F8] w-[221.5px]" />
    {/* Name, Flag, Graft */}
    <div className="flex justify-between items-center w-full lg:w-[364px] lg:mt-2">
      <div className="flex items-center gap-2">
        {countryFlag}
        <span className="text-[#FCFEFE] font-rubik text-base lg:text-xl">{name}</span>
      </div>
      <span className="text-[#FCFEFE] font-rubik text-base lg:text-xl">{graftCount}</span>
    </div>
  </div>
);

export default TestimonialCard; 