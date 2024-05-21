
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/app-reusables/LandingPage/Header'
import NavBar from '@/components/app-reusables/LandingPage/NavBar'
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
      <ModalProvider>
        <ToasterContainer/>
        <body className={montserrat.className} style={{ backgroundImage: "#333651" }}>
          <Header />

          <section className='relative flex justify-between pt-[70px]'>
            <aside>
              <NavBar />
            </aside>
            <main className='relative h-full bg-backgroun bg-cover bg-no-repeat overflow-y-auto w-[calc(100%-100px)] lg:w-[calc(100%-140px)] ml-auto px-5 mt-5'>
              {children}
            </main>

          </section>

        </body>
      </ModalProvider>
    </html>
  )
}
