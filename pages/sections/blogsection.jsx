import React from 'react'
import Image from 'next/image'



import BlogCard from '../../components/blogcard'
import clinicimage from '../../public/clinicimage.png'
import clinicimage1 from '../../public/clinicimage1.png'
import clinicimage2 from '../../public/clinicimage2.png'
import clinicimage3 from '../../public/clinicimage3.png'
import LeftIcon from '../../public/icons/lefticon'
import RightIcon from '../../public/icons/righticon'

export default function BlogSection() {
  return (
    <div>
      <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap justify-between px-12 w-full mb-20">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <p className='text-sitegreen font-medium'>Notre Blog</p>
          <h1 class="sm:text-3xl text-2xl lg:text-6xl lg:font-extrabold font-medium title-font mb-2 text-gray-900">Voir notre dernier blog</h1>
        </div>
        <div className='flex flex-row justify-center space-x-2   '>
          <button>
            <div> <LeftIcon/> </div>

          </button>
          <button>
            <div> <RightIcon/> </div>
          </button>
        </div>
      </div>
      <div class="flex flex-wrap -m-4">
        <BlogCard spec="Chirugie Dentaire" />
        <BlogCard spec="Opthalmologie" />
        <BlogCard spec="Cardiologie" />
        <BlogCard spec="Chirugie Dentaire" />
      </div>
      
    </div>
    
    </section>
    </div>
  )
}
