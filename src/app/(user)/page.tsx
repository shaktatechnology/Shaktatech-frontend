import Herosection from '@/components/Homepage/HeroSection'
import Projects from '@/components/Homepage/Projects'
import Services from '@/components/Homepage/Services'
import Stats from '@/components/Homepage/Stats'
import Testimonials from '@/components/Homepage/Testimonials'
import FAQ from '@/components/Homepage/FAQs'
import News from '@/components/Homepage/News'
import React from 'react'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Shakta Technology- Admin Panel",
  description: "Software Agency",
  icons:{
    icon: "/logo/shaktalogo.svg"
  },
  verification:{
    google: "A2P2dd5r4GK_gHT_xkKVPYlxuDHDVkd4_LgNBM0B8pA"
  }
};

const page = () => {
  return (
    <main className="font-poppins">
      <Herosection />
      <Stats />
      <Services />
      <Projects />
      <Testimonials />
      <FAQ />
      <News />
    </main>
  )
}

export default page