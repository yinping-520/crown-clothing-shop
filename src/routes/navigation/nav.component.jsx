import { Outlet, Link } from "react-router-dom"
import "./navigation.style.scss"
import { Fragment, useContext } from "react"
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from "../../contexts/user.context"
import { signOutUser } from "../../utils/firebase/firebase.util"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import { CartDropdownContext } from "../../contexts/cart-dropdown.context"

function Navigation() {
  const {currentUser} = useContext(UserContext)
  const {isCartOpen} = useContext(CartDropdownContext)

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            Shop
          </Link>

          {
          currentUser ? (
            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
          ) : 
          <Link className="nav-link" to='/auth'>
            Sign In
          </Link>
          }
         <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )

}

export default Navigation