import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import {
    SignInContainer,
    SignInTitle,
    ButtonsContainer
} from './sign-in.styles'

class SignIn extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email : '',
            password : ''
        }
    }
    
    handleSubmit = async event => {
        event.preventDefault()
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)

            this.setState({ email : '', password : '' })
            alert('Sign In successfully')
        } catch(error){
            console.error(error.message)
        }
        
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name] : value })
    }
    
    render() {
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email"
                        label="Email" 
                        handleChange={this.handleChange}
                        value={this.state.email} 
                        name="email" 
                        required
                        />
                    <FormInput 
                        type="password"
                        label="Password"
                        handleChange={this.handleChange}
                        value={this.state.password} 
                        name="password" 
                        required
                        />
                    <ButtonsContainer>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" 
                            onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn
