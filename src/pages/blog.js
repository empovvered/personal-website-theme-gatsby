import React, { useEffect, useRef } from "react";
import MainLayout from "layouts/MainLayout";
import BlogItem from "components/BlogItem/BlogItem";
import styled from "styled-components";
import { device } from "assets/styles/mediaQueries";
import gsap from "gsap";
import { useQueryPosts } from "hooks/useQueryPosts";

const BlogPageWrapper = styled.div`
  padding: 150px 0 50px;
  @media ${device.md} {
    padding: 100px 0;
  }
`;

const BlogPage = () => {
  const blogData = useQueryPosts();
  const blogSectionWrapper = useRef(null);

  useEffect(() => {
    const introSection = blogSectionWrapper.current;

    gsap.set(introSection, { y: 50, autoAlpha: 0 });

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    tl.to(introSection, { y: 0, autoAlpha: 1, duration: 1 });
  });

  return (
    <MainLayout>
      <BlogPageWrapper ref={blogSectionWrapper}>
        <div className="container">
          <h1 className="d3">Blog</h1>
          <div className="row">
            {blogData.map((post) => (
              <div key={post.id} className="col-xl-3 col-lg-4 col-sm-6">
                <BlogItem
                  title={post.title}
                  date={post.date}
                  author={post.author.name}
                  uri={post.uri}
                />
              </div>
            ))}
          </div>
        </div>
      </BlogPageWrapper>
    </MainLayout>
  );
};

export default BlogPage;
