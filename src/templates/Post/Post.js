import React from "react";
import PropTypes, { shape } from "prop-types";
import MainLayout from "layouts/MainLayout";
import styled from "styled-components";
import { device } from "assets/styles/mediaQueries";

const PostPageWrapper = styled.div`
  padding: 100px 0;
  @media ${device.md} {
    padding: 75px 0;
  }
`;

const Page = ({ pageContext }) => (
  <MainLayout>
    <PostPageWrapper>
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            <h1>{pageContext.title}</h1>
            <img
              src={
                pageContext.featuredImage.imageFile.childImageSharp.fluid.src
              }
              srcSet={
                pageContext.featuredImage.imageFile.childImageSharp.fluid.srcSet
              }
              sizes={
                pageContext.featuredImage.imageFile.childImageSharp.fluid.sizes
              }
              alt=""
            />
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
          </div>
        </div>
      </div>
    </PostPageWrapper>
  </MainLayout>
);

Page.propTypes = {
  pageContext: shape({
    title: PropTypes.string.isRequired,
    featuredImage: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Page;
