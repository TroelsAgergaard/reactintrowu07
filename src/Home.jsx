/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch(
    "https://raw.githubusercontent.com/iamshaunjp/Complete-React-Tutorial/lesson-16/dojo-blog/data/db.json"
  );
  return (
    <div className="home">
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {blogs && <BlogList blogs={blogs.blogs} title="All blogs!" />}
    </div>
  );
};

export default Home;
