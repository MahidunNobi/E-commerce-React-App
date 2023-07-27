import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProductData } from '../Contex/ProductData'
import SingleProductDescription from '../Componants/SingleProductDescription'
import SingleProductImages from '../Componants/SingleProductImages'

const SingleProduct = () => {
  const {getSingleProductData, isSingleProductLoading, singleProductData, products} = useProductData()
  const id = useParams()

  useEffect(()=>{
  getSingleProductData(id.id)

  }, [])
  
  const {
 
  image
  
} = singleProductData

  return (
    <> 
    {isSingleProductLoading ? (<h1> Loading-- </h1>) : (<div className='container mx-auto my-14 flex justify-between flex-col-reverse xl:flex-row'>
      <SingleProductDescription />
      <SingleProductImages image={image} />
    </div>) }
    </>
  )
}

export default SingleProduct