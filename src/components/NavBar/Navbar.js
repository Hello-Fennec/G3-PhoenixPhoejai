import React, { useState } from "react";
import "./Navbar.css";
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";
import Headline2 from "../../Picture/Headline.png";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
    <span>
 <nav className="navbar sticky top-0 z-40">
        <a href="/">
        <svg width="640" height="50" viewBox="0 0 640 438" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-12 left-[]">
        <path d="M212.9 307.3C216.7 307.2 235.7 305.9 238.5 305.1C236.1 302.5 194.9 304.1 170.5 255.5C166.2 246.9 163 237.9 164.1 227.9C167 202.4 197 197.9 216.1 209.4C252.1 231 279.4 300.7 329.8 306.9C366.8 311.4 414.4 289.9 438 261.5C437.4 261.4 437.2 261.3 437 261.4C436.6 261.5 436.2 261.6 435.9 261.7C402.6 273.8 341.6 271.4 301.2 246.9C263.6 224.1 248.1 188.2 249.4 172.3C251.2 151 272.3 149.1 285.3 152.7C299.7 156.6 309.7 170.3 324.2 180.1C339.8 190.5 357.1 193.8 375.5 190.4C390.4 187.7 409.9 178.1 412 175.9C410.9 175.8 410.2 175.8 409.5 175.7C403.3 175.1 397.1 174.9 391 174C279.8 157.5 262.1 10.4 138.5 0.899986C94.2 -2.50001 39.1 8.99999 2.2 35.9C1.4 36.5 0.7 37.1 0 37.7C0.1 37.9 0.1 38 0.2 38.2C1 38.2 1.8 38.1 2.6 38C8.9 37 15.1 37.2 21.3 38.3C45.1 42.6 69 61.4 77.2 114.8C82.5 149.1 76.5 165.6 85.2 200.9C104.2 278 176.2 308.5 212.9 307.3ZM75.3 27.9C74.4 26.9 74.4 26.7 74 25.9C86.1 23.3 98.2 21.8 110.6 21.1C109.5 35.8 88.4 42.4 75.3 27.9ZM272.2 378.4C229.4 379.6 180.2 351.7 148.7 317C144.1 312 131.9 296.8 130.1 293.6L130.5 293.2C137.1 297.3 156.2 311.8 185.3 320.2C209.5 327.2 233.4 326.5 256.9 316.9C279.6 307.6 297.9 316.4 300 319.8C281.5 323.6 279.9 324.2 276 327.7C270.9 332.1 271.4 339.4 283 344.9C309.2 357.3 346 342.1 380.2 370.3C382.6 372.3 388.3 378.1 390.3 381C390.2 381.2 390 381.3 389.9 381.5C385.1 380 373.5 374 349.7 372.2C325 370.2 303.4 377.5 272.2 378.4V378.4ZM447 126.4C463.4 121.2 488.3 113 513.5 123.1C529.6 129.6 539.7 141.8 545.6 157.7C549.1 167.1 550.7 177.4 550.7 186.4C550.5 186.4 550.3 186.4 550.1 186.5C549.9 186.1 549.7 185.6 549.6 185.2C544.6 163.2 519.7 141.4 482 155.3C431.8 173.9 351.6 165 305.1 107.3C304.4 106.4 302.7 105.6 303.8 104.1C303.9 103.9 305.9 104.7 306.8 105.4C324.9 118.8 345.1 127.3 367.1 131.6C397.6 137.7 421.7 134.5 447 126.4V126.4ZM549.7 243.9C517.3 244.1 515.9 294 446.1 308.3C427.9 312 407.4 312.9 401.2 312.5V312.1C404 310.6 415.9 309.5 430.9 295.5C438.8 288.2 446.2 280.4 453.7 272.6C473.2 252.4 495.1 230.4 535.6 233.6C558.7 235.4 564.9 241.8 571.7 246.3C572 246.5 572.1 246.8 572.4 247.2C571.9 247.2 571.7 247.3 571.5 247.2C564.5 244.5 557.2 243.9 549.7 243.9V243.9ZM537.4 219.8C537.3 220 537.3 220.2 537.2 220.4C508.3 216 489.2 212.5 468.7 224.4C451.7 234.3 437.3 244.9 406.7 248.8C379.6 252.2 361.6 251.2 340.6 240.8C340.3 240.6 340 240.4 339.6 240.2C339.6 240 339.7 239.9 339.7 239.7C364.6 243.5 376.1 244.8 395.2 233.9C417.5 221 435.3 207.3 466.5 202.9C496.1 198.8 517.8 205.4 537.4 219.8V219.8ZM268.6 60.3C268 59.7 267.5 59.1 266.5 58C274.1 58 296.2 56.8 319.9 66.4C339.6 74.4 352.1 87.4 370.1 99.3C381.2 106.6 393.5 108.6 406.5 107.4C410.8 107 415 106.2 419.3 105.7C419.7 105.6 420.2 105.7 420.8 106C420.2 106.4 419.6 106.9 419 107.2C410.9 111.2 402.3 113.5 393.4 114.3C367.3 116.9 343.1 110.6 320 98.9C300.7 89 283.6 76 268.6 60.3V60.3ZM640 298.7C636.5 301.8 617.3 310.3 597.3 304C585 300.1 577.8 289.1 565.7 279.9C555.7 272.3 544.8 272 537.6 271.5C538.2 270.7 538.5 270.3 538.8 270.1C553.6 260.9 569.3 257.9 586.1 263.6C598.6 267.8 605.3 277.1 616.5 287.8C627.3 298.2 637.5 297.7 639.6 298.3C639.7 298.2 639.8 298.3 640 298.7V298.7ZM427.5 435.7C429.7 436.9 429.1 437.2 429 437.7C410.5 436.3 395.1 430.1 382.2 415.5C360.4 390.8 340.5 387.6 333.6 385.8C334.1 385.6 334.4 385.4 334.7 385.4C347.8 385.5 360.8 386.1 373.6 389.3C398.9 395.7 408.6 414.7 415.2 424.6C418.4 429.4 422.5 432.9 427.5 435.7V435.7Z" fill="white"/>
        </svg>
      <img src={Headline2} className="absolute h-[150px] w-[175px] left-[50px] top-[-30px] object-cover"></img>
       </a> <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "History") {
              return ( <div className="hover:border-b-4 hover:border-b-[#c9db26] ">
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <a href={`#${item.id}`} >{item.title}</a>
                  {dropdown && <Dropdown />}
                </li>
                </div>
              );
            }
            return ( <div className="nav-item hover:border-b-[#c9db26] hover:border-b-4 pb-[-100px] ">
              <li key={item.id}>
                <a href={`#${item.id}`} >{item.title}</a>
              </li> </div>
            );
          })}
        </ul>
      </nav>

    </span>
     
    </>
  );
}

export default Navbar;