import React from 'react'
import { Link } from 'react-router-dom'

const HorizontalProduct = ({image, name, category, price, addToCart, id}) => {
  return (
    <Link to={`/SingleProduct/${id}`}>
    <div className='w-[95%] flex justify-between border-b border-gray-400 py-6'>
        <div className=" w-[20%] flex items-center">            
                <img className='w-full' src={image} alt="" />
        </div>
        
        <div className="description w-[75%] flex flex-col space-y-2">
            <h1> {name}</h1>
            <p> Price: {price} BDT </p>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque labore nihil minus id ipsum soluta, eligendi delectus magni consequuntur ratione, quia, eum accusantium itaque iusto libero voluptatum. Natus, quo amet.</p>
            <div id="addToCartBtn" className='w-full'>
              <button className='px-6 py-2 text-center border-2 border-[#FF5733] text-[#FF5733] hover:text-white hover:bg-[#FF5733] duration-300'>Add To Cart</button>
            </div>
        </div>

    </div>
    </Link>
  )
}

export default HorizontalProduct