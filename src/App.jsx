
import {Routes, Route} from "react-router-dom"
import './App.css'
import Navbar from "./Componants/Navbar"
import Contact from "./pages/Contact"
import Footer from "./Componants/Footer"
import Home from "./pages/Home"
import Error from "./pages/Error"
import Products from "./pages/Products"
import { useState } from "react"
import Cart from "./pages/Cart"

import { useProductData } from "./Contex/ProductData"
import SingleProduct from "./pages/SingleProduct"
import { getFilterContext } from "./Contex/FilterData"



function App() {

  const [cartItems, setCartItems] = useState([])
  const data = useProductData()



  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home cartItems={cartItems} setCartItems={setCartItems} />}></Route>
          {/* <Route path="cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}></Route>        
          <Route path="contact" element={<Contact cartItems={cartItems} setCartItems={setCartItems} />}></Route>         */}
          <Route path="/SingleProduct/:id" element={<SingleProduct />} />
          <Route path="/products" element={<Products />}/>
          <Route path="*" element={<Error />} ></Route>
        </Routes>
      <Footer />
    </div>
  )
}

export default App