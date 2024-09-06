import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import GetStarted from './pages/GetStarted.jsx';
import Login from './pages/Login.jsx';
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  }, 
  {
    path: "/GetStarted",
    element: <GetStarted/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
