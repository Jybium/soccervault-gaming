
"use client"


import React, { useState } from 'react'
import { Playfair_Display } from 'next/font/google'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { onSubmitError } from "@/lib/utils";
import { toast } from 'sonner'
import { Button } from '@/components/ui/button';
import web3Images from "../../../../public/web3-coins.svg"
import Image from 'next/image';
import data, { days } from "@/app/constants/collection"
import Card from './Card';
import MarketModal from '@/components/Modals/MarketModal';



const playfair_display = Playfair_Display({ subsets: ['latin'], weight: "400" })


const Screen = () =>{

    const [isPending, startTransition] = React.useTransition();
    const [id, setId] = useState(0)

    const form = useForm({
        defaultValues: {
            network: ""
        },
    });


    const onHandleSubmit = async (data: any) => {
        startTransition(async () => {
            try {
                //   code to hit backend
            } catch (error: any) {
                console.error("Error logging in:", error.message);
                // Handle any errors here, such as displaying an error message to the user
                toast.error("Error logging in. Please try again later.");
            }
        });
    };

    return(
        <div className="text-white">


            <h1 className='text-extrabold text-2xl' style={playfair_display.style}>Explore our marketplace</h1>


            <div className='flex items-center gap-3'>

                <div className='w-auto flex items-center gap-2 bg-background rounded-2xl py-1 px-4 text-white mt-5 mb-6'>
                    <Image src={web3Images} alt='' className='w-[30%]' />
                    <div className=''>
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onHandleSubmit, (errors) => {
                                    onSubmitError(errors);
                                })}
                                className=""
                            >
                                <FormField
                                    control={form.control}
                                    name="network"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl className="">
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className='bg-transparent  backdrop-blur-sm placeholder:text-gray placeholder:text-xs border-0 text-gray active:border-0 active:outline-0 focus:border-0 outline-none w-fit p-2 h-0 mr-2'>
                                                            <SelectValue placeholder="All network" className='mr-3 border-0 text-gray active:border-0 active:outline-0 focus:border-0 outline-none' />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="all">All Network</SelectItem>
                                                        <SelectItem value="usa">USA</SelectItem>
                                                        <SelectItem value="uk">UK</SelectItem>
                                                        <SelectItem value="nigeria">Nigeria</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </form>
                        </Form>
                    </div>
                </div>



                <div className='bg-background flex items-center justify-between w-fit px-4 rounded-2xl text-sm font-bold text-white'>
                    {
                        days.map((item) =>
                            <p key={item.id} className={` ${id == item.id ? "bg-hover rounded-2xl" : ""}  cursor-pointer py-2 px-3`} onClick={() => setId(item.id)}>{item.day}</p>
                        )
                    }
                </div>

            </div>


            <div className='flex items-center justify-between mt-2'>
                    <p className=""># Marketplace</p>
                    <div className="flex gap-1">
                        <p className="bg-hover px-4 py-2 rounded-lg hover:bg-buttons" style={playfair_display.style}>Iconic jerseys</p>
                        <p className="bg-hover px-4 py-2 rounded-lg hover:bg-buttons" style={playfair_display.style}>Iconic jerseys</p>
                        <p className="bg-hover px-4 py-2 rounded-lg hover:bg-buttons" style={playfair_display.style}>Iconic jerseys</p>
                        <p className="bg-hover px-4 py-2 rounded-lg hover:bg-buttons" style={playfair_display.style}>Iconic jerseys</p>
                    </div>
            </div>


            <div className='mt-4 flex flex-wrap justify-between gap-5 '>
               <MarketModal/>
               <MarketModal/>
               <MarketModal/>
               <MarketModal/>
               <MarketModal/>
               <MarketModal/>
               <MarketModal/>
               <MarketModal/>
               <MarketModal/>
               <MarketModal/>
               <MarketModal/>
               <MarketModal/>
               <MarketModal/>
            </div>

        </div>
    )
}



export default Screen