import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Shop from './component/Shop/Shop.jsx';
import Home from './component/Layout/Home.jsx';
import Inventory from './component/Inventory/Inventory.jsx';
import Orders from './component/Orders/Orders.jsx';
import About from './component/About/About.jsx';
import Login from './component/Login/Login.jsx';
import cartProductsLoader from './loaders/cartProductsorder.js';

const router =createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>, 
    children:[
      {
        path:'/',
        element: <Shop></Shop>
      },
      {
        path:'orders',
        element:<Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path:'inventory',
        element:<Inventory></Inventory>
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'login',
        element:<Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
