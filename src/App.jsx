import React from 'react'
import Signin from './Pages/signin';
import Home from './Pages/home';
import Cart from './Pages/cart';
import ProductDetails from './Pages/productDetails';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'


function App() {
  const router=createBrowserRouter(
    [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/signin',
        element: <Signin/>
      },
      {
        path: '/productDetails',
        element: <ProductDetails/>
      },
      {
        path: '/cart',
        element: <Cart/>
      }
    ]
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
