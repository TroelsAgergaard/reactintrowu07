/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "./Button";
import Home from "./Home";
import Input from "./Input";
import Navbar from "./Navbar";

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
        <Input />
        <Home />
      </div>
    </div>
  );
}

export default App;
