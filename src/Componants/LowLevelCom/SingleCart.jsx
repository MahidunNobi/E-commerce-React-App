import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillDelete} from "react-icons/ai"
import { useCartContext } from '../../Contex/CartData'

const SingleCart = ({cartItem}) => {
    const {
        //   increamentItemCount, decreamentItemCount
        image, 
        name,
        itemCount,
        price,
        color,
        id,
        rawId

    } = cartItem

    const {quantityIncrement, quantityDicrement, deleteItem} = useCartContext()


  
    return (
    <div className=' container mx-auto px-3 my-10'>
        <div className='flex justify-between border-b-[1px] pb-6 border-[#FB917B] items-center'>
            {/* Images, Name and color */}
            <div className='flex space-x-2 w-[25%]  justify-center'> 
                {/* Image Section */}
                <div id="imgSection" className=' w-[100px] flex justify-center items-center overflow-hidden'> 
                    <img className='w-full' src={image.url} alt="" />
                </div>
                {/* Name and Color  */}
                <div id='Description' className= 'px-6 xl:px-0'>               
                        <h1 className=' overflow-hidden
                            h-[30px] hover:text-blue-600 text-xl text-gray-700 font-semibold'> 
                            <Link to={`/SingleProduct/${rawId}`}>
                            {name} 
                            </Link>                    
                        </h1>            
                        <div                
                        style={{backgroundColor: color}} 
                        className={`singleColor rounded-full h-[18px] w-[18px] flex justify-center items-center`} 
                        > </div>               
                </div>
            </div>

            {/* InitialPrice is Here */}
            <div className="initialPrice w-[20%] hidden md:flex justify-center">
                <p>${price} </p>
            </div>

            {/* Item Counter is Here */}
            <div className="Itemcounter w-[20%] flex justify-center"> 
                <div id="ItemsCounter" className='w-[70px] bg-gray-100 flex justify-between '>
                    <button onClick={()=>quantityDicrement(id)} className='bg-gray-300 px-1 active:bg-gray-100 duration-150 '>   -  </button>
                    <p> {itemCount}</p>

                    <button onClick={()=> quantityIncrement(id)} className='bg-gray-300 px-1 active:bg-gray-100 duration-150 '> + </button>
                </div>
            </div>

            <div id='Prices' className='w-[15%] flex justify-center'>
                <p> ${ itemCount * price}  </p>
            </div>
            <div className='w-[20%] flex justify-center'>
                <button onClick={()=> deleteItem(id)}> <AiFillDelete className='text-2xl text-initialColor' /> </button>
            </div>

        </div>
    </div>
  )
}

export default SingleCart