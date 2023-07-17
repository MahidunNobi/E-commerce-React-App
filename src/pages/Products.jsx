import React from 'react'
import { getFilterContext } from '../Contex/FilterData'

import Product from '../Componants/LowLevelCom/Product'
import HorizontalProduct from '../Componants/LowLevelCom/HorizontalProduct'
import { useState } from 'react'
import ProductTopRight from '../Componants/ProductTopRight'
import Filter from '../Componants/Filter'

const Products = () => {

    const {filter_Products} =  getFilterContext()
    const [grid, setGrid] = useState(false)

    

  return (
    <div>
    <div className='container mx-auto  mb-6 md:flex p-6'>
        <div className="filterSection w-[20%]">
            <Filter/>
        </div>

        <div className="contentSection w-[80%] px-6">
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