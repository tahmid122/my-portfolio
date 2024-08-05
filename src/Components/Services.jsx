import React, { useEffect } from "react";
import serviceData from "./ServiceData";
import PageTitle from "./PageTitle";

const Services = () => {
  return (
    <section className="service section" id="services">
      <div className="container">
        <PageTitle text={"Services"} />
        <div className="row">
          {serviceData.map((service, index) => {
            const { logo, title, desc } = service;
            return (
              <div
                className="service-item padd-15"
                key={index}
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="service-item-inner">
                  <div className="icon">{logo}</div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
