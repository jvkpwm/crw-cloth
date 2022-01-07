// import logo from './logo.svg';
import './App.css';
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route  path={"/home"} element={<HomePage/>}/>
            </Routes>
        </Router>
      {/*<HomePage/>*/}
    </div>
  );
}

export default App;
