'use client'
import React from 'react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '@/constants/ContactInformation'

interface WpStickyProps {
     wp_message?: string
     phone?: string
}

export default function WpSticky({ wp_message, phone }: WpStickyProps) {
     return (
          <>
               <Link
                    href={`https://wa.me/${phone || WHATSAPP_NUMBER}?text=${wp_message || WHATSAPP_MESSAGE}`}
                    id="whatsapp-fab"
                    className="wp-link"
                    target='_blank'
               >
                    <FaWhatsapp
                    fontSize={40}
                    />
               </Link>
          </>
     )
}
