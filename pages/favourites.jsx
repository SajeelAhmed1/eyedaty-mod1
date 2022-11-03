import React from 'react'
import Sidebarcontent from '../components/sidebarcontent';


import FavouritesCard from '../components/favouritescard';
export default function favourites() {
  return (
    <div className='flex flex-col px-7'>

        <div  className='flex justify-center flex-col items-center'>
            <p>
                Accueil {">"} 
                <span  className='text-siteblue'>
                Favoris 
                </span>
            </p>
            <p  className='text-5xl p-7  font-extrabold'>
            Favoris 
            </p>
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
        <div className='w-3/4 flex flex-col  mx-10 '>

            <FavouritesCard/>
            <FavouritesCard/>
            <FavouritesCard/>
            <FavouritesCard/>
          {/* <Blogpagecard blogthumbnail={blogimg1} blogcat="Chirugie Dentaire" />
          <Blogpagecard blogthumbnail={blogimg2} blogcat="Cardiologie"/>
          <Blogpagecard blogthumbnail={blogimg3} blogcat="Opthalmalogie"/>
          <Blogpagecard blogthumbnail={blogimg4} blogcat="Opthalmalogie"/>
          <Blogpagecard blogthumbnail={blogimg5} blogcat="Opthalmalogie"/>
          <Blogpagecard blogthumbnail={blogimg6} blogcat="Opthalmalogie"/> */}
          
        </div>
      </div>
    </div>
  )
}
