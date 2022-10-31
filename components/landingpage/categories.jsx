import React from 'react'
// import aboutimg from '../../public/aboutusimage.png' 
import icon from '../../public/icon.png'
import icon1 from '../../public/icon-1.png'
import icon2 from '../../public/icon-2.png'
import icon3 from '../../public/icon-3.png' 
import icon4 from '../../public/icon-4.png' 
import icon5 from '../../public/icon-5.png' 
import LeftIcon from '../../public/icons/lefticon'
import RightIcon from '../../public/icons/righticon'

// import Image from 'next/image'
import CategoryCard from '../../components/categorycard'
export default function Categories() {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto ">
        <div className="flex justify-centers flex-wrap justify-between px-12 w-full mb-20">
          <div className="flex flex-col text-center lg:text-left  lg:w-1/2 w-full mb-6 lg:mb-0">
            <p className='text-sitegreen font-medium'>Explorez tous les</p>
            <h1 className="text-4xl font-extrabold  lg:text-6xl lg:font-extrabold  title-font mb-2 text-gray-900">Categories</h1>
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
            <div className="flex m-4 text-center overflow-x-auto">
                <CategoryCard imagevar={icon} cattitle="Generaliste"/>
                <CategoryCard imagevar={icon1} cattitle="Chirugie Dentaire"/>
                <CategoryCard imagevar={icon2} cattitle="ORL"/>
                <CategoryCard imagevar={icon3} cattitle="Ophtalmologie"/>
                <CategoryCard imagevar={icon4} cattitle="Cardiolgie" />
                <CategoryCard imagevar={icon5} cattitle="Chirugie Esthetique"/>
            
                
            </div>
            <div className='w-full flex justify-center'>
                <div className="flex w-full md:justify-center justify-center items-end ">
                    
                    <button className="inline-flex text-white text-left bg-siteblue border-0 py-2 lg:px-16 px-5 focus:outline-none hover:bg-sitegreen rounded-xl text-lg">Voir tous les categorie {'>'}  </button>
                </div>
            </div>
        </div>
    </section>
  )
}
