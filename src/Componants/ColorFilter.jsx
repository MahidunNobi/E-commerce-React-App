import React from 'react'
import {AiOutlineCheck} from "react-icons/ai"
import { getFilterContext } from '../Contex/FilterData'

const ColorFilter = ({all_Colors}) => {
  const {FilterFunction, filter} = getFilterContext()
  // console.log(filter);
  return (
    <div>
      <h2 className='text-lg'>Colors:</h2>
      <div className="ColorsContainer flex space-x-1">
        {
          all_Colors.map((clr, i) => {

            if(clr === "all"){
              return <button key={i} onClick={FilterFunction} type='button' name='color' value={clr}> {clr.toUpperCase()} </button>
            }
            return (
              <button 
              key={i} 
              onClick={FilterFunction} 
              style={{backgroundColor: clr}} 
              className={`singleColor rounded-full h-[18px] w-[18px] flex justify-center items-center`} name='color' 
              value={clr}
              >
              {filter.color === clr && <AiOutlineCheck className=' text-white text-[15px] font-bold' />}

              </button>
            )
          })
        }
        

      </div>
    </div>
  )
}

export default ColorFilter