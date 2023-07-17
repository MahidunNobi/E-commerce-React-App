import React from 'react'
import { useState } from 'react'

const SingleProductImages = ({image = [{url: ""}]}) => {

  const [mainImage, setMainImage] = useState(0)

  return (
    <div className='xl:w-[40%] p-3 flex flex-col justify-center'>

        <div className="mainImage h-[350px] flex justify-center items-center mb-6 border-b border-gray-400 pb-6 overflow-hidden">
          <img className='h-full max-w-none inline-block' src={image[mainImage].url} alt="" />
        </div>

        <div className="otherImages flex justify-between">

            {
              image.map((e, i)=>{
                return (
                  <div key={i} onClick={()=> setMainImage(i)} className="singleImg xl:w-[100px] w-[80px] h-[100px] overflow-hidden flex items-center">
                <img className=' inline-block h-auto w-full hover:border-2 border-orange-400 cursor-pointer' src={e.url} alt="" />
            </div>
                )
              })
            }
            
           

            
        </div>

    </div>
  )
}

export default SingleProductImages