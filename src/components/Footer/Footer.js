import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="github">
          <h5 className="footer-title">Repository</h5>
          <a target="blank" href="https://github.com/Mario-Coro/desafios-react">
            <img
              className="social-icon"
              src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
              alt=""
            />
          </a>
        </div>
        <div className="about">
          <h5 className="footer-title">About</h5>
          <p className="description">
            This is a fictional eccomerce made with React
          </p>
        </div>
      </section>
      <p className="copyright">© 2022 Copyright HoopStore</p>
    </footer>
  );
};

export default Footer;
