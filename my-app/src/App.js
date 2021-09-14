import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./Components/Data_Handler/StateProvider";

import "./App.css";
// components
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import BuyerForm from "./Components/UserSelection/BuyerForm";
import NewUser from "./Components/UserSelection/NewUser";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // This will only run when the app components loads
    auth.onAuthStateChanged((authUser) => {
      console.log("the user", authUser);

      if (authUser) {
        // user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/buyerForm">
            <BuyerForm />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          {/* the / "forward" router should always be the bottom to avoid errors */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
