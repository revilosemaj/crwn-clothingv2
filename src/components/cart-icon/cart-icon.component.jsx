import React from 'react'
import { connect } from 'react-redux'
import { selectorCartItemsCount } from '../../redux/cart/cart.selectors.js'
import { toggleCartHidden } from '../../redux/cart/cart.actions.js'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
        itemCount : selectorCartItemsCount(state)
})

const CartIcon = ({ toggleCartHidden, itemCount }) => (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    )

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
