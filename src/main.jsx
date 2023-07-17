import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './Contex/ProductData.jsx'
import { FilterContextProvider } from './Contex/FilterData.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppProvider> 
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
      </AppProvider>
  </BrowserRouter>,
)
