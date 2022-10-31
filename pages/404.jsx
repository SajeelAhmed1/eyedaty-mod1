import React from 'react'
import Errorillus from '../public/icons/errorillus'

export default function Errorpage() {
  return (
    
    <div className='flex justify-center items-center flex-col space-y-5 my-10'>
        <div>
            <Errorillus/>
        </div>
        <div>
            <h1 className='text-6xl text-center font-bold'>
                Page non trouvée
            </h1>
        </div>
        <div className='text-center'>
            <p>
                La page que vous recherchez peut avoir été supprimée, modifiée ou temporairement indisponible
            </p>
        </div>
        <div className='w-full flex justify-center px-4 lg:px-0 lg:p-2 '>

            <button className="text-white w-full lg:w-2/5 bg-siteblue border-0 py-2 px-8 focus:outline-none hover:bg-sitegreen rounded-lg text-lg">Retour à la page principale</button>

        </div>
    </div>
  )
}
