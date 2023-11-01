import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import Login from './Component/Login/Login.jsx';
import Register from './Component/Register/Register.jsx';
import AuthProvaiders from './Component/Provaider/AuthProvaiders.jsx';
import Order from './Component/Orders/Order.jsx';
import PrivetRoute from './Component/PrivetRoute/PrivetRoute.jsx';
import Product from './Component/Product/Product.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/orders",
        element:  <PrivetRoute> <Order/> </PrivetRoute> ,
      },
      {
        path:"/product",
        element:<PrivetRoute> <Product></Product> </PrivetRoute>
      }
    ], 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvaiders>
          <RouterProvider router={router} /> 
      </AuthProvaiders>
  </React.StrictMode>,
)
