import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import {
  ClientsComponent,
  ClientsShapeWrapper,
} from "components/Clients/ClientsStyles";

import newscomauLogo from "assets/images/newscom.au-logo.png";
import businessInsiderLogo from "assets/images/business-insider-logo.png";
import envatoLogo from "assets/images/envato-logo.png";
import midWeekLogo from "assets/images/midweek-logo.png";
import wiredLogo from "assets/images/wired-logo.png";
import gsap from "gsap";
import { isBrowser } from "utils/isBrowser";
import { useIntersection } from "react-use";
import ClientsShape from "assets/images/clients-shpe.inline.svg";
import { graphql, useStaticQuery } from "gatsby";
import { useQueryClients } from "hooks/useQueryClients";

const Clients = () => {
  const {
    wordpress: {
      pages: {
        nodes: [homepageClientsSectionData],
      },
    },
  } = useStaticQuery(
    graphql`
      query clientsData {
        wordpress {
          pages(where: { id: 7 }) {
            nodes {
              id
              homepageClientsSectionData {
                clientsSubtitle
                clientsTitle
                clientsParagraph
              }
            }
          }
        }
      }
    `
  );

  const clientsData = homepageClientsSectionData.homepageClientsSectionData;
  const allClients = useQueryClients();

  const [animated, setAnimated] = useState(false);
  const clientsSectionWrapper = useRef(null);
  const clientsShapeWrapper = useRef(null);

  const animateClients = () => {
    const [elements] = clientsShapeWrapper.current.children;
    const clientsSection = clientsSectionWrapper.current;

    const rectangle = elements.getElementById("Rectangle");
    const rectangle1 = elements.getElementById("Rectangle-1");
    const ornamentWhite = elements.getElementById("Ornament/Dotted/white");
    const oval = elements.getElementById("Oval");
    const fill1 = elements.getElementById("Fill-1");

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    gsap.set(clientsSection, { y: 75 });

    tl.fromTo(
      rectangle,
      { rotation: 45, transformOrigin: "50% 50%" },
      { rotation: -45, duration: 1.5 }
    );
    tl.fromTo(
      [ornamentWhite, oval, fill1, rectangle1],
      { scaleY: 0 },
      { duration: 1, scaleY: 1 },
      "-=0.75"
    );

    tl.to(clientsSection, { y: 0, autoAlpha: 1, duration: 1 }, "-=1.5");
  };

  let sectionRatio = 0;

  if (isBrowser() && window.innerWidth < 768) {
    sectionRatio = 0.5;
  } else {
    sectionRatio = 0.75;
  }

  const intersection = useIntersection(clientsSectionWrapper, {
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
      animateClients();
      setAnimated(true);
    }
  });

  /* eslint-disable react/jsx-props-no-spreading */

  const carouselSettings = {
    dots: true,
    fade: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
  };

  return (
    <ClientsComponent ref={clientsSectionWrapper}>
      <ClientsShapeWrapper ref={clientsShapeWrapper}>
        <ClientsShape />
      </ClientsShapeWrapper>
      <div className="container clients">
        <div className="clients__headings">
          <span className="sub-title">{clientsData.clientsSubtitle}</span>
          <h1 className="d3">{clientsData.clientsTitle}</h1>
          <p>{clientsData.clientsParagraph}</p>
        </div>
        <div className="clients__logos">
          <img src={newscomauLogo} alt="" />
          <img src={businessInsiderLogo} alt="" />
          <img src={envatoLogo} alt="" />
          <img src={midWeekLogo} alt="" />
          <img src={wiredLogo} alt="" />
        </div>
        <Slider {...carouselSettings} className="clients__slider">
          {allClients.map((item) => (
            <div key={item.id}>
              <div className="clients__slider-item">
                <img
                  src={item.featuredImage.sourceUrl}
                  alt={item.featuredImage.altText}
                />
                <blockquote>
                  {/* eslint-disable-next-line react/no-danger */}
                  <div dangerouslySetInnerHTML={{ __html: item.excerpt }} />
                  <h4>{item.title}</h4>
                  <span className="sub-title">
                    {item.clientsAdditionalData.companyName}
                  </span>
                </blockquote>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </ClientsComponent>
  );
};

export default Clients;
