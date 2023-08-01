"use client";
import { DropdownProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'


const Dropdown = ({ title, links }: DropdownProps) => {

    //FOR DROPDOWN
    const [dropDownOpen, setDropDownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropDownOpen(!dropDownOpen);
    };

    //TO ROTATE THE ARROW IN DROPDOWN WHEN CLICKED
    const arrowRotate = dropDownOpen ? 'rotate(3.142rad)' : 'rotate(0)';

    //TO CHANGE THE COLOR OF THE FONT WHEN CLICKED
    const changeColor = dropDownOpen ? 'hsl(240, 1%, 38%)' : '';

    return (
        <div className='py-3'>
            <div className='flex items-center justify-center gap-2 font-ubuntu font-ubuntu-bold'>
                <button
                    className=""
                    onClick={toggleDropdown}
                    style={{ color: changeColor }}
                >
                    {title}
                </button>
                <Image
                    src='/icon-arrow-dark.svg'
                    alt='arrow'
                    width={10}
                    height={7}
                    onClick={toggleDropdown}
                    className='cursor-pointer arrow'
                    style={{ transform: arrowRotate }}
                />
            </div>

            {dropDownOpen && (
                <div className='links flex flex-col mx-7 rounded py-3 animate-flip-down animate-once animate-ease-out'>
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className='links-text py-3 font-ubuntu font-ubuntu-bold'>
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dropdown