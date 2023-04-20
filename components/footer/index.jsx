import Link from 'next/link';
import Image from 'next/image';
import Telegram from '../../public/assets/images/telegram.svg'
import Instagram from '../../public/assets/images/instagram.svg'
import Twitter from '../../public/assets/images/twitter.svg'
import email from '../../public/assets/images/email.svg'
import React from 'react'

const Footer = () => {
  return (
    <footer className='pt-[22px] pb-12'>
      <div className='max-w-xl mx-auto w-full'>
        <hr className='inline-block linear-bg-3 h-1 w-full mb-[45px]' />
        <h4 className='text-primary-50 text-lg-medium font-PoppinsMedium text-center mb-7'>Join the Community</h4>
        <ul className='flex items-center justify-between max-w-[950px] w-full mx-auto'>
          <li>
            <Link href={'/'} className='flex items-center text-lg-medium font-PoppinsMedium'>
              <Image  src={Telegram} alt='telegram' className='mr-[10px]'  />
              Notice
            </Link>
          </li>
          <li>
            <Link href={'/'} className='flex items-center text-lg-medium font-PoppinsMedium'>
              <Image src={Telegram} alt='telegram' className='mr-[10px]'  />
              Chat
            </Link>
          </li>
          <li>
            <Link href={'/'} className='flex items-center text-lg-medium font-PoppinsMedium'>
              <Image src={Instagram} alt='telegram' className='mr-[10px]'  />
              Instagram
            </Link>
          </li>
          <li>
            <Link href={'/'} className='flex items-center text-lg-medium font-PoppinsMedium'>
              <Image src={Twitter} alt='telegram' className='mr-[10px]'  />
              Twitter
            </Link>
          </li>
          <li>
            <Link href={'/'} className='flex items-center text-lg-medium font-PoppinsMedium'>
              <Image src={email} alt='telegram' className='mr-[10px]'  />
              service@vixco.net
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer