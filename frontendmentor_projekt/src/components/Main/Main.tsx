import React from "react";
import "./main.css";

//nice to have: json file with all the text to avoid hard coding

function Main() {
  return (
    <main>
      <img
        className="mainimage__mobile"
        src="/assets/images/image-web-3-mobile.jpg"
        alt="Genre picture of shapes"
      />
      <h1>The Bright Future of web 3.0?</h1>
      <p>
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <button>READ MORE</button>
    </main>
  );
}

export default Main;
