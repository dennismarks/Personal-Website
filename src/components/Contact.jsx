import React, { useState } from "react";
import styled from "styled-components/macro";
import withReveal from "react-reveal/withReveal";
import Fade from "react-reveal/Fade";

import github from "../assets/img/github-icon.svg";
import linkedin from "../assets/img/linkedin-icon.svg";

const Title = withReveal(
  styled.h1`
    margin-top: 250px;
    margin-left: -2px;
    display: inline-block;
    font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont,
      "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 80px;
    background: -webkit-linear-gradient(-60deg, #ff5f6d, #ffc371);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 834px) {
      margin-top: 200px;
      font-size: 67px;
    }
  `,
  <Fade bottom duration={2000} />
);

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  h3 {
    color: #aaa;
    margin-top: 20px;
    font-weight: bold;
    font-size: 15px;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    display: ${(props) => (props.show ? "block" : "none")};
  }
`;

const Icons = withReveal(
  styled.div`
    img {
      margin-right: 20px;
      width: 45px;
      transition: 0.4s ease-in-out;
    }
    img:hover {
      transform: scale(1.06);
    }

    @media (max-width: 834px) {
      img:hover {
        transform: none;
      }
    }
  `,
  <Fade bottom duration={2000} />
);

const Button = styled.button`
  position: relative;
  bottom: -2px;
  width: 115px;
  height: 45px;
  border-radius: 22px;
  background-color: #0071e3;
  border: 0;
  &:hover {
    background-color: rgb(10, 120, 218);
    cursor: pointer;
  }
  a {
    text-decoration: none;
    font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 17px;
    font-weight: normal;
    color: white;
    letter-spacing: -0.01em;
  }
`;

export default function Contact() {
  const [show, setShow] = useState(false);

  return (
    <div id="about">
      <Title>Contact</Title>
      <Container lang="en" show={show}>
        <Icons>
          <a
            href="https://github.com/dennismarks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/dennismarkovchin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="" />
          </a>
          <Button onClick={() => setShow(true)}>
            <a href="mailto:dennismarkovchin@gmail.com">Send Email</a>
          </Button>
        </Icons>
        <h3>
          Didn't work?
          <br />
          <br />
          You can email me at <br /> dennismarkovchin@gmail.com
        </h3>
      </Container>
    </div>
  );
}
