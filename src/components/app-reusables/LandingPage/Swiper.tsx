import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import firstCarousel from "../../../../public/carousel-one.png"
import { Button } from '@/components/ui/button'

const Swiper = () => {

  // State to track the current slide index
  // const [currentSlide, setCurrentSlide] = useState(0);

  // // Set up automatic slide transition using useEffect
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
  //   }, interval);

  //   // Cleanup the timer when component unmounts
  //   return () => clearInterval(timer);
  // }, [data.length, interval]);

  // // Function to handle slide change on user interaction
  // const handleSlideChange = (index) => {
  //   setCurrentSlide(index);
  // };


  return (
    <div>

      <div className='bg-carousel-one bg-center h-[65vh] relative w-full'>
        <Image src={firstCarousel} alt='' className='absolute top-0 left-0 w-4/6 h-full rounded-xl' />

        <div className='relative pl-5 pt-5 z-10 text-white w-1/2 h-3/4 flex flex-col justify-between'>
          <h1 className='font-extrabold text-2xl'>Top picks</h1>

          <div className='w-4/6 font-thin text-sm grid gap-3'>
            <h1 className=' font-extrabold text-3xl'>This Week’s Highlighted Players</h1>
            <p>Discover exclusive NFTs of the most outstanding soccer players from recent matches. Each NFT comes with unique artwork and player stats.</p>
            <Button className='bg-secondary text-white font-thin border-white border rounded-3xl mt-5 w-fit' variant="default">
              See details
            </Button>
          </div>
        </div>

      </div>

      {/* <div className="bg-carousel-one bg-center h-[65vh] relative w-full">
        <div className="flex h-full w-full relative">
          // {/* Active slide (2/3 of the width) 
          <div className="w-2/3 relative">
            <Image
              src={data[currentSlide].image}
              alt={data[currentSlide].alt}
              className="absolute top-0 left-0 w-full h-full rounded-xl object-cover"
            />
            <div className="relative pl-5 pt-5 z-10 text-white w-1/2 h-3/4 flex flex-col justify-between">
              <h1 className="font-extrabold text-2xl">{data[currentSlide].title}</h1>
              <div className="w-4/6 font-thin text-sm grid gap-3">
                <h1 className="font-extrabold text-3xl">{data[currentSlide].headline}</h1>
                <p>{data[currentSlide].description}</p>
                <Button className="bg-secondary text-white font-thin border-white border rounded-3xl mt-5 w-fit">
                  See details
                </Button>
              </div>
            </div>
          </div>

          {/* Preview of next slide (1/3 of the width) 
          <div className="w-1/3 relative">
            {/* Calculate next slide index 
            const nextSlide = (currentSlide + 1) % data.length;

            <Image
              src={data[nextSlide].image}
              alt={data[nextSlide].alt}
              className="w-full h-full rounded-xl object-cover"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-opacity-50 bg-black text-white">
              <h2 className="font-extrabold text-lg">{data[nextSlide].title}</h2>
            </div>
          </div>
        </div>

        {/* Navigation controls 
        <div className="carousel-indicators absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {data.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-400'}`}
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </div>
      </div> 
    */}

    </div>
  )
}

export default Swiper