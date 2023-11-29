import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
   

     const {productId} = useParams()

     const [data,setData] = useState()

    const apicall = async()=>{
        
        let res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        setData(res.data)
        console.log(res.data)
     }

     useEffect(  ()=>{
   
      apicall()
   
   
   
        // return () => {
        //     console.log('This will be logged on unmount');
        //   };
   
     },[])

  return (
    <>
 
    {data && <>
    
        <div className="container">
        <div className="row">
            <div className="col-6">
                <img src={data.image} alt="" className='w-100 h-100' />
            </div>
            <div className="col-6">
                <h1>{data.title}</h1>
                <h2>{data.price}</h2>
                <h3>{data.category}</h3>
                <p>{data.description}</p>
            </div>
        </div>
    </div>
    </>}
    </>
  )
}

export default SingleProduct