"use client";
import React, { useState } from "react";
import Logo from "../Logo/Logo";
import NavLink from "../NavLink/NavLink";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = (
    <>
      <NavLink href={"#about"}>About</NavLink>
      <NavLink href={"#education"}>Education</NavLink>
      <NavLink href={"#experience"}>Experience</NavLink>
      <NavLink href={"#contact"}>Contact</NavLink>
    </>
  );
  return (
    <header className="flex justify-between items-center gap-5 sticky top-0 z-50 py-5 border border-gray-700 rounded-full px-5 bg-slate-900 ">
      <Logo />

      <div className=" hidden lg:flex justify-between items-center gap-5">
        <nav>
          <ul className="space-x-2">{links}</ul>
        </nav>

        <button className="btn-primary">Let's Talk</button>
      </div>

      {/* phone nav */}
      <div className="flex flex-row-reverse lg:hidden">
        <button onClick={() => setOpen(!open)}>
          {open ? <X></X> : <Menu></Menu>}
        </button>
        <nav className="relative ">
          <ul
            className={` bg-slate-900 p-10 w-xs rounded-2xl shadow-2xl absolute ${
              open ? "top-10 -right-10 " : "-top-100 "
            } flex flex-col text-right space-y-3  border border-slate-500 `}
          >
            {links}
            <NavLink href={"#"}>Let's Talk</NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
