import React from "react";
import styled, { keyframes } from "styled-components/macro";
import { Link } from "react-scroll";

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Nav = styled.nav`
  height: 80px;
  width: 100%;
  margin-top: 90px;
  text-align: left;
  animation-delay: 3s;
  position: relative;
  z-index: 9999;
  opacity: ${(props) => (props.sticky ? "0" : "1")};
  @media (max-width: 1230px) {
    margin-top: 30px;
  }
`;

const StickyNav = styled.nav`
  height: 80px;
  width: 100%;
  margin-top: 20px;
  text-align: left;
  position: fixed;
  top: 0;
  z-index: 9999;
  opacity: ${(props) => (props.sticky ? "1" : "0")};
  @media (max-width: 1230px) {
    margin-top: 5px;
    width: 90vw;
  }
`;

const Links = styled.div`
  h1 {
    display: block;
    text-transform: uppercase;
    font-family: "SF Pro Display";
    font-synthesis: none;
    font-weight: bold;
    font-size: 22px;
    font-variant: small-caps;
    color: #f3f3f3;
    animation: ${FadeIn} 3.5s ease-in-out both;
    -webkit-animation: ${FadeIn} 3.5s ease-in-out both;
    animation-delay: 2s;
  }
  ul {
    display: block;
    margin-top: 28px;
    @media (max-width: 1230px) {
      margin-top: 10px;
    }
  }
  .link {
    text-decoration: none;
    font-family: "SF Pro Text";
    font-weight: normal;
    font-size: 15px;
    color: #aaa;
    margin: 0 9px;
    transition: 0.5s;
    animation: ${FadeIn} 3s ease-in-out both;
    -webkit-animation: ${FadeIn} 3s ease-in-out both;
    &:hover {
      color: #f3f3f3;
      cursor: pointer;
    }
    &:nth-child(1) {
      animation-delay: 2s;
      margin-left: 0;
    }
    &:nth-child(2) {
      animation-delay: 2.3s;
    }
    &:nth-child(3) {
      animation-delay: 2.6s;
      margin-right: 0;
    }
  }
`;

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sticky: false,
      animate: true,
    };

    this.h1Ref = React.createRef();
    this.ulRef = React.createRef();
  }

  componentDidMount = () => {
    if (this.state.animate) {
      window.addEventListener("scroll", this.listenScrollEvent, true);
    }
    window.addEventListener("resize", this.listenScrollEvent, true);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.listenScrollEvent);
    window.addEventListener("resize", this.listenScrollEvent, true);
  };

  listenScrollEvent = () => {
    if (this.state.animate) {
      if (window.innerWidth <= 720) {
        if (window.scrollY < 25) {
          this.setState({ sticky: false });
          this.ulRef.current.style.position = "normal";
          this.ulRef.current.style.marginLeft = "0px";
          this.ulRef.current.style.bottom = "0";
        } else if (window.scrollY >= 85) {
          this.setState({ sticky: true });
          this.h1Ref.current.innerHTML = "dm";
          this.ulRef.current.style.float = "right";
          this.ulRef.current.style.position = "relative";
          this.ulRef.current.style.bottom = "41px";
        }
      } else if (window.innerWidth <= 1230) {
        if (window.scrollY < 70) {
          this.setState({ sticky: false });
          this.h1Ref.current.innerHTML = "DENNIS MARKOVCHIN";
          this.ulRef.current.style.position = "normal";
          this.ulRef.current.style.marginLeft = "0px";
          this.ulRef.current.style.bottom = "0";
          window.removeEventListener("scroll", this.listenScrollEvent);
        } else if (window.scrollY >= 70) {
          this.h1Ref.current.innerHTML = "DENNIS MARKOVCHIN";
          this.ulRef.current.style.float = "right";
          this.ulRef.current.style.position = "relative";
          this.ulRef.current.style.bottom = "41px";
          window.removeEventListener("scroll", this.listenScrollEvent);
          this.setState({ sticky: true });
        }
      } else {
        if (window.scrollY < 70) {
          this.setState({ sticky: false });
          this.h1Ref.current.innerHTML = "DENNIS MARKOVCHIN";
          this.ulRef.current.style.position = "normal";
          this.ulRef.current.style.marginLeft = "0px";
          this.ulRef.current.style.bottom = "0";
          this.ulRef.current.style.transition = "";
          window.removeEventListener("scroll", this.listenScrollEvent);
        } else if (window.scrollY >= 70) {
          this.h1Ref.current.innerHTML = "DENNIS MARKOVCHIN";
          this.ulRef.current.style.position = "absolute";
          this.ulRef.current.style.marginLeft = "964px";
          this.ulRef.current.style.bottom = "35px";
          this.ulRef.current.style.transition =
            "bottom 0.3s linear, margin-left 0.3s linear, position 0.3s linear";
          window.removeEventListener("scroll", this.listenScrollEvent);
          this.setState({ sticky: true });
        }
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <StickyNav sticky={this.state.sticky}>
          <Links>
            <h1 ref={this.h1Ref}>Dennis Markovchin</h1>
            <ul ref={this.ulRef}>
              <Link
                className="link"
                activeClass="active"
                to="experience"
                spy={true}
                smooth="easeInOutCubic"
                offset={-100}
                duration={1000}
              >
                experience
              </Link>
              <Link
                className="link"
                activeClass="active"
                to="projects"
                spy={true}
                smooth="easeInOutCubic"
                offset={150}
                duration={1000}
              >
                projects
              </Link>
              <Link
                className="link"
                activeClass="active"
                to="about"
                spy={true}
                smooth="easeInOutCubic"
                offset={150}
                duration={1000}
              >
                contact
              </Link>
            </ul>
          </Links>
        </StickyNav>
        <Nav sticky={this.state.sticky}>
          <Links>
            <h1>Dennis Markovchin</h1>
            <ul>
              <Link
                className="link"
                activeClass="active"
                to="experience"
                spy={true}
                smooth="easeInOutCubic"
                offset={-100}
                duration={1000}
              >
                experience
              </Link>
              <Link
                className="link"
                activeClass="active"
                to="projects"
                spy={true}
                smooth="easeInOutCubic"
                offset={150}
                duration={1000}
              >
                projects
              </Link>
              <Link
                className="link"
                activeClass="active"
                to="about"
                spy={true}
                smooth="easeInOutCubic"
                offset={150}
                duration={1000}
              >
                contact
              </Link>
            </ul>
          </Links>
        </Nav>
      </React.Fragment>
    );
  }
}
