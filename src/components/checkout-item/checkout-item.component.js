import React from "react";

import "./checkout-item.styles.scss";
import {connect} from "react-redux";
import {addItem, clearItemFromCart, removeItem} from "../../redux/cart/cart.actions";


const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <div className={"checkout-item"}>
            <div className={"image-container"}>
                <img alt={"item"} src={imageUrl}/>
            </div>
            < span className={"name"}>{name}</span>
            < span className={"quantity"}>
                <div className={"arrow"}
                     onClick={()=> removeItem(cartItem)}
                >
                    &#10094;
                </div>
                <div className={"value"}>{quantity}</div>
                <div className={"arrow"}
                     onClick={() => addItem(cartItem)}
                >
                    &#10095;
                </div>
            </span>
            < span className={"price"}>{price}</span>
            < span className={"remove-button"}
                   onClick={() => clearItem(cartItem)}
            >
                &#10005;
            </span>
            {/*< span className={"name"}>{}</span>*/}
        </div>
    )
}

const mapDispatchToProps = (dipatch) => {
    return {
        clearItem: item => dipatch(clearItemFromCart(item)),
        addItem: item => dipatch(addItem(item)),
        removeItem: item => dipatch(removeItem(item)),
    }
}

export default connect(null, mapDispatchToProps)(CheckoutItem);
