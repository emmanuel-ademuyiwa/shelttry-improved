import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Hero from "../Hero/Hero";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [screen, setScreen] = useState(false);


  function handleNav() {
    setNav(!nav);
  }

  useEffect(() => {
    window.addEventListener('scroll', function(){
      if (window.pageYOffset === 0){
        setScreen(false)
      } else { 
        setScreen(true)
      }
    })
  }, []);

  return (
    <header>
      <div className="continer">
        <nav className={screen ? "navBg" : ""}>
          <div className="logo">
            Sheltt<span>ry</span>
          </div>
          <ul className="desktopNav">
            <li data-animation-offset="1.0">Home</li>
            <li data-animation-offset="1.5">Explore</li>
            <li data-animation-offset="2.0">Dashboard</li>
          </ul>
          <FaBars onClick={handleNav} className="bar" />
        </nav>
      </div>
      <div className={nav ? "mobileNav" : "up"}>
        <ul>
          <li>Home</li>
          <li>Explore</li>
          <li>Dashboard</li>
        </ul>
      </div>

      <Hero />
    </header>
  );
};

export default Navbar;
