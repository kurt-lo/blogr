import React from 'react'
import Image from 'next/image'
import { footerLinks } from '@/constants'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='footer flex flex-col sm:flex-row justify-center items-center sm:items-start mt-[6rem] px-[5rem] pt-[5rem] pb-[5rem] bg-very-dark-black-blue rounded-tr-[100px]'>
      <div className="image-container">
        <Image
          src='/logo.svg'
          alt='logo'
          width={101}
          height={40}
        />
      </div>
      <div className="links-container flex flex-col sm:flex-row sm:ml-auto sm:gap-[2rem] md:gap-[5rem] md:pr-[5rem] lg:gap-[8rem] lg:pr-[8rem] xl:gap-[12rem] xl:pr-[12rem]">
        {footerLinks.map((title, titleIndex) => (
          <div className="footer-title" key={titleIndex}>
            <h2 className='text-white text-[1.2rem] pt-[2rem] sm:pt-0 pb-[2rem]'>{title.title}</h2>
            <ul>
              {title.links.map((link, linkIndex) => (
                <li key={linkIndex} className=' text-grayish-blue pb-[.5rem] sm:pb-[1rem] hover:underline'>
                  <Link href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer