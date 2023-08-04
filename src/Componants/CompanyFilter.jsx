import React from 'react'
import { getFilterContext } from '../Contex/FilterData'


const CompanyFilter = ({all_Companies}) => {
    const {FilterFunction, filter} = getFilterContext()
  return (
    <div className="company">
        <form action="">
          <h2 className='text-lg'> Company</h2>
          <select name="company" id="" value={filter.company} onChange={FilterFunction} className='w-full py-1 px-2 outline-none border lg:border-gray-400 border-white bg-transparent text-black rounded-md cursor-pointer'>
            {
              all_Companies.map((c, i) => <option key={i} value={c} name="company"> {c.toUpperCase()} </option> )
            }
            

          </select>
        </form>
       </div>
  )
}

export default CompanyFilter