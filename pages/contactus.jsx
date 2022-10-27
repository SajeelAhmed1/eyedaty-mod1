import React from 'react'
import Image from 'next/image'
// import loginimg from '../public/loginimg.png'
import fbicon from '../public/facebookpng.png'
import googleicon from '../public/googlepng.png'
import twittericon from '../public/twitterpng.png'
import Loginillus from '../public/icons/loginillus'
import Contactillus from '../public/icons/contactillus'
// import aboutimg from '../../public/aboutusimage.png'/

export default function Contactus() {
  return (
    <section className="text-black body-font px-10 ">
        <div className="container px-5 py-24 mx-auto flex  justify-center space-x-4 flex-row items-center">
            <div className="lg:w-1/2 md:w-1/2  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <p>
                    Accueil {">"} <span className='text-siteblue'>

                    Contactez-nous
                    </span>
                </p>
                <h2 className="text-black text-6xl font-bold title-font mb-5">Contactez-nous</h2>
                <p className='text-medium'>
                    Vous n'avez pas de compte ? <span className='text-siteblue'> <a href="#">Créer un compte</a>
                        
                        </span> 
                </p>

                <div className="relative mb-4 ">
                    <label for="full-name" className="leading-7 text-sm text-black">Nom et prénom</label>
                    <div className='flex'>
                    <input type='text' placeholder='Nom et prénom' id="full-name" name="full-name" className="w-full bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    {/* <span>
                        A
                    </span> */}
                    </div>
                </div>
                <div className="relative mb-4">
                    <label for="email" className="leading-7 text-sm text-black">Email</label>
                    <input type="email" placeholder='Email' id="email" name="email" className="w-full bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                
                <div className="relative mb-4 ">
                    <div className="p-2 w-full">
                        <div className="relative">
                        <label for="email" className="leading-7 text-sm text-black">Message</label>
                            <textarea id="message" name="message" class="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                    </div>
                </div>

                                
                <button className="text-white bg-siteblue border-0 py-2 px-8 focus:outline-none hover:bg-sitegreen rounded-lg text-lg">Envoyez</button>
                {/* <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p> */}
                
            </div>
            <div className="lg:w-1/2 md:w-1/2 mr-3  ">
                <Contactillus/>
                {/* <Image src={loginimg} alt="Login Image" width={500} height={500} /> */}
            </div>
        </div>
    </section>
  )
}
