import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component'

import './collection-overview.styles.scss'

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsForPreview
})

const CollectionOverview = ({ collections }) => (
        <div className="collection-overview">
            {
                collections.map(({ id, ...otherCollectionProps}) => <CollectionPreview key={id} {...otherCollectionProps} />)
            }
        </div>
    )

export default connect(mapStateToProps)(CollectionOverview)
