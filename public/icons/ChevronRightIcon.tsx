import React from 'react';
import { SVGProps } from 'react';

type ChevronRightIconProps = SVGProps<SVGSVGElement>;

const ChevronRightIcon: React.FC<ChevronRightIconProps> = ({ className, ...props }) => {
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
        d="M9 6l6 6-6 6" 
        stroke="#02163B" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
};

export default ChevronRightIcon; 