"use client";
import { DropdownProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Dropdown = ({ title, links }: DropdownProps) => {

    //FOR DROPDOWN
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [dropDownImg, setDropDownImg] = useState('/icon-arrow-dark.svg')

    const changeColor = dropDownOpen && window.innerWidth <= 640 ? 'hsl(240, 1%, 38%)' : '';

    const toggleDropdown = () => {
        setDropDownOpen(!dropDownOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 641) {
                setDropDownImg('/icon-arrow-light.svg');
            } else {
                setDropDownImg('/icon-arrow-dark.svg')
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    //TO ROTATE THE ARROW IN DROPDOWN WHEN CLICKED
    const arrowRotate = dropDownOpen ? 'rotate(3.142rad)' : 'rotate(0)';

    //TO CHANGE THE COLOR OF THE FONT WHEN CLICKED
    // const changeColor = dropDownOpen ? 'hsl(240, 1%, 38%)' : '';

    return (
        <div className='py-3 sm:pr-3'>
            <div className='flex items-center justify-center gap-2'>
                <button
                    className="sm:hover:underline"
                    onClick={toggleDropdown}
                    style={{ color: changeColor }}
                >
                    {title}
                </button>
                <Image
                    src={dropDownImg}
                    alt='arrow'
                    width={10}
                    height={7}
                    onClick={toggleDropdown}
                    className='cursor-pointer arrow'
                    style={{ transform: arrowRotate }}
                />
            </div>

            {dropDownOpen && (
                <div className='links flex flex-col mx-7 rounded py-3 animate-flip-down animate-once animate-ease-out sm:absolute sm:bg-white sm:text-very-dark-black-blue sm:w-[10rem] sm:top-[3rem]'>
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className='links-text py-3 font-ubuntu-bold sm:font-medium sm:hover:font-bold'>
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dropdown
