import React from 'react'
import { ReactNode } from 'react'
import {Navbar } from '@/components/Home/Navbar' 
import Footer from '@/components/utils/Footer'
import MobileBtn from '@/components/Home/MobileBtn'

const layout = ({children} : {children : ReactNode}) => {
  return (
    <>
       <Navbar></Navbar> 
       <MobileBtn></MobileBtn>
      {children}
        <Footer></Footer>
    </>
  )
}

export default layout
