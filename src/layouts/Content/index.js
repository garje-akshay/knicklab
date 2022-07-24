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
      <div className="aboutme-section">
        <div className="content">
          <ul>
            <li style={{ minHeight: 100, minWidth: 100 }}>
              <img src="../../assets/images/me.png" alt="akshay garje" />
            </li>
          </ul>
          <p style={{ maxWidth: "50vw" }}>
            Hi, I am Akshay Garje, a {new Date().getFullYear() - 1997} years old
            Web developer living in{" "}
            <a href="https://goo.gl/maps/U6YWoFzZ9SP4MWNSA">Pune, India.</a> I
            am an IT Engineer, currently working with awesome folks at{" "}
            <a href="https://www.gslab.com/">GS Lab</a>. Have a look at skills
            or just connect with me on LinkedIn. I am always excited to do
            business with like minded people, lets discuss over coffee. Cheers!!
          </p>
          <span>
            <a href="https://www.linkedin.com/in/akshaygarje/">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="mailto:akshay.garje@outlook.com">
              <i className="fa fa-envelope"></i>
            </a>

            <a href="https://github.com/garje-akshay">
              <i className="fa fa-github"></i>
            </a>

            <a href="http://wa.me/+919168098066">
              <i className="fa fa-whatsapp"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Content;
