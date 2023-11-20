import logo from './logo.svg';
import './App.css';
import React from 'react';

import Navbar from './components/Navbar';

import Main from './components/Main'
import Footer from './components/Footer';


// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, Class Component</h1>;
//   }
// }


// function WelcomeFun(){
//   return <h1>heloo with wlcome functions</h1>

// }

  // const WelcomeFun =()=>  <h1>heloo with wlcome functions Updated</h1>






function App() {
  return (
    <>
    <h1>Hello React</h1>
    
    
    <Navbar></Navbar>
    <Main></Main>
    <Footer></Footer>

    
    </>
  );
}

export default App;
