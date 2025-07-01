





import React from 'react'
import { SVGProps } from 'react';

type BritainFlagType = SVGProps<SVGSVGElement>;

const BritainFlag: React.FC<BritainFlagType> = ({ className }) => {
    return (

        <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="United Kingdom flag"
      >
        <rect width="28" height="28" rx="2" fill="#00247D" />
        {/* White diagonals */}
        <path d="M0 0L28 28M28 0L0 28" stroke="#fff" strokeWidth="4" />
        {/* Red diagonals */}
        <path d="M0 0L28 28M28 0L0 28" stroke="#CF142B" strokeWidth="2" />
        {/* White cross */}
        <rect x="11.2" width="5.6" height="28" fill="#fff" />
        <rect y="11.2" width="28" height="5.6" fill="#fff" />
        {/* Red cross */}
        <rect x="12.6" width="2.8" height="28" fill="#CF142B" />
        <rect y="12.6" width="28" height="2.8" fill="#CF142B" />
      </svg>

       
        




    )
}

export default BritainFlag;


