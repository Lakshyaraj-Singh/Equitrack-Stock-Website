import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar"
import { Home } from "./components/home/Home"
import { About } from "./components/about/About"
import { Routes, Route } from 'react-router-dom';
import { Product } from "./components/products/Product";
import { Pricing } from "./components/pricing/Pricing";
import { Support } from "./components/support/Support";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { Signup } from "./components/signup/Signup";
import { Login } from "./components/signup/Login";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <h1>Page Not Found</h1>,
      children: ([
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />
        },

        {
          path: "/product",
          element: <Product />
        },

        {
          path: "/pricing",
          element: <Pricing />
        },
        {
          path: "/support",
          element: <Support />
        },
        {
          path:"/signup",
          element:<Signup />
        },
        {
          path:"/login",
          element:<Login />
        }
      ])
    }
  ])

  return <RouterProvider router={router}></RouterProvider>


}

export default App
