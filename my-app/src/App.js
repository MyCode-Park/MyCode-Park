import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./Components/Data_Handler/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "./App.css";
// components
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import BuyerForm from "./Components/UserSelection/BuyerForm";
import NewUser from "./Components/UserSelection/NewUser";
import Payment from "./Components/Payment/Payment";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/ContactUs/Contact__us";
import Shop from "./Components/Shop/Shop";
// Admin dash components
import Main from "./Components/AdminDash/main/Main";
import Navbar from "./Components/AdminDash/navbar/Navbar";
import Sidebar from "./Components/AdminDash/sidebar/Sidebar";
import buyde from "./Components/AdminDash/sidebar/buyde";

const promise = loadStripe(
  "pk_test_51JZWkYSJDgFE9F4p11CTEevAgJCmKbpliP3rMbGuXjlYki2pWOzQSmMA1Oa48YHebKY9g00wbidzfHybXcm971J8003ipolZCj"
);

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

  // Admin dash Navigation

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    // BEM
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
            <Footer />
          </Route>
          <Route path="/admin">
            <div className="container">
              <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
              <Main />
              <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
            </div>
          </Route>
          <Route path="/buyde">
            <div className="container">
              <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
              <buyde />
              <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
            </div>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>{" "}
          <Route path="/shop">
            <Header />
            <Shop />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path="/buyerForm">
            <BuyerForm />
            <Footer />
          </Route>
          <Route path="/contact">
            <Header />
            <ContactUs />
            <Footer />
          </Route>
          <Route path="/newUser">
            <NewUser />
            <Footer />
          </Route>
          {/* the / "forward" router should always be the bottom to avoid errors */}
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
