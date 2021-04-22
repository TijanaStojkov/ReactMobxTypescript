import React from "react";
import { StoreProvider } from "./stores";
import Auth from "./components/Auth";

import "./App.css";

function App() {
  return (
    <StoreProvider>
      <Auth />
    </StoreProvider>
  );
}

export default App;
