import React from "react";
import styled from "styled-components/macro";
import withReveal from "react-reveal/withReveal";
import Fade from "react-reveal/Fade";

const GridContainer = withReveal(
  styled.div`
    display: grid;
    grid-template-columns: 35% auto 50%;
    margin-top: 125px;
    @media (max-width: 834px) {
      grid-template-columns: 1fr;
    }
  `,
  <Fade bottom duration={2000} />
);

const Main = styled.div`
  max-width: 400px;
  h1 {
    font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 44px;
    color: #f3f3f3;
    margin-top: 6px;
  }
  h2 {
    font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    background: -webkit-linear-gradient(-60deg, #95ffd0, #50a7c2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.45;
  }
  h3 {
    margin-top: 6px;
    margin-bottom: 0px;
    font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-weight: medium;
    font-size: 17px;
    color: #888;
  }
  @media (max-width: 834px) {
    h1,
    h3 {
      margin-top: 0px;
    }
  }
`;

const Info = styled.div`
  text-align: justify;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
  h1,
  h2 {
    font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    color: #aaa;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.3;
    word-wrap: break-word;
    margin-top: 30px;
  @media (max-width: 834px) {
    margin-top: 32px;
  }
`;

export default function ExperienceInstance(props) {
  const { title, company, date, info, tools } = props.position;

  return (
    <GridContainer lang="en">
      <Main>
        <h2>{company}</h2>
        <h1>{title}</h1>
        <h3>{date}</h3>
      </Main>
      <div></div>
      <Info>
        <h1>{info}</h1>
        <h2 style={{ textAlign: "left" }}>{tools}</h2>
      </Info>
    </GridContainer>
  );
}
