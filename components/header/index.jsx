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
    <header className='py-9'>
      <div className='max-w-xl w-full mx-auto flex items-center justify-between'>
        <Link href='/'>
          <Image src={logo} alt='Picture of the author' />
        </Link>
        <nav className='max-w-[760px] w-full'>
          <ul className='flex items-center justify-between'>
            <li>
              <Link href={''} className='p-2 font-PoppinsMedium text-base-medium text-tonal-600'>
                About
              </Link>
            </li>
            <li>
              <Link href={''} className='p-2 font-PoppinsMedium text-base-medium text-tonal-600'>
                Advantages
              </Link>
            </li>
            <li>
              <Link href={''} className='p-2 font-PoppinsMedium text-base-medium text-tonal-600'>
                Vixpay
              </Link>
            </li>
            <li>
              <Link href={''} className='p-2 font-PoppinsMedium text-base-medium text-tonal-600'>
                Solution
              </Link>
            </li>
            <li>
              <Link href={''} className='p-2 font-PoppinsMedium text-base-medium text-tonal-600'>
                VIXCO Token
              </Link>
            </li>
            <li>
              <Link href={''} className='p-2 font-PoppinsMedium text-base-medium text-tonal-600'>
                RoadMap
              </Link>
            </li>
            <li>
              <Link href={''} className='p-2 font-PoppinsMedium text-base-medium text-tonal-600'>
                Notice
              </Link>
            </li>
            <li>
              <Link href={''} className='p-2 font-PoppinsMedium text-base-medium text-tonal-600'>
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
