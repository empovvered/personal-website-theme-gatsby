import styled from "styled-components";
import { Link } from "gatsby";

const NavLinkComponent = styled(Link)`
  font-size: ${({ theme }) => theme.font.size.title};
  text-decoration: none;
  color: ${({ theme }) => theme.textBlack};
  font-weight: 500;
  position: relative;

  ::after {
    content: "";
    background-color: ${({ theme }) => theme.primary};
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
`;

export default NavLinkComponent;
