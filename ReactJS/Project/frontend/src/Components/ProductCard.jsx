import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({elem}) => {
  return (
    <>
    <div className="card p-3 m-2" style={{width: "18rem"}}>
<img className="card-img-top" src={elem.image} height= "200px"  width="200px" alt="Card image cap" />
<div className="card-body">
<h5 className="card-title">{elem.title}</h5>
<Link to= {"/productdetails/"+elem.id} >Product Details</Link>
</div>
</div>
    </>
  )
}

export default ProductCard