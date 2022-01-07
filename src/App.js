// import logo from './logo.svg';
import './App.css';
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import {ShopPage} from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
            <Routes>
                <Route  path={"/home"} element={<HomePage/>}/>
                <Route path={"/shop"} element={<ShopPage/>} />
            </Routes>
        </Router>
      {/*<HomePage/>*/}
    </div>
  );
}

export default App;
