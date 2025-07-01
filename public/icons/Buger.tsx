


import React from 'react'
import { SVGProps } from 'react';

type BugerIconType = SVGProps<SVGSVGElement>;

const BugerIcon: React.FC<BugerIconType> = ({ className }) => {
    return (

        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M28 22.1429V25H0V22.1429H28ZM28 13.5714V16.4286H0V13.5714H28ZM28 5V7.85714H0V5H28Z" fill="#FCFEFE" />
        </svg>

    )
}

export default BugerIcon




