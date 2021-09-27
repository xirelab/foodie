// import { StrictMode } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import store from "./store";
import App from "./App";

ReactDOM.render(
  // <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </StrictMode>
  document.getElementById("root")
);
