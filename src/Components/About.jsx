import React from "react";
import { FaCalendar } from "react-icons/fa";
import aboutData from "./AboutData";
import skillData from "./AboutSkillData";
import { educationData } from "./EducationData";
import experienceData from "./Experience";
import PageTitle from "./PageTitle";
import Button from "./Button";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <PageTitle text={"About"} />
        <div className="row">
          <div
            className="about-content padd-15"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="row" data-aos="zoom-in" data-aos-duration="1000">
              <div className="about-text padd-15">
                <h3>Hello, I'm Tahmid</h3>
                <p>
                  A skilled MERN stack web developer. With a passion for
                  creating seamless digital experiences, I specialize in
                  crafting efficient and user friendly applications. My
                  expertise spans Html5, CSS3, Bootstrap5, Javascript, ES6,
                  React Router, React.js, Node.js, Express.js, MongoDB, allowing
                  me to deliver end-to-end solutions. I thrive on challenges,
                  continuously learn, and am committed to turning your ideas
                  into powerful online realities. Let's collaborate and build
                  something extraordinary.
                </p>
              </div>
            </div>
            <div className="row" data-aos="zoom-in" data-aos-duration="1000">
              <div
                className="personal-info padd-15"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="row">
                  {aboutData.map((data, index) => {
                    const { id, title, desc } = data;

                    return (
                      <div className="info-item padd-15" key={id}>
                        <p>
                          {title} : <span>{desc}</span>
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="row">
                  <div className="buttons padd-15">
                    <a
                      href="https://drive.google.com/file/d/1gPgiaKm-paq2LMobpZzDPEFnsS03Aika/view?usp=sharing"
                      className="btn "
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                      target="_blank"
                    >
                      Preview CV
                    </a>
                    <Button text={"Hire Me"} />
                  </div>
                </div>
              </div>
              <div
                className="skills padd-15"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="row">
                  {skillData.map((skill) => {
                    const { id, name, percent } = skill;
                    return (
                      <div className="skill-item padd-15" key={id}>
                        <h5>{name}</h5>
                        <div className="progress">
                          <div
                            className="progress-in"
                            style={{ width: `${percent}%` }}
                          ></div>
                          <div className="skill-percent">{`${percent}%`}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" data-aos="zoom-in" data-aos-duration="1000">
          <div
            className="education padd-15"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h3 className="title">Education</h3>
            <div className="row">
              <div className="timeline-box padd-15">
                <div className="timeline shadow-dark">
                  {educationData.map((edu) => {
                    const { id, title, desc, period } = edu;
                    return (
                      <div className="timeline-item" key={id}>
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <FaCalendar style={{ marginRight: "5px" }} />
                          {period}
                        </h3>
                        <h4 className="timeline-title">{title}</h4>
                        <p className="timeline-text">{desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div
            className="experience padd-15"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h3 className="title">Experience</h3>
            <div className="row">
              <div className="timeline-box padd-15">
                <div className="timeline shadow-dark">
                  {experienceData.map((edu) => {
                    const { id, title, desc, period } = edu;
                    return (
                      <div className="timeline-item" key={id}>
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <FaCalendar style={{ marginRight: "5px" }} />
                          {period}
                        </h3>
                        <h4 className="timeline-title">{title}</h4>
                        <p className="timeline-text">{desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
