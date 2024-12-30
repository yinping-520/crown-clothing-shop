import './cart-icon.style.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { useContext, UseContext } from 'react'
import { CartDropdownContext } from '../../contexts/cart-dropdown.context'

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartDropdownContext)
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return (
        <div className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon'
            onClick={toggleIsCartOpen}/>
            <span className='item-count'>0</span>
        </div>
    )

}

export default CartIcon