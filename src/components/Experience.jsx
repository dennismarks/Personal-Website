import React from "react";
import styled from "styled-components/macro";
import withReveal from "react-reveal/withReveal";
import Fade from "react-reveal/Fade";

import ExperienceInstance from "./ExperienceInstance";
import json from "../experience.json";

const GridContainer = withReveal(
  styled.div`
    display: grid;
    grid-template-columns: 35% auto 50%;
    margin-top: 250px;

    h3 {
      font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont,
        "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #aaa;
      margin-top: 12px;
      font-weight: bold;
      font-size: 18px;
      text-align: justify;
      -webkit-hyphens: auto;
      -moz-hyphens: auto;
      -ms-hyphens: auto;
      hyphens: auto;
    }

    @media (max-width: 834px) {
      grid-template-columns: 1fr;
    }
  `,
  <Fade bottom duration={2000} />
);

const Title = styled.h1`
  margin-left: -2px;
  display: inline-block;
  font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont,
    "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  background: -webkit-linear-gradient(-60deg, #95ffd0, #50a7c2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 834px) {
    font-size: 63px;
  }
  @media screen and (max-width: 330px) {
    font-size: 56px;
  }
  /* iPhone XS Max */
  @media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
    font-size: 72px;
  }
  /* iPhone XR */
  @media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
    font-size: 72px;
  }
  /* iPhone Xs */
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    font-size: 66px;
  }
  /* iPhone 6/7/8 */
  @media only screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) {
    font-size: 65px;
  }
`;

export default function Experience() {
  return (
    <div>
      <GridContainer>
        <Title id="experience">Experience</Title>
      </GridContainer>
      {json.positions.map((p, index) => (
        <ExperienceInstance key={index} position={p}></ExperienceInstance>
      ))}
    </div>
  );
}
