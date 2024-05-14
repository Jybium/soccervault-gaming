"use client"

import React, { useState } from 'react'
import { Input } from '../../ui/input'
import { Search } from 'lucide-react'
import { Button } from '../../ui/button'
import { FaWallet } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { ethers, Signer } from 'ethers';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { DialogCloseButton } from './ConnectWalletModal';
import { DropdownMenuModal } from './NotificationModal';


const Header = () => {

  const [connectedWallet, setConnectedWallet] = useState<ethers.Signer | PhantomWalletAdapter | null>(null);

  function isEthereumSigner(wallet: Signer | PhantomWalletAdapter): wallet is Signer {
    return 'getAddress' in wallet;
  }
  
  const onConnect = (wallet: Signer | PhantomWalletAdapter) => {
    setConnectedWallet(wallet);

    // Check if the wallet has the getAddress method
    if (isEthereumSigner(wallet)) {
      wallet.getAddress().then((address) => {
        console.log('Connected Ethereum wallet address:', address);
      }).catch((error) => {
        console.error('Failed to get Ethereum wallet address:', error);
      });
    } else if (wallet instanceof PhantomWalletAdapter) {
      // Handle Solana wallet
      console.log('Connected Solana wallet address:', wallet.publicKey?.toString());
    }
  };


  return (
    <div className='flex justify-between items-center bg-primary px-5 py-3 fixed w-full z-30 shadow-lg drop-shadow-lg'>
      <h1 className='text-3xl text-white font-extrabold'>Logo</h1>
      <div className='relative w-1/3'>
        <Input type='text' placeholder='Search for NFTs, Collection or users' className='bg-buttons border-0 outline-0 pl-10 w-full focus:border-0 focus:outline-0 active:border-0 active:outline-0' />
        <Search className='absolute top-2 left-3' color='white' />
      </div>
      <div className='flex items-center gap-7'>
        <DropdownMenuModal />
        <DialogCloseButton onConnect={onConnect} />
        <p className='h-9 w-9 bg-black rounded-lg'></p>
      </div>
    </div>
  )
}

export default Header