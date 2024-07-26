import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NavBar from './pages/NavBar'
import About from './pages/About'
import Saves from './pages/Saves'
import Home from './pages/Home'
import Hero from './pages/Hero'
import ProductsHome from './pages/ProductsHome'
import Footer from './pages/Footer'
import './index.css'
const router = createBrowserRouter([
    {
        path:'/',
        element: [<NavBar />, <Footer />],
        children: [
          {
            path:'',
            element: <Home />,
            children: [
              {
                path:'',
                element: [<Hero />, <ProductsHome />]
              }
            ]
          },
          {
            path:'guardados',
            element: <Saves />,
            children: []
          },
          {
            path:'acerca_de',
            element: <About />
          }
        ]
      }

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
