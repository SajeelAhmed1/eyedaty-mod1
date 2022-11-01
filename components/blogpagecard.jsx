import React from 'react'
import Image from 'next/image'
import blogimg1 from '../public/blogimgs/blogimg1.png'
import blogimg2 from '../public/blogimgs/blogimg2.png'
import blogimg3 from '../public/blogimgs/blogimg3.png'
import blogimg4 from '../public/blogimgs/blogimg4.png'
import blogimg5 from '../public/blogimgs/blogimg5.png'
import blogimg6 from '../public/blogimgs/blogimg6.png'

import userimg from '../public/userimg.svg'
import Calendaricon from '../public/icons/calendaricon'

export default function Blogpagecard(props) {
  return (
    <div className=' w-2/5  h-fit p-3'>
        <div className=''>
          <Image  src={props.blogthumbnail} height="200" width="300" alt="image" />
        </div>
        <div className='flex flex-col space-y-2'>
            <div className='text-siteblue '>
              {props.blogcat}
            </div>
            <div className='flex items-center space-x-2'>
              <div>
                <Calendaricon/>
              </div>
              <div>
                24/05/2022 
              </div> 
            </div>
            <div className=''>
              
            </div>
            <div className='text-black   font-extrabold text-4xl   '>
              Une hernie discale lombaire ventale
            </div>
            <div className='flex items-center space-x-2'>
              <div>
                <Image src={userimg} height="30" width="30" alt="avatarpics" />
              </div>
              <div>
                Selma Achref
              </div> 
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, ducimus? Quos maiores velit repudiandae dignissimos! Possimus delectus 
              </p>
            </div>
        </div>
      </div>

  )
}
