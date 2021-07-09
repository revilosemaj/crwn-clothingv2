import React, { useState } from 'react'
import { connect } from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';
import {
    SignUpContainer,
    SignUpTitle
} from './sign-up.styles'

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName : '',
        email : '',
        password : '',
        confirmPassword : ''
    });
    const { displayName, email, password, confirmPassword } = userCredentials;
    
    const handleChange = event => {
        const { name, value } = event.target;

        setUserCredentials({ ...userCredentials, [name] : value })
    }

    const handleSubmit = event => {
        event.preventDefault()

        if(password !== confirmPassword) {
            alert("Passwords don't match.");
            return;
        }

        signUpStart({ email, password, displayName })
    }
    
    return (
        <SignUpContainer>
            <SignUpTitle>I do not have account</SignUpTitle>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput 
                    type="text"
                    name="displayName"
                    label="Display Name"
                    handleChange={handleChange}
                    value={displayName}
                    required
                    />
                <FormInput 
                    type="email"
                    name="email"
                    label="Email"
                    handleChange={handleChange}
                    value={email}
                    required
                    />
                <FormInput 
                    type="password"
                    name="password"
                    label="Password"
                    handleChange={handleChange}
                    value={password}
                    required
                    />
                <FormInput 
                    type="password"
                    name="confirmPassword"
                    label="Confirm Password"
                    handleChange={handleChange}
                    value={confirmPassword}
                    required
                    />
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </SignUpContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart : userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null,mapDispatchToProps)(SignUp)
