import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

import styled from "styled-components/macro";
import withReveal from "react-reveal/withReveal";
import Fade from "react-reveal/Fade";

import main from "../../assets/img/particles.gif";

import github from "../../assets/img/github-icon.svg";

const Container = styled.div`
  margin-top: 125px;
  display: grid;
  grid-template-columns: 35% auto;
  grid-gap: 3%;
  @media (max-width: 834px) {
    grid-template-columns: 1fr;
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

const Text = withReveal(
  styled.div`
    font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
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
      /* color: #888; */
    }
    h5 {
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
      h3 {
        font-size: 16px;
      }
    }
  `,
  <Fade bottom duration={2000} />
);

const ImgContainer = withReveal(
  styled.div`
    margin-top: 214px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 60%;
      transition: 0.8s ease-in-out;
      border-radius: 12px;
      box-shadow: 0px 5px 50px rgba(250, 254, 255, 0.25);
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

export default function PortalProject() {
  return (
    <Container lang="en">
      <Text>
        <h1>Parallelized Particles Simulation</h1>
        <h3>
          Particles interact with each other by repelling one another only when
          closer than a cutoff distance highlighted around one particle in grey.
        </h3>
        <h2>Specs</h2>
        <h3>C, OpenMP, MPI, SciNet</h3>
        <h2>My Role</h2>
        <h3>
          Implemented an efficient serial O(n) solution given a naive O(n
          <sup>2</sup>) implementation. After, wrote a parallel version of this
          O(n) code for shared memory architectures using OpenMP (Open
          Multi-Processing) and MPI (Message Passing Interface).
          <br />
          <br />
          <i>Done in a group of 2.</i>
        </h3>
        <br />
        <h5>Distribution of the code is upon request by employer only.</h5>
      </Text>
      <ImgContainer>
        <img src={main} alt="" />
      </ImgContainer>
    </Container>
  );
}
