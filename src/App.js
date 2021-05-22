import React, { useState, useEffect } from "react";

import NavBar from "./components/NavBar";
import Slogans from "./components/Slogans";
import Experience from "./components/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/Contact";

import styled from "styled-components/macro";
import "./App.css";
import "./index.css";

const Container = styled.div`
  width: 1200px;
  overflow: visible;
  margin: 0 auto;
  @media (max-width: 1230px) {
    width: 90vw;
    margin: 0 auto;
  }
`;

const LoaderContainer = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: "SF Pro Display";
    font-weight: bold;
    opacity: 0;
    position: absolute;
  }
  h2 {
    font-family: "SF Pro Text";
    font-weight: normal;
    opacity: 0;
    position: absolute;
  }
  h3 {
    font-family: "SF Pro Text";
    font-weight: medium;
    opacity: 0;
    position: absolute;
  }
  h4 {
    font-family: "SF Pro Text";
    font-weight: bold;
    opacity: 0;
    position: absolute;
  }
`;

const Loader = styled.div`
  margin: 100px auto;
  font-size: 25px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  -webkit-animation: load5 1.1s infinite ease;
  animation: load5 1.1s infinite ease;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
`;

const BluredHeader = styled.div`
  z-index: 9998;
  height: 60px;
  width: 100vw;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.01);
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
  display: block;
  @media (max-width: 1230px) {
    height: 36px;
  }
  @supports (-moz-appearance: none) {
    background: rgba(0, 0, 0, 0.9);
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (loading) {
        setLoading(false);
      }
    }, 1500);
  });

  if (loading) {
    return (
      <LoaderContainer>
        <Loader></Loader>
        <h1>SF Pro Display</h1>
        <h2>SF Pro Text Normal</h2>
        <h3>SF Pro Text Medium</h3>
        <h4>SF Pro Text Bold</h4>
      </LoaderContainer>
    );
  } else {
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
        <Footer>Copyright © 2021 Dennis Markovchin. All right reserved.</Footer>
      </React.Fragment>
    );
  }
}

export default App;
