import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({image, name, category, price, id, shipping}) => {
  return (
    
        <Link to={`/SingleProduct/${id}`} className=" py-6 flex flex-col justify-between items-center px-3 my-6 ">
            <div className='border rounded-md border-initialColor p-2'> 
            <div className='w-[230px] lg:w-[285px]'> 
              <div className="img h-[200px] mb-4 overflow-hidden rounded-md">
                  <img className='h-full' src={image} alt="" />
              </div>
              <div className="description mb-3 w-full">
                <h3 className='text-lg font-semibold text-blue-500 hover:text-blue-700 duration-300'> {name} {category} </h3>
                
                <h4 className='text-xl text-gray-700'> $ {price}</h4>
                <div className=''> 
                <del className='text-sm text-[#aeadad] mr-3'> ${price+1000} </del>
                  {shipping && <p className='text-green-500 text-sm inline-block'> FREE SHIPPING </p>}                
                </div>
                {/* <div className='reviewsSection'>
                  <p> {rating}  ({reviews})  </p>
                </div> */}
              </div>
            </div>
            {/* <div id="addToCartBtn" className='w-full'>
              <button className='w-full px-6 py-2 text-center border-2 border-[#FF5733] text-[#FF5733] hover:text-white hover:bg-[#FF5733] duration-300'>Add To Cart</button>
            </div> */}
        </div>

    </Link>
  )
}

export default Product
