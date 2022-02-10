import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import FooterContainer from "./components/Footer/FooterContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Page from "./pages/Page";

function App() {
  return (
    <Router basename="/cattle-market-information-center">
      <HeaderContainer />
      <Page />
      <FooterContainer />
    </Router>
  );
}

export default App;
