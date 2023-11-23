import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const[value,setValue] = useState(0)
 const [login ,setLogin] = useState('false')
//  const [ user,setUsers] = useState([])

useEffect(()=>{
  console.log('use efferect works')


  // return 0;
 },[value])

 if(login == 'false'){
  return <>Please login to continue
  <button onClick={()=>{
    setLogin('true')
  }}>Login Here...</button>
  </>
 }




 


  function clickedfun (){
 console.log('Hello click works')
  }

  const addfunction = ()=>{
    setValue(value+1)
    console.log('add function',value) 
   }
   
   const logout =()=>{
    setLogin('false')
    setValue(0)
   }

  return (
    <>
    <h1> React Hooks</h1>
    <button onClick={logout}> Logout</button>
    <h2>{value}</h2>
    <button  onClick={clickedfun} >clickme</button>

    <button onClick={addfunction} >Add the value</button>


    <button onClick={()=>setValue(value+20)} >Addition</button>
    </>
  );
}

export default App;
