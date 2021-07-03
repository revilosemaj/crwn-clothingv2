import styled, { css } from 'styled-components'

const itemStyles = css`
    width:23%;
`

const arrowStyles = css`
    cursor: pointer;
`

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
        width: 100%;
        height: 100%;
    }
`

export const ItemName = styled.span`
    ${itemStyles}
`

export const QuantityContainer = styled.span`
    ${itemStyles}
    display: flex;
`
export const ItemQuantity = styled.span`
    margin:  0 10px;
`

export const ItemPrice = styled.span`
    ${itemStyles}
`

export const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`

export const LeftArrow = styled.div`
    ${arrowStyles}
`

export const RightArrow = styled.div`
    ${arrowStyles}
`