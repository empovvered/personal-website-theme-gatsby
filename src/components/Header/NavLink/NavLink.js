import styled from "styled-components";
import { Link } from "gatsby";

const NavLinkComponent = styled(Link)`
  font-size: 1.6rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textBlack};
  font-weight: 500;
  position: relative;

  ::after {
    content: "";
    background-color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 2px;
    transition: width 0.5s ease-in-out;
  }

  :hover::after {
    width: 50%;
  }
  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default NavLinkComponent;
