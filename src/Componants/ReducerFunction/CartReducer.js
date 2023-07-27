export const CartReducer =(state, action)=>{
    if(action.type === "Add-To-Cart"){
        const {id, color, itemCount, singleProductData } = action.payload       

        const newProduct = {
            id: id + color,
            rawId: id,
            name: singleProductData.name,
            image: singleProductData.image[0],
            color,
            itemCount,
            price: singleProductData.price,            
            stock: singleProductData.stock
        }
        // IF the products is already exixts than don't add it again just let the user Know that
        const alreadyExixts = state.cart.filter(pro => pro.id === newProduct.id)
        if(alreadyExixts.length >=1){
            alert("The product is already on your cart! Please Check");
            return {
                ...state
            }
        }

        return { 
            ...state,
            cart: [...state.cart, newProduct]
        }
    }
    if(action.type === "Increment-Quantity"){
        const finalCart = state.cart.map(product => 
                                product.id === action.id ? 
                                {
                                    ...product, 
                                    itemCount: product.itemCount !== product.stock ?
                                                product.itemCount + 1 :
                                                product.itemCount
                                } 
                                :
                                product)  
                                        
        return {
            ...state,
            cart: finalCart         
        }
    }
    if(action.type === "Decrement-Quantity"){
        const finalCart = state.cart.map(product=> 
                                product.id===action.id ?
                                {
                                ...product, itemCount: product.itemCount > 1 ?               product.itemCount-1
                                :
                                product.itemCount
                                }                                
                                :
                                product
                                        )
        return{
            ...state,
            cart: finalCart
        }
    }
    if(action.type === "Delete-Item"){

        const finalCart = state.cart.filter(product => product.id !== action.id)
        return{
            ...state,
            cart: finalCart
        }
    }

    return state
}