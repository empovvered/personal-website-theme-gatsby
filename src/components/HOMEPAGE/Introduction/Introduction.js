import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import Button from "components/Button/Button";
import introPortrait from "assets/images/intro-portrait.png";
import IntroShape from "assets/images/intro-shape.inline.svg";
import { device } from "assets/styles/mediaQueries";
import gsap from "gsap";

const IntroShapeWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
  width: 700px;
  height: auto;
  svg {
    width: 700px;
    height: auto;
  }
  @media (max-width: 1600px) {
    width: 500px;
    svg {
      width: 500px;
    }
  }
  @media ${device.lg} {
    z-index: -1;
    width: 400px;
    svg {
      width: 400px;
    }
  }
  @media ${device.xs} {
    width: 250px;
    svg {
      width: 250px;
    }
  }
`;

const IntroductionComponent = styled.section`
  margin-top: 0;
  padding-bottom: 93px;
  .intro {
    align-items: center;
    @media ${device.md} {
      flex-direction: column;
      text-align: center;
    }
  }
  .intro__img {
    text-align: right;
    &__element {
      box-shadow: 40px 2px 80px rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      width: 500px;
      height: 500px;
      @media ${device.lg} {
        width: 350px;
        height: 350px;
      }
      @media ${device.xs} {
         {
          width: 250px;
          height: 250px;
        }
      }
    }
    @media ${device.md} {
      text-align: right;
      order: 1;
    }
    @media ${device.xs} {
      text-align: center;
      margin-bottom: 33px;
    }
  }
  .intro__text {
    padding-left: 90px;
    .sub-title {
      margin-bottom: 10px;
      display: block;
    }
    p {
      color: ${({ theme }) => theme.textGray};
    }
    @media ${device.md} {
      order: 2;
      text-align: left;
    }
    @media ${device.xs} {
      text-align: center;
      padding-left: 15px;
    }
  }
  @media ${device.md} {
    padding-bottom: 50px;
  }
  @media ${device.xs} {
    padding-bottom: 35px;
  }
`;

const Introduction = () => {
  const shapeWrapper = useRef(null);
  const introSectionWrapper = useRef(null);

  useEffect(() => {
    const [elements] = shapeWrapper.current.children;
    const introSection = introSectionWrapper.current;

    const background = elements.getElementById("Rectangle");
    const ornamentWhite = elements.getElementById("Ornament/Dotted/white");
    const ornamentBlack = elements.getElementById("Ornament/Dotted/black");
    const oval = elements.getElementById("Oval");
    const rectangle2 = elements.getElementById("Rectangle2");
    const rectangle1 = elements.getElementById("Fill-11");

    gsap.set(introSection, { y: 50, autoAlpha: 0 });

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    tl.fromTo(background, { x: "+=500" }, { duration: 1.5, x: "-=500" });
    tl.fromTo(
      [ornamentWhite, ornamentBlack, oval, rectangle2, rectangle1],
      { scaleY: 0 },
      { duration: 1, scaleY: 1 },
      "-=0.75"
    );
    tl.to(introSection, { y: 0, autoAlpha: 1, duration: 1 }, "-=0.5");
  });

  return (
    <IntroductionComponent>
      <IntroShapeWrapper ref={shapeWrapper}>
        <IntroShape />
      </IntroShapeWrapper>
      <div className="container">
        <div className="row intro" ref={introSectionWrapper}>
          <div className="col-lg-6 intro__text">
            <span className="sub-title">Hello</span>
            <h1 className="d3">I&apos;m John</h1>
            <p>Frontend developer</p>
            <Button type="button">Hire me</Button>
          </div>
          <div className="col-lg-6 intro__img">
            <img
              className="intro__img__element"
              src={introPortrait}
              alt="intro-placeholder"
            />
          </div>
        </div>
      </div>
    </IntroductionComponent>
  );
};

export default Introduction;
