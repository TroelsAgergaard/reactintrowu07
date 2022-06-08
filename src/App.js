/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Navbar from "./Navbar";
import useFetch from "./useFetch";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

function App() {
  const [theme, setTheme] = useState({
    darkMode: false,
    light: "#fff",
    dark: "#333",
  });

  const styles = {
    content: css`
      max-width: 600px;
      margin: 40px auto;
      padding: 20px;
      height: 100vh;
    `,
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme.darkMode ? "dark-mode" : ""}>
        <Navbar />
        <div css={styles.content}>
          <Outlet />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
