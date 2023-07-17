import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { v4 as uuid } from 'uuid';
import { reducerFunction } from "../Componants/ReducerFunction/ReducerFunction";
import { json } from "react-router-dom";

const Appcontex = createContext()


const AppProvider = ({ children })=>{

    // const[state, dispatch] = useReducer(reducer, initialState)
let initialState =  {
    isLoading: false,
    isError: false,
    products: [],
    featuredProducts: [],
    isSingleProductLoading: false,
    singleProductData: {}
}
    const [allProducts, dispatch] = useReducer(reducerFunction, initialState)

    useEffect(()=> {
        dispatch({ type: "Loading" })

        try {           
            fetch('https://api.pujakaitem.com/api/products')
                    .then(res=>res.json())
                    .then(json=> {
                        dispatch({
                            type: "DataArrived",
                            payLoad: json
                        })
                    })
        } 
        
        catch (error) {
            dispatch({
                type: "DataError"
            })
        }
    },[])

    function getSingleProductData (id){
        dispatch({ type: "SingleLoading" })
        try {
            fetch(`https://api.pujakaitem.com/api/products?id=${id}`)
            .then(res => res.json())
            .then(json=> dispatch({
                type: "SingleProductArrived",
                payLoad: json
            }))
            
            
        } catch (error) {
            dispatch({
                type: "SingleProductDataLoadError",
            })
        }
    }


    

 return <Appcontex.Provider value={{...allProducts, getSingleProductData}}> 
        {children}
 </Appcontex.Provider>
}

const useProductData = () => {
    return useContext(Appcontex)
}

export {Appcontex, AppProvider, useProductData}