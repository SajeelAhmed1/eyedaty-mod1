import React from 'react'
import Image from 'next/image'
// import aboutimg from '../public/aboutusimage.png'w

// import aboutimg from '../../public/aboutusimage.png'
import aboutimg from '../public/aboutusimg.svg'
import aboutuspagesecimg from '../public/aboutuspagesecimg.svg'
import dquotes from '../public/dquotes.svg'
import union from '../public/union.svg'
import userimg from '../public/userimg.svg'
import LeftIcon from '../public/icons/lefticon'
import RightIcon from '../public/icons/righticon'
import partner1 from '../public/partners/partner1.svg'
import partner2 from '../public/partners/partner2.svg'
import partner3 from '../public/partners/partner3.svg'
import partner4 from '../public/partners/partner4.svg'
import partner5 from '../public/partners/partner5.svg'
import partner6 from '../public/partners/partner6.svg'
import PartnerCard from '../components/partnercard'


// import aboutimg from '../../'

export default function AboutUsPage() {
  return (


<>
{/* <PartnerCard/> */}
    <div className='flex justify-center flex-col items-center'>
        <p>
            Accueil {">"} 
            <span className='text-siteblue'>
                À propos de nous
            </span>
        </p>
        <p className='text-5xl p-7 pb-0 font-extrabold'>
            À propos de nous
        </p>
    </div>
    <section className="text-gray-600 lg:px-10 px-5  body-font">
        <div className="container mx-auto flex lg:px-5 py-8 lg:py-24 md:flex-row flex-col items-center">

            <div className="hidden lg:block lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image src={aboutimg} alt="Image of doctor" width={420} height={428.03}/>
                {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
            </div>

            <div className="text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
                <p className="text-sm  text-sitegreen font-bold mb-5 w-full">Neutra shabby chic ramps, viral fixie.</p>
                <h1 className="text-4xl lg:text-7xl sm:text-4xl  mb-4 font-extrabold text-gray-900">Qui Sommes Nous?</h1>
                <p className="mb-8 leading-relaxed">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato,
                Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato,
                Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
                {/* <div className="flex w-full md:justify-start  justify-center items-end">
                    
                    <button className="inline-flex text-white bg-siteblue border-0 py-2 px-10 focus:outline-none hover:bg-sitegreen rounded-xl text-lg">Voir Plus  </button>
                </div> */}

                <div className="grid overflow-hidden grid-cols-2 grid-rows-2 gap-7  mt-10">
                    <div className="box space-y-2     ">
                        <button className="  inline-flex text-left py-3 px-2 lg:px-5 rounded-lg lg:items-center     hover:bg-gray-200 focus:outline-none">
                            <span className="ml-4 flex items-start font-extrabold flex-col leading-none">
                                <span className=" font-extrabold text-3xl text-black">3600 <span className='text-sitegreen'> + </span></span>
                                <span className="font-semibold text-gray-600 mb-1">Patients Heurex</span>
                            </span>
                            
                        </button>
                    </div>

                    <div className="box space-y-2     ">
                        <button className="  inline-flex text-left py-3 px-2 lg:px-5 rounded-lg lg:items-center     hover:bg-gray-200 focus:outline-none">
                            <span className="ml-4 flex items-start font-extrabold flex-col leading-none">
                                <span className=" font-extrabold text-3xl text-black">1200 <span className='text-sitegreen'> + </span></span>
                                <span className="font-semibold text-gray-600 mb-1">Patients Heurex</span>
                            </span>
                            
                        </button>
                    </div>

                    <div className="box space-y-2    ">
                        <button className="  inline-flex text-left py-3 px-2 lg:px-5 rounded-lg lg:items-center     hover:bg-gray-200 focus:outline-none">
                            <span className="ml-4 flex  items-start font-extrabold flex-col leading-none">
                                <span className=" font-extrabold text-3xl text-black">200 <span className='text-sitegreen'> + </span></span>
                                <span className="font-semibold text-gray-600 mb-1">Patients Heurex</span>
                            </span>
                            
                        </button>
                    </div>

                    <div className="box space-y-2     ">
                        <button className="  inline-flex text-left py-3 px-2 lg:px-5 rounded-lg lg:items-center     hover:bg-gray-200 focus:outline-none">
                            <span className="ml-4 flex items-start font-extrabold flex-col leading-none">
                                <span className=" font-extrabold text-3xl text-black">20 <span className='text-sitegreen'> + </span></span>
                                <span className="font-semibold text-gray-600 mb-1">Patients Heurex</span>
                            </span>
                            
                        </button>
                    </div>

                    

                    

                    
                </div>
            
            
            </div>
            
        </div>
        </section>


        <section className="text-gray-600 lg:px-10   body-font">
        <div className="container mx-auto flex  lg:py-24 md:flex-row flex-col items-center">

            

            <div className="p-5 w-full text-left  lg:w-1/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-start  ">
                <p className="text-sm text-left text-sitegreen font-bold mb-5 ">Notre services </p>
                <h1 className="lg:text-5xl text-4xl   mb-4 font-extrabold text-gray-900">Notre services Nous fournissons les meilleurs services</h1>
                <p className="mb-8 leading-relaxed">Lörem ipsum prektigt beren makroligt, till desena. Lasock heterok. Nir nist så keltisk tiger usat fast bior. Rebel nedyn prertad krod semigon. Rest reska inte eubel sasade. Du kan vara drabbad.Ananade krogogt fulparkerare. Speskade syll men polylunat biortad. Hell dede. Kasa keredybär.</p>
            </div>

            <div className='hidden lg:block'>
                    <Image src={aboutuspagesecimg} alt="Image of doctor" />
                {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
            </div>
            
        </div>
        </section>
        <section>
            <div className='flex justify-center flex-col items-center'>
        <p className='text-sitegreen text-medium lg:text-lg font-bold'>
            Témoignages
        </p>
        <p className='lg:text-6xl text-3xl font-extrabold'>
            Qu&apos;ont-ils dit de nous ?
        </p>

        <div className=' w-full lg:w-3/4 space-y-5 my-5'>
            <div className='w-full flex justify-center '>
                <div className='bg-sitegreen w-4/6 p-8 rounded-xl text-white flex flex-col lg:flex-row'>
                    <div className='w-1/4 flex justify-center items-center'>
                        <Image src={dquotes} alt="double quotes" />

                    </div>
                    <div className='lg:w-3/4'>
                        <p>
                            Lörem ipsum prektigt beren makroligt, till desena. Lasock heterok. Nir nist så keltisk tiger usat fast bior. Rebel nedyn prertad krod semigon. Rest reska inte eubel sasade. Du kan vara drabbad.  Ananade krogogt fulparkerare. Speskade syll men polylunat biortad. Hell dede. Kasa keredybär.
                        </p>

                    </div>
                </div>
            </div>
            <div className='w-full flex justify-evenly '>
                <div>
                    <button>
                        <LeftIcon/>

                    </button>
                </div>
                <div>
                    
                        <Image src={union} alt="union icon" />

                  
                </div>
                <div>
                    <button>
                        <RightIcon/>

                    </button>
                </div>
            </div>
            <div className='w-full  flex justify-center items-center flex-col'>
                <div className='border-4 border-sitegreen flex justify-center items-center rounded-full w-20 h-20'>
                    <Image src={userimg} alt="avatarpics" />
                </div>
                <div>
                    <p className='font-bold text-medium'>
                    Achref Maher
                    </p>
                </div>
                <div>
                    <p className='text-gray-500'>
                        UIUX Designer
                    </p>
                </div>
            </div>
        </div>
            </div>

        </section>

        <section className='my-20 space-y-4'>

        <div className='flex justify-center lg:px-0 px-16 flex-col items-center'>
            <p className='text-sitegreen text-lg font-bold'>
                Nos partenaires
            </p>
            <p className='lg:text-6xl text-3xl font-extrabold'>
                Nos partenaires de réussite
            </p>
            <div className=' w-full flex flex-row'>
                <div className='w-1/12 flex justify-center items-center  '>
                    <div className='flex justify-center items-center '>
                        <button>
                            <LeftIcon/>

                        </button>
                    </div>
                </div>
                <div className='w-5/6 '>
                    <div className="flex m-4 text-center overflow-x-auto">
                        <PartnerCard imagevar={partner6} cattitle="Generaliste"/>
                        <PartnerCard imagevar={partner1} cattitle="Chirugie Dentaire"/>
                        <PartnerCard imagevar={partner2} cattitle="ORL"/>
                        <PartnerCard imagevar={partner3} cattitle="Ophtalmologie"/>
                        <PartnerCard imagevar={partner4} cattitle="Cardiolgie" />
                        <PartnerCard imagevar={partner5} cattitle="Chirugie Esthetique"/>
                
                    
                    </div>
                </div>
                <div className='w-1/12 flex justify-center items-center   '>
                    <div className='flex justify-center items-center'>
                        <button>
                            <RightIcon/>

                        </button>
                    </div>
                </div>
            </div>
        </div>

        </section>

    

</>
    )
}
