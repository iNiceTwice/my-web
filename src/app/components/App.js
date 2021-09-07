import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import main from "../pages/main"
import portfolio from "../pages/portfolio"
import Add from "./Add"

const App = () => {
    return ( 
        <div >
            <Switch>
                <Route exact path="/" component={main}/>
                <Route exact path="/portfolio" component={portfolio}/>
                <Route exact path="/add" component={Add}/>
                <Route />
            </Switch>
        </div>
     );
}
 
export default App;