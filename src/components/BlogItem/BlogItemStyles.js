import styled from "styled-components";
import rigthArrow from "assets/icons/right-arrow.svg";

export const BlogItemWrapper = styled.div`
  .blog-item {
    padding: 30px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    height: 222px;
    justify-content: space-between;
    border-radius: 18px;
    margin-bottom: 20px;
    transition: transform 0.3s cubic-bezier(0, 0, 0.11, -1.53);
    &__subtitle {
      font-weight: 400;
    }
    &__date {
      color: ${({ theme }) => theme.colors.textGray};
    }
    &__title {
      color: ${({ theme }) => theme.colors.textLink};
      font-weight: 400;
    }
    &__link {
      background-image: url(${rigthArrow});
      width: 29px;
      height: 29px;
      background-repeat: no-repeat;
      background-size: 100%;
      background-position-y: 50%;
      margin-left: auto;
    }
    :hover {
      transform: scale(1.03);
    }
  }
`;
