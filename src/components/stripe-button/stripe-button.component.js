import React from "react";

import StripeCheckout from "react-stripe-checkout";
import {createStructuredSelector} from "reselect";
import {selectCartTotal} from "../../redux/cart/cart.selectors";

const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51KJEyZDHowQAB6UTtF4dvZAtvBaBikH6ttUCJ40tDIMgRlxJupi1afk3xyuLIIKeQ4T2f3UL9okQT726bwz649dq00ofsabvqA";

    const onToken = token => {
        console.log(token);
        alert("Payment successful")
    }

    return (
        <StripeCheckout
            label={"Pay Now"}
            name={"CRWM cloth sarl"}
            image={"https://svgshare.com/i/CUz.svg"}
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel={"Pay Now"}
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}




export default StripeCheckoutButton;