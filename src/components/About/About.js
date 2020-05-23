import React, { useEffect, useRef, useState } from "react";
import { useIntersection } from "react-use";
import {
  AboutShapeWrapper,
  StyledButtonComponent,
  AboutNavItem,
  AboutComponent,
} from "components/About/AboutStyles";
import AboutShape from "assets/images/about-shape.inline.svg";
import gsap from "gsap";
import { isBrowser } from "utils/isBrowser";
import { graphql, useStaticQuery } from "gatsby";

const dummyData = [
  {
    id: 1,
    title: "life",
    description:
      "Pacific housing unique experiences things to do motel nature Pacific housing unique experiences things to do motel nature Pacific housing unique experiences things to do motel nature Pacific housing unique experiences things to do motel nature",
  },
  {
    id: 2,
    title: "education",
    description:
      "Pacific housing unique experousing unique experiences things to do motel nature Pacific housing unique experiences things to do motel nature",
  },
  {
    id: 3,
    title: "experience",
    description:
      "Pacific housing unique experiences things to do motel nature Pacific housing unique experiences things to do motel nature Pacific housto do motel nature Pacific housing unique experiences things to do motel nature ",
  },
];

const Introduction = () => {
  const {
    wordpress: {
      pages: {
        nodes: [homepageAboutSectionData],
      },
    },
  } = useStaticQuery(
    graphql`
      query aboutData {
        wordpress {
          pages(where: { id: 7 }) {
            nodes {
              homepageAboutSectionData {
                aboutTitle
                aboutSubtitle
                aboutImage {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    `
  );

  const aboutData = homepageAboutSectionData.homepageAboutSectionData;

  const [currentTab, setCurrentTab] = useState(dummyData[0].id);
  const [animated, setAnimated] = useState(false);
  const aboutSectionWrapper = useRef(null);
  const aboutShapeWrapper = useRef(null);

  const [activeTab] = dummyData.filter((item) => item.id === currentTab);

  const animateAbout = () => {
    const [elements] = aboutShapeWrapper.current.children;
    const aboutSection = aboutSectionWrapper.current;

    const rectangle = elements.getElementById("Rectangle");
    const ornamentWhite = elements.getElementById("Ornament/Dotted/white");
    const oval = elements.getElementById("Oval");
    const rectangle1 = elements.getElementById("Fill-03");
    const rectangle2 = elements.getElementById("Fill-2");
    const rectangle3 = elements.getElementById("Rectangle-3");

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    gsap.set(aboutSection, { y: 75 });

    tl.fromTo(
      rectangle,
      { rotation: 45, transformOrigin: "50% 50%" },
      { rotation: -45, duration: 1.5 }
    );
    tl.fromTo(
      [ornamentWhite, oval, rectangle1, rectangle2, rectangle3],
      { scaleY: 0 },
      { duration: 1, scaleY: 1 },
      "-=0.75"
    );

    tl.to(aboutSection, { y: 0, autoAlpha: 1, duration: 1 }, "-=1.5");
  };

  let sectionRatio = 0;

  if (isBrowser() && window.innerWidth < 768) {
    sectionRatio = 0.5;
  } else {
    sectionRatio = 0.75;
  }

  const intersection = useIntersection(aboutSectionWrapper, {
    root: null,
    rootMargin: "0px",
    threshold: sectionRatio,
  });

  useEffect(() => {
    if (
      intersection &&
      intersection.intersectionRatio > sectionRatio &&
      animated === false
    ) {
      animateAbout();
      setAnimated(true);
    }
  });

  return (
    <AboutComponent ref={aboutSectionWrapper}>
      <AboutShapeWrapper ref={aboutShapeWrapper}>
        <AboutShape />
      </AboutShapeWrapper>
      <div className="container">
        <div className="row about">
          <div className="col-lg-6 about__image-box">
            <img
              className="about__image-element"
              src={aboutData.aboutImage.sourceUrl}
              alt=""
            />
          </div>
          <div className="col-lg-6 about__info">
            <small className="sub-title">{aboutData.aboutSubtitle}</small>
            <h1 className="d3">{aboutData.aboutTitle}</h1>
            <nav className="about__nav">
              <ul>
                {dummyData.map((item) => (
                  <li key={item.id}>
                    <AboutNavItem
                      active={currentTab === item.id && true}
                      onClick={() => setCurrentTab(item.id)}
                      className="sub-title"
                    >
                      {item.title}
                    </AboutNavItem>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="about__desc">
              <p>{activeTab.description}</p>
              <StyledButtonComponent>
                <a
                  href="http://example.com/files/myfile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  Download Cv
                </a>
              </StyledButtonComponent>
            </div>
          </div>
        </div>
      </div>
    </AboutComponent>
  );
};

export default Introduction;
