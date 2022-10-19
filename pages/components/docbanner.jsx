import React from 'react'
import Image from 'next/image'
import drimg from '../../public/drimg.png'

export default function DocBanner() {
  return (
    <div className='flex flex-row justify-between p-10 h-screen my-12  bg-center bg-cover custom-img2'>
      
      <div className='flex flex-col justify-center px-10   space-y-5 w-3/5'>

        <h1 class="text-5xl font-bold text-gray-900 dark:text-white">
        Se sentir mieux pour trouver des soins de santé
        </h1>
        <h3 class="text-1xl font-thin text-gray-900 dark:text-white">
        Nous éliminons les conjectures pour trouver les bons médecins, hôpitaux et soins pour vous et votre famille.
        </h3>

        
          <div className="flex w-full md:justify-center lg:justify-start justify-center ">    
              <button className="inline-flex text-white text-left border-2 py-2 px-16 focus:outline-none hover:bg-white hover:text-black rounded-xl text-lg">Trouver un docteur {'>'}  </button>
          </div>
        
      </div>

      <div className= 'w-2/5 '>
        <Image src={drimg} alt="dr with hand in hand" height={400} width={400}/>
      </div>

    </div>
    
    )

}
