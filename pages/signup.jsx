import React from 'react'
import Image from 'next/image'
import signupimg from '../public/signupimg.png'
import fbicon from '../public/facebookpng.png'
import googleicon from '../public/googlepng.png'
import twittericon from '../public/twitterpng.png'
import Signupillus from '../public/icons/signupillus'
// import aboutimg from '../../public/aboutusimage.png'/

export default function Signup() {
  return (
    <section className="text-black body-font px-10 ">
        <div className="container px-5 py-24 mx-auto flex  justify-center space-x-4 flex-row items-center">
            <div className="lg:w-1/2 md:w-1/2  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <p>
                    Accueil {">"} <span className='text-siteblue'>

                    S&apos;inscrire
                    </span>
                </p>
                <h2 className="text-black text-6xl font-bold title-font mb-5">Créer un compte</h2>
                <p className='text-medium'>
                    Vous n&apos;avez pas de compte ? <span className='text-siteblue'> <a href="#">Connexion</a>
                        
                        </span> 
                </p>
                <div className="relative mb-4">
                    <label for="email" className="leading-7 text-sm text-black">Email</label>
                    <input type="email" placeholder='Email' id="email" name="email" className="w-full bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative mb-4 ">
                    <label for="full-name" className="leading-7 text-sm text-black">Mot de passe</label>
                    <div className='flex'>
                    <input type='password' placeholder='Mot de passe' id="full-name" name="full-name" className="w-full bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    {/* <span>
                        A
                    </span> */}
                    </div>
                </div>
                <div className="relative mb-4 ">
                    <label for="full-name" className="leading-7 text-sm text-black">Répéter mot de passe</label>
                    <div className='flex'>
                    <input type='password' placeholder='Répéter mot de passe' id="full-name" name="full-name" className="w-full bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    {/* <span>
                        A
                    </span> */}
                    </div>
                </div>

                <div className='flex  mb-10 '>
                    <input type="checkbox" name="" id="" />
                    <span className='ml-1'>
                    J&apos;ai lu et j&apos;accepte <span className='text-siteblue'> la politique de confidentialité</span> 
                    </span>
                </div>
                
                <button className="text-white bg-siteblue border-0 py-2 px-8 focus:outline-none hover:bg-sitegreen rounded-lg text-lg">S&apos;inscrire</button>
                {/* <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p> */}
                <span class="h-1 w-full bg-gray-300 flex justify-center my-5"></span>
                <div className='flex flex-row justify-center space-x-3 mt-2'>
                    <div className='rounded-full w-16 h-16 border-2  flex justify-center items-center'>
                        <button>
                            <Image src={googleicon} alt="Login Image"  />

                        </button>
                    </div>
                    <div className='rounded-full w-16 h-16 border-2  flex justify-center items-center'>
                        <button>
                        <Image src={fbicon} alt="Login Image"  />

                        </button>
                    </div>
                    <div className='rounded-full w-16 h-16 border-2  flex justify-center items-center '>
                        <button>
                        <Image src={twittericon} alt="Login Image"  />

                        </button>
                    </div>
                    
                </div>
            </div>
            <div className="lg:w-1/2 md:w-1/2  ">
                <Signupillus/>
                {/* <Image src={signupimg} alt="Signup Image" width={500} height={500} /> */}
            </div>
        </div>
    </section>
  )
}
