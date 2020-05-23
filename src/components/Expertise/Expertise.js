import React, { useEffect, useRef, useState } from "react";
import ExpertiseComponent from "components/Expertise/ExpertiseStyles";

import DesktopIcon from "assets/icons/desktop.inline.svg";
import TargetIcon from "assets/icons/target.inline.svg";
import ShareIcon from "assets/icons/share.inline.svg";
import { useIntersection } from "react-use";
import { isBrowser } from "utils/isBrowser";
import { fadeIn } from "assets/styles/animations";

const dummyData = [
  {
    id: 1,
    title: "UI/UX Design",
    content: "Launch party pitch technology user experience innovator buzz stealth MVP business model.",
  },
  {
    id: 2,
    title: "Local SEO",
    content: "Launch party pitch technology user experience innovator buzz stealth MVP business model.",
  },
  {
    id: 3,
    title: "Social Media Marketing",
    content: "Launch party pitch technology user experience innovator buzz stealth MVP business model.",
  },
];

const Expertise = () => {
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
          <span className="sub-title">Skills</span>
          <h1 className="d3">Expertise</h1>
          <p>
            Freelance UI/UX Designer, also passionate in making beautiful
            illustrations and icons
          </p>
        </div>
        <div className="row expertise__content">
          {dummyData.map(item => (
            <div className="col-lg-4" key={item.id}>
              <div className="expertise__box">
                <DesktopIcon/>
                <h4>{item.title}</h4>
                <p className="sub-title">
                  {item.content}
                </p>
                <a href="/">Show more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ExpertiseComponent>
  );
};

export default Expertise;
