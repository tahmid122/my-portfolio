import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const SocialMedia = () => {
  return (
    <div className="social-media" data-aos="zoom-in" data-aos-duration="1000">
      <div className="social-icon">
        <a href="https://www.facebook.com/TahmidAlamJG" title="Facebook">
          <FaFacebookF />
        </a>
      </div>
      <div className="social-icon">
        <a href="https://www.linkedin.com/in/tahmidalamjg/" title="Linkedin">
          <FaLinkedinIn />
        </a>
      </div>
      <div className="social-icon">
        <a href="https://github.com/tahmid122" title="Github">
          <FaGithub />
        </a>
      </div>
      <div className="social-icon">
        <a href="#" title="Instagram">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
