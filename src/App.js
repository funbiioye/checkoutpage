import { Stack } from "@chakra-ui/layout";
import React from "react";
import CheckoutPage from "./components/CheckoutPage";
import ShippingMethod from "./components/ShippingMethod";
import PaymentMethod from "./components/PaymentMethod";
import Successful from "./components/Successful";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Stack bg="#E5E5E5" h="100%" w="100vw" maxHeight="100%">
      {/* <CheckoutPage /> */}
      <Router>
        <Switch>
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/shipping" component={ShippingMethod} />
          <Route exact path="/payment" component={PaymentMethod} />
          <Route exact path="/successful" component={Successful} />
        </Switch>
      </Router>
    </Stack>
  );
}

export default App;
