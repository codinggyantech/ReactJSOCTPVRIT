import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/About';
import Navbar from './Components/Navbar';
import PageNotFound from './Components/PageNotFound';
import Contact from './Components/Contact';
import SingleProduct from './Components/SingleProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/about",
    element: <About/>
  },
  {
    path:"/productdetails/:productId",
    element: <SingleProduct/>
  },
  {
    path: "/contacts/:contactId",
    element: <Contact />,
  },
  {
    path:'*',
    element: <PageNotFound />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
  
  
   <Navbar/>
    <RouterProvider router={router} />
  </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
