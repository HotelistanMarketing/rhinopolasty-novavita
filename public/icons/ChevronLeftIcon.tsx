import React from 'react';
import { SVGProps } from 'react';

type ChevronLeftIconProps = SVGProps<SVGSVGElement>;

const ChevronLeftIcon: React.FC<ChevronLeftIconProps> = ({ className, ...props }) => {
  return (
    <svg 
      width="24" 
      height="24" 
      fill="none" 
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <path 
        d="M15 18l-6-6 6-6" 
        stroke="#02163B" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
};

export default ChevronLeftIcon; 