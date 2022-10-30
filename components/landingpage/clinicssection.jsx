import React from 'react'
// import Image from 'next/image'

import ClinicCard from '../../components/cliniccard'
import clinicimage from '../../public/clinicimage.png'
import clinicimage1 from '../../public/clinicimage1.png'
import clinicimage2 from '../../public/clinicimage2.png'
import clinicimage3 from '../../public/clinicimage3.png'
import LeftIcon from '../../public/icons/lefticon'
import RightIcon from '../../public/icons/righticon'

export default function ClinicsSection() {
  return (
    <div>
      <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
    <div class="flex justify-centers flex-wrap justify-between px-12 w-full mb-20">
          <div class="flex flex-col text-center lg:text-left  lg:w-1/2 w-full mb-6 lg:mb-0">
            <p className='text-sitegreen font-medium'>Explorez tous les</p>
            <h1 class="text-4xl font-extrabold  lg:text-6xl lg:font-extrabold  title-font mb-2 text-gray-900">Cliniques</h1>
          </div>  
          <div className='flex w-full lg:w-0  flex-row justify-center space-x-2   '>
            <button>
              <div> <LeftIcon/> </div>

            </button>
            <button>
              <div> <RightIcon/> </div>
            </button>
          </div>
        </div>
      <div class="flex  lg:flex-wrap m-4 overflow-x-auto">
        <ClinicCard ClinicCardimg={clinicimage}/>
        <ClinicCard ClinicCardimg={clinicimage1}/>
        <ClinicCard ClinicCardimg={clinicimage2}/>
        <ClinicCard ClinicCardimg={clinicimage3}/>
      </div>
      
    </div>
    <div className='w-full flex justify-center'>
                <div className="flex w-full md:justify-center justify-center items-end ">
                    
                    <button className="inline-flex text-white text-left bg-siteblue border-0 py-2 lg:px-16 px-5 focus:outline-none hover:bg-sitegreen rounded-xl text-lg">Voir tous les cliniques {'>'}  </button>
                </div>
            </div>
    </section>
    </div>
  )
}
