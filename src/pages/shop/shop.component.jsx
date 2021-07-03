import React from 'react'
import { Route } from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.actions.js'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import './shop.styles.scss'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const mapDispatchToProps = dispatch => ({
    updateCollections : collectionMap => dispatch(updateCollections(collectionMap))
})

class ShopPage extends React.Component {
    state = {
        loading : true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections')

        collectionRef.get().then(snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionMap)
            this.setState({ loading : false })
        })
    }

    render(){
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className="shop-page">
                <Route 
                    exact 
                    path={`${match.path}`} 
                    render={props => <CollectionOverviewWithSpinner isLoading={loading} {...props} /> } 
                    />
                <Route 
                    exact 
                    path={`${match.path}/:collectionId`}  
                    render={props => <CollectionPageWithSpinner isLoading={loading} {...props} /> } 
                    />
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(ShopPage)
