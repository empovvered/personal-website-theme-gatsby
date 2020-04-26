import styled from "styled-components";

const ButtonComponent = styled.button`
  padding: 18px 48px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.font.size.title};
  color: ${({ theme }) => theme.textWhite};
  cursor: pointer;
`;

export default ButtonComponent;
