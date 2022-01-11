import React from "react";
import './App.css';
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import {ShopPage} from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SingInAndSignUpPage from "./pages/signin/signin-and-signup.component";
import {createUserProfileDocument, firebaseAuth} from "./firebase/firebase.utils";
import {onSnapshot} from "firebase/firestore";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null,
        }
    }
    unsubscribeFromAuth = null;
    componentDidMount() {
        this.unsubscribeFromAuth = firebaseAuth.onAuthStateChanged( async user => {
            if (user) {
                const userRef = await createUserProfileDocument(user);
                // console.log(userRef)

                onSnapshot(userRef, snapshot => {
                    console.log("id of snapshot:", snapshot.id)
                    console.log(" data of snapshot", snapshot.data())
                    // const userSnap = await getDoc(userRef);
                    const data = snapshot.data();
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...data
                        }
                    }, () => {
                        console.log("state",this.state);
                    })
                    if (snapshot.exists()){


                    } else {
                        console.log("No snapshot")
                    }
                })


            }

            this.setState({currentUser: user});
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
                    <Header  currentUser={this.state.currentUser} />
                    <Routes>
                        <Route  path={"/"} element={<HomePage/>}/>
                        <Route path={"/shop"} element={<ShopPage/>} />
                        <Route path={"/signin"} element={<SingInAndSignUpPage/>}/>
                    </Routes>
                </Router>
                {/*<HomePage/>*/}
            </div>
        );
    }
}

export default App;
