import React from "react";
import styled from "styled-components/macro";
import withReveal from "react-reveal/withReveal";
import Fade from "react-reveal/Fade";

import RemindMeProject from "./RemindMeProject";
import WeatherProject from "./WeatherProject";
import MyLingualProject from "./MyLingualProject";
import BPISProject from "./BPISProject";
import PortalProject from "./PortalProject";
import SDCToolsProject from "./SDCToolsProject";
import ParticlesProject from "./ParticlesProject";
import ImageProcessing from "./ImageProcessing";
import FileSystem from "./FileSystem";

const Title = withReveal(
  styled.h1`
    margin-top: 250px;
    font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont,
      "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: bold;
    font-size: 80px;
    /* background: -webkit-linear-gradient(-60deg, #fc00ff -20%, #00dbde 100%); */
    /* background: -webkit-linear-gradient(-60deg, #ff758c 20%, #ff7eb3 70%); */
    /* background: -webkit-linear-gradient(-60deg, #f77062 20%, #fe5196 70%); */
    /* background: -webkit-linear-gradient(-60deg, #ff7e5f 20%, #feb47b 70%); */
    background: ${(props) => {
      if (props.section === "s1") {
        return "-webkit-linear-gradient(-60deg, #fc00ff -20%, #00dbde 100%)";
      } else if (props.section === "s2") {
        return "-webkit-linear-gradient(-60deg, #ff7e5f 20%, #feb47b 70%)";
      } else if (props.section === "s3") {
        return "-webkit-linear-gradient(-60deg, #ff758c 20%, #ff7eb3 70%)";
      }
    }};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    /* iPhone X */
    @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
      font-size: 85px;
    }

    @media screen and (max-width: 330px) {
      font-size: 72px;
    }
  `,
  <Fade bottom duration={2000} />
);

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function Projects() {
  return (
    <React.Fragment>
      <GridContainer id="projects">
        <Title section={"s1"}>Personal Projects</Title>
        <RemindMeProject></RemindMeProject>
        <WeatherProject></WeatherProject>
        <Title section={"s2"}>Work Projects</Title>
        <MyLingualProject></MyLingualProject>
        <BPISProject></BPISProject>
        <Title section={"s3"}>School Projects</Title>
        <PortalProject></PortalProject>
        <SDCToolsProject></SDCToolsProject>
        <ParticlesProject></ParticlesProject>
        <ImageProcessing></ImageProcessing>
        <FileSystem></FileSystem>
      </GridContainer>
    </React.Fragment>
  );
}
