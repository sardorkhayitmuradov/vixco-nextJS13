'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/images/logo.svg';
import LanguageSwitcher from '../languageSwitcher';
const options = [
  { value: 'en', label: 'ENG' },
  { value: 'kr', label: '한국인' }
];

const Header = () => {
  const handleOptionChange = (option) => {
    console.log('Selected option:', option);
  };
  return (
    <header className='bg-transparent py-9'>
      <div className='max-w-xl w-full mx-auto flex items-center justify-between'>
        <Link href='/'>
          <Image src={logo} alt='Picture of the author' />
        </Link>
        <nav className='max-w-[760px] w-full'>
          <ul className='flex items-center justify-between'>
            <li>
              <Link href={''} className='p-2 font-PoppinsMedium'>
                About
              </Link>
            </li>
            <li>
              <Link href={''} className='p-2 font-PoppinsMedium'>
                Advantages
              </Link>
            </li>
            <li>
              <Link href={''} className='p-2 font-PoppinsMedium'>
                Vixpay
              </Link>
            </li>
            <li>
              <Link href={''} className='p-2 font-PoppinsMedium'>
                Solution
              </Link>
            </li>
            <li>
              <Link href={''} className='p-2 font-PoppinsMedium'>
                VIXCO Token
              </Link>
            </li>
            <li>
              <Link href={''} className='p-2 font-PoppinsMedium'>
                RoadMap
              </Link>
            </li>
            <li>
              <Link href={''} className='p-2 font-PoppinsMedium'>
                Notice
              </Link>
            </li>
            <li>
              <Link href={''} className='p-2 font-PoppinsMedium'>
                Block scan
              </Link>
            </li>
          </ul>
        </nav>

        <div className=''>
          <LanguageSwitcher options={options} onChange={handleOptionChange} />
        </div>
      </div>
    </header>
  );
};

export default Header;
