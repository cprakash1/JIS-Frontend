import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "./Redux/store";
import GlobalProvider from "./Context/GlobalState";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <PersistGate persistor={persistor}>
              <Provider store={store}>
                <GlobalProvider>
                  <App />
                </GlobalProvider>
              </Provider>
            </PersistGate>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
