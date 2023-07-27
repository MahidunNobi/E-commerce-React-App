export const FilterReducer = (state, action) => {
    
    switch (action.type){
        case "Load-All-Products":
            const priceArr = action.payload.map(pro=> pro.price)
            const maxPrice = Math.max(...priceArr)
            
            return {...state,
                all_Products: [...action.payload], 
                filter_Products: [...action.payload],
                filter: {...state.filter, price: maxPrice, maxPrice: maxPrice}
            }
            ;

        case "Sort-Products":
            return{
                ...state,
                sort_By: action.userSortByData
            };
        
        case  "Set-Data-By-Sort-Value":
            const {filter_Products} = state
            let userSortByData

            if (state.sort_By === "lowest-price") {
                userSortByData = filter_Products.sort((a, b)=> a.price - b.price)
            }            
            else if (state.sort_By === "highest-price") {
                userSortByData = filter_Products.sort((a, b)=> b.price - a.price)
            }
             else if (state.sort_By === "a-z") {
                userSortByData = filter_Products.sort((a, b)=> a.name.localeCompare(b.name))
            }
            else if (state.sort_By === "z-a") {
                userSortByData = filter_Products.sort((a, b)=> b.name.localeCompare(a.name))
            }
            return {
                ...state,
                filter_Products: userSortByData
            };
        
        case "Set-Search-Text":
        const {name , value} = action.payload
        return{
            ...state,
            filter: {
                ...state.filter,
                [name]: value
            }
        };
        case "Set-Filter-Data":
            const {text, category, company, color, price} = state.filter;
            let temp_products = [...state.all_Products]
            if(text){
                temp_products = temp_products.filter(pro=> pro.name.toLowerCase().includes(text))
            }
            if(category){
                category === "all" ? temp_products = temp_products
                                    :
                                    temp_products = temp_products.filter(pro => pro.category === category)
            }
            if(company !== "all"){
                temp_products = temp_products.filter(pro => pro.company === company)
            }
            if(color !== "all"){
                temp_products = temp_products.filter(pro => pro.colors.includes(color))
            }
            if(price){
                temp_products = temp_products.filter(pro=> pro.price <= price)
            }
            
            return {
                ...state,            
                filter_Products: temp_products
            };
        case "Clear-Filters": 
         return {
            ...state,
            filter: {
                text: "",
                category: "all",
                company: "all",
                color: "all",
                price: state.filter.maxPrice,
                maxPrice: state.filter.maxPrice,
                minPrice: 0
            }
         }
        
            
        
        default: 
        return {...state}
    }
    
}