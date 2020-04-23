import React from "react";
import styled from "styled-components/macro";
import withReveal from "react-reveal/withReveal";
import Fade from "react-reveal/Fade";

import v1 from "../../assets/img/bpis/bpis-watch-video.gif";
import v2 from "../../assets/img/bpis/bpis-ios-video.gif";
import p1 from "../../assets/img/bpis/bpis-photo-1.png";
import p2 from "../../assets/img/bpis/bpis-photo-2.png";
import p3 from "../../assets/img/bpis/bpis-photo-3.png";

import appstore from "../../assets/img/app-store-icon-2.svg";

const Container = styled.div`
  margin-top: 200px;
  /* display: flex;
  width: 1200px; */
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
    /* width: 400px; */
    /* margin-right: 50px; */
    text-align: justify;
    line-height: 1.3;
    h1 {
      text-align: left;
      font-weight: bold;
      font-size: 48px;
      display: inline-block;
      /* background: -webkit-linear-gradient(-60deg, #fc00ff -20%, #00dbde 90%); */
      /* background: -webkit-linear-gradient(-60deg, #f77062 20%, #fe5196 70%); */
      background: -webkit-linear-gradient(-60deg, #ff7e5f 20%, #feb47b 70%);
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
    /* width: 750px; */
    height: auto;
    margin-top: 130px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    img {
      position: relative;
      transition: 0.5s ease;
      border-radius: 18px;
      box-shadow: 0px 5px 50px rgba(250, 254, 255, 0.14);
      width: 31%;
      margin-bottom: 3%;
    }
    img:nth-child(1),
    img:nth-child(2),
    img:nth-child(4) {
      border-radius: 56px;
      box-shadow: 0px 5px 50px rgba(250, 254, 255, 0.1);
    }
    img:nth-child(4) {
      position: relative;
      top: -225px;
      left: 130px;
    }
    img:hover {
      transform: scale(1.3);
      z-index: 9999;
    }
    @media (max-width: 1230px) {
      img:nth-child(4) {
        /* position: relative; */
        top: -180px;
        left: 15%;
      }
    }
    @media (max-width: 834px) {
      justify-content: space-around;
      margin-top: 0;
      img {
        width: 46%;
        margin: 0px;
        margin-bottom: 15px;
      }
      img:nth-child(1),
      img:nth-child(2),
      img:nth-child(4) {
        border-radius: 36px;
      }
      img:nth-child(4) {
        position: none;
        top: 0;
        left: 0;
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
        <h1>Best Practice in Surgery</h1>
        <h4>MADLab - U of T</h4>
        <h3>
          BPIS is the University of Toronto, Department of Surgery's quality
          improvement program. The goal is to ensure that patients receive high
          quality, person-centred care resulting in optimal patient and clinical
          outcomes.
          <br />
          <br />
          The app serves as a resource for practising for in-training surgeons
          as well as other members of the perioperative team.
        </h3>
        <h2>Specs</h2>
        <h3>
          WK Interface Controller, CocoaPods (FMDB), JSON Decoder, UI Search
          Controller, Passing Data using Delegation
        </h3>
        <h2>My Role</h2>
        <h3>
          Implemented a Wound Care Algorithm and UI for Apple Watch. The tool
          gives Primary Contact Dressing and Cover Dressing recommendations
          based on the Wound Type, Wound Condition and Exudate Level.
          <br />
          <br />
          Updated the iOS UI and the css stylesheets for all Guidelines. Added
          two new Guidelines.
        </h3>
        <a
          href="https://apps.apple.com/ca/app/best-practice-in-surgery/id751595906"
          target="_blank"
        >
          <img src={appstore} alt="" />
        </a>
      </Text>
      <ImgContainer>
        <img src={p1} alt="" />
        <img src={p3} alt="" />
        <img src={v2} alt="" />
        <img src={v1} alt="" />

        {/* <a href={reminder} target="_blank">
          <img src={reminder} alt="reminder" />
        </a> */}
      </ImgContainer>
    </Container>
  );
}
