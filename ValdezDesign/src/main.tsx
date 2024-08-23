import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import NavBar from "./sections/NavBar"
import About from "./sections/About"
import Saves from "./pages/Saves"
import Home from "./pages/Home"
import Hero from "./sections/Hero"
import DetailsProducts from "./sections/DetailsProducts"
import Footer from "./sections/Footer"
import Products from "./pages/Products"
import "./index.css"

const router = createBrowserRouter([
    {
        path:"/",
        element: [<NavBar />, <Footer />],
        children: [
          {
            path:"",
            element: <Home />,
            children: [
              {
                path:"",
                element: [<Hero />,<DetailsProducts /> ]
              }
            ]
          },
          {
            path:"productos/:categoria",
            element: <Products />,
            children: []
          },
          {
            path:"guardados",
            element: <Saves />,
            children: []
          },
          {
            path:"acerca_de",
            element: <About />
          }
        ]
      }

])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
