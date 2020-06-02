import React from "react";
import { BlogItemWrapper } from "components/BlogItem/BlogItemStyles";
import { Link } from "gatsby";

const BlogItem = () => (
  <BlogItemWrapper>
    <article className="blog-item">
      <h5 className="sub-title blog-item__subtitle">Silvia Natalia</h5>
      <small className="small blog-item__date">25 December 2019</small>
      <Link to="/">
        <h4 className="blog-item__title">Stock growth hacking MVP value</h4>
      </Link>
      <Link to="/" className="blog-item__link" />
    </article>
  </BlogItemWrapper>
);

export default BlogItem;
