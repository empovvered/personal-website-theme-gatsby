import React, { useEffect, useRef, useState } from "react";
import ExpertiseComponent from "components/Expertise/ExpertiseStyles";

import DesktopIcon from "assets/icons/desktop.inline.svg";
import { useIntersection } from "react-use";
import { isBrowser } from "utils/isBrowser";
import { fadeIn } from "assets/styles/animations";
import { graphql, useStaticQuery } from "gatsby";

const Expertise = () => {
  const {
    wordpress: {
      pages: {
        nodes: [homepageExpertiseSectionData],
      },
    },
  } = useStaticQuery(
    graphql`
      query expertiseData {
        wordpress {
          pages(where: { id: 7 }) {
            nodes {
              homepageExpertiseSectionData {
                expertiseParagraph
                expertiseSubtitle
                expertiseTitle
                expertiseBoxes {
                  button {
                    url
                    title
                    target
                  }
                  desc
                  title
                }
              }
            }
          }
        }
      }
    `
  );

  const expertiseData =
    homepageExpertiseSectionData.homepageExpertiseSectionData;

  const [animated, setAnimated] = useState(false);
  const expertiseSectionWrapper = useRef(null);

  let sectionRatio = 0;

  if (isBrowser() && window.innerWidth <= 768) {
    sectionRatio = 0.5;
  } else {
    sectionRatio = 0.75;
  }

  const intersection = useIntersection(expertiseSectionWrapper, {
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
      fadeIn(expertiseSectionWrapper);
      setAnimated(true);
    }
  });

  return (
    <ExpertiseComponent ref={expertiseSectionWrapper}>
      <div className="container expertise">
        <div className="expertise__headings">
          <span className="sub-title">{expertiseData.expertiseSubtitle}</span>
          <h1 className="d3">{expertiseData.expertiseTitle}</h1>
          <p>{expertiseData.expertiseParagraph}</p>
        </div>
        <div className="row expertise__content">
          {expertiseData.expertiseBoxes.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className="col-lg-4" key={index}>
              <div className="expertise__box">
                <DesktopIcon />
                <h4>{item.title}</h4>
                <p className="sub-title">{item.desc}</p>
                <a href={item.button.url}>{item.button.title}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ExpertiseComponent>
  );
};

export default Expertise;
