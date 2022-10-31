import React from 'react'

 const Modal = ({isVisible}) => {

    
    if (!isVisible) return null;
    
    
  return (
    <div className='relative inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-start'>
      <div className='w-full'>
        <div className='bg-white flex flex-col justify-center items-start p-5 space-y-3'>
          <div>
            <a href="#"> <p className='text-lg font-bold text-black' ><Link href="/aboutus">Accueli</Link>  </p> </a>
          </div>
          <div>
            <a href="#"> <p className='text-lg font-bold text-black'> <Link href="/aboutus">A propos de nous</Link> </p> </a>
          </div>
          <div>
            <a href="#"> <p className='text-lg font-bold text-black'><Link href="/contactus">Contactez-nous</Link> </p> </a>
          </div>
          <div className='flex flex-col w-full '>
            <button className="inline-flex items-center justify-center border-2 border-siteblue text-center px-7 py-2 focus:outline-none hover:bg-gray-200 rounded-lg text-base mt-4 md:mt-0"><Link href="/login">Connexion</Link>
                
            </button>
            <button className="inline-flex items-center justify-center  bg-siteblue text-white   px-7 py-2  focus:outline-none hover:bg-gray-200 rounded-lg text-base mt-4 md:mt-0"><Link href="/signup">S&apos;Inscrire</Link>
                
            </button>

        </div>
        </div>

      </div>
    </div>
  )
};
export default Modal
