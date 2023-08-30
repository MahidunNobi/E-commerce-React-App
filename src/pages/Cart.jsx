import React from 'react'
import SingleCart from '../Componants/LowLevelCom/SingleCart'
import { useCartContext } from '../Contex/CartData'

const Cart = () => {

  const { cart } = useCartContext()

  
  return (
    <div className='container mx-auto my-6'>
      <div className="title justify-between px-6" style={{display: cart.length>0?"flex" : "none"}}>
        <p className="font-semibold w-[20%] text-center"> Item </p>
        <p className="font-semibold w-[20%] text-center hidden md:block"> Price </p>
        <p className="font-semibold w-[20%] text-center"> Qualtity </p>
        <p className="font-semibold w-[20%] text-center"> Total </p>
        <p className="font-semibold w-[20%] text-center"> Delete </p>
        
      </div>
      <hr />
      <div> 
        { cart.length>0 ? 
        cart.map(item => <SingleCart key={item.id} cartItem={item} />)  
        : 
        <h1 className="md:text-3xl text-xl px-3"> You have nothing in cart</h1> }
        
    </div>
    <div id="total" className='flex justify-end mb-10 pr-10'> 
    
       {/* <div className='w-[20%] inline-block'>  <h3 className='uppercase text-xl text-gray-600'>Total: {totalPrice}$</h3>  </div> */}

    </div>
    </div>
  )
}

export default Cart