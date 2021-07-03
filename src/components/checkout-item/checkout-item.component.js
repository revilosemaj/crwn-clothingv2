import React from 'react'
import { connect } from 'react-redux'
import { clearItem, addItem, removeItem } from '../../redux/cart/cart.actions'
import {
    CheckoutItemContainer,
    ImageContainer,
    ItemName,
    ItemPrice,
    ItemQuantity,
    QuantityContainer,
    LeftArrow,
    RightArrow,
    RemoveButton
} from './checkout-item.styles'

const mapDispatchToProps = dispatch => ({
    clearItem : item => dispatch(clearItem(item)),
    addItem : item => dispatch(addItem(item)),
    removeItem : item => dispatch(removeItem(item))
})

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, quantity, price, imageUrl } = cartItem
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="item" />
            </ImageContainer>
            <ItemName>{name}</ItemName>
            <QuantityContainer>
                <LeftArrow onClick={() => removeItem(cartItem)}>&#10094;</LeftArrow>
                    <ItemQuantity>{quantity}</ItemQuantity>
                <RightArrow onClick={() => addItem(cartItem)}>&#10095;</RightArrow>
            </QuantityContainer>
            <ItemPrice>{price}</ItemPrice>
            <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default connect(null, mapDispatchToProps)(CheckoutItem)
