import React from 'react'

import menuItems from "../pages/api/blogscat"

export default function Sidebarcontent() {
  return (
    <nav>
            <ul>
              {menuItems.map(({ catnumber, title }) => (
                <li className='m-2' key={title}>
                  {/* <Link href={href}> */}
                  <div className='flex justify-start hover:bg-blue-200 hover:rounded-full items-center'>
                    <div className={`flex p-2  rounded  cursor-pointer`}>
                    <a >
                      {title} 
                    </a>
                    </div>
                    <div className='bg-siteblue p-1 w-8 h-6 flex justify-center items-center text-xs m-1 rounded-full'>
                     
                        {catnumber}
                      
                    </div>
                  </div>
                    
                  {/* </Link> */}
                </li>
              ))}
            </ul>
          </nav>
  )
}
