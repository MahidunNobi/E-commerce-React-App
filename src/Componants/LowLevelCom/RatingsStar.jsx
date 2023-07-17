import React from 'react'
import {BsStarHalf, BsStar, BsStarFill} from "react-icons/bs"

const RatingsStar = ({stars}) => {

let starsArray = []

const Number = Math.floor(stars)
// Ratting Bottom Line Numbers Stars
for(let i =0; i<Number; i++){
  starsArray.push(<BsStarFill key={i} />)
}
// Ratting Decimals Star
const decimal = (stars - Number).toFixed(1)
decimal > 0.5 ? starsArray.push(<BsStarHalf key={9}/>) : starsArray.push(<BsStar key={10} />)

// Ratting Not rated Stars
const extraNum = Math.floor(5 - stars) 
if(extraNum >=1){
  for(let i=0; i<extraNum; i++){
    starsArray.push(<BsStar key={i+10} />)
  }
}
  return (
    <div className="stars inline-flex text-lg space-x-1" style={{color: "#FF9529"}}>  

    {starsArray}

    </div>
  )
}

export default RatingsStar