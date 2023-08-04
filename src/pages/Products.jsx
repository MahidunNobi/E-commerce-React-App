import React from 'react'
import { getFilterContext } from '../Contex/FilterData'

import Product from '../Componants/LowLevelCom/Product'
import HorizontalProduct from '../Componants/LowLevelCom/HorizontalProduct'
import { useState } from 'react'
import ProductTopRight from '../Componants/ProductTopRight'
import Filter from '../Componants/Filter'
import {AiOutlineClose} from "react-icons/ai"

const Products = () => {

    const {filter_Products} =  getFilterContext()
    const [grid, setGrid] = useState(false)

    function openFilter(){
        const filter = document.querySelector(".filterSection")
        filter.classList.remove("w-0", "px-0")
        filter.classList.add("w-full", "px-6")
    }
    function closeFilter(){
        const filter = document.querySelector(".filterSection")
        filter.classList.add("w-0", "px-0")
        filter.classList.remove("w-full", "px-6")
    }

  return (
    <div>
    <div className='container mx-auto relative mb-6 lg:flex lg:p-6 p-2'>
        <div className="filterSection lg:w-[20%] absolute lg:relative top-0 left-0 w-0 overflow-hidden h-screen bg-initialColor lg:bg-transparent text-white lg:text-gray-600 px-0 duration-300">
            <div className="closeBtn text-center mb-6 lg:hidden"> 
                <button onClick={closeFilter}>  
                    <AiOutlineClose className='text-xl' /> 
                </button> 
            </div>

            <Filter/>
        </div>

        <div className="filterBtn lg:hidden text-center">
            <button className='uppercase text-blue-600' onClick={openFilter}> Click to filter </button>
        </div>

        <div className="contentSection w-full lg:w-[80%] lg:px-6 px-0 py-6 lg:py-0">
            {/* Right Top Section / Short By Section  */}
            <ProductTopRight setGrid={setGrid} grid={grid} />
            <div className="products flex flex-wrap justify-evenly">
                {grid ? 
                filter_Products.map(p => <HorizontalProduct key={p.id} {...p} />):
                filter_Products.map(p => <Product key={p.id} {...p} />) 
                } 
            </div>
            
        </div>

    </div>
</div>
  )
}

export default Products;


{/* {data.isLoading ? <h1> Loading...</h1> : data.products.map(p => <Product key={p.id} {...p} />)} */}

          {/* {data ? data.map(p=> <Product img={p.image} title={p.name} category={p.category} price={p.price}   key={p.id} addToCart={addToCart} id={p.id} />) : <h1> Loading...</h1>} */}