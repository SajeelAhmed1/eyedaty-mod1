import React from 'react'
import Image from 'next/image'
import heroimg from '../../public/himg.png'
import mobhero from '../../public/mobhero.png'

export default function HeroPage() {
  return (
    <div > 
        <section className="text-gray-600 body-font lg:p-10 bg-fieldwhite">
            <div className="container mx-auto flex lg:px-5 lg:py-24 md:flex-row flex-col items-center">
                <div className=" lg:hidden w-full">
                    <Image src={mobhero} alt="Image of doctor" />
                </div>
                <div className="  p-3 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className=" text-left sm:text-4xl lg:text-6xl text-4xl mb-4 font-extrabold text-gray-900">Retrouver la belle vie par une bonne santé.
                        {/* <br className="hidden lg:inline-block">readymade gluten */}
                    </h1>
                    <p className="mb-8 leading-relaxed">Nous éliminons les conjectures pour trouver les bons médecins, hôpitaux et soins pour vous et votre famille.</p>
               
                </div>
                <div className="hidden lg:block lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image
                            src={heroimg}
                            alt="Image of doctor"
                            width={448} 
                            height={428.03} 
                            // blurDataURL="data:..." automatically provided
                            // placeholder="blur" // Optional blur-up while loading
                        />
                {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
                </div>
                
            </div>
        </section>
    </div>
    )
}
