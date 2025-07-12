import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'

function App() {
 let a=createBrowserRouter([

  {
    path:'/',
    element:<Home/>
  }
 
 ])

  return (
    <div>
      <RouterProvider router={a}/>
    </div>
  )
}

export default App
