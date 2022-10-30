import React from 'react'
import Image from 'next/image'
import drimg from '../../public/drimg.png'


export default function DocBanner() {
  return (
    <div className='flex flex-col lg:flex-row justify-between p-10 h-screen my-12  bg-center bg-cover custom-img2'>


        <div className='flex flex-col text-center lg:text-left justify-center p-4 lg:px-10   space-y-5 w-full lg:w-3/5 '>

            <h1 className="text-5xl  font-bold text-white">
            Se sentir mieux pour trouver des soins de santé
            </h1>
            <h3 className="text-1xl font-thin text-white">
            Nous éliminons les conjectures pour trouver les bons médecins, hôpitaux et soins pour vous et votre famille.
            </h3>
            <div className='w-full  flex justify-start'>
                <div className="flex w-full  justify-start ">
                    
                    <button className="inline-flex text-white text-left  border-2 py-2 lg:px-8 px-5 focus:outline-none hover:bg-sitegreen rounded-xl text-lg">Voir tous les laboratoires{'>'}  </button>
                </div>
            </div>

            
        </div>
      
      

      <div className= 'hidden lg:block  w-2/5 '>
        <Image src={drimg} alt="dr with hand in hand" height={400} width={400}/>
      </div>

      

      

      </div>
    
    )

}
