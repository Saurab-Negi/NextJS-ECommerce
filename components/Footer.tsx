import Container from "./Container"
import Image from 'next/image'
import React from 'react'
import payment from '@/images/payment.png'

export const Footer = () => {
  return (
    <footer className="bg-blue-50 text-sm">
        <Container className="py-8 flex items-center justify-between">
            <p className="text-gray-500">
                Copyright © 2025 all rights reserved. 
            </p>
            <Image src={payment} alt='payment' className='w-80 object-cover' />
        </Container>
    </footer>
  )
}
