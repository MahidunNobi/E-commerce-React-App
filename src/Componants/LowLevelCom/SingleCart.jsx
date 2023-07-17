import React from 'react'

const SingleCart = ({img, title, itemCount, price, category, id, increamentItemCount, decreamentItemCount}) => {
  
    return (
    <div className=' container mx-auto px-6 my-10'>
        <div className='flex justify-between border-b-[1px] pb-6 border-[#FB917B]'>

            <div id="imgSection" className=' w-[25%] h-[110px] md:h-[150px] flex justify-center items-center overflow-hidden'> 
                <img className=' h-full w-auto' src={img} alt="" />
            </div>

            <div id='Description' className=' w-[50%] px-6 xl:px-0'>
               
                    <h1 className=' overflow-hidden
                        h-[30px] hover:text-blue-600 text-xl text-gray-700 font-semibold'> 
                        <a href="#">
                        {title} 
                        </a>                    
                    </h1>
            
                <p className=' text-gray-600'> {category}</p>
                <p className='mb-1'> In Stok</p>
                
                <div id="ItemsCounter" className='w-[70px] bg-gray-100 flex justify-between '>
                    <button onClick={()=> decreamentItemCount(id)} className='bg-gray-300 px-1 active:bg-gray-100 duration-150 '> - </button>
                    <p> {itemCount}</p>
                    <button onClick={()=> increamentItemCount(id)} className='bg-gray-300 px-1 active:bg-gray-100 duration-150 '> + </button>
                </div>
            </div>

            <div id='Prices' className='w-[25%]'>
                <p>  { itemCount * price} $ </p>
            </div>

        </div>
    </div>
  )
}

export default SingleCart