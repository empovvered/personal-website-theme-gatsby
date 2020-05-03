import styled from "styled-components";
import { device } from "assets/styles/mediaQueries";

export const FooterComponent = styled.footer`
  .footer {
    align-items: center;
    flex-direction: column;
    > * {
      margin-bottom: 30px;
      :last-child {
        margin-bottom: 60px;
      }
    }
    @media ${device.sm} {
      > *:not(.footer__copyright) {
        display: none;
      }
    }
    &__copyright {
      color: ${({ theme }) => theme.textGray};
    }
  }
`;
