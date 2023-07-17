import React from 'react'

const Category = ({name}) => {
  return (
    <div className='inline-block mx-6 cursor-pointer'> 
        <div className=' w-[150px] px-2 rounded-xl hover:bg-[#FDA08B] duration-200 bg-[#F9C8BD] flex flex-col justify-center items-center py-4'>
            <div id="img" className=' w-12 h-[40px] rounded-full mb-3'>
                <img src= "https://www.freepnglogos.com/uploads/tv-png/tv-png-box-television-set-cable-screen-icon-31.png" className='w-full ' alt="" />
            </div>
            <h3 className='text-gray-700 font-bold'> {name} </h3>

        </div>
    </div>
  )
}

export default Category