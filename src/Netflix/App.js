import React from "react";
//components
import Signup from "./Components/Forms/Signup";
import Login from "./Components/Forms/Login";
import Movies from "./Components/Movies/Movies";
import Save from "./Components/Movies/Components/Save";
import Home from "./Components/Home/Home";
import Acount from "./Components/Movies/Components/Acount";
//css
import "./App.css";
//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//custom router
import PrivetRoute from "./Components/Context/PrivetRoute";
//context
import { AuthProvider } from "./Components/Context/Context";

const App = () => {
  document.title = "Netflix";
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
             <PrivetRoute path="/movies" component={Movies} /> {/*its a privet route to logout and redirect to login page */}
            <Route path="/save" component={Save} />
            <Route path="/acount" component={Acount} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
