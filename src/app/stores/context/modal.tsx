"use client"

import React, { createContext, useContext, useEffect, useState } from 'react';

// Define the interface for the context
interface ModalContextType {
  modal: boolean;
  setModal: (value: boolean) => void;
  walletAddress: string;
  setWalletAddress: (value: string) => void;
  disconnectWallet: () => void;
}

// Create the context with an initial value of the defined interface
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Define the ModalProvider component
export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  // Load wallet address from localStorage on component mount
  useEffect(() => {
    const storedWalletAddress = localStorage.getItem('walletAddress');
    if (storedWalletAddress) {
      setWalletAddress(storedWalletAddress);
    }
  }, []);

  // Update wallet address in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('walletAddress', walletAddress);
  }, [walletAddress]);

  // Function to disconnect the wallet
  const disconnectWallet = () => {
    setWalletAddress(""); // Clear the wallet address
    localStorage.removeItem('walletAddress'); // Remove the wallet address from localStorage
  };

  // Provide the state, functions, and context through the context
  const contextValue = {
    modal,
    setModal,
    walletAddress,
    setWalletAddress,
    disconnectWallet,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook to access the ModalContext
export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
