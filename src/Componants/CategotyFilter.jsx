import React from 'react'
import { getFilterContext } from '../Contex/FilterData'


const CategotyFilter = ({all_Categories}) => {
    const {FilterFunction} = getFilterContext()
  return (   
  <div className="catgories flex flex-col space-y-2 items-start">
  {all_Categories.map((cat, i)=> {
    return (
            <button
            key={i} 
            className='text-gray-500 hover:text-black hover:border-b border-black' 
            type="button" 
            name='category' 
            value={cat} 
            onClick={FilterFunction}> 
            {cat.toUpperCase()}
            </button>
    )
  })}

</div>

  )
}

export default CategotyFilter