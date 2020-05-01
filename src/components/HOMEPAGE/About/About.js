import React, { useState } from "react";
import styled, { css } from "styled-components";
import ButtonComponent from "components/Button/Button";
import { device } from "assets/styles/mediaQueries";

import aboutPortrait from "assets/images/about-portrait.png";

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

const AboutComponent = styled.section`
  padding-top: 75px;
  .about {
    &__image {
      &__element {
        box-shadow: -40px 2px 80px rgba(0, 0, 0, 0.5);
        width: 500px;
        height: 500px;
        border-radius: 23px;
        @media ${device.lg} {
          width: 350px;
          height: 350px;
        }
        @media ${device.xs} {
          width: 250px;
          height: 250px;
        }
      }
      @media ${device.xs} {
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
      }
    }
    &__info {
      .sub-title {
        margin-bottom: 10px;
        display: block;
      }
      @media ${device.md} {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
      @media ${device.xs} {
        align-items: center;
      }
    }
    &__nav {
      margin-bottom: 33px;
      ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
      }
    }
    &__desc {
      p {
        color: ${({ theme }) => theme.textGray};
      }
      @media ${device.md} {
        max-width: 70vw;
      }
      @media ${device.xs} {
        max-width: unset;
        text-align: center;
      }
    }
  }
  @media ${device.md} {
    padding-top: 50px;
  }
  @media ${device.xs} {
    padding-top: 35px;
  }
`;

const AboutNavItem = styled.li`
  margin-right: 41px;
  cursor: pointer;
  position: relative;
  text-transform: capitalize;
  :last-child {
    margin-right: 0;
  }
  :after {
    content: "";
    background-color: ${({ theme }) => theme.primary};
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 2px;
    transform: scale(0);
  }
  ${({ active }) =>
    active &&
    css`
      :after {
        transform: scale(1);
        transition: transform 0.3s ease-in-out;
      }
    `}
`;

const StyledButtonComponent = styled(ButtonComponent)`
  margin-top: 30px;
  @media ${device.md} {
    display: block;
    margin-left: auto;
  }
  @media ${device.xs} {
    margin: 30px auto 0;
  }
`;

const Introduction = () => {
  const [currentTab, setCurrentTab] = useState(dummyData[0].id);

  const [activeTab] = dummyData.filter((item) => item.id === currentTab);

  return (
    <AboutComponent>
      <div className="container">
        <div className="row about">
          <div className="col-lg-6 about__image">
            <img className="about__image__element" src={aboutPortrait} alt="" />
          </div>
          <div className="col-lg-6 about__info">
            <small className="sub-title">A bit</small>
            <h1 className="d3">About Me</h1>
            <nav className="about__nav">
              <ul>
                {dummyData.map((item) => (
                  <AboutNavItem
                    active={currentTab === item.id && true}
                    onClick={() => setCurrentTab(item.id)}
                    className="sub-title"
                    key={item.id}
                  >
                    {item.title}
                  </AboutNavItem>
                ))}
              </ul>
            </nav>
            <div className="about__desc">
              <p>{activeTab.description}</p>
              <StyledButtonComponent>Download CV</StyledButtonComponent>
            </div>
          </div>
        </div>
      </div>
    </AboutComponent>
  );
};

export default Introduction;
