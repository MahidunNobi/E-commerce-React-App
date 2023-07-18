import React from 'react'
import { getFilterContext } from '../Contex/FilterData'
import CategotyFilter from './CategotyFilter'



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
  const all_colors = getUniqueData(all_Products, "colors")

  console.log(all_colors);
 

  return (
    <div>

      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input type="text" name='text' placeholder='Search' onChange={FilterFunction} className='w-full py-1 px-2 outline-none border border-gray-400 rounded-md' />  
      </form>
      <div className="categoryFilter my-6">
          <h2 className='text-lg'>Category</h2>
          <CategotyFilter all_Categories={all_Categories} />
       </div>
       <div className="company">
        <form action="">
          <h2 className='text-lg'> Company</h2>
          <select name="company" id="" onChange={FilterFunction} className='w-full py-1 px-2 outline-none border border-gray-400 rounded-md cursor-pointer'>
            {
              all_Companies.map((c, i) => <option key={i} value={c} name="company"> {c.toUpperCase()} </option> )
            }
            

          </select>
        </form>
       </div>

    </div>
  )
}

export default Filter