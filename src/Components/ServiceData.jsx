import { FaMobileAlt } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaBugSlash } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";

const serviceData = [
  {
    logo: <CgWebsite className="service-icon" />,
    title: "Web Design",
    desc: "In the realm of web design, I focus on creating visually stunning and intuitive interfaces. Leveraging my creativity and attention to detail, I strive to enhance the overall aesthetics and user experience of websites. My designs are not just visually appealing but also functional, ensuring a delightful user journey.",
  },
  {
    logo: <FaLaptopCode className="service-icon" />,
    title: "Web Development",
    desc: "As a web developer, I specialize in crafting responsive and dynamic web applications using cutting-edge technologies such as React for the front end. My goal is to create seamless and user-friendly experiences that meet the unique needs of each project.",
  },
  {
    logo: <FaBugSlash className="service-icon" />,
    title: "Bug Fixing",
    desc: "As a junior developer, I am adept at identifying and resolving software bugs to ensure the smooth operation of web applications. My experience includes tackling a variety of issues, ranging from minor glitches to more complex challenges. I am committed to delivering reliable and bug-free solutions, contributing to the overall stability of the codebase.",
  },
  {
    logo: <FaMobileAlt className="service-icon" />,
    title: "Responsive Web Design",
    desc: "In the era of diverse devices, I specialize in optimizing web applications for various screen sizes, ensuring a seamless user experience across desktops, tablets, and smartphones. By implementing responsive design principles, I aim to make your web presence accessible and visually appealing on all platforms.",
  },
];
export default serviceData;
