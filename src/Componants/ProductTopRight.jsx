import React from 'react'
import {PiSquaresFourLight} from "react-icons/pi"
import {HiMenuAlt1} from "react-icons/hi"
import { getFilterContext } from '../Contex/FilterData'


const ProductTopRight = ({grid, setGrid}) => {

  const {sorting, sort_By, filter_Products} = getFilterContext()
  

  return (   
     <div className="sortBySection flex justify-between">

                <div className="view flex"> 
                    <PiSquaresFourLight onClick={()=>setGrid(false)} className={`text-3xl  p-1 hover:bg-slate-500 hover:text-white ${grid ? "" : "bg-slate-500 text-white"} cursor-pointer duration-200`}/>

                    <HiMenuAlt1 onClick={()=>setGrid(true)} className={`text-3xl  p-1 hover:bg-slate-500 hover:text-white ${grid ? "bg-slate-500 text-white" : ""} cursor-pointer duration-200`} />
                </div>
                <p> {filter_Products.length} Items Available </p>
                <div className="SortBy">
                    <select name="sort" id="sort" value={sort_By} className='sortSelect p-2 border-2 border-gray-300 rounded-lg outline-none cursor-pointer' onChange={sorting}>
                        <option value="lowest-price">Lowest Price</option>
                        <option value="highest-price">Highest Price</option>
                        <option value="a-z"> a-z</option>
                        <option value="z-a"> z-a </option>

                    </select>
                </div>

                
    </div>
    
  )
}

export default ProductTopRight