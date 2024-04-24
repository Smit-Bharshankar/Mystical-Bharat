import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider , createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Explore from './Components/Explore/Explore.jsx'
import Plans from './Components/Plans/Plans.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
<Route path="/" element={<App/>} >
<Route path="" element={<Home/>} />
<Route  path="explore" element={<Explore/>} />
<Route path ="plans" element={<Plans/>} />

</Route>
 
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
