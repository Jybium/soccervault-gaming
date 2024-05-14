"use client"

import React, { useState } from 'react'
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

import { ethers } from 'ethers';
import getContract from '@/lib/contract';
import { NFT_ABI } from '@/config';
import { NFT_CONTRACT_ADDRESS } from "@/config";
import { onSubmitError } from "@/lib/utils";


const playfair_display = Playfair_Display({ subsets: ['latin'], weight: "700" })



const Screen = () => {
  const [listing, setListing] = useState()
  const [loading, setLoading] = useState()
  const [isPending, startTransition] = React.useTransition();

  const form = useForm({
    defaultValues: {
      price: "",
      duration: "",
    },
  });


  const handleCreateListing = async (data: { price: number; duration: number }) => {
    const contract = await getContract(NFT_CONTRACT_ADDRESS, NFT_ABI);
    const duration = data.duration;
    const price = ethers.parseUnits(data.price.toString(), "ether");

    try {
      // Create the listing
      const transaction = await contract.createListing(price, duration);
      const result = await transaction.wait();

      // Initialize a variable to hold the listingId
      let listingId;

      // Parse logs to find the ListingCreated event
      for (const log of result.logs) {
        const parsedLog = contract.interface.parseLog(log);
        if (parsedLog?.name === 'ListingCreated') {
          listingId = parsedLog?.args?.listingId;
          console.log(`Listing created with ID: ${listingId}`);
          console.log('Listing details:', parsedLog?.args.listing);
        }
      }

      if (listingId !== undefined) {
        const tokenUri = NFT_CONTRACT_ADDRESS
        // Execute the listing using the listingId
        const executeTransaction = await contract.executeListing(listingId, tokenUri);
        const executeResult = await executeTransaction.wait();

        // Parse logs to find the ListingExecuted event
        for (const log of executeResult.logs) {
          const parsedLog = contract.interface.parseLog(log);
          if (parsedLog?.name === 'ListingExecuted') {
            console.log(`Listing executed with ID: ${parsedLog?.args.listingId}`);
            console.log('Listing details:', parsedLog?.args.listing);
          }
        }

        console.log('Listing executed:', executeResult);
        toast.success("Listing created and executed successfully");

      } else {
        console.error("Failed to find listingId from ListingCreated event");
        toast.error("Error finding listingId");
      }

    } catch (error) {
      console.error('Error creating or executing listing:', error);
      toast.error("Error during create or execute process");
    }
  };




  const onHandleSubmit = async (data: any) => {
    startTransition(async () => {
      try {
        handleCreateListing(data)
      } catch (error: any) {
        console.error("Error logging in:", error.message);
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

        {/* <div className=''>
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
        </div> */}

        <div className="md:w-4/6 mt-5">

          <Form {...form}>
            <form className='flex justify-between' onSubmit={form.handleSubmit(onHandleSubmit, (errors) => {
              onSubmitError(errors);
            })}>
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Listing price</FormLabel>
                    <FormControl>
                      <Input
                        type="price"
                        className='text-primary'
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
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Duration</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter the listing duration"
                        className='text-primary'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
              <Button className="mt-4 hover:bg-gold hover:text-black" type="submit">
                {isPending ? "processing" : "Create listing" }
              </Button>
          </Form>
        </div>


      </section>

    </div>
  )
}

export default Screen