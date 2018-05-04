import React from 'react'

export default function Product(props) {
  return(
    <div>
      <h1>{props.product.name}</h1>
      <h2>${props.product.price}</h2>
      <img src={props.product.image} alt='product visual' width='200px'/>
    </div>
  )
}