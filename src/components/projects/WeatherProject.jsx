import React from "react";
import styled from "styled-components/macro";
import withReveal from "react-reveal/withReveal";
import Fade from "react-reveal/Fade";

import p1 from "../../assets/img/weather-1.PNG";
import p2 from "../../assets/img/weather-2.PNG";
import p3 from "../../assets/img/weather-3.gif";
import github from "../../assets/img/github-icon.svg";

const Container = styled.div`
  margin-top: 200px;
  /* display: flex;
  width: 1000px; */
  display: grid;
  grid-template-columns: 35% auto;
  grid-gap: 3%;
  @media (max-width: 834px) {
    grid-template-columns: 1fr;
    /* flex-flow: column-reverse; */
  }
`;

const Text = withReveal(
  styled.div`
    font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    /* width: 400px; */
    /* margin-right: 50px; */
    text-align: justify;
    h1 {
      font-weight: bold;
      font-size: 50px;
      display: inline;
      /* background: -webkit-linear-gradient(-60deg, #ff7071 0%, #ff6aa0 100%); */
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
    /* width: 650px; */
    height: auto;
    display: flex;
    justify-content: space-between;
    /* align-items: ; */
    img {
      position: relative;
      transition: 0.5s ease;
      border-radius: 22px;
      align-self: flex-start;
    }
    img:nth-child(1) {
      width: 25%;
      box-shadow: 0px 0px 35px rgba(250, 254, 255, 0.3);
      transform: skew(0deg, -6deg);
    }
    img:nth-child(2) {
      top: -30px;
      width: 35%;
      box-shadow: 0px 0px 35px #2a2b2b;
      /* transform: scale(1.2); */
    }
    img:nth-child(3) {
      top: 20px;
      width: 30%;
      box-shadow: 15px 10px 100px rgba(139, 181, 207, 0.3);
      /* -moz-transform: skew(0deg, -12deg);
      -webkit-transform: skew(0deg, -12deg);
      -o-transform: skew(0deg, -12deg);
      -ms-transform: skew(0deg, -12deg); */
      transform: skew(0deg, 10deg);
    }
    img:hover {
      transform: scale(1.3);
      z-index: 9999;
    }
    @media (max-width: 834px) {
      margin-top: 40px;
      width: 90vw;
      img:nth-child(1) {
        display: none;
      }
      img:nth-child(2) {
        width: 50%;
      }
      img:nth-child(3) {
        width: 42%;
      }
      img:hover {
        transform: none;
      }
    }
  `,
  <Fade bottom duration={2000} />
);

export default function Project() {
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
        <a href="https://github.com/dennismarks/Clima" target="_blank">
          <img src={github} alt="" />
        </a>
      </Text>
      <ImgContainer>
        <img src={p1} alt="" />
        <img src={p3} alt="" />
        <img src={p2} alt="" />

        {/* <a href={reminder} target="_blank">
          <img src={reminder} alt="reminder" />
        </a> */}
      </ImgContainer>
    </Container>
  );
}
