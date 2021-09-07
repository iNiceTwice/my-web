import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"
import "../public/css/main.css"
import "../public/css/utils.css"
import "../public/css/spinner.css"
import App from "./components/App"

ReactDOM.hydrate(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.querySelector("#root")
 )