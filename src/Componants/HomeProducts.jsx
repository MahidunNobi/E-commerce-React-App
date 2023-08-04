import React, { useState } from 'react'
import Product from './LowLevelCom/HomeProducts'
import { useProductData } from '../Contex/ProductData'

const HomeProducts = () => {
  const [category, setCategory] = useState("All")
  const data = useProductData()
  const categories = ["All", ...new Set(data.products.map(product => product.category))]

const selectedCategoryItem = data.products.filter(pro=> pro.category === category)



  return (
    <div>
        <div className='container mx-auto  mb-6 '>
            <h1 className='md:text-5xl text-4xl text-gray-600 font-semibold text-center my-6'> Our Latest Products</h1>
            <div className="categories overflow-hidden px-3">
              <ul className='flex space-x-3 overflow-x-scroll scrollbar-hide'>              
                {categories.map((cat, i) => 
                <li key={i}> 
                  <button onClick={() =>setCategory(cat)} className={`text-initialColor border-initialColor border rounded px-6 ${category === cat ? "text-white bg-initialColor": ""} `} > {cat.toUpperCase()}</button> 
                </li>
                )} 
                             
              </ul>
            </div>

             <div className='overflow-x-scroll duration-100 flex'> 

             {data.isLoading ? 
             <h1> Loading...</h1> : 
             category === "All" ? data.products.map(p => <Product key={p.id} {...p} />) :
             selectedCategoryItem.map(p => <Product key={p.id} {...p} />)
             }

              {/* {data ? data.map(p=> <Product img={p.image} title={p.name} category={p.category} price={p.price}   key={p.id} addToCart={addToCart} id={p.id} />) : <h1> Loading...</h1>} */}
                
                
            </div>
        </div>
    </div>
  )
}

export default HomeProducts