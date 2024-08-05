import React, { useState } from "react";
import { FaHouseChimney } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { HiOutlineXMark } from "react-icons/hi2";
import { Link } from "react-scroll";
const Aside = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [left, setLeft] = useState("");

  return (
    <>
      <div className="aside left" style={{ left: left }}>
        <div className="logo">
          <Link
            to="home"
            offset={0}
            smooth={true}
            duration={0}
            spy={true}
            onClick={() => {
              setLeft("");
              setNavToggle(false);
            }}
          >
            <span>T</span>ahmid
          </Link>
        </div>
        <div
          className="nav-toggler"
          onClick={() => {
            setNavToggle(true);
            setLeft("0");
          }}
          style={{ display: `${navToggle ? "none" : "flex"}` }}
        >
          <span></span>
        </div>
        <div
          className="nav-toggeler-2"
          onClick={() => {
            setNavToggle(false);
            setLeft("");
          }}
          style={{ display: `${navToggle ? "flex" : "none"}` }}
        >
          <span>
            <HiOutlineXMark className="x-mark" />
          </span>
        </div>
        <ul className="nav">
          <li>
            <Link
              to="home"
              offset={0}
              smooth={true}
              duration={0}
              spy={true}
              activeClass="active"
              onClick={() => {
                setLeft("");
                setNavToggle(false);
              }}
            >
              <FaHouseChimney className="aside-icons" /> Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              offset={0}
              smooth={true}
              spy={true}
              duration={0}
              onClick={() => {
                setLeft("");
                setNavToggle(false);
              }}
            >
              <FaUser className="aside-icons" />
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              offset={0}
              smooth={true}
              duration={0}
              spy={true}
              onClick={() => {
                setLeft("");
                setNavToggle(false);
              }}
            >
              <FaListUl className="aside-icons" />
              Services
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              offset={0}
              smooth={true}
              duration={0}
              spy={true}
              onClick={() => {
                setLeft("");
                setNavToggle(false);
              }}
            >
              <FaBriefcase className="aside-icons" />
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              offset={0}
              smooth={true}
              duration={0}
              spy={true}
              onClick={() => {
                setLeft("");
                setNavToggle(false);
              }}
            >
              <FaComments className="aside-icons" />
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Aside;
