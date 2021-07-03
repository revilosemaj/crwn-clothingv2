import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors.js'
import { toggleCartHidden } from '../../redux/cart/cart.actions.js'
import {
    CartIconContainer,
    ShoppingIcon,
    ItemCountContainer
} from './cart-icon.styles'

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
        itemCount : selectCartItemsCount
})

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
)

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
