import React from 'react';

const Hero = () => {
    return (
        <div className='px-[2rem] pt-[2rem]'>
            <div className="welcome-text text-white">
                <h1 className="text-center text-[2rem] font-ubuntu-bold">
                    A modern publishing platform
                </h1>
                <p className="text-center text-[1.1rem] pt-[.8rem]">
                    Grow your audience and build your online brand
                </p>
            </div>

            <div className='flex justify-around sm:justify-center sm:gap-[1.5rem] items-center text-center pt-[2rem] pb-[10rem]'>
                <button className='bg-white rounded-[50px] py-3 px-6 text-light-red font-ubuntu-bold'>
                    Start for Free
                </button>
                <button className='border-solid border-2 border-white rounded-[50px] py-3 px-6 text-white font-ubuntu-bold'>
                    Learn More
                </button>
            </div>
        </div>
    );
}

export default Hero