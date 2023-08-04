
import {Routes, Route} from "react-router-dom"
import './App.css'
import Navbar from "./Componants/Navbar"
import Contact from "./pages/Contact"
import Footer from "./Componants/Footer"
import Home from "./pages/Home"
import Error from "./pages/Error"
import Products from "./pages/Products"
import Cart from "./pages/Cart"

import { useProductData } from "./Contex/ProductData"
import SingleProduct from "./pages/SingleProduct"
import { getFilterContext } from "./Contex/FilterData"
import About from "./pages/About"

function App() {

  const data = useProductData()



  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />}></Route>        
          <Route path="contact" element={<Contact  />}></Route>        
          <Route path="products" element={<Products />}/>
          <Route path="SingleProduct/:id" element={<SingleProduct />} />
          
          <Route path="*" element={<Error />} ></Route>
        </Routes>
      <Footer />
    </div>
  )
}

export default App
