import React from "react";
import Button from "./Button";
import TypeWritter from "./TypeWritter";
import SocialMedia from "./SocialMedia";
const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="container">
        <div className="row" id="flex-home">
          <div
            className="home-info padd-15"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h3 className="hello">HELLO THERE,</h3>
            <h2 className="name">
              I'M <span style={{ color: "#1854b4" }}>TAHMID,</span>
            </h2>
            <h3 className="my-profession">
              <TypeWritter
                texts={[
                  " Web Developer.",
                  " FrontEnd Developer.",
                  "MERN stack Developer.",
                  "React Developer.",
                  "Web Designer.",
                ]}
              />
            </h3>
            <p>
              Experienced MERN stack developer skilled in Html, CSS, Bootstrap,
              Javascript, ES6, React Router, React.js, Node.js, Express.js,
              MongoDB With a blend of creativity and technical skills, I bring
              websites to life, transforming ideas into interactive realities.
            </p>
            <div className="hire-me">
              <Button text={"Hire Me"} />
            </div>
            <div className="social">
              <span>CONNECT WITH ME</span>
              <SocialMedia />
            </div>
          </div>
          <div className="home-img" data-aos="flip-up" data-aos-duration="3000">
            <img src="Images/tahmid.jpg" alt="" />
            <div className="practice2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
