import { createSelector } from 'reselect'

const selectorCart = state => state.cart;

export const selectorCartItems = createSelector(
    [selectorCart],
    cart => cart.cartItems
)

export const selectorCartItemsCount = createSelector(
    [selectorCartItems],
    cartItems => cartItems.reduce((accumilator, current) => accumilator + current.quantity, 0)
)