import React from 'react'
import { SVGProps } from 'react';

type FacebookIconType = SVGProps<SVGSVGElement>;

const FacebookIcon: React.FC<FacebookIconType> = ({ className }) => {
    return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0336 0C6.04709 0 0.383545 5.66354 0.383545 12.6501C0.383545 19.6366 6.04709 25.3001 13.0336 25.3001C20.0201 25.3001 25.6837 19.6366 25.6837 12.6501C25.6837 5.66354 20.0201 0 13.0336 0ZM16.0301 8.74173H14.1286C13.9033 8.74173 13.6529 9.03821 13.6529 9.43221V10.8053H16.0314L15.6717 12.7634H13.6529V18.6417H11.4089V12.7634H9.373V10.8053H11.4089V9.65359C11.4089 8.00117 12.5553 6.65842 14.1286 6.65842H16.0301V8.74173Z" fill="#BFD2F8" />
        </svg>

    )
}

export default FacebookIcon