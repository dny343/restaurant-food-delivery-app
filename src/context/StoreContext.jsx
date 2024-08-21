import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

const [cartItem, setCartItem] = useState({});

const addToCart = (itemId) => {
    if(!cartItem[itemId]){
        setCartItem((prev)=>({...prev,[itemId]:1}))
    }
    else{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
}

const removeFromCart = (itemId) => {
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
}


const getTotalcartAmount = () => {
let TotalAmount = 0;

for(const item in cartItem){
    if(cartItem[item]>0){
    let itemInfo = food_list.find((product)=>product._id===item);
    TotalAmount += itemInfo.price* cartItem[item];
}
}
return TotalAmount
}

    const contextValue = {
        food_list,
        cartItem,
        addToCart,
        removeFromCart,
        setCartItem,
        getTotalcartAmount
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider