/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const BlogList = ({ blogs, title }) => {
  const { theme } = useContext(ThemeContext);

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
    color: css`
      color: ${theme.darkMode ? "#fff" : "#333"};
    `,
  };

  return (
    <div className="blog-list">
      <h2 css={styles.color}>{title}</h2>
      {blogs.map((blog) => (
        <div css={styles.blogpreview} key={blog.id}>
          <h2>{blog.title}</h2>
          <p css={styles.color}>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
