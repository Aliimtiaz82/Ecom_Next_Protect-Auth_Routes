import React from 'react'
import Link from 'next/link'

const MobileBtn = () => {
  return (
    <div className='fixed bottom-10 right-5 z-20  md:hidden text-sm text-white '>
        <p className='bg-pink-300 rounded-full p-3 mb-3 active:bg-pink-400'>
            <Link href={'/service'}>Service</Link>
        </p>
        <p className='bg-pink-300 rounded-full p-3 active:bg-pink-400'>
            <Link href={'/contact'}>Contact</Link>
        </p>
      
    </div>
  )
}

export default MobileBtn
