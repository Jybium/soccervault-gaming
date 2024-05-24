/* eslint-disable @next/next/no-async-client-component */
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
import BidImage from "../../../../../public/bidImage.png"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { NFT_CONTRACT_ADDRESS, NFT_ABI, ERC721_CONTRACT_ADDRESS, ERC721_ABI, ERC20_CONTRACT_ADDRESS, ERC20_ABI } from "@/config"
import getContract from "@/lib/contract"
import { ethers } from "ethers"

export default async function CreateBid({ params }: { params: { bidId: string } }) {

    const { bidId } = params;

    const router = useRouter();

    const executeBid = async (bidId: any) => {

        const vaultContract = await getContract(NFT_CONTRACT_ADDRESS, NFT_ABI);
        const tokenContract = await getContract(ERC721_CONTRACT_ADDRESS, ERC721_ABI);

        try {
            // Get bid details
            const bid = await vaultContract.getBid(bidId);
            const { tokenId, lister, highestBidder, highestBid } = bid;

            // Check if the contract has approval to transfer the token
            const approved = await tokenContract.getApproved(tokenId);
            if (approved !== NFT_CONTRACT_ADDRESS) {
                // If not approved, approve the contract to transfer the token
                const approvalTx = await tokenContract.approve(NFT_CONTRACT_ADDRESS, tokenId);
                // @ts-ignore
                await approvalTx.wait();
            }

            const executeBidTx = await vaultContract.executeBid(bidId);
            const executeBidReceipt = await executeBidTx.wait();
            // Perform other actions related to bid execution if necessary

            
            if(!executeBidReceipt){
                throw new Error("Error executing bid");
            }

            console.log("Bid executed successfully", executeBidReceipt);
            // Notify success and route to /events
            toast.success("Bid executed successfully");
            router.push("/events");

        } catch (error) {
            console.error("Error executing bid:", error);
            toast.error("Error executing bid");
        }
    };




    const createBid = async () => {


        const vaultContract = await getContract(NFT_CONTRACT_ADDRESS, NFT_ABI);

        // const price = ethers.parseUnits(prices, "ether");


        try {
            // Ensure listingId is valid
            if (!bidId || bidId.length === 0) {
                toast.error("Invalid listing ID");
                return;
            }

            // Call createBid function on the contract
            const createBidTx = await vaultContract.createBid(bidId);
            const createBidReceipt = await createBidTx.wait();

            // Log the create bid receipt for debugging
            console.log("Create bid transaction receipt:", createBidReceipt);

            if(!createBidReceipt) {
                toast.error("Error creating bid");
                return;
            }

            toast.success("Bid created successfully");

            await executeBid(bidId)

            toast.success("Bid created and executed successfully");
            router.push("/events");

        } catch (error) {

            console.error("Error creating or executing bid:", error);
            toast.error("Error during bid creation or execution");

        }
    };


    return (
        <Card className="max-w-md h-screen text-white mx-auto bg-white/15 border-none border-0 rounded-md overflow-y-auto hide-scrollbar">
            <CardHeader className="">
                <Image src={BidImage} alt="fiery soccer" className="w-1/2 h-1/2 m-auto" />
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
                                <Input id="name" type="date" placeholder="Bidding start date" className="text-black" />
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
                <Button variant="ghost" className="bg-purple w-full text-white font-bold hover:bg-secondary hover:text-white" onClick={createBid}>Continue</Button>
            </CardFooter>
        </Card>
    )
}
