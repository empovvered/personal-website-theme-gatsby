import React, { useEffect, useRef, useState } from "react";
import { Link } from "gatsby";
import PropTypes, { shape } from "prop-types";
import {
  PortfolioComponent,
  AboutNavItem,
  StyledButtonComponent,
} from "components/Portfolio/PortfolioStyles";
import { isBrowser } from "utils/isBrowser";

import portfolioItem from "assets/images/portfolio-item.png";
import { useIntersection } from "react-use";
import { fadeIn } from "assets/styles/animations";

const Portfolio = ({ categories, projects }) => {
  const [currentTab, setActiveTab] = useState(categories[0].id);
  const [animated, setAnimated] = useState(false);
  const portfolioSectionWrapper = useRef(null);
  let itemsLimit = 0;

  if (isBrowser() && window.innerWidth <= 768) {
    itemsLimit = 3;
  } else {
    itemsLimit = 9;
  }

  const portfolioItems = projects
    .filter((item) => item.categories.nodes[0].id === currentTab)
    .slice(0, itemsLimit);

  let sectionRatio = 0;

  if (isBrowser() && window.innerWidth <= 768) {
    sectionRatio = 0.2;
  } else {
    sectionRatio = 0.2;
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
            <div className="portfolio__title">
              <h1 className="d3">Select Portfolio</h1>
              <p>
                Freelance UI/UX Designer, also passionate in making beautiful
                illustrations and icons
              </p>
            </div>
            <nav className="portfolio__nav">
              <ul>
                {categories.map((item) => (
                  <li key={item.id}>
                    <AboutNavItem
                      active={currentTab === item.id && true}
                      className="sub-title"
                      onClick={() => setActiveTab(item.id)}
                    >
                      {item.name}
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
              <div key={item.id} className="portfolio__grid-item col-lg-4">
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

Portfolio.propTypes = {
  categories: PropTypes.arrayOf(
    shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  projects: PropTypes.arrayOf(
    shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      featuredImage: shape({
        sourceUrl: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};

export default Portfolio;
