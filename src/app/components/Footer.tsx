import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="p-6 ">
      <div className="flex justify-between items-center">
        <div className="flex ">
          <Link target="_blank" href={"https://github.com/iamkiprono"}>
            <FaGithub size={30} />
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/collins-kiprono-b09b33247/"}
          >
            <FaLinkedin size={30} />
          </Link>
          <Link target="_blank" href={"mailto:collinskirui23@gmail.com"}>
            <BiLogoGmail size={30} />
          </Link>
          <Link target="_blank" href={"https://twitter.com/iamkipronoo"}>
            <FaTwitter size={30} />
          </Link>
          <Link target="_blank" href={"https://wa.me/254700362626"}>
            <FaWhatsapp size={30} />
          </Link>
        </div>
        <div>
          <p className="font-bold">{new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
