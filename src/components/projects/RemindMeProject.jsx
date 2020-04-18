import React from "react";
import styled from "styled-components/macro";
import withReveal from "react-reveal/withReveal";
import Fade from "react-reveal/Fade";

import reminder from "../../assets/img/reminder-images.png";
import reminderSmall from "../../assets/img/reminder-images-cut.png";
import github from "../../assets/img/github-icon.svg";

const Container = styled.div`
  margin-top: 125px;
  display: grid;
  grid-template-columns: 35% auto;
  grid-gap: 3%;
  @media (max-width: 834px) {
    grid-template-columns: 1fr;
    .order2 {
      grid-column-start: 1;
      grid-row-start: 1;
    }
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
    h1 {
      font-weight: bold;
      font-size: 50px;
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
    position: relative;
    left: -4px;
    /* top: -70px; */
    /* width: 650px; */
    height: auto;
    img {
      width: 103%;
      transition: 0.5s ease;
    }
    img:hover {
      transform: scale(1.3);
    }

    @media (max-width: 834px) {
      width: 90vw;
      img:hover {
        transform: none;
      }
    }
  `,
  <Fade bottom duration={2000} />
);

export default function RemindMeProject() {
  return (
    <Container lang="en">
      <Text className="order2">
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
        <a href="https://github.com/dennismarks/Reminders" target="_blank">
          <img src={github} alt="" />
        </a>
      </Text>
      <ImgContainer className="order1">
        <a href={reminder} target="_blank">
          <img src={reminder} alt="reminder" />
        </a>
      </ImgContainer>
    </Container>
  );
}
