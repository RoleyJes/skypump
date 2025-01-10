import Logo from "./Logo";
// import ButtonLink from "../ButtonLink";
// import Navlinks from "./Navlinks";
// import MobileNav from "./MobileNav";
import hamburger from "../../assets/navbar/Hamburger.svg";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBgColor, setNavbarBgColor] = useState(false);

  const handleNavBgColor = () => {
    if (window.scrollY >= 80) {
      setNavbarBgColor(true);
    } else {
      setNavbarBgColor(false);
    }
  };

  window.addEventListener("scroll", handleNavBgColor);

  const toggleNavbar = () => {
    setIsOpen((open) => !open);
    if (!navbarBgColor) setNavbarBgColor(true);
  };

  return (
    <header
      className={`fixed top-0 z-50 left-1/2 -translate-x-1/2 w-full transition-all duration-300 ease-linear overflow-hidden ${
        isOpen ? "h-[18rem]" : "h-[85px]"
      } ${navbarBgColor ? "bg-black/50 backdrop-blur-md" : ""}`}>
      <nav className="max-w-[77.125rem] mx-auto px-[1.15rem] py-2 flex justify-between items-center">
        <Logo />

        {/* Desktop */}
        {/* <ul className="hidden lg:flex items-center gap-11">
          <Navlinks />
        </ul> */}

        {/* <div className="hidden lg:block">
          <ButtonLink to="/" text="Contact us" style="" />
        </div> */}

        {/* Mobile */}
        <button className="lg:hidden" onClick={toggleNavbar}>
          {isOpen ? <p>X</p> : <img src={hamburger} alt="" />}
        </button>
      </nav>

      {/* <MobileNav /> */}
    </header>
  );
}
