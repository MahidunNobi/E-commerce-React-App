import React from 'react'
import { Link } from 'react-router-dom'

const HorizontalProduct = ({image, name, category, price, id, shipping}) => {
  return (
    <Link to={`/SingleProduct/${id}`}>
    <div className='w-[95%] flex justify-between border-b border-gray-400 py-6'>
        <div className=" md:w-[20%] w-[50%] mr-4 flex items-center">            
                <img className='w-full' src={image} alt="" />
        </div>
        
        <div className="description w-[75%] flex flex-col">
        <h3 className='text-lg font-semibold text-blue-500 hover:text-blue-700 duration-300'> {name} {category} </h3>
        <h4 className='text-xl text-gray-700'> ${price}</h4>
        <div className=''> 
          <del className='text-sm text-[#aeadad] mr-3'> ${price+1000} </del>
            {shipping && <p className='text-green-500 text-sm inline-block'> FREE SHIPPING </p>}                
        </div>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            {/* <div id="addToCartBtn" className='w-full'>
              <button className='px-6 py-2 text-center border-2 border-[#FF5733] text-[#FF5733] hover:text-white hover:bg-[#FF5733] duration-300'>Add To Cart</button>
            </div> */}
        </div>

    </div>
    </Link>
  )
}

export default HorizontalProduct