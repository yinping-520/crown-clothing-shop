import './checkout-item-style.scss'
import { CartDropdownContext } from '../../contexts/cart-dropdown.context'
import { useContext } from 'react'

const CheckoutItems = ({cartItem}) => {
    const { imageUrl, name, quantity, price } = cartItem
    const {removeCartItem, clearItemFromCart, addItemToCart } = useContext(CartDropdownContext)
    const clearItemHander = () => {
        clearItemFromCart(cartItem)
    }
    const addItemHandler = () => addItemToCart(cartItem) 
    const removeItemHandler = () => removeCartItem(cartItem)

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>
                    &#10094;
                </div>
                
                {quantity}
                <div className='arrow' onClick={addItemHandler}>
                    &#10095;
                </div>
                </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemHander}>&#10005;</div>
        </div>
    )
}

export default CheckoutItems