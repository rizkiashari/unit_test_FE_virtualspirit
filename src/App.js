import React from "react";
import { Provider } from "react-redux";
import GeneralRoute from "./routes";
import store from "./store";

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <GeneralRoute />
      </Provider>
    </React.Fragment>
  );
}

export default App;
