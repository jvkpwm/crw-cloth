import React from "react";
import {connect} from "react-redux";
import "./header.styles.scss";
import {Link} from "react-router-dom";

import {ReactComponent as Logo} from "../../assets/crown.svg";
import {firebaseAuth} from "../../firebase/firebase.utils";


const Header = ({currentUser}) => {
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

            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps)(Header)