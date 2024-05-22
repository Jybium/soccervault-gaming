"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import BidImage from "../../../../public/bidImage.png"
import { useRouter } from "next/navigation"

export default function CreateBid() {

    const router = useRouter();

    return (
        <Card className="max-w-md h-screen text-white mx-auto bg-white/15 border-none border-0 rounded-md overflow-y-auto hide-scrollbar">
            <CardHeader className="">
              <Image src={BidImage} alt="fiery soccer" className=""/>
            </CardHeader>
            <CardContent>

                <div className="text-center">
                    <CardTitle>Fill in NFT details for bidding</CardTitle>
                </div>
                <form className="mt-3">
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">NFT Name</Label>
                            <Input id="name" placeholder="Name of your NFT" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Description</Label>
                            <Input id="name" placeholder="Write a short description of your NFT" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Listing price</Label>
                            <Input id="name" placeholder="Listing price of your NFT" />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Start date</Label>
                                <Input id="name" type="date" placeholder="Bidding start date" className="text-black"/>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">End date</Label>
                                <Input id="name" type="date" placeholder="Bidding end date" className="text-black" />
                            </div>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="ghost" className="bg-purple w-full text-white font-bold hover:bg-secondary" onClick={()=> router.push('/collections')}>Continue</Button>
            </CardFooter>
        </Card>
    )
}
