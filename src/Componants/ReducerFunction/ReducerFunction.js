export const reducerFunction = (state, action)=>{
    switch (action.type){
        case "Loading":
            return{
                ...state,
                isLoading: true
            };
            case "DataArrived":
                const featureData = action.payLoad.filter(p=> p.featured === true)
                return {
                    ...state,
                    isLoading: false,
                    products: action.payLoad,
                    featuredProducts: featureData
                };
                case "DataError": 
                return {
                    ...state,
                    isError: true
                };
                case "SingleLoading":
                    return{
                        ...state,
                        isSingleProductLoading: true
                    }
                case "SingleProductArrived":
                    return{
                        ...state,
                        isSingleProductLoading: false,
                        singleProductData: action.payLoad
                    };
                case "SingleProductDataLoadError":
                    return{
                        isSingleProductLoading: false
                    }
                
            default:
                return state;
    }

}