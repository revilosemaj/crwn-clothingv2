import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCurrentUser } from '../../redux/user/user.actions';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import './sign-up.styles.scss'

const mapDispatchToProps = dispatch => ({
    setCurrentUser : (user) => dispatch(setCurrentUser(user))
})

class SignUp extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmPassword : ''
        }
    }
    
    unsubscribeFromAuth = null

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name] : value })
    }

    handleSubmit = async event => {
        const { setCurrentUser } = this.props
        event.preventDefault()

        const { displayName, email, password, confirmPassword } = this.state

        if(password !== confirmPassword) {
            alert("Passwords don't match.");
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, { displayName })

            setCurrentUser({ ...user, displayName })
            this.setState({ 
                displayName : '',
                email : '',
                password : '',
                confirmPassword : ''
            })
            alert("Account has been successfully registered")
        } catch (error) {
            console.error(error.message)
        }
    }
    
    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className="sign-up">
                <h2 className="title">I do not have account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="text"
                        name="displayName"
                        label="Display Name"
                        handleChange={this.handleChange}
                        value={displayName}
                        required
                        />
                    <FormInput 
                        type="email"
                        name="email"
                        label="Email"
                        handleChange={this.handleChange}
                        value={email}
                        required
                        />
                    <FormInput 
                        type="password"
                        name="password"
                        label="Password"
                        handleChange={this.handleChange}
                        value={password}
                        required
                        />
                    <FormInput 
                        type="password"
                        name="confirmPassword"
                        label="Confirm Password"
                        handleChange={this.handleChange}
                        value={confirmPassword}
                        required
                        />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default connect(null,mapDispatchToProps)(SignUp)
