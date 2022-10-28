import React from 'react'
import Image from 'next/image'

export default function PartnerCard(props) {
  return (
    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class=" border-gray-200 bg-fieldwhite w-32 flex justify-center items-center h-32  px-2 py-6 rounded-full">
            <Image  src={props.imagevar} alt="partner image" />
            {/* <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2> */}
            {/* <p class="leading-relaxed">{props.cattitle}</p> */}
        </div>
    </div>
  )
}
