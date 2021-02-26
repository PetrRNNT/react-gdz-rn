import React from "react";
import {Switch, Route, Link, Redirect} from "react-router-dom";
import FormPage from "./Routes/FormPage";
import PalettePage from "./Routes/PalettePage";
// import NotFound from "./Routes/NotFound";



const App = () => {
    // const location = useLocation('/');
    return (
        <Switch>
            <Route path="/" exact component={FormPage}/>
            <Route path="/palette" component={PalettePage}/>
        </Switch>

    )
}

export default App;