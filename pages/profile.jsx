import React from 'react'
import Uploadarrow from '../public/uploadarrow'
import Image from 'next/image'
import avatarplaceholder from '../public/avatarplaceholder.png'
import Qmark from '../public/qmark'
import Downarrow from '../public/downarrow'
export default function Profile() {
  return (
    <div>
        <div  className='flex justify-center flex-col items-center'>
            <p>
                Accueil {">"} 
                <span  className='text-siteblue'>
                    Profile 
                </span>
            </p>
            <p  className='text-5xl p-7  font-extrabold'>
            Profile 
            </p>
        </div>

        <div className='flex flex-row  w-full p-12'>
            <div className='w-1/4 space-y-4'>
                <h1 className='text-4xl font-bold'>
                    Mon Compte
                </h1>
                <h1>
                    Information personel
                </h1>
                <h1>
                    Career un page
                </h1>
                <h1>
                    Inviter des amis
                </h1>
            </div>
            <div className='w-3/4 p-5 '>
                <div className='flex flex-row  justify-start items-center'>
                    <div className='flex flex-col '>
                        <div>
                            Image de profile
                        </div>
                        <div>
                            <Image src={avatarplaceholder} alt="avatarimage" />
                        </div>

                    </div>
                    <div>
                        <button className='border-2 p-3 flex justify-between rounded-xl border-siteblue text-siteblue'>
                            Ajouter un image <span>
                                <Uploadarrow/>
                            </span>
                        </button>
                    </div>
                </div>
                
                    <form>
                    
                    <div className="mb-6">
                        <label for="text" className="block mb-2 text-sm font-medium text-gray-900    ">Nom & Prenom</label>
                        <input type="text" id="email" className="shadow-sm      border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " placeholder="Nom & Prenom" required=""/>
                    </div>

                    <div className="mb-6">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900    ">E-mail</label>
                        <input type="email" id="email" className="shadow-sm      border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " placeholder="E-mail" required=""/>
                    </div>
                    
                    
                    <div className='flex flex-row'>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900    ">Gender</label>

                        <div className="flex items-center mb-4">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500     "/>
                            <label for="default-radio-1" className="ml-2 text-sm font-medium text-gray-900    ">Male</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500     "/>
                            <label for="default-radio-1" className="ml-2 text-sm font-medium text-gray-900    ">Female</label>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label  className="block mb-2 text-sm font-medium text-gray-900    ">Date de naissance</label>
                        <input type="date" id="email" className="shadow-sm      border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " placeholder="E-mail" required=""/>
                    </div>
                    <div className="mb-6">
                        <label for="tel" className="block mb-2 text-sm font-medium text-gray-900    ">Numéro de Téléphone</label>
                        <input type="tel" id="email" className="shadow-sm      border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " placeholder="Numéro de Téléphone" required=""/>
                    </div>

                    <div className="mb-6">
                        <label for="text" className="block mb-2 text-sm font-medium text-gray-900    ">Wilaya</label>

                        <input type="text" id="searchtext" className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg  focus:outline-none focus:border-blue-500 transition-colors" placeholder="Wilaya"/>
                        <button className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors"> <Downarrow/> </button>
                    </div>
                    <div className="mb-6">
                        <label for="text" className="block mb-2 text-sm font-medium text-gray-900 ">Commune</label>

                        <input type="text" id="searchtext" className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg  focus:outline-none focus:border-blue-500 transition-colors" placeholder="Commune"/>
                        <button className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors"> <Downarrow/> </button>
                    </div>
                    <div className='flex flex-row space-x-3'>
                        <button type="submit" className="text-white bg-siteblue  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center       ">Sauvegarder</button>
                        <button type="submit" className="text-black bg-gray-400  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center       ">Annuler</button>

                    </div>
                    
                    
                    
                    </form>

            </div>
        </div>
        {/* <div >fffffffffffffffffffffffffffffffffff</div> */}
    </div>
  )
}
