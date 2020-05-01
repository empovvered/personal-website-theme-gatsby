import styled from "styled-components";
import { device } from "assets/styles/mediaQueries";

const ButtonComponent = styled.button`
  padding: 18px 48px;
  border-radius: 35px;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.textWhite};
  cursor: pointer;

  @media ${device.md} {
    padding: 13px 30px;
    font-size: 1.5rem;
  }
`;

export default ButtonComponent;
