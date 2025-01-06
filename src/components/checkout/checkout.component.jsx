import { CartDropdownContext } from '../../contexts/cart-dropdown.context'
import { useContext } from 'react'
import './checkout.style.scss'
import CheckoutItems from '../checkout-items/checkout-itme.componet'

const Checkout = () => {
    const { cartItems, cartTotal} = useContext(CartDropdownContext)

    return (
        <div className="checkout-container">
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>

            {cartItems.map((cartItem) => (
                <CheckoutItems key={cartItem.id } cartItem={cartItem} />
            ))}

            <span className='total'>Total: ${cartTotal}</span>
        </div>
    )
}

export default Checkout;