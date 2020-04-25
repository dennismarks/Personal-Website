import React from "react";

import NavBar from "./components/NavBar";
import Slogans from "./components/Slogans";
import Experience from "./components/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/Contact";

import styled from "styled-components/macro";
import "./App.css";

const Container = styled.div`
  width: 1200px;
  overflow: visible;
  margin: 0 auto;
  @media (max-width: 1230px) {
    width: 90vw;
    margin: 0 auto;
  }
`;

const BluredHeader = styled.div`
  z-index: 9998;
  height: 60px;
  width: 100vw;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.01);
  backdrop-filter: blur(100px);
  display: block;
  @media (max-width: 1230px) {
    height: 36px;
  }
`;

const Footer = styled.div`
  text-align: center;
  color: #6e6e73;
  font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 12px;
  margin-bottom: 14px;
`;

function App() {
  return (
    <React.Fragment>
      <BluredHeader></BluredHeader>
      <Container>
        <NavBar></NavBar>
        <Slogans></Slogans>
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>
        <div style={{ height: "150px" }}></div>
      </Container>
      <Footer>Copyright © 2020 Dennis Markovchin. All right reserved.</Footer>
    </React.Fragment>
  );
}

export default App;
