import { createContext, useEffect } from "react";

const AppContext = createContext()

const AppProvider = ({children})=>{

    useEffect(()=>{
        const ApiLink= "https://api.pujakaitem.com/api/products"

        fetch("https://api.pujakaitem.com/api/products")
        .then(res =>res.json())
        .then(json => console.log(json))

    }, [])

    return <AppContext.Provider value={"OKJKJFKD"} > {children} </AppContext.Provider>
}

export {AppProvider}

