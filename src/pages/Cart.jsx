import React from 'react'
import SingleCart from '../Componants/LowLevelCom/SingleCart'

const Cart = ({cartItems, setCartItems}) => {

  function increamentItemCount(id){
    const updateData = cartItems.map(item => item.id === id ? {...item, itemsCount: item.itemsCount + 1} : item)
    setCartItems(updateData);
  }

  function decreamentItemCount(id){
    const FirstupdateData = cartItems.map(item => item.id === id ? {...item, itemsCount: item.itemsCount-1} : item)

     const finalData = FirstupdateData.filter(i => i.itemsCount>0)


     setCartItems(finalData)
  }
let totalPrice = 0;
cartItems.forEach(i => {
  const productPrice = i.itemsCount * i.price;
  totalPrice += productPrice
});


  
  return (
    <div>
      <div> 
        { cartItems.length>0 ? 
        cartItems.map(item => <SingleCart key={item.id} id={item.id} img={item.image} title={item.name} itemCount={item.itemsCount} category={item.category} price={item.price} increamentItemCount={increamentItemCount} decreamentItemCount={decreamentItemCount} />)  
        : 
        <h1 className="text-3xl"> You Nothing in Cart</h1> }
    </div>
    <div id="total" className='container mx-auto flex justify-end mb-10 pr-10'> 
    
       <div className='w-[20%] inline-block'>  <h3 className='uppercase text-xl text-gray-600'>Total: {totalPrice}$</h3>  </div>

    </div>
    </div>
  )
}

export default Cart