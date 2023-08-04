import React from 'react'
import { getFilterContext } from '../Contex/FilterData'


const CategotyFilter = ({all_Categories}) => {
    const {FilterFunction} = getFilterContext()
  return (   
    <div className="categoryFilter lg:my-6 my-3 ">
      <h2 className='text-xl underline mb-3'>Category</h2>

        <div className="catgories flex flex-col space-y-2 items-start">
            {all_Categories.map((cat, i)=> {
              return (
                      <button
                      key={i} 
                      className='lg:text-gray-500 leading-4 lg:leading-6 text-white hover:text-black hover:border-b border-black' 
                      type="button" 
                      name='category' 
                      value={cat} 
                      onClick={FilterFunction}> 
                      {cat.toUpperCase()}
                      </button>
              )
            })}
        </div>
        
    </div>  

  )
}

export default CategotyFilter