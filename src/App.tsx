import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import FooterContainer from "./components/Footer/FooterContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Page from "./pages/Page";

let scrollRestore = window.history.scrollRestoration;
scrollRestore = "manual";

function App() {
  return (
    <>
      <Router basename="/cattle-market-information-center">
        <div className="flex min-h-screen flex-col">
          <HeaderContainer />
          <Page />
          <FooterContainer />
        </div>
      </Router>
    </>
  );
}
export default App;
