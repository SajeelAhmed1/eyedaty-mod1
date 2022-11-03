
import {React,useState} from 'react'
import EyedatyLogo from '../../components/eyedatylogo'
import BurgerMenuIcon from '../../public/icons/burgermenuicon'
import Modal from '../modal'
import Link from 'next/link'; 
import Qmark from '../../public/qmark'


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
      <div className="mr-5 hover:text-siteblue">
        <Link  href="/"> Accueli</Link>

      </div>
      <div className="mr-5 hover:text-siteblue">
        <Link  href="/aboutus">A propos de nous</Link>
      </div>
      <div className="mr-5 hover:text-siteblue">
      <Link  href="/contactus">Contactez-nous</Link>


      </div>
      
    
    </nav>

    

    <div className=' w-1/2 flex flex-row justify-around'>
        <div className='hidden lg:flex  w-2/5'>
                    <div class="relative mt-1">
                      <input type="text" id="searchtext" class="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Chercher"/>
                      <button class="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors"> <Qmark/> </button>
                    </div>
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
      <div className='flex flex-col lg:hidden'>
        <div className="w-full px-8 py-2 flex  justify-between lg:hidden">
            <div className=' w-1/2 py-3 '>
              <button  onClick={check}>
                <BurgerMenuIcon/>

              </button>

            </div>
            <Link href="/">
              <a className="flex title-font font-medium items-center  text-gray-900 mb-4 md:mb-0">
              
                <EyedatyLogo height="50"  width="50"/>
                
                {/* <span className="ml-3 text-xl">Tailblocks</span> */}
              </a>
              
            </Link>
            
          </div>
          <Modal isVisible={showModal}/>
      </div>
  
</header>

  )
}


