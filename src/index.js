import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./container/Home/Home";
import rootReducer from "./redux/reducer/globalReducer";

const storeRedux = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={storeRedux}>
    <Home />
  </Provider>
);
