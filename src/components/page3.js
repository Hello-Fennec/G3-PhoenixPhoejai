import React from 'react';
import sky from './../Picture/1st-bg-3.png';
import BoxMain from './boxmain';
import cloud from "./photo/bg-cloud.png";

function Page3(){
  return (
    <div style={{ 
    backgroundImage: `url(${sky})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover",
    height:'990px',
    position: 'relative',       
    overflow: "hidden"
    }} id="4">
      <div className="bg-cloud"> <img src={cloud} alt="cloud"/></div>
          <div className="bg-redphoenix">
              <div class="flex flex-row justify-center pt-20 p-20 h-5/6 relative">
                <BoxMain id="4" /> 
              </div>
          </div>
    </div>
  );
}

export default Page3;