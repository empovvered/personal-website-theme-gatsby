import styled from "styled-components";
import { device } from "assets/styles/mediaQueries";
import quoteIcon from "assets/icons/quote.svg";

export const ClientsComponent = styled.section`
  padding-top: 50px;
  opacity: 0;
  .clients {
    &__headings {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 90px;
      span {
        margin-bottom: 10px;
      }
      p {
        max-width: 330px;
        color: ${({ theme }) => theme.textGray};
      }
      @media ${device.sm} {
        margin-bottom: 45px;
      }
    }
    &__logos {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 100px;
      img {
        width: 100%;
        height: auto;
        max-width: 140px;
        @media ${device.sm} {
          margin-bottom: 30px;
        }
      }
      @media ${device.sm} {
        margin-bottom: 50px;
      }
    }
    &__slider-item {
      display: flex;
      img {
        width: 400px;
        height: auto;
        margin-right: 115px;
        border-radius: 22px;
        @media ${device.sm} {
          margin-right: 0;
        }
        @media ${device.xs} {
          width: 300px;
        }
      }
      blockquote {
        padding-top: 86px;
        max-width: 500px;
        position: relative;
        p {
          margin-bottom: 30px;
          font-style: italic;
        }
        ::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 56px;
          height: 56px;
          background-image: url(${quoteIcon});
          background-repeat: no-repeat;
          @media ${device.xs} {
            display: none;
          }
        }
        @media ${device.xs} {
          max-width: unset;
          padding-top: 20px;
        }
      }
      @media ${device.sm} {
        flex-direction: column;
        align-items: center;
      }
    }
    &__slider {
      .slick-dots {
        bottom: 10%;
        width: unset;
        left: 550px;
        li {
          width: 75px;
          height: 6px;
          button {
            width: 75px;
            height: 6px;
            padding: 0;
            ::before {
              width: 100%;
              height: 6px;
              font-family: unset;
              background-color: #dbdbdb;
              font-size: unset;
              opacity: 1;
            }
          }
          &.slick-active {
            button {
              ::before {
                background-color: ${({ theme }) => theme.primary};
              }
            }
          }
        }
        @media ${device.sm} {
          display: none;
        }
        @media ${device.sm} {
          right: 0;
          bottom: 0;
        }
        @media ${device.xs} {
          display: none !important;
        }
      }
    }
  }
`;

export const ClientsShapeWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 65%;
  z-index: -1;
  width: 550px;
  height: auto;
  svg {
    width: 550px;
    height: auto;
  }
  @media (max-width: 1600px) {
    width: 400px;
    svg {
      width: 400px;
    }
  }
  @media ${device.sm} {
    top: 30%;
    width: 400px;
    svg {
      width: 400px;
    }
  }
  @media ${device.xs} {
    width: 250px;
    top: 50%;
    svg {
      width: 250px;
    }
  }
`;
