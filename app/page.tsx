"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Home() {

  const [imageWidth, setImageWidth] = useState(406);
  const [imageHeight, setImageHeight] = useState(331);
  const [imageSrc, setImageSrc] = useState('/illustration-editor-mobile.svg');
  const [imageSrcLaptop, setImageSrcLaptop] = useState('/illustration-laptop-mobile.svg');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 641) {
        setImageSrc('/illustration-editor-desktop.svg');
        setImageSrcLaptop('/illustration-laptop-desktop.svg');
        setImageWidth(974);
        setImageHeight(786);
      } else {
        setImageSrc('/illustration-editor-mobile.svg');
        setImageSrcLaptop('/illustration-laptop-mobile.svg');
        setImageWidth(406);
        setImageHeight(331);
      }
    };

    // Initially set the image source based on the window width
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="mt-[6rem]">
      {/* SECTION ONE */}
      <section className="main-one sm:px-0 px-[2rem]">
        <div className='title-container'>
          <h1 className='text-[2rem] font-ubuntu-bold text-center text-very-dark-blue'>Designed for the future</h1>
        </div>
        <div className='body-container flex flex-col sm:flex-row-reverse sm:pl-[5rem] lg:pl-[10rem] pt-[3rem] justify-center items-center'>
          <div className='image-container sm:flex-1 overflow-hidden'>
            <Image
              src={imageSrc}
              alt="editor"
              width={imageWidth}
              height={imageHeight}
              className='illustrator sm:max-w-[140%] lg:max-w-[160%]'
            />
          </div>

          <div className='text-container sm:flex-1 pt-[3.5rem] text-center sm:text-left sm:pr-[3rem] lg:pr-[10rem]'>
            <h2 className='text-[1.5rem] font-ubuntu-bold text-very-dark-blue'>Introducing an extensible editor</h2>
            <p className='text-[1.1rem] pt-[.8rem] text-very-dark-grayish-blue leading-[2rem]'>
              Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
              The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
              videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
            <h2 className='text-[1.5rem] font-ubuntu-bold pt-[3.5rem] text-very-dark-blue'>Robust content management</h2>
            <p className='text-[1.1rem] pt-[.8rem] text-very-dark-grayish-blue leading-[2rem]'>
              Flexible content management enables users to easily move through posts. Increase the usability of your blog
              by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION TWO */}
      <section className='main-two mt-[17rem] sm:mt-[6rem] flex flex-col sm:flex-row items-center'>
        <div className='image-container flex justify-center flex-1 -mt-[12rem] sm:mt-0'>
          <Image
            src={'/illustration-phones.svg'}
            alt='phone'
            height={579}
            width={552}
            className='illustrator'
          />
        </div>

        <div className="text-container flex-1 px-[2rem] text-center sm:text-left xl:pr-[7rem] -mt-[3rem] sm:mt-0 pb-[7rem] sm:pb-0">
          <h2 className='text-[2rem] font-ubuntu-bold pt-[3.5rem] text-white'>State of the Art Infrastructure</h2>
          <p className='text-[1rem] pt-[.8rem] text-white font-light leading-[2rem]'>
            With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
            This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
          </p>
        </div>
      </section>

      {/* SECTION THREE */}
      <section className="main-three mt-[5rem] flex flex-col sm:flex-row items-center">
        <div className='image-container flex-1'>
          <Image
            src={imageSrcLaptop}
            alt='laptop'
            width={imageWidth}
            height={imageHeight}
            className='illustrator sm:max-w-[140%] lg:max-w-[160%] float-right'
          />
        </div>
        <div className="text-container flex-1 px-[2rem] text-center sm:text-left lg:pr-[10rem] sm:pr-[5rem]">
          <h2 className='text-[1.5rem] font-ubuntu-bold text-very-dark-blue pt-[2rem]'>Free, open, simple</h2>
          <p className='text-[1.1rem] pt-[.8rem] text-very-dark-grayish-blue leading-[2rem]'>
            Blogr is a free and open source application backed by a large community of helpful developers. It supports
            features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
            and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
          </p>
          <h2 className='text-[1.5rem] font-ubuntu-bold text-very-dark-blue pt-[2rem]'>Powerful tooling</h2>
          <p className='text-[1.1rem] pt-[.8rem] text-very-dark-grayish-blue leading-[2rem]'>
            Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
            capable of producing even the most complicated sites.
          </p>
        </div>
      </section>
    </main>
  )
}
