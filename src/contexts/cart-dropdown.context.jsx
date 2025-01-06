import { createContext, useState, useEffect } from "react";

const addCardItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find((cartItem) => {
        return cartItem.id === productToAdd.id
    })

    if(existingCartItem){
         return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    } 

    return [...cartItems, {...productToAdd, quantity: 1}]
}

const clearItem = (cartItems, cartItemToClear) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id )
    


const removeItem = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => {
        return cartItem.id === itemToRemove.id
    })

    if(existingCartItem.quantity > 1) {
        return cartItems.map((cartItem) => cartItem.id === itemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem)
        
    } else if(itemToRemove.quantity === 1){
         clearItem(cartItems, itemToRemove)
    }
}



export const CartDropdownContext = createContext(
    { isCartOpen: false,
      setIsCartOpen: () => {},
      cartItems: [],
      addItemToCart: () => {},
      cartCount: 0,
      removeCartItem: () => {},
      deleteCartItem: () => {},
      cartTotal: 0
     }
)

export const CartDropdownProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setcartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    const addItemToCart = (productToAdd) => {
        setcartItems(addCardItem(cartItems, productToAdd))
    }

    const removeCartItem = (cartItemToRemove) => {
        setcartItems(removeItem(cartItems, cartItemToRemove))
    }

    const clearItemFromCart = (cartItemToClear) => {
        setcartItems(clearItem(cartItems, cartItemToClear))
    }

    useEffect(() => {
        const newCartCount = cartItems.reduce((accumulator, currentItem) =>  accumulator + currentItem.quantity , 0)
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((accumulator, currentItem) =>  accumulator + (currentItem.quantity * currentItem.price) , 0)
        setCartTotal(newCartTotal)
    }, [cartItems])

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, setcartItems, removeCartItem, clearItemFromCart, cartTotal}

    return (
        <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
    )
}