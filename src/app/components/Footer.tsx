import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="p-6 ">
      <div className="flex justify-between items-center">
      <div className="flex ">
        <Link target="_blank" href={"https://github.com/iamkiprono"}>
          <FaGithub size={30} />
        </Link>
        <Link target="_blank" href={"https://github.com/iamkiprono"}>
          <FaWhatsapp size={30} />
        </Link>
        <Link target="_blank" href={"https://github.com/iamkiprono"}>
          <FaLinkedin size={30} />
        </Link>
        <Link target="_blank" href={"https://github.com/iamkiprono"}>
          <BiLogoGmail size={30} />
        </Link>
      </div>
      <div><p className="font-bold">2023</p></div>
      </div>
    </div>
  );
};

export default Footer;
