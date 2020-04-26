import React, { useRef, useEffect } from "react";
import MainLayout from "layouts/MainLayout";
import Introduction from "components/Introduction/Introduction";
import TopShape from "assets/images/top-bg.inline.svg";
import styled from "styled-components";
import gsap from "gsap";
import { device } from "assets/styles/mediaQueries";

const TopShapeWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
  @media ${device.lg} {
    z-index: -1;
    width: 500px;
    svg {
      width: 500px;
      height: 100%;
    }
  }
  @media ${device.xs} {
    z-index: -1;
    width: 250px;
    svg {
      width: 250px;
      height: 100%;
    }
  }
`;

const IndexPage = () => {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;

    const backgound = elements.getElementById("Rectangle");
    const ornamentWhite = elements.getElementById("Ornament/Dotted/white");
    const ornamentBlack = elements.getElementById("Ornament/Dotted/black");
    const oval = elements.getElementById("Oval");
    const rectangle2 = elements.getElementById("Rectangle2");
    const rectangle1 = elements.getElementById("Fill-11");

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    tl.fromTo(backgound, { x: "+=300" }, { duration: 1, x: "-=300" });
    tl.fromTo(
      [ornamentWhite, ornamentBlack, oval, rectangle2, rectangle1],
      { scaleY: 0 },
      { duration: 0.5, scaleY: 1 }
    );
    tl.to([ornamentWhite, ornamentBlack], { rotation: -45 });
  });

  return (
    <>
      <MainLayout>
        <Introduction />
      </MainLayout>
      <TopShapeWrapper ref={wrapper}>
        <TopShape />
      </TopShapeWrapper>
    </>
  );
};

export default IndexPage;
