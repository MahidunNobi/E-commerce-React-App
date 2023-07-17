import React from 'react'
import Product from './LowLevelCom/Product'
import { useProductData } from '../Contex/ProductData'

const FeaturedProducts = () => {
    const data = useProductData()
  return (
    <div className='container mx-auto'> 
        <h1 className='text-4xl text-center'>Featured Products:</h1>

        <div className="products flex justify-around flex-wrap">
            {data.featuredProducts.map(p => <Product key={p.id} {...p} />)}
        </div>
        

    </div>
  )
}

export default FeaturedProducts