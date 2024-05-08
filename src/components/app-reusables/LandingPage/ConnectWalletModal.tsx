"use client"
declare global {
    interface Window {
        ethereum?: {
            isMetaMask?: boolean;
            request: (request: { method: string; params?: any[] }) => Promise<any>;
        };
    }
}


import { useState } from "react";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ethers } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { FaWallet } from "react-icons/fa"



export function DialogCloseButton<Props = {}>({ onConnect }: { onConnect: (wallet: ethers.Signer | PhantomWalletAdapter) => void }) {


    // Handler for connecting to MetaMask
    async function connectMetaMask() {
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.BrowserProvider(window.ethereum);
            try {
                await provider.send('eth_requestAccounts', []);
                const signer = await provider.getSigner();
                onConnect(signer);
            } catch (error) {
                console.error('MetaMask connection failed:', error);
            }
        } else {
            console.error('MetaMask not installed.');
        }
    };

    // Handler for connecting to WalletConnect
    const connectWalletConnect = async () => {
        alert('WalletConnect requires setup within your wallet app. Please follow the instructions.');

        const provider = new WalletConnectProvider({
            qrcode: true,
        });

        try {
           
            await provider.enable();
            const ethersProvider = new ethers.BrowserProvider(provider);
            
            const signer = await ethersProvider.getSigner();
            onConnect(signer);
        } catch (error) {
            console.error('WalletConnect connection failed:', error);
        }
    };



    // Handler for connecting to Phantom (if you're working with Solana)
    const connectPhantom = async () => {
        const phantomWallet = new PhantomWalletAdapter();

        try {
            await phantomWallet.connect();
            onConnect(phantomWallet);

        } catch (error) {
            console.error('Phantom connection failed:', error);
        }
    };


    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button className='flex items-center gap-3 px-4 text-sm bg-buttons rounded-lg'>
                    <span><FaWallet size={23} /></span>Connect
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md p-3 bg-hover rounded-lg">
                <DialogHeader className="grid justify-center my-2">
                    <p className="h-40 w-40 text-center bg-buttons rounded-full"></p>
                </DialogHeader>
                <p className="text-white tracking-wider text-center text-lg">Connect to SoccerVault</p>
                <div className="grid items-center bg-secondary text-white tracking-wide rounded-lg">
                    <span className="flex gap-4 items-center px-5 py-2 relative hover:bg-gold hover:text-black hover:font-bold cursor-pointer" onClick={connectMetaMask}><p className="h-12 w-12 rounded-full bg-primary"></p> <p>Meta Mask</p> <p className="absolute right-2 top-2 py-1 px-2 bg-hover text-sm rounded-md shadow-md">Detected</p></span>
                    <span className="flex gap-4 items-center px-5 py-2 hover:bg-gold hover:text-black hover:font-bold cursor-pointer" onClick={() => alert("Not available for now, please use other providers.")}><p className="h-12 w-12 rounded-full bg-primary"></p> <p>Coin Base</p></span>
                    <span className="flex gap-4 items-center px-5 py-2 hover:bg-gold hover:text-black hover:font-bold cursor-pointer" onClick={connectPhantom}><p className="h-12 w-12 rounded-full bg-primary"></p> <p>Phantom</p></span>
                    <span className="flex gap-4 items-center px-5 py-2 hover:bg-gold hover:text-black hover:font-bold cursor-pointer" onClick={connectWalletConnect}><p className="h-12 w-12 rounded-full bg-primary"></p> <p>Wallet Connect</p></span>
                </div>

            </DialogContent>
        </Dialog>
    )
}

