import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-6">
        <Link className="border border-green-300 px-2 rounded" href={"/"}>
          Collins
        </Link>
        <div>
          <Link className="ml-4" href={"/"}>Home</Link>
          <Link className="ml-4" href={"about"}>About</Link>
          <Link className="ml-4" href={"skills"}>Skills</Link>
          <Link className="ml-4" href={"contact"}>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
