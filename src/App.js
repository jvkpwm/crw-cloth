import React from "react";
import './App.css';
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import {ShopPage} from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SingInAndSignUpPage from "./pages/signin/signin-and-signup.component";
import {createUserProfileDocument, firebaseAuth} from "./firebase/firebase.utils";
import {onSnapshot} from "firebase/firestore";
import {setCurrentUser} from "./redux/user/user.actions";
import {connect} from "react-redux";

class App extends React.Component {
    // constructor() {
    //     super();
    //
    //     this.state = {
    //         currentUser: null,
    //     }
    // }
    unsubscribeFromAuth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;

        this.unsubscribeFromAuth = firebaseAuth.onAuthStateChanged(async user => {
            if (user) {
                const userRef = await createUserProfileDocument(user);
                // console.log(userRef)

                onSnapshot(userRef, snapshot => {
                    console.log("id of snapshot:", snapshot.id)
                    console.log(" data of snapshot", snapshot.data())
                    // const userSnap = await getDoc(userRef);
                    const data = snapshot.data();
                    setCurrentUser(
                        {
                            id: snapshot.id,
                            ...data
                        }
                    )
                    if (snapshot.exists()) {


                    } else {
                        console.log("No snapshot")
                    }
                })


            }

            setCurrentUser(user);
            // this.setState({
            //     currentUser: user
            // });
            // console.log(user)
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className="App">
                <Router>
                    {/*currentUser={this.state.currentUser}*/}
                    <Header/>
                    <Routes>
                        <Route path={"/"} element={<HomePage/>}/>
                        <Route path={"/shop"} element={<ShopPage/>}/>
                        <Route path={"/signin"} element={<SingInAndSignUpPage/>}/>
                    </Routes>
                </Router>
                {/*<HomePage/>*/}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentUser: user => dispatch(setCurrentUser(user))
    }
}

export default connect(null, mapDispatchToProps)(App);
