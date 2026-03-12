import React from "react";
import "./new.css";

interface Preview {
  title: string;
  text: string;
}

function New() {
  const PREVIEWS: Preview[] = [
    {
      title: "Hydrogen VS Electric Cars",
      text: "Will hydrogen fueled cars ever catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      text: "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "Is VC Funding Drying Up?",
      text: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];

  return (
    <section className="newSection">
      <h1 className="newSection__h1">New</h1>
      {PREVIEWS.map((preview: Preview) => {
        return (
          <article className="preview" key={preview.title}>
            <h2 className="preview__title">{preview.title}</h2>
            <p className="preview__text">{preview.text}</p>
            <hr />
            {/**TO FIX: <hr> should only display between articles not before or after */}
          </article>
        );
      })}
    </section>
  );
}

export default New;
