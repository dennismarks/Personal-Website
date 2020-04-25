import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import styled from "styled-components/macro";
import withReveal from "react-reveal/withReveal";
import Fade from "react-reveal/Fade";

import p from "../../assets/img/weather/weather-images.png";
import p3 from "../../assets/img/weather/weather-3.gif";
import github from "../../assets/img/github-icon.svg";

const Container = styled.div`
  margin-top: 200px;
  display: grid;
  grid-template-columns: 35% auto;
  grid-gap: 3%;
  @media (max-width: 834px) {
    grid-template-columns: 1fr;
  }
`;

const Text = withReveal(
  styled.div`
    font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    text-align: justify;
    h1 {
      font-weight: bold;
      font-size: 50px;
      display: inline;
      background: -webkit-linear-gradient(-60deg, #fc00ff -40%, #00dbde 140%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h2 {
      margin-top: 32px;
      font-weight: bold;
      font-size: 32px;
    }
    h3 {
      color: #aaa;
      margin-top: 12px;
      font-weight: bold;
      font-size: 18px;
      -webkit-hyphens: auto;
      -moz-hyphens: auto;
      -ms-hyphens: auto;
      hyphens: auto;
    }
    img {
      margin-top: 32px;
      width: 45px;
    }
    @media (max-width: 834px) {
      width: 90vw;
      margin-right: 0;
      margin-top: 60px;
    }
    @media screen and (max-width: 330px) {
      h3 {
        font-size: 16px;
      }
    }
  `,
  <Fade bottom duration={2000} />
);

const ImgContainer = withReveal(
  styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    img {
      position: relative;
      width: 100%;
      transition: 0.5s ease;
      margin-bottom: 5px;
    }
    img:hover {
      transform: scale(1.3);
    }
    @media (max-width: 834px) {
      img {
        width: 100%;
      }
      img:hover {
        transform: none;
      }
    }
  `,
  <Fade bottom duration={2000} />
);

const Button = styled.button`
  color: #2997ff;
  background-color: transparent;
  font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 17px;
  border: 0;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    outline: 0;
  }
  @media (max-width: 834px) {
    position: relative;
    float: left;
  }
`;

const HiddenImages = styled.div`
  margin-top: 32px;
  background-color: #1a1a1a;
  h1 {
    font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-weight: bold;
    font-size: 32px;
    color: white;
    margin: 24px 0 6px 0;
  }
  img {
    width: 100%;
    border-radius: 12px;
  }
`;

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div>
        <Modal.Body style={{ backgroundColor: "#1a1a1a" }}>
          <HiddenImages>
            <img src={p3} alt="" />
          </HiddenImages>
        </Modal.Body>
        <Modal.Footer
          style={{
            backgroundColor: "#1a1a1a",
            border: "none",
            borderRadius: "0px",
          }}
        >
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        <div
          style={{
            height: "70px",
            backgroundColor: "#1a1a1a",
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px",
          }}
        ></div>
      </div>
    </Modal>
  );
}

export default function Project() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Container lang="en">
      <Text>
        <h1>Weather Me</h1>
        <h3>
          Weather Me will provide you with the current weather conditions in
          your city and locations all around the world.
        </h3>
        <h2>Specs</h2>
        <h3>
          Core Location, URL Session, JSON, JSON Decoder, UIView Animate,
          Storyboard and Programmatic Interface
        </h3>
        <a
          href="https://github.com/dennismarks/Clima"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="" />
        </a>
      </Text>
      <ImgContainer>
        <a href={p} target="_blank" rel="noopener noreferrer">
          <img src={p} alt="" />
        </a>
        <Button onClick={() => setModalShow(true)}>Show More</Button>
        <MyVerticallyCenteredModal
          style={{
            border: "none",
            borderRadius: "0px",
            backgroundColor: "transparent",
          }}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </ImgContainer>
    </Container>
  );
}
