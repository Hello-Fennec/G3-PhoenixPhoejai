import React from 'react';
import sky from '../components/photo/bgsky2.png';
import BoxMain from './boxmain';
import cloud from "./photo/bg-cloud.png";

function Page3(){
  return (
    <div style={{ 
    backgroundImage: `url(${sky})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover",
    height:'1024px',
    position: 'relative'       
    }}>
      <div className="bg-cloud"> <img src={cloud} alt="cloud"/></div>
          <div className="bg-redphoenix">
              <div class="flex flex-row justify-center pt-20 p-20 h-5/6 relative">
                <BoxMain />
              </div>
          </div>
    </div>
  );
}

export default Page3;