import styled from "styled-components";
import { device } from "assets/styles/mediaQueries";

export const ContactComponent = styled.section`
  margin: 150px 0 100px;
  position: relative;
  opacity: 0;
  .contact {
    display: flex;
    justify-content: center;
    &__wrapper {
      width: 50vw;
      max-width: 800px;
      z-index: 1;
      display: flex;
      flex-direction: column;
      padding: 60px 85px;
      background-color: white;
      box-shadow: 0 20px 60px 0 rgba(0, 0, 0, 0.2);
      border-radius: 18px;
      @media ${device.sm} {
        width: 75vw;
        padding: 40px 60px;
      }
      @media ${device.xs} {
        width: 90vw;
        padding: 30px 20px;
      }
    }
    &__title {
      text-align: center;
      margin-bottom: 60px;
    }
    &__fieldset {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
      border: 0;
      margin-bottom: 30px;
    }
    &__label {
      width: 100%;
    }
    &__input {
      width: 100%;
      height: 36px;
      border: 0;
      border-bottom: 1px solid #aeb7c1;
      margin-bottom: 39px;
      padding: 0 10px;
    }
    &__textarea {
      width: 100%;
      border: 0;
      border-bottom: 1px solid #aeb7c1;
      padding: 10px;
      height: 150px;
    }
    &__label-text {
      display: none;
    }
    &__button {
      margin: 0 auto;
    }
  }
  @media ${device.sm} {
    margin: 75px 0 50px;
  }
  @media ${device.xs} {
    margin: 35px 0;
  }
`;

export const ContactShapeWrapper = styled.div`
  position: absolute;
  right: 0;
  top: -50%;
  z-index: -1;
  width: 550px;
  height: auto;
  svg {
    width: 550px;
    height: auto;
  }
  @media (max-width: 1600px) {
    width: 400px;
    top: -25%;
    svg {
      width: 400px;
    }
  }
  @media ${device.sm} {
    top: 0;
    width: 400px;
    svg {
      width: 400px;
    }
  }
  @media ${device.xs} {
    width: 250px;
    svg {
      width: 250px;
    }
  }
`;
