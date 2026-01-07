import Link from "next/link";
import React from "react";

const NavLink = ({ href, children }) => {
  return (
    <Link href={href} className="hover:text-gray-300">
      {children}
    </Link>
  );
};

export default NavLink;
