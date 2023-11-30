import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data,setData] = useState()

const apicall  =  async ()=>{
     
  let res = await axios.get('https://fakestoreapi.com/products')
  setData(res.data)
  
}

  useEffect(()=>{


apicall()

     return () => {
      console.log('This will be logged on unmount');
    };

  },[])

  return (
    <div className="container">

      <h1 className='text-primary text-center my-5'>All Products</h1>
     <div className='d-flex flex-wrap justify-content-center'>
     {data &&  <Products data= {data}  /> }
     </div>
      
     

 
    </div>
  );
}

export default App;
