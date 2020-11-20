import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import ForgotPassword from "./components/ForgotPasswordPage";
import ResetPassword from "./components/ResetPasswordPage";


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

                    <Route exact path="/password/reset/*">
                        <ResetPassword/>
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}
