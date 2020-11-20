// import './App.css';
// import LoginPage from "./components/LoginPage";
// import React from "react";
//
// function App() {
//     return (
//         <div className="App">
//
//         </div>
//     );
// }
//
// export default App;

import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import ForgotPassword from "./components/ForgotPasswordPage";


export default function BasicExample() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <LoginPage/>
                    </Route>

                    <Route exact path="/forgotPassword">
                        <ForgotPassword/>
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}
