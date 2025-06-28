import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Navigation from "./Navigation";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}
