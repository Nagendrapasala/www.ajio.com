import React from 'react'
import "./style.css"
export const Display = ({image,title,price,Brand,offer}) => {
  return (
    <div className='product'>
        <img src={image} alt={title}></img>
        <h2>{Brand}</h2>
        <h4>{title}</h4>
        <div>
            <p><span>₹</span>{(price*offer)/100}</p>
            <p className='Striked'>₹{price}</p><span>({offer}%)</span>
        </div>
        <p className='savings'><span>Saved ₹</span>{price-(price*offer)/100}</p>
    </div>
  )
}
