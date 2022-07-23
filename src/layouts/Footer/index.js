import React from "react";

function Footer() {
  return (
    <div>
      <section>
        <img
          src="../../assets/images/cloud.gif"
          style={{
            position: "absolute",
            zIndex: "2",
            top: -30,
            right: 0,
            maxWidth: "30vw",
            height: "auto",
          }}
        ></img>

        <div></div>
        <img
          src="../../assets/images/grass.jpg"
          style={{
            position: "absolute",
            bottom: 0,
            maxWidth: "100vw",
            height: "auto",
          }}
        ></img>
      </section>
    </div>
  );
}

export default Footer;
