import React from 'react'
import { getFilterContext } from '../Contex/FilterData'
import CategotyFilter from './CategotyFilter'
import CompanyFilter from './CompanyFilter'
import ColorFilter from './ColorFilter'


const Filter = () => {

  const { FilterFunction, filter, all_Products } = getFilterContext()

  // Getting Unique Data 
  const getUniqueData = (data, prop) => {
    let newValue = data.map(pro => pro[prop])
    if(prop === "colors"){
      return newValue = ["all", ...new Set([].concat(...newValue))]
      // return newValue = newValue.flat()
    }
    return newValue = ["all", ...new Set(newValue)]
  }
  const all_Categories = getUniqueData(all_Products, "category")
  const all_Companies = getUniqueData(all_Products, "company")
  const all_Colors = getUniqueData(all_Products, "colors")

  return (
    <div>

      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input type="text" name='text' placeholder='Search' onChange={FilterFunction} className='w-full py-1 px-2 outline-none border border-gray-400 rounded-md' />  
      </form>      
      <CategotyFilter all_Categories={all_Categories} />       
       <CompanyFilter all_Companies={all_Companies} />
       <ColorFilter all_Colors={all_Colors} />

    </div>
  )
}

export default Filter