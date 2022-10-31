import React from 'react'
import Caution from '../public/toastsvgs/cautionicon'
import Closebtn from '../public/toastsvgs/closebtnicon'

export default function Failedtoast() {
  return (
    <div className='w-full flex my-4 justify-evenly rounded-lg  py-3 bg-dangercolor'>
                    <div >
                        <Caution/>
                    </div>
                    <div>
                        <p className='text-sm text-white font-semibold'>
                            E-mail ou mot de passe incorrect
                        </p>
                    </div>
                    <div>
                        <Closebtn/>
                    </div>
                    
                </div>
  )
}
