import React from 'react'

import Image from 'next/image'



import blogimg1 from '../public/blogimgs/blogimg1.png'
import blogimg2 from '../public/blogimgs/blogimg2.png'
import blogimg3 from '../public/blogimgs/blogimg3.png'
import blogimg4 from '../public/blogimgs/blogimg4.png'
import blogimg5 from '../public/blogimgs/blogimg5.png'
import blogimg6 from '../public/blogimgs/blogimg6.png'


import ViewIcon from '../public/icons/viewicon'
import StarIcon from '../public/icons/staricon'
import LocationIcon from '../public/icons/locationicon'
import HeartIcon from '../public/icons/hearticon'
import checkmark from '../public/checkmark.png'
import opthalicon from '../public/doctypeicons/opthalicon.svg'
import cardioicon from '../public/doctypeicons/cardioicon.svg'
import dentisticon from '../public/doctypeicons/dentisticon.svg'
import microscopeicon from '../public/doctypeicons/microscopeicon.svg'
import Binicon from '../public/binicon';

export default function FavouritesCard() {
  return (
    <div className='flex flex-row  h-48 justify-center m-5 w-full'>
                <div className=' w-1/2  items-center flex flex-col '>
                    <div className='rounded-lg'>
                        <Image src={blogimg1} height="150" width="250" alt="checkmark"/>
                    </div>
                    <div className='flex flex-row space-x-3 px-2'>
                        <div className='rounded-lg'><Image src={blogimg1} height="100" width="150" alt="checkmark"/></div>
                        <div className='rounded-lg'><Image src={blogimg2} height="100" width="150" alt="checkmark"/></div>
                        <div className='rounded-lg'><Image src={blogimg3} height="100" width="150" alt="checkmark"/></div>
                        <div className='rounded-lg'><Image src={blogimg4} height="100" width="150" alt="checkmark"/></div>
                        <div className='rounded-lg'><Image src={blogimg5} height="100" width="150" alt="checkmark"/></div>
                    </div>
                </div>
                <div className='flex flex-col   p-3'>
                    <div className='flex justify-between'>
                        <div className='flex flex-row'>
                            <div>
                                <Image src={opthalicon} alt="opthalicon" />
                            </div>
                            <div className='flex flex-row space-x-2'>
                                <div>
                                    <h5 class="text-gray-900 text-xl font-medium mb-2 ">Dr.Mechri Nasser</h5>
                                    <p className=''>
                                        Opthalmalaogie
                                    </p>
                                </div>
                                <div className='py-1'>
                                <Image src={checkmark} alt="checkmark"/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className='p-2 h-10 flex justify-center items-center w-10 rounded-full bg-dangercolor'>
                                <Binicon/>  
                            </button>
                        </div>
                        
                    </div>
                    <div>
                        <div className='flex flex-row '>
                            <div className=' py-3 px-2'>
                                    <LocationIcon/> 
                            </div>
                            <div className=' p-2'>
                                <p class="text-gray-700 text-base mb-4">
                                    Quartier des 400 logements, à côté du marché couvert Beni Slimane, Médea 
                                </p>
                            </div>
                                
                        </div>

                        <div className='flex flex-row  p-2 justify-start space-x-3'>
                            <div className='flex flex-row space-x-1 '>
                                <div className='  py-1'>
                                    <ViewIcon/>
                                </div> 
                                <div>55k</div>
                                
                            </div>
                            <div className='flex flex-row space-x-1'>
                                <div className='  py-1'>
                                <HeartIcon/>
                                </div> 
                                <div>240</div>
                                
                            </div>
                            <div className='flex flex-row space-x-1'>
                                <div className='  py-1'>
                                    <StarIcon/>
                                </div> 
                                <div>4.8</div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
  )
}
