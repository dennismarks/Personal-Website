import React from "react";
import styled from "styled-components/macro";
import withReveal from "react-reveal/withReveal";
import Fade from "react-reveal/Fade";

import main from "../../assets/img/image-processing.PNG";

const Container = styled.div`
  margin-top: 125px;
  display: grid;
  grid-template-columns: 35% auto;
  grid-gap: 3%;
  @media (max-width: 834px) {
    grid-template-columns: 1fr;
  }
`;

const Text = withReveal(
  styled.div`
    font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont,
      "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    text-align: justify;
    line-height: 1.3;
    h1 {
      text-align: left;
      font-weight: bold;
      font-size: 54px;
      display: inline-block;
      background: -webkit-linear-gradient(-60deg, #ff758c 20%, #ff7eb3 70%);
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
    h4 {
      margin-top: 12px;
      font-size: 20px;
    }
    h5 {
      font-size: 16px;
      font-style: italic;
    }
    img {
      margin-top: 32px;
      width: 45px;
    }
    @media (max-width: 834px) {
      width: 90vw;
      margin-right: 0;
      margin-top: 30px;
    }
    @media screen and (max-width: 330px) {
      h3,
      h5 {
        font-size: 16px;
      }
    }
  `,
  <Fade bottom duration={2000} />
);

const ImgContainer = withReveal(
  styled.div`
    margin-top: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      transition: 0.8s ease-in-out;
      border-radius: 12px;
      box-shadow: 0px 0px 50px rgba(255, 255, 255, 0.15);
    }
    img:hover {
      transform: scale(1.2);
      z-index: 9999;
    }
    @media (max-width: 834px) {
      margin-top: 0px;
      img {
        width: 100%;
        height: 100%;
        margin: 0px;
        margin-bottom: 15px;
      }
      img:hover {
        transform: none;
      }
    }
  `,
  <Fade bottom duration={2000} />
);

export default function ImageProcessing() {
  return (
    <Container lang="en">
      <Text>
        <h1>Image Processing</h1>
        <h3>
          Implemented a program which, given an image, it applies a discrete
          Laplacian filter to produce a new image.
          <br />
          <br />A Laplacian filter is an edge detector used to compute the
          second derivatives of an image, measuring the rate at which the first
          der
          <br />
          <br />
          This is useful in image processing to emphasize edges within an image.
        </h3>
        <h2>Specs</h2>
        <h3>C, Pthreads, SciNet</h3>
        <h2>My Role</h2>
        <h3>
          Wrote a data-parallel implementation using Pthreads. Where each thread
          is assigned a chunk of the data to process.
          <br />
          <br />
          <i>Done in a group of 2.</i>
        </h3>
        <br />
        <h5>Distribution of the code is upon request by employer only.</h5>
        <br />
      </Text>
      <ImgContainer>
        <img src={main} alt="" />
      </ImgContainer>
    </Container>
  );
}
