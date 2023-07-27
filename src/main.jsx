import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './Contex/ProductData.jsx'
import { FilterContextProvider } from './Contex/FilterData.jsx'
import {CartContextProvider} from "./Contex/CartData.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppProvider> 
      <FilterContextProvider>
        <CartContextProvider> 
          <App />
        </CartContextProvider>
      </FilterContextProvider>
      </AppProvider>
  </BrowserRouter>,
)
