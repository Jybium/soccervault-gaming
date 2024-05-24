
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/app-reusables/LandingPage/Header'
import NavBar from '@/components/app-reusables/LandingPage/NavBar'
import SuccessfulList from '@/components/Modals/SuccessfulList'
import { ModalProvider } from './stores/context/modal'
import { ToasterContainer } from './stores/context/Toaster'


const montserrat = Montserrat({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
  title: 'SoccerVault | Turn your passion to reward',
  description: 'Unleash the Future of Digital Ownership: Buy, Sell, and Discover NFTs on the Cutting-Edge Web3 Marketplace.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='background'>
      <body className={montserrat.className} style={{ backgroundImage: "#333651" }}>
        <ModalProvider>
          <ToasterContainer />
          {children}
          <SuccessfulList />
        </ModalProvider>
      </body>
    </html>
  )
}
