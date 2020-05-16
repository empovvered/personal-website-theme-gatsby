import styled from "styled-components";
import rigthArrow from "assets/icons/right-arrow.svg";
import { device } from "assets/styles/mediaQueries";

const ExpertiseComponent = styled.section`
  padding: 157px 0 33px;
  opacity: 0;
  .expertise {
    &__headings {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 80px;
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
    &__content {
      > div {
        :hover {
          transform: scale(1.03);
        }
        :nth-child(2) {
          transform: translateY(-40px);
          @media ${device.sm} {
            transform: none;
          }
        }
        :last-child > div {
          @media ${device.xs} {
            margin-bottom: 0;
          }
        }
      }
    }
    &__box {
      padding: 55px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      border-radius: 18px;
      transition: transform 0.3s cubic-bezier(0, 0, 0.11, -1.53);
      svg {
        margin-bottom: 20px;
      }
      h4 {
        font-weight: 500;
        text-align: center;
      }
      p {
        max-width: 75%;
        text-align: center;
        color: ${({ theme }) => theme.textGray};
        @media ${device.xs} {
          max-width: unset;
        }
      }
      a {
        position: relative;
        color: #159eff;
        ::after {
          content: "";
          background-image: url(${rigthArrow});
          width: 20px;
          height: 11px;
          position: absolute;
          background-size: 100%;
          background-repeat: no-repeat;
          top: 60%;
          transform: translateY(-50%) translateX(75%);
          transition: transform 0.3s ease-in-out;
          right: -10px;
        }
        :hover {
          ::after {
            transform: translateY(-50%) translateX(100%);
          }
        }
      }
      @media ${device.sm} {
        margin-bottom: 45px;
        padding: 30px 12px;
      }
    }
  }
  @media ${device.sm} {
    padding: 50px 0 20px;
  }
`;

export default ExpertiseComponent;
