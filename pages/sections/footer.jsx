import React from 'react'
import EyedatyLogo from '../../components/eyedatylogo'
import Image from 'next/image'

import linkedin from '../../public/linkedin.png'
import facebook from '../../public/facebook.png'
import instagram from '../../public/instagram.png'
import twitter from '../../public/twitter.png'

import phone from '../../public/phone.png'
import marker from '../../public/marker.png'
import mail from '../../public/mail.png'
import wapp from '../../public/wapp.png'
export default function Footer() {
  return (
    <footer class="text-white body-font bg-footergrey">
        <div class="container px-20 py-24 mx-auto">
            <div class="flex flex-wrap md:text-left text-center order-first">
                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    {/* <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2> */}
                    <div className='flex flex-col space-y-3'>
                        <div>
                            <EyedatyLogo width="100" height="100"/>

                        </div>
                        <div>
                            <p>
                            Lörem ipsum prektigt beren makroligt, till desena. Lasock heterok. Nir nist så keltisk tiger usat fast bior. Rebel nedyn prertad krod semigon.
                            </p>
                        </div>
                        <div className='flex justify-between flex-row'>
                            <div>
                                <Image src={linkedin} alt="Image of doctor" />

                            </div>
                            <div>
                                <Image src={facebook} alt="Image of doctor" />

                            </div>
                            <div>
                                <Image src={instagram} alt="Image of doctor" />

                            </div>
                            <div>
                                <Image src={twitter} alt="Image of doctor" />

                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 class="title-font font-medium text-white tracking-widest text-xl mb-3">Liens</h2>
                    <nav class="list-none mb-10">
                        <div className='flex flex-row space-x-10'>
                            <div>
                                        <li>
                                        <a class="text-white hover:text-gray-800"> Accueil</a>
                                    </li>
                                    <li>
                                        <a class="text-white hover:text-gray-800">À propos de nous</a>
                                    </li>
                                    <li>
                                        <a class="text-white hover:text-gray-800">Rozaliss</a>
                                    </li>

                                    
                                    <li>
                                        <a class="text-white hover:text-gray-800">Termes et conditions</a>
                                    </li>
                                    <li>
                                        <a class="text-white hover:text-gray-800">Politique de confidentialité</a>
                                    </li>
                            </div>

                            <div>
                                        <li>
                                        <a class="text-white hover:text-gray-800">Blog</a>
                                    </li>
                                    <li>
                                        <a class="text-white hover:text-gray-800">Contactez-nous</a>
                                    </li>
                                    <li>
                                        <a class="text-white hover:text-gray-800">Notre partenaires</a>
                                    </li>
                                    <li>
                                        <a class="text-white hover:text-gray-800">FAQ</a>
                                    </li>
                            </div>
                        </div>
                    </nav>
                </div>
            <div class="lg:w-1/4 md:w-1/2 w-full  px-4">
                <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">Contactez Nous</h2>
                <nav class="list-none mb-10 space-y-3">
                <li className='flex flex-row space-x-3'>
                    <div>
                        <Image src={mail} alt="Image of doctor" />
                    </div>
                    <div>
                        <a class="text-white hover:text-gray-800">Eyedaty@email.com</a>

                    </div>
                </li>
                <li className='flex flex-row space-x-3'>
                    <div>
                        <Image src={phone} alt="Image of doctor" />
                    </div>
                    <div>
                        <a class="text-white hover:text-gray-800">+213540070124</a>

                    </div>
                    {/* <a class="text-white hover:text-gray-800">+213540070124</a> */}
                </li>
                <li className='flex flex-row space-x-3'>
                <div>
                        <Image src={marker} alt="Image of doctor" />
                    </div>
                    <div>
                        <a class="text-white hover:text-gray-800">Algiers, Algeria</a>

                    </div>
                    {/* <a class="text-white hover:text-gray-800">Algiers, Algeria</a> */}
                </li>
                <li className='flex flex-row space-x-3'>
                    <div>
                        <Image src={wapp} alt="Image of doctor" />
                    </div>
                    <div>
                        <a class="text-white hover:text-gray-800">+213540070124</a>

                    </div>
                    {/* <a class="text-white hover:text-gray-800">+213540070124</a> */}
                </li>
                </nav>
            </div>

            
            <div class="lg:w-1/4 md:w-1/2 w-full px-4 space-y-3">
                <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">Abonnez Nous</h2>
                <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                    <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                        {/* <label for="footer-field" class="leading-7 text-sm text-white">Email</label> */}
                        <input type="text" id="footer-field" name="footer-field" placeholder='E-mail' class=" w-48 bg-gray-100 bg-opacity-50 rounded border border-gray-300  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                </div>
                <button class="lg:mt-2 xl:mt-0 w-48 flex justify-center flex-shrink-0  text-white bg-siteblue border-0 py-2 px-6 focus:outline-none  rounded">Abbonez</button>
                {/* <p class="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
                <br class="lg:block hidden">waistcoat green juice/>
                </p> */}
            </div>
            </div>
        </div>
        <div class="bg-footergrey">
            <div class="container px-5 py-6 mx-auto flex justify-center items-center sm:flex-row flex-col">
                Tous Les Droits Sont Réservés Pour Ce Site 
            </div>
        </div>
    </footer>
  )
}
