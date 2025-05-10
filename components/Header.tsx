import Image from 'next/image'
import React from 'react'
import logo from '@/images/logo.png'
import Container from './Container'
import Form from 'next/form'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='w-full bg-gray-100 py-4 border-b border-b-gray-400'>
      <Container className='flex items-centert justify-between gap-5'>
        <Link href={'/'}>
          <Image src={logo} alt='logo' className='w-28' priority />
        </Link>

        <Form action='/search' className='flex-1'>
          <input type='text' name='query' placeholder='Search'
            className='w-full border border-gray-400 px-4 py-2
            rounded-md focus-visible:border-darkBlue outline-none' />
        </Form>
      </Container>
    </header>
  )
}

export default Header
