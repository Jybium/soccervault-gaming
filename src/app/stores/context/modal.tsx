"use client"

import React, { createContext, useContext, useState } from 'react';

// Define the interface for the context
interface ModalContextType {
  modal: boolean;
  setModal: (value: boolean) => void;
}

// Create the context with an initial value of the defined interface
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Define the ModalProvider component
export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [modal, setModal] = useState(false);


  // Provide the state and function through the context
  const contextValue = {
    modal,
    setModal,

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
