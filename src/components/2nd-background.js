import { Gradient } from "@mui/icons-material";
import React, { useState } from "react";
import circle from "../Picture/2nd-bg.png";
import Card1 from "../Picture/Red-Card.png";
import Card2 from "../Picture/Blue-Card.png";


function Background2(){let [status,setStatus] = useState(false);
const checkEvent =()=>{
    return status === true ? setStatus(false) : setStatus(true);
}
    return(
        <div style={{ background:"linear-gradient(90deg,#65152E 1.01%, #130542 100%)",backgroundSize:"cover",
        height:"60vw",
        width:"100%",
        overflow:"hidden",
        position:"relative",  }} id="1">
        <img src={Card1} className={ status === true ? "absolute left-[580px] h-[600px] top-[150px] w-[418px] z-20 rounded-[30px] object-contain" : "absolute left-[580px] h-[600px] top-[150px] w-[418px] z-20 rounded-[30px] object-contain animate-automove-L"} onMouseOver={checkEvent} />
        <img src={Card2} className={ status === true ? "absolute left-[520px] h-[600px] top-[150px] w-[418px] z-20 rounded-[30px] object-contain" : "absolute left-[520px] h-[600px] top-[150px] w-[418px] z-20 rounded-[30px] object-contain animate-automove-R"} onMouseOver={checkEvent} />
        <img src={circle} className="absolute  w-[2000px] bottom-[-100px] object-contain" />
        </div>
    );
}

export default Background2;