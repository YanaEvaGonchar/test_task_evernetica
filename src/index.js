import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./redux/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="*" element={ <App /> }>
        </Route>
      </Routes>
   </BrowserRouter>
  </Provider>,
);
