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

export default function CreateBid() {
    return (
        <Card className="w-[350px] h-screen">
            <CardHeader>
              <Image src={BidImage} alt="fiery soccer" className=""/>
            </CardHeader>
            <CardContent>

                <div className="">
                    <CardTitle>Fill in NFT details for bidding</CardTitle>
                </div>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Name of your project" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="framework">Framework</Label>
                            <Select>
                                <SelectTrigger id="framework">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="next">Next.js</SelectItem>
                                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                    <SelectItem value="astro">Astro</SelectItem>
                                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline" className="bg-purple">Cancel</Button>
                <Button>Deploy</Button>
            </CardFooter>
        </Card>
    )
}
