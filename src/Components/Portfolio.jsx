import React, { useState } from "react";
import portfolioData from "./Portfoliodata";
import portfolioData2 from "./Portfoliodata2";
import PageTitle from "./PageTitle";
import VideoPlayer from "./VideoPlayer";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
const Portfolio = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [video, setVideo] = useState();
  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <PageTitle text={"Portfolio"} />
        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2>My Last Projects :</h2>
          </div>
        </div>
        <div className="row" style={{ position: "relative" }}>
          {portfolioData.map((portfolio, index) => {
            const { image, name, live, github } = portfolio;
            return (
              <div
                className="portfolio-item padd-15"
                key={index}
                onClick={() => {
                  setIsTrue(true);
                  setVideo(video);
                  setName(name);
                }}
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="portfolio-item-inner shadow-dark">
                  <div className="portfolio-img">
                    <img src={image} alt="image" />
                  </div>
                  <div className="practice">
                    <h2 style={{ color: "white" }}>{name}</h2>

                    <div className="icons-buttons">
                      <a href={github} className="port-btn" target="_blank">
                        <FaGithub className="port-icon" />
                        Github
                      </a>
                      <a href={live} className="port-btn" target="_blank">
                        <FaGlobe className="port-icon" />
                        Live
                      </a>
                      {/* <button className="btn">Live</button> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
