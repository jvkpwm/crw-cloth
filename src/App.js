import React from "react";
import './App.css';
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import {ShopPage} from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SingInAndSignUpPage from "./pages/signin/signin-and-signup.component";
import {firebaseAuth} from "./firebase/firebase.utils";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null,
        }
    }

    componentDidMount() {
        firebaseAuth.onAuthStateChanged( user => {
            this.setState({
                currentUser: user
            });
            console.log(user)
        })
    }

    componentWillUnmount() {

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
