import React from "react";
import contactData from "./ContactData";
import PageTitle from "./PageTitle";
import HaveSend from "./HaveSend";
const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <PageTitle text={"Contact"} />
        <HaveSend
          text1={"Have You Any Question ?"}
          text2={"I'M AT YOUR SERVICES"}
        />
        <div className="row" data-aos="zoom-in" data-aos-duration="1000">
          {contactData.map((contact, index) => {
            const { icon, title, desc } = contact;
            return (
              <div
                className="contact-info-item padd-15"
                key={index}
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="icon">
                  {icon}
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <HaveSend
          text1={"I'M VERY RESPONSIVE TO MESSAGES"}
          text2={"SEND ME AN EMAIL"}
        />
        <div className="row" data-aos="zoom-in" data-aos-duration="1000">
          <form
            action="mailto:tahmid098alam567@gmail.com"
            style={{ width: "100%" }}
          >
            <div className="contact-form padd-15">
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      required
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      name="Message"
                      id=""
                      className="form-control"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <button type="submit" className="btn">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
