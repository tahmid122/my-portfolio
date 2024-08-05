import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const contactData = [
  {
    icon: <FaPhone className="contact-icons" />,
    title: "Call Me On",
    desc: <a href="tel:+880 1318195591">013xxxx5591</a>,
  },
  {
    icon: <FaLocationDot className="contact-icons" />,
    title: "Office",
    desc: "Dhaperhat, Rangpur",
  },
  {
    icon: <FaEnvelope className="contact-icons" />,
    title: "Email",
    desc: <a href="mailto:tahmid098alam567@gmail.com">Click Here</a>,
  },
  {
    icon: <FaGlobe className="contact-icons" />,
    title: "Website",
    desc: <a href="https://tahmidalam.netlify.app">mdtahmidalam.com</a>,
  },
];

export default contactData;
