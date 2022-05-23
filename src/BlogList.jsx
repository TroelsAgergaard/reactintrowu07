/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const BlogList = ({ blogs, title }) => {
  // const blogs = props.blogs;

  const styles = {
    blogpreview: css`
      padding: 10px 16px;
      margin: 20px 0;
      border-bottom: 1px solid #fafafa;
      &:hover {
        box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
      }
      & h2 {
        font-size: 20px;
        color: #f1356d;
        margin-bottom: 8px;
      }
    `,
  };

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div css={styles.blogpreview} key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
