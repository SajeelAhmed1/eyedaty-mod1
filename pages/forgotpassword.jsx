import React from 'react'
import Image from 'next/image'

import Forgotpassillus from '../public/icons/forgotpassillus'


export default function ForgotPass() {
  return (
    <section className="text-black body-font px-10 ">
        <div className="container px-5 py-24 mx-auto flex  justify-center space-x-4 flex-row items-center">
            <div className="lg:w-1/2 md:w-1/2  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <p>
                    Accueil {">"} <span className='text-siteblue'>

                    Oublié le mot de passe
                    </span>
                </p>
                <h2 className="text-black text-6xl font-bold title-font mb-5">Mot de passe oublié?</h2>
                <p className='text-medium'>
                    Des instructions sur la façon de réinitialiser votre mot de passe seront envoyées à votre adresse e-mail.
                </p>
                <div className="relative mb-4">
                    <label for="email" className="leading-7 text-sm text-black">Email</label>
                    <input type="email" placeholder='Email' id="email" name="email" className="w-full bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                

            
                
                <button className="text-white bg-siteblue border-0 py-2 px-8 focus:outline-none hover:bg-sitegreen rounded-lg text-lg">Envoyer</button>
                {/* <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p> */}
                
            </div>
            <div className="lg:w-1/2 md:w-1/2  ">
                <Forgotpassillus/>
                {/* <Image src={signupimg} alt="Signup Image" width={500} height={500} /> */}
            </div>
        </div>
    </section>
  )
}
