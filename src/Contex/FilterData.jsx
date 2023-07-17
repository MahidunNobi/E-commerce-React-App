import React from "react";
import { createContext, useReducer, useContext, useEffect} from "react";
import { useProductData } from "./ProductData";
import { FilterReducer } from "../Componants/ReducerFunction/FilterReducer";



const FilterContext = createContext()
const initialState ={
    all_Products: [],
    filter_Products: [],
    sort_By: "lowest-price"
}



const FilterContextProvider =({children})=>{
const [state, dispatch] = useReducer(FilterReducer, initialState)

    let {products} = useProductData()

    
// Sort Function 
const sorting=(e)=>{
    const userSortByData = e.target.value;
    dispatch({
        type: "Sort-Products",
        userSortByData: userSortByData,
        payload: products
    })
}

useEffect(()=>{
    
    dispatch({
        type: "Set-Data-By-Sort-Value",
        payload: [...products]
    })

}, [state.sort_By])

useEffect(()=>{
    dispatch({
        type: "Load-All-Products",
        payload: products
    })
    
}, [products])
    return <FilterContext.Provider value={{...state, sorting}}> {children} </FilterContext.Provider>

}



const getFilterContext =()=>{
    return useContext(FilterContext)
}
export {getFilterContext, FilterContextProvider}