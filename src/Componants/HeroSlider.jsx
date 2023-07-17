import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import Image1 from "../assets/1.jpg"
import Image2 from "../assets/2.jpg"


const HeroSlider = () => {
    const images = [
        {
        url: Image1
    },
    {
        url: Image2
    }

    ]
    const currentWidth =window.innerWidth
    const currentHeight = window.innerHeight
     
   

    let finalHeight 

    // if (currentWidth <= 1100) {
    //     finalHeight = currentHeight-150
    // } else if (currentWidth <= 1090) {
    //     finalHeight = currentHeight-200
    //     console.log("Width is less than 1090");
    // } 
    //  // 
    // else{
    //     finalHeight = currentHeight -100
    // }
    


     //if (currentWidth <= 700) {
    //     finalHeight = currentHeight-350
    // }


    if (currentWidth => 1100) {
          finalHeight = currentHeight-100
       } if (currentWidth <= 600) {
        finalHeight = currentHeight-350
    }
       
    //    else if (currentWidth <= 600) {
    //     finalHeight = currentHeight-440
    //     alert("Ok")
    //  } 
       
  return (
    <div>
        
        <SimpleImageSlider
        width={currentWidth-17}
        height={finalHeight}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay= {true}
      />  

    </div>
  )
}

export default HeroSlider