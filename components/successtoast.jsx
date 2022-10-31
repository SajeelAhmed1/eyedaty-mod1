import React from 'react'
import Closebtn from '../public/toastsvgs/closebtnicon'
import Succicon from '../public/toastsvgs/successicon'

export default function Successtoast() {
  return (
    <div className='w-full flex justify-evenly my-4 rounded-lg  py-3 bg-succolor'>
                    <div >
                        <Succicon/>
                    </div>
                    <div>
                        <p className='text-sm text-white font-semibold'>
                            Bienvenue Ashraf Maher !
                        </p>
                    </div>
                    <div>
                        <Closebtn/>
                    </div>
                    
                </div>
  )
}
