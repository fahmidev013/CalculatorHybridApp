import React from "react";
import { Provider } from "react-redux";

import { store } from "./src/store/";

import Home from "./src/screens/Home/";

const CalculatorApp = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default CalculatorApp;
