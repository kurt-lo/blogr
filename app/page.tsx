"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Home() {

  const [imageWidth, setImageWidth] = useState(406);
  const [imageHeight, setImageHeight] = useState(331);
  const [imageSrc, setImageSrc] = useState('/illustration-editor-mobile.svg');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 641) {
        setImageSrc('/illustration-editor-desktop.svg');
        setImageWidth(974);
        setImageHeight(786);
      } else {
        setImageSrc('/illustration-editor-mobile.svg');
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
    <main className="mt-[6rem] w-[90%] mx-auto sm:w-[100%]">
      <section className="main-one">
        <div className='title-container'>
          <h1 className=' text-[2rem] font-ubuntu-bold text-center'>Designed for the future</h1>
        </div>
        <div className='body-container flex flex-col sm:flex-row-reverse sm:pl-[5rem] lg:pl-[10rem] pt-[3rem] justify-center items-center'>
          <div className='image-container sm:flex-1 overflow-hidden'>
            <Image
              src={imageSrc}
              alt="illustration editor"
              width={imageWidth}
              height={imageHeight}
              className='illustrator sm:max-w-[140%]'
            />
          </div>

          <div className='text-container sm:flex-1 pt-[3rem] text-center sm:text-left'>
            <h2 className='text-[1.5rem] font-ubuntu-bold'>Introducing an extensible editor</h2>
            <p className='text-[1.1rem] pt-[.8rem]'>
              Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
              The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
              videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
            <h2 className='text-[1.5rem] font-ubuntu-bold pt-[1rem]'>Robust content management</h2>
            <p className='text-[1.1rem] pt-[.8rem]'>
              Flexible content management enables users to easily move through posts. Increase the usability of your blog
              by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
            </p>
          </div>
        </div>
      </section>

      {/* <div className="main-two">
        <h1>State of the Art Infrastructure</h1>
        <p>
          With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
          This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
        </p>
      </div>

      <div className="main-three">
        <h2>Free, open, simple</h2>
        <p>
          Blogr is a free and open source application backed by a large community of helpful developers. It supports
          features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
          and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
        </p>
        <h2>Powerful tooling</h2>
        <p>
          Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
          capable of producing even the most complicated sites.
        </p>
      </div> */}
      {/*
      Product

      Overview
      Pricing
      Marketplace
      Features
      Integrations

      Company

      About
      Team
      Blog
      Careers

      Connect

      Contact
      Newsletter
      LinkedIn */}
    </main>
  )
}
