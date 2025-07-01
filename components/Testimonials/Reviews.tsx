import { UiImage } from "@/utils";
import React from "react";

interface ReviewsProps {
  wrapperClassNames?: string;
  googleClassNames?: string;
  trustPilotClassNames?: string;
  trustPilotSummaryVersion?: boolean;
}

export const Reviews: React.FC<ReviewsProps> = ({ wrapperClassNames = "", googleClassNames, trustPilotClassNames, trustPilotSummaryVersion = false }) => (
  <div className={`flex flex-col md:flex-row gap-4 items-center  ${wrapperClassNames}`}>
    {/* Google Reviews */}
    <div className={`relative w-[194px] h-[75px] ${googleClassNames}`}>
      {/* <img src="/icons/google-logo.svg" alt="Google" className="h-6 w-6" />
      <div className="flex items-center text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" /></svg>
        ))}
      </div>
      <span className="text-xs text-[#1F2B6C] font-medium ml-2">5 Stars | 300 Reviews</span> */}
      <UiImage src="/images/google-reviews-Image.png" alt="Google reviews" fill className="" quality={100} />
    </div>
    {/* Trustpilot Reviews */}
    <div className={`relative w-[194px] h-[75px] ${trustPilotClassNames}`}>
      {trustPilotSummaryVersion ? (
        <UiImage src="/images/trust-pilot-summary.png" alt="Trustpilot reviews" fill className="" quality={100} />
      ) : (
        <UiImage src="/images/t-pilot-reviews-Image.png" alt="Trustpilot reviews" fill className="" quality={100} />
      )}

      {/* <img src="/icons/trustpilot-logo.svg" alt="Trustpilot" className="h-6 w-6" />
      <div className="flex items-center gap-0.5">
        {[...Array(4)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-[#00B67A]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" /></svg>
        ))}
        <svg className="w-4 h-4 text-[#00B67A] opacity-50" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" /></svg>
      </div>
      <span className="text-xs text-[#1F2B6C] font-medium ml-2">4.7 TrustScore | 672 Reviews</span> */}
    </div>
  </div>
);

export default Reviews; 