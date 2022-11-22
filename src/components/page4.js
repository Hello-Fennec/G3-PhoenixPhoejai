import React from 'react';
import BoxText1 from './boxtext1';
import mini1 from "./photo/mini-red-phoenix.png";
function Page4(){
    return (
      <div className="bg-page4">
        <BoxText1 />
        <div class="w-30 h-30 mt-[150px] p-[80px]"><img src={mini1} alt="miniredphoenix"/></div>
      </div>
    );
  }
  
  export default Page4;