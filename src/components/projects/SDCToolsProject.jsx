import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

import styled from "styled-components/macro";
import withReveal from "react-reveal/withReveal";
import Fade from "react-reveal/Fade";

import main from "../../assets/img/sdc-tools/sdc-1.png";
import getDraft from "../../assets/img/sdc-tools/sdc-2.png";
import draft from "../../assets/img/sdc-tools/sdc-3.png";

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
    font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont,
      "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
    font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont,
      "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    text-align: justify;
    line-height: 1.3;
    h1 {
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
      transition: 0.8s ease-in-out;
      border-radius: 12px;
      box-shadow: 0px 5px 50px rgba(250, 254, 255, 0.25);
      width: 100%;
      margin: 74px 0 22px 0;
    }
    img:nth-child(1) {
      display: inline-flex;
    }
    img:hover {
      transform: scale(1.6);
      z-index: 9999;
    }
    @media (max-width: 834px) {
      width: 90vw;
      img {
        width: 100%;
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

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div>
        <Modal.Body
          style={{
            backgroundColor: "#1a1a1a",
          }}
        >
          <HiddenImages>
            <h1>Get Draft Page</h1>
            <img src={getDraft} alt="" />
            <h1>Draft Page</h1>
            <img src={draft} alt="" />
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

export default function PortalProject() {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const imagesToBePreloaded = [getDraft, draft];
    imagesToBePreloaded.forEach((image) => {
      new Image().src = image;
    });
  });

  return (
    <Container lang="en">
      <Text>
        <h1>SDC Tools</h1>
        <br />
        <i>In cooperation with Cancer Care Ontario</i>
        <h3>
          SDCTools is a react-enabled app to assist and reinforce accuracy and
          correctness for practitioners to record patient data through an
          easy-to-use and intuitive process.
          <br />
          <br />
          The application serves as a middleman to redesign "pen and paper"
          structure of the SDC form for versatility and minimization of human
          errors.
          <br />
          <br />
          - ability to choose the form and patient to conduct your diagnosis
          <br />
          - upload the SDC form in XML type to be saved in database to be used
          instantly and available for everyone else
          <br />
          - XML to JSON parser
          <br />
          - save modified form for future references
          <br />- access a previously saved form
        </h3>
        <h2>Specs</h2>
        <h3>
          React, Bootstrap, Styled Components, Axios, Express, Mongodb, Mongoose
        </h3>
        <h2>My Role</h2>
        <h3>
          Front End lead.
          <br />
          <br />
          App was fully designed by me using Figma app. Components were build
          with css using React Styled Components library. <br />
          Initial project set up and Patient CRUD endpoints.
          <br />
          <br />
          <i>Done in a group of 6.</i>
        </h3>
        <a
          href="https://github.com/dennismarks/SDC-Tools"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="" />
        </a>
      </Text>
      <ImgContainer>
        <img src={main} alt="" />
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
