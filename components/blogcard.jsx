import React from 'react'

export default function BlogCard(props) {
  return (
    <div className="w-full lg:w-1/4 p-4 h-1/3 ">
                    <a href="#" className="relative block overflow-hidden rounded-xl blogbg bg-cover bg-center bg-no-repeat">
                <span className="absolute left-3 top-4 z-10 inline-flex items-center rounded-md bg-white px-3 py-1 text-xs font-semibold text-black">
                  {props.spec}
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1.5 h-4 w-4 text-yellow-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg> */}
                </span>

            <div className="relative bg-black bg-opacity-40  pb-8 pt-40 lg:p-8 lg:pt-40 h-1/3 text-white">
              <div className='w-full p-5 lg:p-0  mr-40'>
                  <p className="text-sm">25/05/2022</p>
                  <h3 className="text-2xl font-bold">Une hernie discale lombaire ventrale..</h3>
                  <p className="text-sm">Selma Achref</p>

              </div>
            </div>
          </a>

        </div>
  )
}
