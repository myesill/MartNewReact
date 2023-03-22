import React from 'react'

function ProductDetails(props) {

  return (<>
  <div>Product Details Page</div>
<div>
    <p>Name:{props.name}</p>
    <p>Description:{props.description}</p>
    <p>Price:{props.price}</p>
     
  
</div>

  </>)
}

export default ProductDetails