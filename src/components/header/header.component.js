import React from "react";
import {connect} from "react-redux";
import "./header.styles.scss";
import {Link} from "react-router-dom";

import {ReactComponent as Logo} from "../../assets/crown.svg";
import {firebaseAuth} from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {createStructuredSelector} from "reselect";
import {selectCartHidden} from "../../redux/cart/cart.selectors";



const Header = ({currentUser, hidden}) => {
    return (
        <div className={"header"}>
            <Link className={"logo-container"} to={"/"}>
                <Logo className={"logo"}/>
            </Link>
            <div className={"options"}>
                <Link className={"option"} to={"/shop"}>
                    SHOP
                </Link>
                <Link className={"option"} to={"/contact"}>
                    CONTACT
                </Link>
                {currentUser ?
                    <div className={"option"}
                         onClick={() => firebaseAuth.signOut()}>
                        Sign Out </div>
                    :
                    <Link className={"option"} to={"/signin"}>
                    Sign In
                    </Link>}
                <CartIcon/>

            </div>
            {
                hidden ? null : <CartDropdown/>
            }

        </div>
    )
}

const mapStateToProps =  createStructuredSelector({
        currentUser: selectCurrentUser,
        hidden: selectCartHidden
    })


export default connect(mapStateToProps)(Header)