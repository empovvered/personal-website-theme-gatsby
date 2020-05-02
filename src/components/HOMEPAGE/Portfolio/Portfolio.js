import React, { useEffect, useRef, useState } from "react";
import { Link } from "gatsby";
import {
  PortfolioComponent,
  AboutNavItem,
  StyledButtonComponent,
} from "components/HOMEPAGE/Portfolio/PortfolioStyles";
import { isBrowser } from "utils/isBrowser";

import portfolioItem from "assets/images/portfolio-item.png";
import { useIntersection } from "react-use";
import { fadeIn } from "assets/styles/animations";

const dummyData = {
  categories: [
    {
      id: 1,
      title: "UI Design",
    },
    {
      id: 2,
      title: "UX Design",
    },
    {
      id: 3,
      title: "Icon",
    },
    {
      id: 4,
      title: "Branding",
    },
  ],
  items: [
    {
      id: 1,
      category: "UI Design",
      categoryId: 1,
      title: "sdfsdgbn,,bvmlmb,m",
      date: "20/02/2020",
      description:
        "Pacific housing unique experiences things to do motel nature Pacific housing unique experiences things to do motel nature Pacific housing unique experiences things to do motel nature Pacific housing unique experiences things to do motel nature",
    },
    {
      id: 2,
      category: "UX Design",
      categoryId: 2,
      title: "fdsdmfpsdfoskadasp[d[pasd",
      date: "12/01/2020",
      description:
        "Pacific housing unique experousing unique experiences things to do motel nature Pacific housing unique experiences things to do motel nature",
    },
    {
      id: 3,
      category: "Icon",
      categoryId: 3,
      title: "idmwiodmaoimdasomasdpo",
      date: "21/03/2020",
      description:
        "Pacific housing unique experiences things to do motel nature Pacific housing unique experiences things to do motel nature Pacific housto do motel nature Pacific housing unique experiences things to do motel nature ",
    },
    {
      id: 5,
      category: "Branding",
      categoryId: 4,
      title: "dggsadoa",
      date: "15/02/2019",
      description:
        "Pacific housing unique experiences things to do motefsfsdfdsfsdfsdfsdddddddddddddddddddddddddddddddddddddddl nature Pacific housing unique experiences things to do motel nature Pacific housto do motel nature Pacific housing unique experiences things to do motel nature ",
    },
    {
      id: 6,
      category: "Branding",
      categoryId: 4,
      title: "dggsadoa",
      date: "15/02/2019",
      description:
        "Pacific housing unique experiences things to do motefsfsdfdsfsdfsdfsdddddddddddddddddddddddddddddddddddddddl nature Pacific housing unique experiences things to do motel nature Pacific housto do motel nature Pacific housing unique experiences things to do motel nature ",
    },
    {
      id: 7,
      category: "Branding",
      categoryId: 4,
      title: "dggsadoa",
      date: "15/02/2019",
      description:
        "Pacific housing unique experiences things to do motefsfsdfdsfsdfsdfsdddddddddddddddddddddddddddddddddddddddl nature Pacific housing unique experiences things to do motel nature Pacific housto do motel nature Pacific housing unique experiences things to do motel nature ",
    },
    {
      id: 8,
      category: "Branding",
      categoryId: 4,
      title: "dggsadoa",
      date: "15/02/2019",
      description:
        "Pacific housing unique experiences things to do motefsfsdfdsfsdfsdfsdddddddddddddddddddddddddddddddddddddddl nature Pacific housing unique experiences things to do motel nature Pacific housto do motel nature Pacific housing unique experiences things to do motel nature ",
    },
  ],
};

const Portfolio = () => {
  const [currentTab, setActiveTab] = useState(dummyData.categories[0].id);
  const [animated, setAnimated] = useState(false);
  const portfolioSectionWrapper = useRef(null);

  let itemsLimit = 0;

  if (isBrowser() && window.innerWidth <= 768) {
    itemsLimit = 3;
  } else {
    itemsLimit = 9;
  }

  const portfolioItems = dummyData.items
    .filter((item) => item.categoryId === currentTab)
    .slice(0, itemsLimit);

  let sectionRatio = 0;

  if (isBrowser() && window.innerWidth <= 768) {
    sectionRatio = 0.5;
  } else {
    sectionRatio = 0.75;
  }

  const intersection = useIntersection(portfolioSectionWrapper, {
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
      fadeIn(portfolioSectionWrapper);
      setAnimated(true);
    }
  });

  return (
    <PortfolioComponent ref={portfolioSectionWrapper}>
      <div className="portfolio">
        <div className="portfolio__headings">
          <div className="container">
            <div className="portfolio__headings__title">
              <h1 className="d3">Select Portfolio</h1>
              <p>
                Freelance UI/UX Designer, also passionate in making beautiful
                illustrations and icons
              </p>
            </div>
            <nav className="portfolio__headings__nav">
              <ul>
                {dummyData.categories.map((item) => (
                  <li key={item.id}>
                    <AboutNavItem
                      active={currentTab === item.id && true}
                      className="sub-title"
                      onClick={() => setActiveTab(item.id)}
                    >
                      {item.title}
                    </AboutNavItem>
                  </li>
                ))}
              </ul>
              <Link to="/">
                <StyledButtonComponent>View All</StyledButtonComponent>
              </Link>
            </nav>
          </div>
        </div>
        <div className="portfolio__grid container-fluid">
          <div className="row">
            {portfolioItems.map((item) => (
              <div key={item.id} className="portfolio__grid__item col-lg-4">
                <Link to="/">
                  <figure>
                    <img src={portfolioItem} alt="" />
                    <figcaption>
                      <small className="small">{item.date}</small>
                      <h4>{item.title}</h4>
                    </figcaption>
                  </figure>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PortfolioComponent>
  );
};

export default Portfolio;
