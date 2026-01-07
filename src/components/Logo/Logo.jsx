import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"#hero"} className="text-3xl font-black tracking-tighter">
      Aktar<span className="text-cyan-300 ">.</span>
    </Link>
  );
};

export default Logo;
