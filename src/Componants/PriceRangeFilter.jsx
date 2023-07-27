import React from 'react'
import { getFilterContext } from '../Contex/FilterData'

const PriceRangeFilter = () => {
    
    const {FilterFunction, filter} = getFilterContext()
    
  return (
    <div>
        <h2 className="text-lg"> ${filter.price}</h2>
            <input 
            type="range" 
            name='price'
            min={filter.minPrice} 
            max={filter.maxPrice} 
            value={filter.price} 
            onChange={FilterFunction} />
       
    </div>
  )
}

export default PriceRangeFilter