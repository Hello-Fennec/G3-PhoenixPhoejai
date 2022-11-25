import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";
import Headline2 from "/Users/jiraplxs/Desktop/g3-phoenixphoejai/src/Picture/Headline.png";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
    <span>
 <nav className="navbar sticky top-0 z-40">
        <a href="/">
      <img src={Headline2} className="absolute h-[150px] w-[175px] left-[0px] top-[-30px] object-cover"></img>
       </a> <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "History") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <a href={`#${item.id}`} >{item.title}</a>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <a href={`#${item.id}`} >{item.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>

    </span>
     
    </>
  );
}

export default Navbar;
