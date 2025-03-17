import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar"
import { Home } from "./components/home/Home"
import {About} from "./components/about/About"
import { Routes, Route } from 'react-router-dom';
import { Product } from "./components/products/Product";
import { Pricing } from "./components/pricing/Pricing";
import { Support } from "./components/support/Support";
function App() {


  return (
    <>
      <Navbar />
    <div className="max-w-screen ">
        <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/about" element={<About/>} />
           <Route path="/product" element={<Product/>} />
           <Route path="/pricing" element={<Pricing/>} />
           <Route path="/support" element={<Support/>} />
           
           
        </Routes>
      
    </div>
      <Footer/>
    </>
  )
}

export default App
