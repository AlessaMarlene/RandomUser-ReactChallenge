import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { UsersProvider } from "./Context/Context";

ReactDOM.render(
    <UsersProvider>
        <App />
    </UsersProvider>,
    document.getElementById("root")
);
