import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions.js'
import CustomButton from '../custom-button/custom-button.component'
import {
    CollectionItemContainer,
    ImageContainer,
    CollectionFooterContainer,
    CollectionName,
    CollectionPrice

} from './collection-item.styles'

const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
})

const CollectionItem = ({ item,  addItem }) => {
    const { name, price, imageUrl } = item
    return (
        <CollectionItemContainer>
            <ImageContainer 
                style={{ backgroundImage : `url(${imageUrl})`}}
            />
            <CollectionFooterContainer>
                <CollectionName>{ name }</CollectionName>
                <CollectionPrice>{ price }</CollectionPrice>
            </CollectionFooterContainer>
            <CustomButton onClick={() => addItem(item)} inverted>
                Add to cart
            </CustomButton>
        </CollectionItemContainer>
    )
}

export default connect(null, mapDispatchToProps)(CollectionItem)
