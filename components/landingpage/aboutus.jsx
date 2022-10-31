import React from 'react'
import Image from 'next/image'
// import aboutimg from '../public/aboutusimage.png'w
import Link from 'next/link'; 
import aboutimg from '../../public/aboutusimg.svg'

// import aboutimg from '../../'

export default function AboutUs() {
  return (
    <section className="text-gray-600 lg:px-10   body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

            <div className="hidden lg:block lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image src={aboutimg} alt="Image of doctor"/>
                {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
            </div>

            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <p className="text-sm  text-sitegreen font-bold mb-5 w-full">Neutra shabby chic ramps, viral fixie.</p>
                <h1 className="text-4xl lg:text-6xl sm:text-4xl  mb-4 font-extrabold text-gray-900">Qui Sommes Nous?</h1>
                <p className="mb-8 leading-relaxed">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato,
                Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato,
                Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
                <div className="flex w-full md:justify-start  justify-center items-end">
                    
                    <button className=" w-full lg:w-1/3 text-white bg-siteblue border-0 py-2 px-10 focus:outline-none hover:bg-sitegreen text-center rounded-xl text-lg">Voir Plus {'>'}  </button>
                </div>

                <div className="grid overflow-hidden grid-cols-2 grid-rows-2 gap-7 mt-10">
                    <div className="box lg:space-y-2 w-full  flex justify-start items-center   ">
                        <button className=" px-4 py-2 inline-flex lg:py-3 lg:px-5  rounded-lg items-center m-0 lg:ml-4 md:ml-0 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                            <span className="lg:ml-4 flex  justify-center items-start font-extrabold flex-col leading-none">
                                <span className=" ml-3 lg:m-0 lg:px-0 font-extrabold px-4 text-xl lg:text-3xl text-black">3600 <span className='text-sitegreen'> + </span></span>
                                <span className="font-semibold text-gray-600 mb-1">Patients Heurex</span>
                            </span>
                            
                        </button>
                    </div>

                    <div className="box lg:space-y-2 w-full  flex justify-center items-center   ">
                        <button className=" px-4 py-2 inline-flex lg:py-3 lg:px-5  rounded-lg items-center m-0 lg:ml-4 md:ml-0 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                            <span className="lg:ml-4 flex  justify-center items-start font-extrabold flex-col leading-none">
                                <span className=" ml-3 lg:m-0 lg:px-0 font-extrabold px-4 text-xl lg:text-3xl text-black">1200 <span className='text-sitegreen'> + </span></span>
                                <span className="font-semibold text-gray-600 mb-1">Rendez-vous en ligne</span>
                            </span>
                            
                        </button>
                    </div>

                    <div className="box lg:space-y-2  w-full flex justify-center items-center   ">
                        <button className=" px-4 py-2 inline-flex lg:py-3 lg:px-5  rounded-lg items-center m-0 lg:ml-4 md:ml-0 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                            <span className="lg:ml-4 flex  justify-center items-start font-extrabold flex-col leading-none">
                                <span className=" ml-3 lg:m-0 lg:px-0 font-extrabold px-4 text-xl lg:text-3xl text-black">20 <span className='text-sitegreen'> + </span></span>
                                <span className="font-semibold text-gray-600 mb-1">Des années d&apos;expérience</span>
                            </span>
                            
                        </button>
                    </div>

                    <div className="box lg:space-y-2 w-full  flex justify-center items-center   ">
                        <button className=" px-4 py-2 inline-flex lg:py-3 lg:px-5  rounded-lg items-center m-0 lg:ml-4 md:ml-0 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                            <span className="lg:ml-4 flex  justify-center items-start font-extrabold flex-col leading-none">
                                <span className=" ml-3 lg:m-0 lg:px-0 font-extrabold px-4 text-xl lg:text-3xl text-black">200 <span className='text-sitegreen'> + </span></span>
                                <span className="font-semibold text-gray-600 mb-1">Médecins et Cliniques</span>
                            </span>
                            
                        </button>
                    </div>
                </div>
            
            
            </div>
            
        </div>
        </section>
    )
}
