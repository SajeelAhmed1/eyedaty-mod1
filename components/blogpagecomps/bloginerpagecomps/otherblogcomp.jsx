import React from 'react'
import blogimg1 from '../../../public/blogimgs/blogimg1.png'
import blogimg2 from '../../../public/blogimgs/blogimg2.png'
import blogimg3 from '../../../public/blogimgs/blogimg3.png'
import blogimg4 from '../../../public/blogimgs/blogimg4.png'
import blogimg5 from '../../../public/blogimgs/blogimg5.png'
import Image from 'next/image'
import Calendaricon from '../../../public/icons/calendaricon'
export default function Otherblogcomp(props) {
  return (
    <div className='flex flex-row space-x-4 p-4'>
                    <div className='flex justify-center flex-col'>
                      <Image  src={props.blogpic} width="150" height="100"    alt="image" />
                    </div>
                    <div className='flex flex-col'>
                      <p>
                        Chirugie Dentaire
                      </p>
                      <div className='flex items-center space-x-2'>
                        <div>
                          <Calendaricon/>
                        </div>
                        <div>
                          24/05/2022 
                        </div> 
                      </div>
                      <h1 className='text-lg font-bold'>
                        Une hernie discale lombaire ventrale..
                      </h1>
                    </div>
                  </div>
  )
}
