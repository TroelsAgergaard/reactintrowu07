/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import DarkModeToggle from "react-dark-mode-toggle";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const styles = {
    navbar: css`
      padding: 20px;
      display: flex;
      align-items: center;
      max-width: 600px;
      margin: 0 auto;
      border-bottom: 1px solid #f2f2f2;
      & a {
        margin-left: 16px;
        text-decoration: none;
        padding: 6px;
        &:hover {
          color: #f1356d;
        }
      }
    `,
    heading: css`
      color: #f1356d;
    `,
    linkcolor: css`
      color: ${theme.darkMode ? "#fff" : "#333"};
    `,
    links: css`
      margin-left: auto;
      margin-right: 20px;
    `,
  };

  return (
    <nav css={styles.navbar}>
      <h1 css={styles.heading}>The Dojo Blog</h1>
      <div css={styles.links}>
        <Link css={styles.linkcolor} to="/home">
          Home
        </Link>
        <Link css={styles.linkcolor} to="/create">
          New Blog
        </Link>
      </div>
      <DarkModeToggle
        onChange={() => setTheme({ darkMode: !theme.darkMode })}
        checked={theme.darkMode}
        size={60}
      />
    </nav>
  );
};

export default Navbar;
