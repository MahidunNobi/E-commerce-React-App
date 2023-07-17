import React from 'react'
import Category from './LowLevelCom/Category'
import {useProductData} from "../Contex/ProductData"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';


const Categories = () => {

    const data = useProductData()
    
    const slideLeft = () => {
        const slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft -300
    }
    const slideRight = () => {
        const slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft +300
    }
  return (
    <div>
        <div className='py-10 mx-6'>
            <h1 className="text-2xl text-gray-600 mb-3 ml-10"> Categories:</h1>

            <div className='relative flex items-center'> 
                <AiOutlineArrowLeft size={40} onClick={slideLeft} className='  hover:scale-105 duration-300 cursor-pointer text-gray-900 p-2 rounded-full mr-3' />


                <div id='slider' className=" w-full scrollbar-hide h-full overflow-x-scroll whitespace-nowrap scroll-smooth rounded-xl "> 
                    {data.categories ? data.categories.map(c => <Category key={c.id} name={c.category} />): <h1> Loading... </h1>}
                </div>

                
                <AiOutlineArrowRight onClick={slideRight} size={40} className='  hover:scale-105 duration-300 cursor-pointer text-gray-900 p-2 rounded-full m-3' />
            </div>
        </div>

    </div>
  )
}

export default Categories