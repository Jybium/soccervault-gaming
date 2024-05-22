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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image"
import BidImage from "../../../../public/bidImage.png"
import { useRouter } from "next/navigation"

export default function PlaceBid() {

  const router = useRouter()

  return (
    <Card className="max-w-md h-screen text-white mx-auto bg-white/15 border-none border-0 rounded-md overflow-y-auto hide-scrollbar">
      <CardHeader className="">
        <Image src={BidImage} alt="fiery soccer" className="" />
      </CardHeader>
      <CardContent>

        <div className="text-center">
          <CardTitle>Galaxy soccer</CardTitle>
          <p className="text-gold text-xl font-bold">0.10 sol</p>
          <p className="">This is the highest bid on this NFT</p>
        </div>

        <div className="flex justify-between border-b">Listing price <span>0.50 sol</span></div>
        <form className="mt-3">
          <div className="grid w-full items-center gap-4">
            <div className="flex items-center justify-between text-black">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Start date</Label>
                <Input id="name" type="date" placeholder="Bidding start date" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">End date</Label>
                <Input id="name" type="date" placeholder="Bidding end date" />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" className="bg-purple w-full text-white" onClick={()=> router.push("/collections")}>Continue</Button>
      </CardFooter>
    </Card>
  )
}
