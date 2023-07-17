import React from 'react'
import { Link } from 'react-router-dom'
import Contact from '../pages/Contact'

const Footer = () => {
  return (
    <div className=' bg-gray-400'>
        <div className="container mx-auto py-6 px-2 ">
            <div className='flex flex-col space-y-3 md:space-y-0 md:flex-row flex-wrap'> 

                <div className=' md:w-1/2 lg:w-1/3 xl:w-1/4 w-full'>
                <h2 className='text-gray-50 font-semibold text-2xl text-center md:text-left'>E-commerce</h2>
                </div>

                <div className=' md:w-1/2 lg:w-1/3 xl:w-1/4 w-full text-center md:text-left'>

                <h2 className='text-gray-300 font-semibold text-xl'>Company</h2>
                <ul>
                    <li>
                        <a href="#" className='text-sm text-gray-800 hover:text-blue-900 hover:underline decoration-blue-900'> About Trepup </a>
                    </li>
                    <li>
                        <Link to={"contact"} className='text-sm text-gray-800 hover:text-blue-900 hover:underline decoration-blue-900'> Contect Us </Link>
                    </li>
                
                </ul>
                </div>
                
                <div className=' md:w-1/2 lg:w-1/3 xl:w-1/4 w-full text-center md:text-left'>
                    
                <h2 className='text-gray-300 font-semibold text-xl'>Services</h2>
                <ul>
                    <li>
                        <a href="#" className='text-sm text-gray-800 hover:text-blue-900 hover:underline decoration-blue-900'> Trepup Analytics
                        </a>
                    </li>
                    <li>
                        <a href="#" className='text-sm text-gray-800 hover:text-blue-900 hover:underline decoration-blue-900'> Trepup Photos </a>
                    </li> <li>
                        <a href="#" className='text-sm text-gray-800 hover:text-blue-900 hover:underline decoration-blue-900'> Trepup Email </a>
                    </li>
                
                </ul>
                </div>

                

                <div className=' md:w-1/2 lg:w-1/3 xl:w-1/4 w-full text-center md:text-left'>
                    
                <h2 className='text-gray-300 font-semibold text-xl'>Terms</h2>
                <ul>
                    <li>
                        <a href="#" className='text-sm text-gray-800 hover:text-blue-900 hover:underline decoration-blue-900'> Trepup Analytics
                        </a>
                    </li>
                    <li>
                        <a href="#" className='text-sm text-gray-800 hover:text-blue-900 hover:underline decoration-blue-900'> Trepup Photos </a>
                    </li> <li>
                        <a href="#" className='text-sm text-gray-800 hover:text-blue-900 hover:underline decoration-blue-900'> Trepup Email </a>
                    </li>
                
                </ul>
                </div>
            </div>
        
        <p className="text-sm text-gray-600 text-center xl:text-left mt-10 xl:mt-0">
            @2023 Mahidun Nobi
        </p>
        </div>

    </div>
  )
}

export default Footer