import React from "react";
import styled from "styled-components";

import Button from "components/Button/Button";
import introPortrait from "assets/images/intro-portrait.png";

const IntroductionComponent = styled.div`
  .wrapper-inner {
    align-items: center;
    .intro-text-wrapper {
      span {
        font-size: ${({ theme }) => theme.font.size.subTitle};
      }
      p {
        color: ${({ theme }) => theme.textGray};
      }
      @media (max-width: 992px) {
        order: 2;
        text-align: left;
      }
      @media (max-width: 576px) {
        text-align: center;
      }
    }
    .intro-img-wrapper {
      text-align: right;
      .intro-img {
        box-shadow: 40px 2px 80px rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        width: 420px;
        height: 420px;
        @media (max-width: 992px) {
          width: 350px;
          height: 350px;
        }
        @media (max-width: 576px) {
          width: 250px;
          height: 250px;
        }
      }
      @media (max-width: 992px) {
        text-align: right;
        order: 1;
      }
      @media (max-width: 576px) {
        text-align: center;
        margin-bottom: 33px;
      }
    }
    @media (max-width: 992px) {
      flex-direction: column;
      text-align: center;
    }
  }
`;

const Introduction = () => (
  <IntroductionComponent>
    <div className="container">
      <div className="row wrapper-inner">
        <div className="col-lg-6 intro-text-wrapper">
          <span>Hello</span>
          <h1>I&apos;m Kasia</h1>
          <p>Frontend developer</p>
          <Button type="button">Hire me</Button>
        </div>
        <div className="col-lg-6 intro-img-wrapper">
          <img
            className="intro-img"
            src={introPortrait}
            alt="intro-placeholder"
          />
        </div>
      </div>
    </div>
  </IntroductionComponent>
);

export default Introduction;
