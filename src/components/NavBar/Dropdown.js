import React, { useState } from "react";
import { historyDropdown } from "./NavItems";
import "./Dropdown.css";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      ><div className="shadow-lg bg-white pt-2 pb-2 rounded-b-lg">
        {historyDropdown.map((item) => {
          return (
            <div className="border-b-2 w-full bg-white">
            <li key={item.id} >
              <a href={`#${item.id}`} onClick={()=> {setDropdown(false);}} className="hover:text-[#D07D45]">{item.title}</a>
            </li>
            </div>
          );
        })}
        </div>
      </ul>
    </>
  );
}

export default Dropdown;
