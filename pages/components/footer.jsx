import React from 'react'

export default function Footer() {
  return (
    <footer class="text-white body-font bg-footergrey">
        <div class="container px-20 py-24 mx-auto">
            <div class="flex flex-wrap md:text-left text-center order-first">
                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                    <nav class="list-none mb-10">
                    <li>
                        <a class="text-white hover:text-gray-800">First Link</a>
                    </li>
                    <li>
                        <a class="text-white hover:text-gray-800">Second Link</a>
                    </li>
                    <li>
                        <a class="text-white hover:text-gray-800">Third Link</a>
                    </li>
                    <li>
                        <a class="text-white hover:text-gray-800">Fourth Link</a>
                    </li>
                    </nav>
                </div>
                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                    <nav class="list-none mb-10">
                    <li>
                        <a class="text-white hover:text-gray-800">First Link</a>
                    </li>
                    <li>
                        <a class="text-white hover:text-gray-800">Second Link</a>
                    </li>
                    <li>
                        <a class="text-white hover:text-gray-800">Third Link</a>
                    </li>
                    <li>
                        <a class="text-white hover:text-gray-800">Fourth Link</a>
                    </li>
                    </nav>
                </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                <nav class="list-none mb-10">
                <li>
                    <a class="text-white hover:text-gray-800">First Link</a>
                </li>
                <li>
                    <a class="text-white hover:text-gray-800">Second Link</a>
                </li>
                <li>
                    <a class="text-white hover:text-gray-800">Third Link</a>
                </li>
                <li>
                    <a class="text-white hover:text-gray-800">Fourth Link</a>
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
