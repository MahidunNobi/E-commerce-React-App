import React from 'react'
import { useReducer } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { CartReducer } from '../Componants/ReducerFunction/CartReducer'

const CartContext = createContext()

const InitialState={
    cart: [],
    total_item: "",
    total_amount: "",
    shipping_fee: 500
}



const CartContextProvider =({children})=>{
    
    const [state, dispatch] = useReducer(CartReducer, InitialState)
    
// Add to Cart Function
    const AddToCart =(id, color, itemCount, singleProductData)=>{
        dispatch({
            type: "Add-To-Cart",
            payload: {id, color, itemCount, singleProductData}
        })
    }
//  Product Quantity Increament Function
    const quantityIncrement = (id)=>{
        dispatch({
            type: "Increment-Quantity",
            id: id
        })
    }
//  Product Quantity Decrement Function
    const quantityDicrement = (id)=>{
        dispatch({
            type: "Decrement-Quantity",
            id: id
        })
    }
//  Delete Item Function
    const deleteItem = (id)=>{
        dispatch({
            type: "Delete-Item",
            id
        })
    }

return <CartContext.Provider value={{...state, AddToCart, quantityIncrement, quantityDicrement, deleteItem}}> 

        {children}
    </CartContext.Provider>
}

const useCartContext=()=>{
    return useContext(CartContext)
}

export {CartContextProvider, useCartContext, CartContext}