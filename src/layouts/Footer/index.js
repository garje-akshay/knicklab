import React from "react";
import "./index.css";

function Footer() {
  return (
    <div className="footer-section">
      <div className="copyright-section">
        <b>No copyright issues.</b> <br />
        Feel free to copy. <br />
        If you need any help, ping me ! <br />
        <br />
        <b>Made with ❤️ in India</b>
        <br />@ {new Date().getFullYear()}
      </div>
      <img
        src="../../assets/images/foot.jpg"
        className="footimage"
        alt="green"
      ></img>
    </div>
  );
}

export default Footer;
