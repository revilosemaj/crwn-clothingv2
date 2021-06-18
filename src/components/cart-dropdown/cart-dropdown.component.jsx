import React from 'react'
import { connect } from 'react-redux'
import { selectorCartItems } from '../../redux/cart/cart.selectors.js'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss'

const mapStateToProps = state => ({
    cartItems : selectorCartItems(state)
})

const CartDropdown = ({ cartItems }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items" >
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                }
            </div>
            <CustomButton >go to checkout</CustomButton>
        </div>
    )
}

export default connect(mapStateToProps)(CartDropdown)