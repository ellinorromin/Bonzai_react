import React from "react";
import "./topArticles.css";

//img
//number (string? h1)
//title
//text (p)

interface TopArticle {
  image_src: string;
  rating: number;
  title: string;
  text: string;
}

function TopArticles() {
  const TOP_ARTICLES: TopArticle[] = [
    {
      image_src: "/assets/images/image-retro-pcs.jpg",
      rating: 1, //hardcoded rating, could be number that changes with index
      title: "Reviving Retro PCs",
      text: "What happens when old PCs are given modern upgrades?",
    },
    {
      image_src: "/assets/images/image-top-laptops.jpg",
      rating: 2,
      title: "Top 10 Laptops of 2022",
      text: "Our best picks for various needs and budgets.",
    },
    {
      image_src: "/assets/images/image-gaming-growth.jpg",
      rating: 3,
      title: "The Growth of Gaming",
      text: "How the pandemic has sparked fresh opportunities.",
    },
  ];
  return (
    <section className="topArticleSection">
      {TOP_ARTICLES.map((article: TopArticle) => {
        return (
          <article className="topArticle" key={article.title}>
            <img
              className="topArticle__image"
              src={article.image_src}
              alt={`${article.title} genre image`}
            />
            <div>
              <h1 className="topArticle__h1">
                {article.rating < 10 ? `0${article.rating}` : article.rating}
              </h1>
              <h2 className="topArticle__h2">{article.title}</h2>
              <p className="topArticle__p">{article.text}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default TopArticles;
