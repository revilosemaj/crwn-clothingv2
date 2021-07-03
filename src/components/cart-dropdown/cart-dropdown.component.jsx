import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import  { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors.js'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { toggleCartHidden } from '../../redux/cart/cart.actions.js'
import {
    CartDropdownContainer,
    CartItemsContainer,
    EmptyMessageContainer
} from './cart-dropdown.styles'

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
})

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ? 
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                }
            </CartItemsContainer>
            <CustomButton inverted onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }}>go to checkout</CustomButton>
        </CartDropdownContainer>
    )
}

export default withRouter(connect(mapStateToProps)(CartDropdown))