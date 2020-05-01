import styled from "styled-components";
import { device } from "assets/styles/mediaQueries";

const ButtonComponent = styled.button`
  padding: 18px 48px;
  border-radius: 35px;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.textWhite};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
    transform: translateY(-5px);
  }

  @media ${device.md} {
    padding: 13px 30px;
    font-size: 1.5rem;
  }
`;

export default ButtonComponent;
