import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import User from './Components/User';




const Home = ()=>  <h2>I am a Home function Update</h2>




function NavBar(){
  return <h1> You are a Navbar</h1>
}

function Tick() {

  
  
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
 
}




function App() {
  let name = 'rmee';
  let imgurl = ''
  

  if(name=='rm'){
    imgurl = 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-m146bzbgins/gallery/in-galaxy-m14-5g-4gb-ram-sm-m146bzbgins-537266362?$2052_1641_PNG$'

  }
  else{
imgurl = 'https://m.media-amazon.com/images/I/810-BAwpF9L._SX679_.jpg'
  }


  return (
    <>
    {/* {
      name =='ram' ? <>Ram name </> : <>its not ram guest name</>
      } */}
    
    {/* <NavBar/>
    <Tick/>
    <p style = {{color:'red',backgroundColor:'yellow'}}> hello para</p> */}
    {/* <h1>{2+2}   {eval("12+44*78")}</h1> */}
    <h1 className= 'cls'> Hello World {name} </h1>

    {/* <img  src={imgurl} height={"200px"}  /> */}

<User name = 'ram' age = {23}/>
<User name = 'shyam'  age = {24}/>
<User name = 'sonam' age = {43} />
<User name = 'sonali' age = {33} />
<User name = 'rakes' age = {65} />

    {/* <hr /> */}
    </>
  );
}

export default App;
