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
        <nav className='flex bg-intro-cta-mobile justify-between px-7 py-14'>

            <div>
                <Image
                    src='/logo.svg'
                    alt='logo'
                    width={101}
                    height={40}
                    className='object-contain'
                />
            </div>

            <div className=''>

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

                <div className={`dropdown sm:flex bg-white rounded font-ubuntu font-ubuntu-bold text-center w-[90%] pt-4 animate-jump-in animate-once animate-ease-in-out shadow-xl sm:shadow-none
                                ${menuOpen ? '' : 'hidden'}`}>
                    <Dropdown title="Product" links={productLinks} />
                    <Dropdown title="Company" links={companyLinks} />
                    <Dropdown title="Connect" links={connectLinks} />

                    <div className="sm:hidden border-line border-b mt-2 w-[90%] mx-auto"></div>

                    <div className='sm:flex sm:flex-row flex flex-col'>

                        <div className='pt-5'>
                            <button>
                                Login
                            </button>
                        </div>

                        <div className='pt-3 pb-5'>
                            <button className='bg-intro-cta-mobile py-3 px-7 rounded-[50px] text-white'>
                                Sign Up
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar