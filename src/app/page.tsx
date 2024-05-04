import Collections from '@/components/app-reusables/LandingPage/Collections'
import Header from '@/components/app-reusables/LandingPage/Header'

import Swiper from '@/components/app-reusables/LandingPage/Swiper'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Swiper/>
      <section className=''>
        <Collections/>
      </section>
    </main>
  )
}
