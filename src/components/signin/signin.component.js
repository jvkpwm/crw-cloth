import React from "react";

import "./signin.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {googleAuth, firebaseAuth} from "../../firebase/firebase.utils";
import {signInWithEmailAndPassword} from "firebase/auth"



export default class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {email, password} = this.state;

        try{
            await signInWithEmailAndPassword(firebaseAuth, email, password);
            this.setState({email: '', password: ''})

        } catch (e) {
            console.log("Error in sign in with u-p:", e);
        }



    }

    handleChange = (event) => {
        const {value, name} = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className={"sign-in"}>
                <h2>J'ai deja un compte</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput
                        name={"email"}
                        type={"email"}
                        label={"Email"}
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required/>
                    <FormInput
                        name={"password"}
                        type={"password"}
                        value={this.state.password}
                        label={"Password"}
                        handleChange={this.handleChange}
                        required/>

                    <div className={"buttons"}>
                        <CustomButton type={"submit"}>
                            Sign in
                        </CustomButton>
                        <CustomButton type={"button"}
                                      onClick={googleAuth}
                                      isGoogleSignIn={true}>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}