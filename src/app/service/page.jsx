import React from 'react'
import { Navbar } from '@/components/Home/Navbar'
import Link from 'next/link'
import OurServices from '@/components/utils/OurService'
import Footer from '@/components/utils/Footer'
import MobileBtn from '@/components/Home/MobileBtn'

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
       <MobileBtn></MobileBtn>
      <div className=' bottom-3 fixed  right-3 hidden md:block'>
        <Link href={'/home'} className='bg-[#0089A7] p-2 rounded font-bold mt-5 text-white ' >Go to Home</Link>
      </div>
      <div>
        <OurServices></OurServices>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default page
