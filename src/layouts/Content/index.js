import React from "react";
import "./index.css";

function Content() {
  return (
    <div className="content">
      <h1
        style={{
          fontFamily: "'Edu NSW ACT Foundation', cursive",
          marginTop: 10,
          margin: 0,
        }}
      >
        KnickLab
      </h1>
      <h4 style={{ margin: 0 }}>by Akshay Garje.</h4>
      <h3 style={{ margin: "50px 0 0 5px" }}> About me. </h3>
      <p
        style={{
          maxWidth: "50vw",
          marginBottom: "20px",
        }}
      >
        Hi, I am Akshay Garje, a {new Date().getFullYear() - 1997} years old Web
        developer living in{" "}
        <a href="https://goo.gl/maps/U6YWoFzZ9SP4MWNSA" Content="Pune">
          Pune, India.
        </a>{" "}
        I am an IT Engineer, currently working with awesome folks at{" "}
        <a href="https://www.gslab.com/" Content="GS Lab">
          GS Lab
        </a>
        . Have a look at skills or just connect with me on LinkedIn. I am always
        excited to do business with like minded people, lets discuss over
        coffee. Cheers!!
      </p>
      <span>
        <a
          href="https://www.linkedin.com/in/akshaygarje/"
          Content="LinkedIn"
          class="fa fa-linkedin"
        ></a>
        <a
          href="mailto:akshay.garje@outlook.com"
          Content="Email"
          class="fa fa-envelope"
        ></a>
      </span>
    </div>
  );
}

export default Content;
