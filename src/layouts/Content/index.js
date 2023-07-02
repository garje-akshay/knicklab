import React from "react";
import "./index.css";

function Content() {
  return (
    <div className="content">
      <h1
        style={{
          fontFamily: "'Edu NSW ACT Foundation', cursive",
          marginTop: 20,
          marginBottom: 0,
        }}
      >
        KnickLab
      </h1>
      <h5 style={{ margin: 0 }}>by Akshay Garje.</h5>

      <div className="aboutme-section">
        <div className="content">
          <h3 style={{ margin: "30px 0 10px 0" }}> About me. </h3>
          <div className="profile-pic">
            <ul>
              <li style={{ minHeight: 100, minWidth: 100 }}>
                <img src="../../assets/images/me.png" alt="akshay garje" />
              </li>
            </ul>
          </div>
          <p style={{ maxWidth: "50vw" }}>
            Hi, I am Akshay Garje, a {new Date().getFullYear() - 1997} years old
            Web developer living in{" "}
            <a href="https://goo.gl/maps/U6YWoFzZ9SP4MWNSA">Pune, India.</a> I
            am a Software Engineer, currently working with awesome folks at{" "}
            <a href="https://www.gyaan.ai/">Gyaan</a>. Have a look at skills or
            just connect with me on LinkedIn. I am always excited to connect
            with like minded people, lets discuss over coffee. Cheers!!
          </p>

          <h3 style={{ margin: "10px 0 0 0" }}> Skills. </h3>
          <div style={{ display: "flex" }}>
            <ul
              style={{
                textAlign: "start",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <li>Javascript</li>
              <li>React JS</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <ul
              style={{
                textAlign: "start",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <li>Typescript</li>
              <li>Janus</li>
              <li>Material UI</li>
              <li>Redux</li>
            </ul>
          </div>
          <span style={{ margin: "20px 0 0 0" }}>
            <a href="https://www.linkedin.com/in/garjeakshay/">
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
          <div className="blockquote-wrapper">
            <div className="blockquote">
              <h2>
                <span style={{ color: "#000000" }}>
                  If four things are followed, then anything can be achieved.
                  having a great aim, acquiring knowledge, hard work, and
                  perseverance.
                </span>
              </h2>
              <h4>Dr. A.P.J. Abdul Kalam</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
