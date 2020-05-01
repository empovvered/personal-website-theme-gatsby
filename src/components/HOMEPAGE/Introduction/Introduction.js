import React, { useEffect, useRef } from "react";
import {
  IntroShapeWrapper,
  IntroductionComponent,
} from "components/HOMEPAGE/Introduction/IntroductionStyles";

import Button from "components/Button/Button";
import introPortrait from "assets/images/intro-portrait.png";
import IntroShape from "assets/images/intro-shape.inline.svg";
import gsap from "gsap";

const Introduction = () => {
  const introSectionWrapper = useRef(null);
  const shapeWrapper = useRef(null);

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
