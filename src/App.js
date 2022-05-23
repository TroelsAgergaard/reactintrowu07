/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Navbar from "./Navbar";
import useFetch from "./useFetch";
import { Outlet } from "react-router-dom";

function App() {
  const styles = {
    content: css`
      max-width: 600px;
      margin: 40px auto;
      padding: 20px;
    `,
  };

  return (
    <div className="App">
      <Navbar />
      <div css={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
