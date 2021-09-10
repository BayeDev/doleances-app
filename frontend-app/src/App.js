import Navbar from "./Components/Navbar";
import LoginPage from "./Components/LoginPage"
import RegisterPage from "./Components/RegisterPage"
import HomePage from "./Components/HomePage";



//import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <div>
     <Navbar />
     <Switch>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/register">
                    <RegisterPage />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
                
        </Switch> 
    </div>
    </BrowserRouter>
  );
}

export default App;
