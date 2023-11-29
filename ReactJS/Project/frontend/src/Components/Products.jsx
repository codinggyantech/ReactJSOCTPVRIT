import React from 'react'
import ProductCard from './ProductCard'

const Products = ({data}) => {
console.log(data)
  return (
    <>
    {data.map(elem=><ProductCard elem = {elem} />)}
    
    </>
  )
}

export default Products