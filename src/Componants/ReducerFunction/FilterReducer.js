export const FilterReducer = (state, action) => {
    switch (action.type){
        case "Load-All-Products":
            return {...state,all_Products: [...action.payload], filter_Products: [...action.payload]}
            ;

        case "Sort-Products":
            return{
                ...state,
                sort_By: action.userSortByData
            };
        
        case  "Set-Data-By-Sort-Value":
            let userSortByData

            if (state.sort_By === "lowest-price") {
                userSortByData = action.payload.sort((a, b)=> a.price - b.price)
            }            
            else if (state.sort_By === "highest-price") {
                userSortByData = action.payload.sort((a, b)=> b.price - a.price)
            }
             else if (state.sort_By === "a-z") {
                userSortByData = action.payload.sort((a, b)=> a.name.localeCompare(b.name))
            }
            else if (state.sort_By === "z-a") {
                userSortByData = action.payload.sort((a, b)=> b.name.localeCompare(a.name))
            }
            return {
                ...state,
                filter_Products: userSortByData
            }
            
        
        default: 
        return {...state}
    }
    
}