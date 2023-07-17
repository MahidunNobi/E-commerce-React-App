import React, { useEffect } from 'react'
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
  name,
  price,
  description,
  company,
  image,
  reviews,
  stars,
  stock,
  color
} = singleProductData


  return (
    <div className='container mx-auto my-14 flex justify-between flex-col-reverse xl:flex-row'>
      <SingleProductDescription name={name} price={price} description={description} reviews={reviews} stars={stars} stock={stock} color={color} company={company} />
      <SingleProductImages image={image} />
    </div>
  )
}

export default SingleProduct