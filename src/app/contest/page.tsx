"use client"

import React from 'react'
import { Playfair_Display } from 'next/font/google'
import { useRouter } from 'next/navigation'
import aboutContest from "@/app/constants/IntroContest"
import Contest from "@/app/constants/contest"
import IntroCard from '@/components/app-reusables/contest/IntroCard'
import ContestCard from '@/components/app-reusables/contest/ContestCard'
import { Button } from '@/components/ui/button'


const playfair_display = Playfair_Display({ subsets: ['latin'], weight: "400" })


const Page = () => {

    const router = useRouter()

    return (
        <main className='text-white grid gap-y-10'>


            <div className="flex gap-x-6 justify-end">

                <Button className='bg-purple' onClick={() => router.push('/contest/create')}>Create</Button>
                <Button className='bg-purple' onClick={() => router.push('/contest/play')}>Play</Button>

            </div>


            <div className="text-center grid gap-y-3"><h1 className='text-3xl font-extrabold' style={playfair_display.style}>Join and Play</h1><p className="font-thin">Soccer Vault challenges are exclusive competitions that revolve around legendary football moments, trophies, and player items.</p></div>


            <div className="flex items-center justify-center gap-x-5">

                {aboutContest.map((item) => <IntroCard text={item.text} description={item.description} icon={item.icon} id={item.id} key={item.id} />)}

            </div>

            <div className="flex items-center justify-center gap-x-5">

                {Contest.map((item) => <ContestCard text={item.text} description={item.description} icon={item.icon} id={item.id} key={item.id} />)}

            </div>

        </main>
    )
}

export default Page