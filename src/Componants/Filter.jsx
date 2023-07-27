import React from 'react'
import { getFilterContext } from '../Contex/FilterData'
import CategotyFilter from './CategotyFilter'
import CompanyFilter from './CompanyFilter'
import ColorFilter from './ColorFilter'
import PriceRangeFilter from './PriceRangeFilter'


const Filter = () => {

  const { FilterFunction, ClearFilterFunction , filter, all_Products } = getFilterContext()

  // Getting Unique Data 
  const getUniqueData = (data, prop) => {
    let newValue = data.map(pro => pro[prop])
    if(prop === "colors"){
      return newValue = ["all", ...new Set([].concat(...newValue))]
      // return newValue = newValue.flat()
    }
    // new Sat() method brings ["Hello", "Hello", "hello"] to ["Hello", "hello"]
    return newValue = ["all", ...new Set(newValue)]
  }
  const all_Categories = getUniqueData(all_Products, "category")
  const all_Companies = getUniqueData(all_Products, "company")
  const all_Colors = getUniqueData(all_Products, "colors")


  return (
    <div>

      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input type="text" name='text' placeholder='Search' value={filter.text} onChange={FilterFunction} className='w-full py-1 px-2 outline-none border border-gray-400 rounded-md' />  
      </form>      
      <CategotyFilter all_Categories={all_Categories} />       
       <CompanyFilter all_Companies={all_Companies} />
       <ColorFilter all_Colors={all_Colors} />
       <PriceRangeFilter />
       <div className="clear-filter-btn">
          <button onClick={ClearFilterFunction} className='px-4 py-2 bg-orange-600 text-white hover:text-orange-600 hover:bg-white border border-orange-600 duration-300'>
            Clear Filters    
          </button>
       </div>

    </div>
  )
}

export default Filter