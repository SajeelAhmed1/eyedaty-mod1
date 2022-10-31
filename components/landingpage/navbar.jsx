
import {React,useState} from 'react'
import EyedatyLogo from '../../components/eyedatylogo'
import BurgerMenuIcon from '../../public/icons/burgermenuicon'
import Modal from '../modal'
import Link from 'next/link'; 


export default function Navbar() {

  
  const [showModal,setShowModal] = useState(false);
  const check = () => {
    if (showModal) {
      console.log('modal is now false')
      setShowModal(false);
    } else {
      console.log('modal is now true')
      setShowModal(true);
    }

  }
  return (
<header className="  text-gray-600 body-font">
  <div className="hidden container mx-auto lg:flex flex-wrap p-6 flex-col md:flex-row items-center">
  <Link href="/">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <EyedatyLogo width="56" height="56"/>
      {/* <span className="ml-3 text-xl">Tailblocks</span> */}
    </a>

  </Link>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-siteblue"><Link href="/login">Accueli</Link></a>
      <a className="mr-5 hover:text-siteblue"><Link href="/aboutus">A propos de nous</Link></a>
      <a className="mr-5 hover:text-siteblue"><Link href="/contactus">Contactez-nous</Link></a>
    
    </nav>

    

    <div className=' w-1/2 flex flex-row justify-around'>
        <div className='hidden lg:flex  w-2/5'>
            <input className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Chercher" type="text" name="search"/>
          {/* <span> A</span> */}
        </div>
        <div className='hidden lg:flex  w-2/4 justify-evenly'>
            <button className="inline-flex items-center   border-2 border-siteblue  px-7 focus:outline-none hover:bg-gray-200 rounded-lg text-base mt-4 md:mt-0"><Link href="/login">Connexion</Link>
                
            </button>
            <button className="inline-flex items-center  bg-siteblue text-white   px-7 focus:outline-none hover:bg-gray-200 rounded-lg text-base mt-4 md:mt-0"><Link href="/signup">S&apos;Inscrire</Link>
                
            </button>

        </div>

    </div>
  </div>

      {/* phonenav */}
  <div className="w-full px-8 py-2 flex justify-between lg:hidden">
    <div className=' w-1/2 py-3 '>
      <button  onClick={check}>
        <BurgerMenuIcon/>

      </button>

    </div>
    <a className="flex title-font font-medium items-center  text-gray-900 mb-4 md:mb-0">
      <EyedatyLogo height="50"  width="50"/>
      
      {/* <span className="ml-3 text-xl">Tailblocks</span> */}
    </a>
    
  </div>
  <Modal isVisible={showModal}/>
</header>

  )
}


