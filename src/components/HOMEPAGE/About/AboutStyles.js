import styled, { css } from "styled-components";
import { device } from "assets/styles/mediaQueries";
import ButtonComponent from "components/Button/Button";

export const AboutShapeWrapper = styled.div`
  position: absolute;
  left: 0;
  top: -200px;
  z-index: -1;
  width: 900px;
  height: auto;
  svg {
    width: 900px;
    height: auto;
  }
  @media (max-width: 1600px) {
    width: 500px;
    top: 0;
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

export const AboutComponent = styled.section`
  padding-top: 75px;
  position: relative;
  opacity: 0;
  visibility: hidden;
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

export const AboutNavItem = styled.button`
  margin-right: 41px;
  cursor: pointer;
  position: relative;
  text-transform: capitalize;
  background-color: transparent;
  border: 0;
  display: block;
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
  margin-top: 30px;
  @media ${device.md} {
    display: block;
    margin-left: auto;
  }
  @media ${device.xs} {
    margin: 30px auto 0;
  }
`;
