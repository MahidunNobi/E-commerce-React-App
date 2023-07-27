import React from "react";
import { createContext, useReducer, useContext, useEffect} from "react";
import { useProductData } from "./ProductData";
import { FilterReducer } from "../Componants/ReducerFunction/FilterReducer";



const FilterContext = createContext()
const initialState ={
    all_Products: [],
    filter_Products: [],
    sort_By: "highest-price",
    filter: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
        price: 600000,
        maxPrice: 0,
        minPrice: 0
    }
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
// Filter Function 
const FilterFunction =(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    dispatch({
        type: "Set-Search-Text",
        payload: {name, value}
    })
    
}
// Clear Filter Function 
const ClearFilterFunction=()=>{
    dispatch({
        type: 'Clear-Filters'
    })
}


useEffect(()=>{    
    dispatch({type: "Set-Filter-Data"})
    dispatch({type: "Set-Data-By-Sort-Value"});
}, [state.sort_By, state.filter])

useEffect(()=>{
    dispatch({
        type: "Load-All-Products",
        payload: products
    })
    
}, [products])
    return <FilterContext.Provider value={{...state, sorting, FilterFunction, ClearFilterFunction }}> {children} </FilterContext.Provider>

}



const getFilterContext =()=>{
    return useContext(FilterContext)
}
export {getFilterContext, FilterContextProvider}