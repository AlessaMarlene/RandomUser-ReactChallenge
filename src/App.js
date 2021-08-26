import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import UsersGrid from "./Components/UsersGrid/UsersGrid";
import UserDescription from "./Components/UserDescription/UserDescription";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact component={UsersGrid} path="/users" />
                <Route exact component={UserDescription} path="/users/:email" />
                <Redirect to="/users" />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
