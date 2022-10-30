import React from 'react'
// import Image from 'next/image'
// import newsbg from '../../public/newsletterbg.png'
import EyedatyLogo from '../../components/eyedatylogo'

export default function NletterSection() {
  return (
    <>
        <div className='hidden lg:flex flex-row justify-between p-24 h-screen my-12  bg-center bg-cover nletterbg'>
          
          <div className='flex flex-col justify-center px-10   space-y-5 w-3/5'>

            <div className='w-1/2 h-1/2 flex justify-center '>
              <EyedatyLogo width="125" height="125"/>

            </div>

            <h1 class="text-5xl font-bold text-black ">
            Abonnez-vous pour toute mise à jour
            </h1>
            {/* <h3 class="text-1xl font-thin text-black ">
            Nous éliminons les conjectures pour trouver les bons médecins, hôpitaux et soins pour vous et votre famille.
            </h3> */}

            
            <form>   
              <label for="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>
              <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input type="search" id="search" className="block p-4 pl-10 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 " placeholder="E-mail" required/>
                  <button type="submit" className="text-white absolute right-40 bottom-2.5 bg-siteblue hover:bg-sitegreen focus:ring-4   font-medium rounded-lg text-sm px-4 py-2">Abonnez</button>
              </div>
            </form>
            
          </div>

          

        </div>

        <div className=' lg:hidden flex flex-row justify-between px-5 text-center my-10 '>
          
          <div className='flex flex-col justify-center px-8   space-y-4'>

            <div className=' flex justify-center '>
              <EyedatyLogo width="100" height="100"/>

            </div>

            <h1 class="text-4xl font-bold text-black ">
              Abonnez-vous pour toute mise à jour
            </h1>
            {/* <h3 class="text-1xl font-thin text-black ">
            Nous éliminons les conjectures pour trouver les bons médecins, hôpitaux et soins pour vous et votre famille.
            </h3> */}

            
            <form>   
              <label for="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>
              <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input type="search" id="search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 " placeholder="E-mail" required/>
                  <button type="submit" className="text-white absolute left-44 bottom-2.5 bg-siteblue hover:bg-sitegreen focus:ring-4   font-medium rounded-lg text-sm px-4 py-2">Abonnez</button>
              </div>
            </form>
            
          </div>

          

        </div>
    </>
    
    
    
    )

}
