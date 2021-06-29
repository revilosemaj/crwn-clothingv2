import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IQYDLIprVuaBhvj846fuA1KSPeUG1DBRIKJfM8utUZtDSNkvvpHawuyDxP7V6kBzjfK5eQ4nFXRw8ThVsQJy9Ot00MCXxMm44';

    const onToken = token => {
        console.log(token);
        alert("Payment Successful")
    }
    return (
        <StripeCheckout 
        name="CRWN Clothingv2 Ltd." // the pop-in header title
        description={`Your total is $${price}`} // the pop-in header subtitle
        image="https://media.cakeresume.com/image/upload/v1583666969/t3lkfca2d6uu7mzn9ize.png" // the pop-in header image (default none)
        label="Pay Now" // text inside the Stripe button
        panelLabel="Pay Now" // prepended to the amount in the bottom pay button
        amount={priceForStripe} // cents
        stripeKey={publishableKey}
        // Note: Enabling either address option will give the user the ability to
        // fill out both. Addresses are sent as a second parameter in the token callback.
        shippingAddress
        billingAddress
        // Note: enabling both zipCode checks and billing or shipping address will
        // cause zipCheck to be pulled from billing address (set to shipping if none provided).
        token={onToken} // submit callback
        />
    )
}

export default StripeCheckoutButton
