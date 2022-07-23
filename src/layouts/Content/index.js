import React from "react";
import "./index.css";

function Content() {
  return (
    <div className="content">
      <h1
        style={{
          fontFamily: "'Edu NSW ACT Foundation', cursive",
          margin: 10,
        }}
      >
        KnickLab
      </h1>
      <h4>by Akshay Garje.</h4>
      <h3> About me </h3>
      <p
        style={{
          maxWidth: "50vw",
        }}
      >
        Hi I am Akshay Garje, a 25 year old Web developer living in Pune, India.
        I am an IT Engineer, currently working with awesome folks at GS Lab.
        Have a look at skills or just connect with me on LinkedIn. I am always
        excited to do business with like minded people, lets discuss over
        coffee.
      </p>
    </div>
  );
}

export default Content;
