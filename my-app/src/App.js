import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// components
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
// import ProductList from "./Components/ProductList/ProductList";
// import DiscoverMore from "./Components/DiscoverMore/DiscoverMore";

function App() {
  return (
    // BEM
    <Router>
      <div>
        <Switch>
          {/* <Header /> */}
          <Route path="/checkout">
            <Header />
            <Checkout />
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
