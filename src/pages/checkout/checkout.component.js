import React from "react";


import "./checkout.styles.scss";
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import {connect} from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";


const CheckoutPage = ({cartItems, total}) => {


    return (
        <div className={"checkout-page"}>
            <div className={"checkout-header"}>
                <div className={"header-block"}>
                    <span>Product</span>
                </div>
                <div className={"header-block"}>
                    <span>description</span>
                </div>
                <div className={"header-block"}>
                    <span>quantity</span>
                </div>
                <div className={"header-block"}>
                    <span>price</span>
                </div>
                <div className={"header-block"}>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(
                    cartItem =>
                        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                )
            }
            <div className={"total"}>TOTAL: ${total}</div>
            <div className={"test-warning"}>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - exp: 02/2022 cvv 123
            </div>
            <StripeCheckoutButton price={total}/>
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

// const mapDispatchToProps = (dispatch) => {
//
//     return {
//         removeItem: () => dispatch()
//     }
// }

export default connect(mapStateToProps)(CheckoutPage);