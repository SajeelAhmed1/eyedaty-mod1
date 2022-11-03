import React from 'react'
import blogimg1 from '../../public/blogimgs/blogimg1.png'
import blogimg2 from '../../public/blogimgs/blogimg2.png'
import blogimg3 from '../../public/blogimgs/blogimg3.png'
import blogimg4 from '../../public/blogimgs/blogimg4.png'
import blogimg5 from '../../public/blogimgs/blogimg5.png'
import Image from 'next/image'

import bloginnerimg from '../../public/blogimgs/bloginnerimage.svg'
import selmaavatar from '../../public/selmaavatar.svg'
import Commenttemp from '../../components/blogpagecomps/bloginerpagecomps/commenttemp'
import Replytemp from '../../components/blogpagecomps/bloginerpagecomps/replytemp'
import Otherblogcomp from '../../components/blogpagecomps/bloginerpagecomps/otherblogcomp'
import Qmark from '../../public/qmark'
export default function Bloginner() {
  return (
    <div className='flex flex-row '>
        <div className='w-2/3 flex leading-7 flex-col px-24 space-y-3 py-10 '>
            <p>
              Accueil {">"} Blog {">"} Cardiologie {">"} <span className='text-siteblue'>

              Une hernie discale lombaire ventrale..
                  </span>
            </p>
            <h1 className='text-5xl font-bold'>
              Une hernie discale lombaire ventrale..
            </h1>
            <div>
              <p>
                Partagez cet article
              </p>
            </div>

            <div className='flex justify-center flex-col'>
              <Image  src={bloginnerimg}    alt="image" />
              <p className='text-left'>
                Lörem ipsum prektigt beren makroligt, till desena. Lasock heterok. Nir nist så keltisk tiger usat fast bior. Rebel nedyn prertad krod semigon. Rest reska inte eubel sasade. Du kan vara drabbad.  Ananade krogogt fulparkerare. Speskade syll men polylunat biortad. Hell dede. Kasa keredybär.

              </p>

            </div>
            <div>
              <h1 className='text-4xl font-semibold'>
                Une inflammation cutanée
              </h1>
              Lörem ipsum prektigt beren makroligt, till desena. Lasock heterok. Nir nist så keltisk tiger usat fast bior. Rebel nedyn prertad krod semigon. Rest reska inte eubel sasade. Du kan vara drabbad.  Ananade krogogt fulparkerare. Speskade syll men polylunat biortad. Hell dede. Kasa keredybär.
              <h1 className='text-4xl font-semibold'>
                Une pathologie très fréquente
              </h1>
                Lörem ipsum prektigt beren makroligt, till desena. Lasock heterok. Nir nist så keltisk tiger usat fast bior. Rebel nedyn prertad krod semigon. Rest reska inte eubel sasade. Du kan vara drabbad.  Ananade krogogt fulparkerare. Speskade syll men polylunat biortad. Hell dede. Kasa keredybär.
              <h1 className='text-4xl font-semibold'>
                Les symptômes

              </h1>
                Lörem ipsum prektigt beren makroligt, till desena. Lasock heterok. Nir nist så keltisk tiger usat fast bior. Rebel nedyn prertad krod semigon. Rest reska inte eubel sasade. Du kan vara drabbad.  Ananade krogogt fulparkerare. Speskade syll men polylunat biortad. Hell dede. Kasa keredybär.
              <h1 className='text-4xl font-semibold'>
                L&apos;utilisation de substances irritantes
              </h1>
                Lörem ipsum prektigt beren makroligt, till desena. Lasock heterok. Nir nist så keltisk tiger usat fast bior. Rebel nedyn prertad krod semigon. Rest reska inte eubel sasade. Du kan vara drabbad.  Ananade krogogt fulparkerare. Speskade syll men polylunat biortad. Hell dede. Kasa keredybär.
            </div>

            <div className='w-full bg-blue-100 rounded-lg p-6'>
              <h1 className='font-semibold'>
                Bien se laver les mains
              </h1>
              <p>
                Si votre enfant présente un érythème fessier, pensez à bien vous laver les mains avant de le changer et d&apos;appliquer les soins. La peau peut être à vif et donc plus sensible aux bactéries extérieures que vous pourriez avoir sur les mains.
              </p>
            </div>

            <div className='w-full  rounded-lg p-6'>
              <h1 className='font-extrabold text-3xl'>
                A propos de l'auteur
              </h1>
              <div className='flex flex-row space-x-4 my-3'>
                <div>
                  <Image src={selmaavatar} height="200" width="200" alt="selmaavatar" />

                </div>
                <div className='flex flex-col'>
                  <h1 className='font-bold text-lg'>
                    Selma Achref
                  </h1>
                  <p>
                    Docteur en pharmacie
                  </p>
                  <p>
                    Diplômé d&apos;un doctorat en pharmacie de l&apos;université de Reims, Paul Musset est passionné de médecine naturelle et de nutrition sportive. Il vous accompagne dans « Mon journal bien-être et beauté » en vous prodiguant ses conseils santé et bien-être.

                  </p>
                </div>
              </div>
            </div>

              <h1 className='font-extrabold text-3xl'>
                Commentaires
              </h1>
            <Commenttemp/>
            <Replytemp/>

            <Commenttemp/>

            <div className="p-2 ml-16 w-full">
                <div className="relative">
                {/* <label for="email" className="leading-7 text-sm text-black">Message</label> */}
                    <textarea id="message" placeholder="Reply" name="message" class="w-full  bg-opacity-50 rounded-lg border border-gray-400  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
            </div>

            <h1 className='text-2xl font-bold'>
              Ajouter un commentaire
            </h1>

            <div className="p-2  w-full">
                <div className="relative">
                <label for="email" className="leading-7 text-sm text-black">Commentaire</label>
                    <textarea id="message" placeholder="Commentaire" name="message" class="w-full  bg-opacity-50 rounded-lg border border-gray-400  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
            </div>
            <button className="inline-flex items-center w-1/5 justify-center  bg-siteblue text-white p-3   focus:outline-none hover:bg-gray-200 rounded-lg text-base mt-4 md:mt-0">Commenter
                
            </button>

            
            

        </div>
        <div className='w-1/3 flex flex-col p-4 space-y-3'>

        
              <div>
                <div className='flex flex-col space-y-2 w-full px-6'>
                  <p>
                    Chercher
                  </p>
                  <div class="relative mt-1">
                    <input type="text" id="searchtext" class="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Chercher"/>
                    <button class="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors"> <Qmark/> </button>
                  </div>
                </div>
              </div>
              <div className='flex flex-col'>
                  <h1 className='text-4xl font-extrabold'>
                    Nos articles les plus lus
                  </h1>
                  <Otherblogcomp blogpic={blogimg1}/>
                  <Otherblogcomp blogpic={blogimg2}/>
                  <Otherblogcomp blogpic={blogimg3}/>
                  <Otherblogcomp blogpic={blogimg4}/>
                  <Otherblogcomp blogpic={blogimg5}/>
              </div>

              <div className='flex flex-col space-y-4 p-2'>
                  <div className='text-4xl font-bold text-black'>
                    Mot cles
                  </div>
                  <div className='flex flex-wrap '>
                    <div className='border-2 w-1/3 p-2 m-2 rounded-xl text-gray-600 border-gray-600'>
                      Opthalmalogie
                    </div>
                    <div className='border-2 w-1/3 p-2 m-2 rounded-xl text-gray-600 border-gray-600'>
                      Opthalmalogie
                    </div>
                    <div className='border-2 w-1/3 p-2 m-2 rounded-xl text-gray-600 border-gray-600'>
                      Opthalmalogie
                    </div>
                    <div className='border-2 w-1/3 p-2 m-2 rounded-xl text-gray-600 border-gray-600'>
                      Opthalmalogie
                    </div>
                    <div className='border-2 w-1/3 p-2 m-2 rounded-xl text-gray-600 border-gray-600'>
                      Opthalmalogie
                    </div>
                    <div className='border-2 w-1/3 p-2 m-2 rounded-xl text-gray-600 border-gray-600'>
                      Opthalmalogie
                    </div>
                  </div>
              </div>
        </div>
    </div>
  )

}
