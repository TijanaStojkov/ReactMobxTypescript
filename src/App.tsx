import React from "react";
import "@fortawesome/fontawesome-free/js/all.js";
import "bootstrap/dist/css/bootstrap.min.css";

import { StoreProvider } from "./stores";

import Auth from "./components/Auth";
import LoginPage from "./components/Pages/Login";

import "./App.css";

function App() {
  return (
    <StoreProvider>
      <LoginPage />
      {/* <Auth /> */}
    </StoreProvider>
  );
}

export default App;
