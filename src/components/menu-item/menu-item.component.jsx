import React from 'react'
import { withRouter } from 'react-router-dom'
import {
    MenuItemContainer,
    BackgroundImage,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
} from './menu-item.styles'

const MenuItem = ({ title, imageUrl, linkUrl, history, match, ...props }) => {
    return (
        <MenuItemContainer {...props}
            onClick={() => history.push(`${match.url}${linkUrl}`)}     
            >
            <BackgroundImage
                style={{ backgroundImage: `url(${imageUrl})`}} 
            />
            <ContentContainer>
                <ContentTitle>{title.toUpperCase()}</ContentTitle>
                <ContentSubtitle>SHOP NOW</ContentSubtitle>
            </ContentContainer>
        </MenuItemContainer>
    )
}

export default withRouter(MenuItem)
