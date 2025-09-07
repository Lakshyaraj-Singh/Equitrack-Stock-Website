import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar"
import { Home } from "./components/home/Home";
import{HomeDash} from "./Dashboard/components/HomeDash"
import { About } from "./components/about/About"


import { Product } from "./components/products/Product";
import { Pricing } from "./components/pricing/Pricing";
import { Support } from "./components/support/Support";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import {Getwatchlist} from "./USERAPIS/Loaders/Getwatchlist"
import { Signup } from "./components/signup/Signup";
import { Login } from "./components/signup/Login";
import { Dashboard } from "./Dashboard/components/Dashboard";
import{Summary} from "./Dashboard/components/Summary";
import{Positions} from "./Dashboard/components/Positions";
import{Holdings} from "./Dashboard/components/Holdings";
import{Funds} from "./Dashboard/components/Funds";
import { Orders } from "./Dashboard/components/Orders";
import { TradingProvider } from "./ContextApi";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <h1>Page Not Found</h1>,
      children: ([
        {
          index:true,
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
    },
    {
      path:"/dashboard",
      element:<TradingProvider><HomeDash/></TradingProvider>,
      children:([
        { path:"",
          element:<Dashboard/>,
          loader:Getwatchlist,
          children:([
            {
              index:true,
           
              element:<Summary/>,
            
            },
            {
              path:"orders",
              element:<Orders/>
            },
            {
              path:"holdings",
              element:<Holdings/>
            },
            {
              path:"positions",
              element:<Positions/>
            },
            {
              path:"funds",
              element:<Funds/>
            }
          ])
        }
      ])
    }
  ])

  return <RouterProvider router={router}></RouterProvider>


}

export default App

