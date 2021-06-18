import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import './header.styles.scss'

const mapStateToProps = state => ({
        currentUser : state.user.currentUser
})

const Header = ({ currentUser }) => {
    console.log(currentUser)
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/shop">CONTACT</Link>
                {
                    currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    : <Link to="/signin">SIGN IN</Link>
                }
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Header)
