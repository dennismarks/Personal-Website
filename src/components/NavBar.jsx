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
    font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Helvetica Neue";
    font-weight: normal;
    font-size: 15px;
    color: #aaa;
    margin: 0 9.2px;
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
    @media (max-width: 720px) {
      &:hover {
        color: #aaa;
      }
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
    const ulRefStyle = this.ulRef.current.style;
    if (this.state.animate) {
      if (window.innerWidth <= 720) {
        if (window.scrollY < 25) {
          this.setState({ sticky: false });
          ulRefStyle.position = "normal";
          ulRefStyle.marginLeft = "0px";
          ulRefStyle.bottom = "0";
        } else if (window.scrollY >= 85) {
          this.setState({ sticky: true });
          this.h1Ref.current.innerHTML = "dm";
          this.h1Ref.current.style.marginTop = "1px";
          ulRefStyle.float = "right";
          ulRefStyle.position = "relative";
          ulRefStyle.bottom = "42.5px";
        }
      } else if (window.innerWidth <= 1230) {
        if (window.scrollY < 70) {
          this.setState({ sticky: false });
          this.h1Ref.current.innerHTML = "DENNIS MARKOVCHIN";
          ulRefStyle.position = "normal";
          ulRefStyle.marginLeft = "0px";
          ulRefStyle.bottom = "0";
          window.removeEventListener("scroll", this.listenScrollEvent);
        } else if (window.scrollY >= 70) {
          this.h1Ref.current.innerHTML = "DENNIS MARKOVCHIN";
          ulRefStyle.float = "right";
          ulRefStyle.position = "relative";
          ulRefStyle.bottom = "41px";
          window.removeEventListener("scroll", this.listenScrollEvent);
          this.setState({ sticky: true });
        }
      } else {
        ulRefStyle.transition = "0.3s linear";
        if (window.scrollY < 70) {
          this.setState({ sticky: false });
          this.h1Ref.current.innerHTML = "DENNIS MARKOVCHIN";
          ulRefStyle.position = "normal";
          ulRefStyle.marginLeft = "0px";
          ulRefStyle.bottom = "0px";
          window.removeEventListener("scroll", this.listenScrollEvent);
        } else if (window.scrollY >= 70) {
          this.h1Ref.current.innerHTML = "DENNIS MARKOVCHIN";
          ulRefStyle.position = "absolute";
          ulRefStyle.marginLeft = "970px";
          ulRefStyle.bottom = "35px";
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
