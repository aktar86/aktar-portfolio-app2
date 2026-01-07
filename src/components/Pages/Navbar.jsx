import React from "react";
import Logo from "../Logo/Logo";
import NavLink from "../NavLink/NavLink";

const Navbar = () => {
  const links = (
    <>
      <NavLink href={"#about"}>About</NavLink>
      <NavLink href={"#education"}>Education</NavLink>
      <NavLink href={"#experience"}>Experience</NavLink>
      <NavLink href={"#contact"}>Contact</NavLink>
    </>
  );
  return (
    <header className="flex-wrap">
      <Logo />

      <div className="flex-wrap">
        <nav>
          <ul className="space-x-2">{links}</ul>
        </nav>

        <button className="btn-primary">Let's Talk</button>
      </div>
    </header>
  );
};

export default Navbar;
