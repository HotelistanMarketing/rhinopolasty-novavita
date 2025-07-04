


import React from 'react'
import { SVGProps } from 'react';


type HumanAvatarIconType = SVGProps<SVGSVGElement>;

const HumanAvatarIcon: React.FC<HumanAvatarIconType> = ({ className }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.16841 16.1211C5.2822 13.615 7.76737 12 10.5098 12H13.4902C16.2326 12 18.7178 13.615 19.8316 16.1211V16.1211C20.8514 18.4156 19.1718 21 16.6609 21H7.33909C4.82819 21 3.14864 18.4156 4.16841 16.1211V16.1211Z" stroke="#02163B" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6C15 7.65685 13.6569 9 12 9C10.3431 9 9 7.65685 9 6Z" stroke="#02163B" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
    )
}

export default HumanAvatarIcon