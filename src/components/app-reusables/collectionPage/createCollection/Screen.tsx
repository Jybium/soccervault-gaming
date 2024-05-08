"use client"

import React from 'react'
import { Playfair_Display } from 'next/font/google'
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';


const playfair_display = Playfair_Display({ subsets: ['latin'], weight: "700" })

const Screen = () => {

  const [isPending, startTransition] = React.useTransition();

  const form = useForm({
    defaultValues: {
      email: "",
      phoneNumber: "",
      password: "",
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

  return (
    <div className='text-white'>

      {/* HEADER / PAGE TITLE */}
      <div className='text-center'>
        <h1 className='text-2xl' style={playfair_display.style}>First you will need to create an NFT Collection</h1>
        <p className="">You will need to deploy and ERC-20 </p>
      </div>


      {/* ACTUAL FORM FOR CREATING THE NFT - COLLECTING THE DETAILS */}
      <section className="">

        <div className=''>
          <label htmlFor="">Logo image</label>
          <div className="">
            <input type="file" name="" id="" />
            <div className=''>
              <p>Drag and drop media</p>
              <p className="">Browse media</p>
              <p className="">Max size 50MB</p>
              <p>JPG, PNG, GIF, SVG, Mp4 </p>
            </div>
          </div>
        </div>

        <div className="w-4/6">

          <Form {...form}>
            <form className='flex justify-between'>
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Listing price</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter the listing price"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter the listing duration"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            </form>
          </Form>
        </div>

        <Button className="">
          Create listing
        </Button>
      </section>

    </div>
  )
}

export default Screen