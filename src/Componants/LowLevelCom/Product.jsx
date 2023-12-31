import React from 'react'
import { Link } from 'react-router-dom'
import RatingsStar from './RatingsStar'

const Product = ({image, name, category, price, id, shipping}) => {
 
  return (
    
        <Link to={`/SingleProduct/${id}`} className=" w-[300px] flex flex-col justify-between items-center px-6 my-6 ">
            <div className='flex justify-center flex-col items-center border rounded-md border-initialColor p-2'> 
              <div className="img h-[200px] mb-2 overflow-hidden rounded-md">
                  <img className='h-full' src={image} alt="" />
              </div>
              <div className="description w-full">
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
        

    </Link>
  )
}

export default Product
