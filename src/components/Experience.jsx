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
    @media (max-width: 834px) {
      grid-template-columns: 1fr;
    }
    h3 {
      font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
        "Helvetica Neue", sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #aaa;
      margin-top: 12px;
      font-weight: bold;
      font-size: 18px;
      -webkit-hyphens: auto;
      -moz-hyphens: auto;
      -ms-hyphens: auto;
      hyphens: auto;
    }
  `,
  <Fade bottom duration={2000} />
);

const Title = styled.h1`
  margin-left: -2px;
  display: inline-block;
  font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  background: -webkit-linear-gradient(-60deg, #95ffd0, #50a7c2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 834px) {
    font-size: 62px;
  }
  @media screen and (max-width: 330px) {
    /* font-size: 73px; */
  }
`;

export default function Experience() {
  return (
    <div id="experience">
      <GridContainer>
        <Title>Experience</Title>
        <div></div>
        <h3>
          Currently on 16 month PEY and will be beginning the 4th year of
          Computer Science at the University of Toronto in September 2021.
        </h3>
      </GridContainer>
      {json.positions.map((p, index) => (
        <ExperienceInstance key={index} position={p}></ExperienceInstance>
      ))}
    </div>
  );
}
