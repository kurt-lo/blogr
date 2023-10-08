"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import Dropdown from './Dropdown';
import { companyLinks, connectLinks, productLinks } from '@/constants';

const Navbar = () => {

    //FOR HAMBURGER OR MENU
    const [menuOpen, setMenuOpen] = useState(false);

    const openMenuFunc = () => {
        setMenuOpen(!menuOpen);
    }

    // const changeMenu = menuOpen ? '/icon-close.svg' : '/icon-hamburger.svg';

    //TO ROTATE THE MENU/CLOSE WHEN CLICKED
    const menuRotate = menuOpen ? 'rotate(3.142rad)' : 'rotate(0)';

    return (
        <nav className='flex justify-between xl:px-[10rem] lg:px-[5rem] sm:items-center px-7 py-14'>

            <div className='logo'>
                <Image
                    src='/logo.svg'
                    alt='logo'
                    width={101}
                    height={40}
                    className='object-contain'
                />
            </div>

            {/* HAMBURGER MENU */}
            <div className={`sm:hidden relative`}>
                <Image
                    src={`${menuOpen ? '/icon-close.svg' : '/icon-hamburger.svg'}`}
                    width={`${menuOpen ? 26 : 32}`}
                    height={`${menuOpen ? 26 : 18}`}
                    alt={`${menuOpen ? 'hamburger' : 'close'}`}
                    className='cursor-pointer menu'
                    onClick={openMenuFunc}
                    style={{ transform: menuRotate }}
                />
            </div>

            <div className={`dropdown sm:flex sm:items-center font-ubuntu-bold text-center sm:text-white w-[90%] sm:w-[100%] pt-4 sm:pt-0 sm:ml-10 animate-jump-in animate-once animate-ease-in-out shadow-xl sm:shadow-none
                                ${menuOpen ? '' : 'hidden'}`}>
                <Dropdown title="Product" links={productLinks} />
                <Dropdown title="Company" links={companyLinks} />
                <Dropdown title="Connect" links={connectLinks} />

                {/* BORDER LINE IN MOBILE SCREEN ONLY */}
                <div className="sm:hidden border-line border-b mt-2 w-[90%] mx-auto"></div>
                {/* LOGIN and SIGNUP */}
                <div className='sm:flex sm:flex-row flex flex-col sm:items-center sm:ml-auto sm:gap-4'>
                    <div className='pt-5 sm:pt-0'>
                        <button>
                            Login
                        </button>
                    </div>
                    <div className='pt-3 sm:pt-0 pb-5 sm:pb-0'>
                        <button className='btn-custom bg-intro-cta-mobile py-3 px-7 rounded-[50px] text-white sm:text-light-red hover:sm:text-white'>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar