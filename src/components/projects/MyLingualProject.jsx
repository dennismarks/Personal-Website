import React from "react";
import styled from "styled-components/macro";
import withReveal from "react-reveal/withReveal";
import Fade from "react-reveal/Fade";

import v1 from "../../assets/img/my-lingual/mylingual-video-1.gif";
import v2 from "../../assets/img/my-lingual/mylingual-video-2.gif";
import p1 from "../../assets/img/my-lingual/mylingual-photo-1.PNG";
import p2 from "../../assets/img/my-lingual/mylingual-photo-2.PNG";
import p3 from "../../assets/img/my-lingual/mylingual-photo-3.PNG";
import p4 from "../../assets/img/my-lingual/mylingual-photo-4.PNG";
import appstore from "../../assets/img/app-store-icon-2.svg";

const Container = styled.div`
  margin-top: 125px;
  width: 1200px;
  display: grid;
  grid-template-columns: 35% auto;
  grid-gap: 3%;
  @media (max-width: 834px) {
    grid-template-columns: 1fr;
    flex-flow: column-reverse;
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
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    img {
      position: relative;
      transition: 0.5s ease;
      border-radius: 18px;
      box-shadow: 0px 5px 35px rgba(250, 254, 255, 0.14);
      width: 31%;
      margin-bottom: 3%;
    }
    img:nth-child(1) {
      /* width: 30%; */
      box-shadow: 0px 5px 45px rgba(62, 149, 241, 0.25);
      /* transform: skew(0deg, -6deg); */
    }
    img:nth-child(2) {
      /* width: 30%; */
      /* box-shadow: 0px 0px 35px #2a2b2b; */
    }
    img:nth-child(3) {
      box-shadow: 0px 5px 35px rgba(242, 242, 242, 0.4);
      /* top: 20px; */
      /* width: 30%; */
      /* box-shadow: 0px 5px 35px rgba(250, 254, 255, 0.14); */
      /* -moz-transform: skew(0deg, -12deg);
      -webkit-transform: skew(0deg, -12deg);
      -o-transform: skew(0deg, -12deg);
      -ms-transform: skew(0deg, -12deg); */
      /* transform: skew(0deg, -15deg); */
    }
    img:hover {
      transform: scale(1.3);
      z-index: 9999;
    }
    @media (max-width: 834px) {
      width: 90vw;
      justify-content: space-around;
      img {
        width: 46%;
        margin: 0px;
        margin-bottom: 15px;
        /* box-shadow: 0px 5px 20px rgba(250, 254, 255, 0.14); */
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
        <h1>MyLingual MD</h1>
        <h4>MADLab - U of T</h4>
        <h3>
          MyLingual MD is an educational tool that allows bilingual medical
          students and physicians to learn the medical terminology of a
          non-English language.
          <br />
          <br />
          This comprehensive, freely-accessible app includes the majority of
          topics that most physicians may use during a patient encounter.
        </h3>
        <h2>Specs</h2>
        <h3>
          SQLite Database, CocoaPods (FMDB), JSON Decoder, UI Search Controller,
          Dark User Interface (iOS 13), Passing Data using an Instance Property,
          User Defaults for storing User Settings, Custom Table View Cells
        </h3>
        <h2>My Role</h2>
        <h3>
          The app was fully designed and implemented by me. Except the initial
          database set up.
        </h3>
        <a
          href="https://apps.apple.com/ca/app/u-of-t-mobile/id619483832"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={appstore} alt="" />
        </a>
      </Text>
      <ImgContainer>
        <img src={p1} alt="" />
        <img src={p3} alt="" />
        <img src={p2} alt="" />
        <img src={p4} alt="" />
        <img src={v1} alt="" />
        <img src={v2} alt="" />

        {/* <a href={reminder} target="_blank" rel="noopener noreferrer">
          <img src={reminder} alt="reminder" />
        </a> */}
      </ImgContainer>
    </Container>
  );
}
