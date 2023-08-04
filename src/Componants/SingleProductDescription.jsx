import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck} from '@fortawesome/free-solid-svg-icons'
import {AiOutlineCheck} from "react-icons/ai"
import RatingsStar from './LowLevelCom/RatingsStar'
import { useCartContext } from '../Contex/CartData'
import { useProductData } from '../Contex/ProductData'

const SingleProductDescription = () => {

const {singleProductData} = useProductData()
const {
  id,
  name,
  price,
  description,
  company,
  reviews,
  stars,
  stock,
  colors
} = singleProductData
  
const [color, setColor] = useState(colors[0])
const [itemCount, setItemCount] = useState(1)


const {AddToCart} = useCartContext()


  return (
    <div className='xl:w-[50%] p-3 '>
        <h1 className='text-4xl mb-4'> {name}</h1>
        {/*--------- Stars functionality--------- */}
        <div className="rating mb-4">        
          <RatingsStar stars={stars} />           
            <span className='text-gray-400 text-sm'> ({reviews} customer review) </span>
        </div>
        {/*--------- Price functionality--------- */}

        <div className="prices mb-4">
         <p> MRP. <del className=' text-gray-400'>${price + 1000}</del> </p>  
         <p className='text-blue-500'> Deal of the day: ${price}</p>
        </div>
        {/*--------- Description functionality--------- */}
        
        <div className="description text-gray-700">
          {description}
        </div>
    {/*============ Features Section================= */}
        <div className="features my-6 flex flex-wrap justify-between border-b border-gray-300 px-3 ">
          <div className="singleFeatures flex flex-col items-center w-[45%] xl:w-auto ">
              <div className="icon">
              <FontAwesomeIcon icon={faTruck} className='bg-gray-300 p-3'></FontAwesomeIcon>
              </div>
              <p className='text-gray-700 text-sm'> Free Delivery</p>
          </div>
          <div className="singleFeatures flex flex-col items-center w-[45%] xl:w-auto ">
              <div className="icon">
              <FontAwesomeIcon icon={faTruck} className='bg-gray-300 p-3'></FontAwesomeIcon>
              </div>
              <p className='text-gray-700 text-sm'> 15 Days Replacement</p>
          </div>
          <div className="singleFeatures flex flex-col items-center w-[45%] xl:w-auto my-6 xl:my-0">
              <div className="icon">
              <FontAwesomeIcon icon={faTruck} className='bg-gray-300 p-3'></FontAwesomeIcon>
              </div>
              <p className='text-gray-700 text-sm'> Express Delivery</p>
          </div>
          <div className="singleFeatures flex flex-col items-center w-[45%] xl:w-auto my-6 xl:my-0">
              <div className="icon">
              <FontAwesomeIcon icon={faTruck} className='bg-gray-300 p-3'></FontAwesomeIcon>
              </div>
              <p className='text-gray-700 text-sm'> 2 Years Warrenty</p>
          </div>

         

        </div>
    {/*============ Available, id, Brand Section================= */}
        <div className="availableIdBrand border-b-2 border-gray-800 pb-6">
          <p> <span className='text-gray-500 mb-2'> Available: </span> {stock >0 ? "In Stock" : "Out Of stock"} </p>
          <p> <span className='text-gray-500'> Brand: </span> {company} </p>
        </div>
      {/*============ Colors Section================= */}
        <div className="colors flex items-center my-6"> 
        <p> Color:  </p>
          <div className="colorDivs mt-[8px] flex space-x-2 ml-2"> 
            { colors.map((clr, i)=>{
              return ( 
              <button 
              key={i} 
              onClick={() => setColor(clr)} 
              style={{backgroundColor: clr}} 
              className={`singleColor rounded-full h-[18px] w-[18px] flex justify-center items-center`} 
              >
              {color === clr && <AiOutlineCheck className=' text-white text-[15px] font-bold' />}

              </button>
              )
            })}

          </div>
        </div>
      {/*============ Item Count Section================= */}
        <div className="ItemCount ">
          <div className="buttons flex bg-gray-400 w-[65px]"> 
          <button className='bg-gray-200 px-2' onClick={()=> itemCount > 1 && setItemCount(itemCount -1)}>-</button>
            <p className='mx-3'>{itemCount}</p>
          <button className='bg-gray-200 px-2' onClick={()=> itemCount < stock && setItemCount(itemCount + 1)}>+</button>
          </div>
        </div>
      {/*============ Add To Cart Btn Section================= */}

        <div id="addToCartBtn" className='my-6'>
             <Link to="/cart"> 
              <button onClick={()=>AddToCart(id, color, itemCount, singleProductData)} className='w-full xl:w-auto px-6 py-2 text-center border-2 border-[#FF5733] text-[#FF5733] hover:text-white hover:bg-[#FF5733] duration-300'>Add To Cart</button>
             </Link>
        </div>
        


    </div>
  )
}

export default SingleProductDescription