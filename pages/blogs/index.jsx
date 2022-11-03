import React from 'react'
import Image from 'next/image'
import blogimg1 from '../../public/blogimgs/blogimg1.png'
import blogimg2 from '../../public/blogimgs/blogimg2.png'
import blogimg3 from '../../public/blogimgs/blogimg3.png'
import blogimg4 from '../../public/blogimgs/blogimg4.png'
import blogimg5 from '../../public/blogimgs/blogimg5.png'
import blogimg6 from '../../public/blogimgs/blogimg6.png'

import Qmark from '../../public/qmark'
import Blogpagecard from '../../components/blogpagecomps/blogpagecard'
import Sidebarcontent from '../../components/sidebarcontent';
import Gridboxicon from '../../public/icons/gridboxicon'
import Listicon from '../../public/icons/listicon'



export default function Blogs() {

  // const [listview,setlistview] = useState(false);
  // const check = () => {
  //   if (listview) {
      
  //     setlistview(false);
  //   } else {
      
  //     setlistview(true);
  //   }

  // }
  
  return (
    <div className='flex flex-col px-7'>
      <div className='w-full flex justify-between py-10 px-24 '>
        <div className='flex w-1/2 space-x-4 '>
          
            <div className='flex flex-col w-1/2'>
              <p>
                Chercher
              </p>
                <div className="relative mt-1">
                        <input type="text" id="searchtext" class="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Chercher"/>
                        <button className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors"> <Qmark/> </button>
                </div>
            </div>
          
          
            <div className='flex flex-col w-1/2'>
              <p>
                Trier par
              </p>
              <input className=" placeholder:text-slate-400 block bg-white w-3/4 border border-slate-300 rounded-md py-2 px-2 shadow-sm focus:outline-none  focus:ring-1 sm:text-sm" type="text" name="search"/>
            
            </div>
          
        </div>
        <div className='flex w-1/4 flex-row justify-center items-center space-x-3'>
          <div>
            Affichage
          </div>
          <div>
            <button className='bg-siteblue p-3 rounded-lg'>
              <Gridboxicon/>
            </button>
          </div>
          <div>
            <button  className='bg-gray-300 p-2 rounded-lg'>
              <Listicon/>
            </button>
          </div>
        </div>
      </div>
      <div className='flex justify-center flex-row px-20 '>
        <div className='w-1/5 p-5 '>
          <h1 className='text-4xl font-bold'>
            Catégories
          </h1>
          {/* this componenet loads up sidebar catergires options */}
          <div className='flex justify-start'>
            <Sidebarcontent/>

          </div>
        </div>
        <div className='w-3/4 flex justify-center  flex-wrap  mx-10 '>
          <Blogpagecard blogthumbnail={blogimg1} blogcat="Chirugie Dentaire" />
          <Blogpagecard blogthumbnail={blogimg2} blogcat="Cardiologie"/>
          <Blogpagecard blogthumbnail={blogimg3} blogcat="Opthalmalogie"/>
          <Blogpagecard blogthumbnail={blogimg4} blogcat="Opthalmalogie"/>
          <Blogpagecard blogthumbnail={blogimg5} blogcat="Opthalmalogie"/>
          <Blogpagecard blogthumbnail={blogimg6} blogcat="Opthalmalogie"/>
          
        </div>
      </div>
    </div>
  )
}
