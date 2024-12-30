import { createContext, useState } from "react";
import SHOP_DATA from '../shop-data.json'

// as the actual value you want to access
export const ProductContext = createContext({
    products: []
    // setproducts: () => null
})

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState(SHOP_DATA)
    const value = {products} 

    return (<ProductContext.Provider value={value}>{children}</ProductContext.Provider>)
}   