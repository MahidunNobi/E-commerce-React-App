import React from 'react'
import { getFilterContext } from '../Contex/FilterData'


const CompanyFilter = ({all_Companies}) => {
    const {FilterFunction} = getFilterContext()
  return (
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
  )
}

export default CompanyFilter