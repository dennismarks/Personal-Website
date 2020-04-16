import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components/macro";

const FadeInMove = keyframes`
  0% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
    opacity: 0;
  }
  33.3% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
    opacity: 1;
  }
  66.6% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
    opacity: 0
  }
  100% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
    opacity: 1
  }
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Main = styled.h1`
  z-index: -1;
  position: relative;
  margin-left: -12px;
  margin-top: 40px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: bold;
  font-size: ${(props) => {
    if (props.text === "Develop") {
      return "276px";
    } else if (props.text === "Design") {
      return "272px";
    }
  }};
  text-transform: uppercase;
  background: ${(props) => {
    if (props.text === "Develop") {
      return "-webkit-linear-gradient(-60deg, #fc00ff, #00dbde)";
    } else if (props.text === "Design") {
      return "-webkit-linear-gradient(-60deg, #43cea2, #2c75bf)";
    }
  }};
  margin-bottom: ${(props) => {
    if (props.text === "Develop") {
      return "-5px";
    }
  }};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${FadeInMove} 7s ease-in-out both;
  -webkit-animation: ${FadeInMove} 7s ease-in-out both;

  @media (max-width: 1230px) {
    margin-left: -8px;
    margin-top: 70px;
    margin-bottom: ${(props) => {
      if (props.text === "Develop") {
        return "82px";
      } else {
        return "82px";
      }
    }};
    font-size: ${(props) => {
      if (props.text === "Design") {
        return "20.4vw";
      } else {
        return "20.4vw";
      }
    }};
  }

  @media (max-width: 834px) {
    margin-left: -4px;
    font-weight: bolder;
    font-size: ${(props) => {
      if (props.text === "Design") {
        return "20.7vw";
      } else {
        return "20.7vw";
      }
    }};
  }
`;

const Quate = styled.h1`
  z-index: -9999;
  width: 430px;
  margin-top: 50px;
  font-family: "SF Pro Display";
  font-weight: bold;
  font-size: 42px;
  color: #f3f3f3;
  animation: ${FadeIn} 3s ease-in-out both;
  -webkit-animation: ${FadeIn} 3s ease-in-out both;
  animation-delay: 1s;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
  @media (max-width: 834px) {
    margin-top: 0px;
    font-size: 28px;
    width: 230px;
    text-align: start;
    hyphens: none;
  }
`;

export default function Slogans() {
  const [text, setText] = useState("Design");

  useEffect(() => {
    setTimeout(() => {
      if (text === "Design") setText("Develop");
    }, 4888);
  });

  return (
    <React.Fragment>
      <Main text={text}>{text}</Main>
      <Quate>
        "Design is not just what it looks like and feels like. Design is how it
        works."
      </Quate>
    </React.Fragment>
  );
}
