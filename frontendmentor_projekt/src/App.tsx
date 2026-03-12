import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import New from "./components/New/New";
import TopArticles from "./components/TopArticles/TopArticles";

function App() {
  return (
    <>
      <Header />
      <Main />
      <New />
      <TopArticles />
      {/**
       * MOBILE FIRST
       * X Header with logo and hamburger. Display menu onclick.
       * X Main: Top article, image, h1, p, button
       * X New article previews: H1, h2, p per article. 3 articles to be mapped out inside component.
       * Top 3 articles previews: H1, h2, p, image. Create 1 component for each article?
       * */}
    </>
  );
}

export default App;
