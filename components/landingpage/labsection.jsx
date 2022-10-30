import React from 'react'
import labimage1 from '../../public/labimg1.png'
import labimage2 from '../../public/labimg2.png'
import labimage3 from '../../public/labimg3.png'
import labimage4 from '../../public/labimg4.png'
import LeftIcon from '../../public/icons/lefticon'
import RightIcon from '../../public/icons/righticon'
import LabCard from '../../components/labcards'

export default function LabSection() {
  return (
    
    <div>
      <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
    <div class="flex justify-centers flex-wrap justify-between px-12 w-full mb-20">
          <div class="flex flex-col text-center lg:text-left  lg:w-1/2 w-full mb-6 lg:mb-0">
            <p className='text-sitegreen font-medium'>Explorez tous les</p>
            <h1 class="text-4xl font-extrabold  lg:text-6xl lg:font-extrabold  title-font mb-2 text-gray-900">Laboratoires</h1>
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
      <div class="flex lg:flex-wrap m-4 overflow-x-auto">
        <LabCard ClinicCardimg={labimage2} labtitle={'El Chiffa Lab'}/>
        <LabCard ClinicCardimg={labimage1} labtitle={'El Bey Laboratoire'}/>
        <LabCard ClinicCardimg={labimage3} labtitle={'D Cacachi Labo'}/>
        <LabCard ClinicCardimg={labimage4} labtitle={'D Belarbi Labo'}/>
      </div>
      
    </div>
            <div className='w-full flex justify-center'>
                <div className="flex w-full md:justify-center justify-center items-end ">
                    
                    <button className="inline-flex text-white text-left bg-siteblue border-0 py-2 lg:px-16 px-5 focus:outline-none hover:bg-sitegreen rounded-xl text-lg">Voir tous les laboratoires {'>'}  </button>
                </div>
            </div>
    </section>
    </div>
  )
}
