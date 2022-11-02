import React from 'react'
import Image from 'next/image'
import likeicon from '../../../public/commentsicons/likeicon.svg'
import dislikeicon from '../../../public/commentsicons/dislikeicon.svg'
import replyicon from '../../../public/commentsicons/replyicon.svg'
import selmaavatar from '../../../public/selmaavatar.svg'

export default function Replytemp() {
  return (
    <div className='ml-20'>
              <div className='flex flex-row space-x-4 my-3'>
                <div>
                  <Image src={selmaavatar} height="100" width="100" alt="selmaavatar" />

                </div>
                <div className='flex flex-col'>
                  <h1 className='font-bold text-lg'>
                    Selma Achref
                  </h1>
                 
                  <p>
                    Lörem ipsum prektigt beren makroligt, till desena. Lasock heterok. Nir nist så keltisk tiger usat fast bior. Rebel nedyn prertad krod semigon. Rest reska inte eubel sasade. Du kan vara drabbad.
                  </p>
                </div>
              </div>
              <div className='flex w-1/2 justify-evenly'>
                <div className='flex justify-center items-center space-x-2'>
                  <button className='flex justify-center items-center space-x-2'>
                    <div>
                      <Image src={likeicon}  alt="likeicon" />

                    </div>
                    <p>
                      Like
                    </p> 

                  </button>
                </div>
                <div className='flex justify-center items-center space-x-2'>
                  <button className='flex justify-center items-center space-x-2'>
                    <div>
                      <Image src={dislikeicon}  alt="dislikeicon" />

                    </div>
                    <p>
                      Dislike
                    </p> 

                  </button>
                </div>
                <div className='flex justify-center items-center space-x-2'>
                  <button className='flex justify-center items-center space-x-2'>
                    <div>
                      <Image src={replyicon}  alt="replyicon" />

                    </div>
                    <p>
                      Reply
                    </p> 

                  </button>
                </div>
              </div>
            </div>
  )
}
