import React from "react";
import PropTypes from "prop-types";
import { BlogItemWrapper } from "components/BlogItem/BlogItemStyles";
import { Link } from "gatsby";

const BlogItem = ({ title, date, author, uri }) => (
  <BlogItemWrapper>
    <article className="blog-item">
      <h5 className="sub-title blog-item__subtitle">{author}</h5>
      <small className="small blog-item__date">{date}</small>
      <Link to={uri}>
        <h4 className="blog-item__title">{title}</h4>
      </Link>
      <Link to={uri} className="blog-item__link" />
    </article>
  </BlogItemWrapper>
);

BlogItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
};

export default BlogItem;
