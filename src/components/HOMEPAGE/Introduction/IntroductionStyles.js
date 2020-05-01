import styled from "styled-components";
import { device } from "assets/styles/mediaQueries";

export const IntroShapeWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
  width: 700px;
  height: auto;
  svg {
    width: 700px;
    height: auto;
  }
  @media (max-width: 1600px) {
    width: 500px;
    svg {
      width: 500px;
    }
  }
  @media ${device.lg} {
    z-index: -1;
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

export const IntroductionComponent = styled.section`
  margin-top: 0;
  padding-bottom: 93px;
  .intro {
    align-items: center;
    opacity: 0;
    visibility: hidden;
    @media ${device.md} {
      flex-direction: column;
      text-align: center;
    }
  }
  .intro__img {
    text-align: right;
    &__element {
      box-shadow: 40px 2px 80px rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      width: 500px;
      height: 500px;
      @media ${device.lg} {
        width: 350px;
        height: 350px;
      }
      @media ${device.xs} {
         {
          width: 250px;
          height: 250px;
        }
      }
    }
    @media ${device.md} {
      text-align: right;
      order: 1;
    }
    @media ${device.xs} {
      text-align: center;
      margin-bottom: 33px;
    }
  }
  .intro__text {
    padding-left: 90px;
    p {
      color: ${({ theme }) => theme.textGray};
    }
    @media ${device.md} {
      order: 2;
      text-align: left;
    }
    @media ${device.xs} {
      text-align: center;
      padding-left: 15px;
    }
  }
  @media ${device.md} {
    padding-bottom: 50px;
  }
  @media ${device.xs} {
    padding-bottom: 35px;
  }
`;
