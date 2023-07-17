import React from 'react'
import { getFilterContext } from '../Contex/FilterData'



const Filter = () => {
    
    const { FilterFunction, filter } = getFilterContext()
    
  return (
    <div>

        <form action="" onSubmit={(e)=> e.preventDefault()}>
            <input type="text" name='text' placeholder='Search' onChange={FilterFunction} className='w-full py-1 px-2 outline-none border border-gray-400 rounded-md' />
        </form>
        
    </div>
  )
}

export default Filter