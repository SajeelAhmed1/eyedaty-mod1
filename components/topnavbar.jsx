import React from 'react'
// import EyedatyLogo from './eyedatylogo'
// import langicon from '../../public/langicon.png'
import langicon from '../public/langicon.png'
import Image from 'next/image'

export default function TopNavbar() {
  return (
    
<header className="  text-gray-600 py-2 px-5 lg:px-20 bg-sitegreen body-font">
  <div className="container mx-auto flex justify-between flex-col  md:flex-row lg:items-center">
    <div>
      <a className="flex justify-start title-font font-medium lg:items-center text-white mb-4 md:mb-0">
        Rozalis
        {/* <span className="ml-3 text-xl">Tailblocks</span> */}
      </a>

    </div>
    
    <div className=' lg:w-1/4 w-full flex justify-between '>
      <div className='bg-white flex justify-center items-center  rounded-lg my-2 px-2  '>
        <p className='text-xs font-bold' >
          Compte Professional?

        </p>
      </div>
      <div className=' text-white p-2'>
          Blog

      </div>

      <div className=' p-2'>
        <Image src={langicon} alt="Image of doctor" />

      </div>

    </div>
  </div>
</header>

  )
}


