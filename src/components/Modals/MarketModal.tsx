"use client"


import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image'


const MarketModal = ({image, text, name, id}:{image: string, text: string, name: string, id:number}) => {

  return (
    <div>
      <Dialog>

        <DialogTrigger asChild>
          <div className='text-center grid gap-y-1 w-full font-bold'>
            {/* <p className='bg-buttons h-[13rem] w-[13rem] rounded-lg'></p> */}
            <Image src={image} alt="" width={208} height={208} className='block object-cover h-full w-full rounded-xl' />
            <p>{name}</p>
            <p className='text-gold font-thin '>{text}</p>
          </div>
        </DialogTrigger>

        <DialogContent className="sm:max-w-3xl p-3 bg-hover rounded-lg h-4/6 w-full">

          <section className='flex justify-between items-center gap-4 h-full w-full'>

            <div className="relative h-full w-full">
              <p className='bg-blue-500 relative h-full w-full rounded-md'>

              <Image src={image} alt="" width={208} height={208} className='h-full w-full object-cover p-2 rounded-md' />
              </p>


              <div className="w-4/6 mx-auto absolute bottom-4 left-[15%]">
                <Button className='bg-deepGold text-white w-full font-bold'>
                  Buy now
                </Button>
              </div>
            </div>

            <div className="h-full w-full flex flex-col justify-evenly text-white pr-6">
              <p className=''>Iconic Jerseys: {name}</p>

              <div className='grid gap-3'>
                <h1 className='font-bold'>Triats</h1>
                <div className="font-bold text-white grid gap-3">
                  <p className='grid text-sm'>Iconic design : <span className='font-light text-xs mt-1'>Blue and white stripes with the legendary number 10.</span></p>
                  <p className='grid text-sm'>Historic Match : <span className='font-light text-xs mt-1'>Worn during the unforgettable ‘Hand of God’ goal.</span></p>
                  <p className='grid text-sm'>Player Legacy : <span className='font-light text-xs mt-1'>Celebrating Maradona’s genius on the pitch.</span></p>
                </div>
              </div>

              <div className='font-bold'>
                <p className='grid text-sm'>Description : <span className='font-light text-xs mt-1 text-justify'>Step into the boots of a legend with “Maradona’s Magic '86”. This exclusive NFT immortalizes the jersey worn during one of football’s most talked-about matches. With each thread woven into the fabric of history, this digital collectible is a must-have for aficionados and collectors alike.</span></p>

              </div>

            </div>

          </section>

        </DialogContent>
      </Dialog>

    </div>
  )
}

export default MarketModal