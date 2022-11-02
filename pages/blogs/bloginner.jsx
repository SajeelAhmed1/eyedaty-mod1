import React from 'react'
import Image from 'next/image'
import bloginnerimg from '../../public/blogimgs/bloginnerimage.svg'
import likeicon from '../../public/commentsicons/likeicon.svg'
import dislikeicon from '../../public/commentsicons/dislikeicon.svg'
import replyicon from '../../public/commentsicons/replyicon.svg'
import selmaavatar from '../../public/selmaavatar.svg'
import Commenttemp from '../../components/commenttemp'
import Replytemp from '../../components/replytemp'
export default function Bloginner() {
  return (
    <div className='flex flex-row '>
        <div className='w-3/4 flex leading-7 flex-col px-24 space-y-3 py-10 '>
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
        <div className='w-1/4 bg-red-300'>
                f
        </div>
    </div>
  )

}
