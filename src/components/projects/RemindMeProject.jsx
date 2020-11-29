import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import styled from "styled-components/macro";
import withReveal from "react-reveal/withReveal";
import Fade from "react-reveal/Fade";

import reminder from "../../assets/img/reminder/reminder-images.png";
import rv1 from "../../assets/img/reminder/reminder-video-1.gif";
import rv2 from "../../assets/img/reminder/reminder-video-2.gif";
import rv3 from "../../assets/img/reminder/reminder-video-3.gif";

import github from "../../assets/img/github-icon.svg";

const Container = styled.div`
  margin-top: 125px;
  display: grid;
  grid-template-columns: 35% auto;
  grid-gap: 3%;

  @media (max-width: 834px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;

const Text = withReveal(
  styled.div`
    font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont,
      "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    text-align: justify;
    h1 {
      font-weight: bold;
      font-size: 54px;
      margin-left: -2px;
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
    display: flex;
    flex-wrap: wrap;
    height: auto;
    img {
      position: relative;
      left: -13px;
      width: 100%;
      transition: 0.5s ease;
      margin-bottom: 28px;
    }
    img:hover {
      transform: scale(1.1);
    }
    @media (max-width: 834px) {
      img {
        width: 103%;
        left: -4px;
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

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div>
        <Modal.Body style={{ backgroundColor: "#1a1a1a" }}>
          <HiddenImages>
            <h1>Mark as completed, Modify, Remove</h1>
            <img src={rv1} alt="" />
            <h1>Add a New Task</h1>
            <img src={rv2} alt="" />
            <h1>Add a New Category</h1>
            <img src={rv3} alt="" />
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

export default function RemindMeProject() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Container lang="en">
      <Text>
        <h1>Remind Me</h1>
        <h3>
          Remind Me will help to keep track of all everyday life's to-do's. Use
          it for school, work and anything else you want to track. You can
          choose when to receive reminders.
        </h3>
        <h2>Specs</h2>
        <h3>
          CoreData, User Notifications, Table Views, Custom Table View Cells,
          Press and Hold to Reorder Cells, Popovers, Passing Data Using Using
          Delegation Pattern, Navigation Among Views
        </h3>
        <a
          href="https://github.com/dennismarks/Reminders"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="" />
        </a>
      </Text>
      <ImgContainer className="img">
        <a>
          <img src={reminder} alt="reminder" />
        </a>
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
