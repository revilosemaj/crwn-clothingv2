import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import  { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors.js'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { toggleCartHidden } from '../../redux/cart/cart.actions.js'
import './cart-dropdown.styles.scss'

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
})

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items" >
                {
                    cartItems.length ? 
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    : <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }}>go to checkout</CustomButton>
        </div>
    )
}

export default withRouter(connect(mapStateToProps)(CartDropdown))