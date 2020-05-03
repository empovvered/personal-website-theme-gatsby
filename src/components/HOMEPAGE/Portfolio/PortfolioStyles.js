import styled, { css } from "styled-components";
import { device } from "assets/styles/mediaQueries";
import ButtonComponent from "components/Button/Button";

export const PortfolioComponent = styled.section`
  opacity: 0;
  .portfolio {
    &__headings {
      background-color: ${({ theme }) => theme.primary};
      padding: 136px 0 108px;
      &__title {
        color: ${({ theme }) => theme.textWhite};
        p {
          max-width: 330px;
        }
      }
      &__nav {
        margin: 33px 0;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        ul {
          padding: 0;
          margin: 0;
          list-style: none;
          display: flex;
          @media ${device.sm} {
            flex-direction: column;
          }
        }
        @media ${device.sm} {
          align-items: center;
        }
      }
      @media ${device.sm} {
        padding: 75px 0 50px;
      }
      @media ${device.xs} {
        padding: 50px 0 35px;
      }
    }
    &__grid {
      &__item {
        padding: 0;
        transition: all 0.2s ease-in-out;
        figure {
          position: relative;
          figcaption {
            position: absolute;
            color: ${({ theme }) => theme.textWhite};
            width: 100%;
            height: 33%;
            bottom: 0;
            background-color: ${({ theme }) => theme.primary};
            flex-direction: column;
            justify-content: center;
            align-items: center;
            visibility: hidden;
            opacity: 0;
            pointer-events: none;
            display: flex;
            transition: all 0.2s 0.2s ease-in-out;
            cursor: pointer;
            small {
              margin-bottom: 12px;
            }
          }
        }
        :hover {
          transform: scale(1.1);
          z-index: 1;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          figcaption {
            visibility: visible;
            opacity: 1;
            pointer-events: all;
          }
        }
      }
    }
  }
`;

export const AboutNavItem = styled.button`
  margin-right: 41px;
  cursor: pointer;
  position: relative;
  text-transform: capitalize;
  background-color: transparent;
  border: 0;
  display: block;
  color: ${({ theme }) => theme.textWhite};
  :after {
    content: "";
    background-color: ${({ theme }) => theme.textWhite};
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 2px;
    transform: scale(0);
  }
  @media ${device.xs} {
    margin-right: 10px;
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

export const StyledButtonComponent = styled(ButtonComponent)`
  background-color: ${({ theme }) => theme.textWhite};
  color: ${({ theme }) => theme.primary};
`;
