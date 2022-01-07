// import logo from './logo.svg';
import './App.css';
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import {ShopPage} from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SingInAndSignUpPage from "./pages/signin/signin-and-signup.component";

function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
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

export default App;
