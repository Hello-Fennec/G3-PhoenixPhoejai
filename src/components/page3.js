import React from 'react';
import sky from './photo/bgsky2.png';
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
        
      
      {/* <div class="flex flex-row justify-center p-20 ">
      <h1 class="text-l text-stone-200 p-20 w-1/2">Phoenix<br></br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula sapien eget neque blandit lacinia. Nam quam nisl, varius id risus ut, condimentum suscipit orci. Mauris et quam quam. Mauris ut egestas ante, id dapibus nulla. Cras malesuada efficitur ex vel placerat. Donec a volutpat libero. Vestibulum ut lectus eget libero rutrum pharetra. Fusce nec massa quis felis maximus ultricies. Sed neque sem, eleifend sed est vitae, tristique volutpat urna. Nullam a odio vel ex pretium porttitor.</h1>
        <div class="float-right w-96"><img src="https://cdn130.picsart.com/62f03481-6936-4abf-af02-ba42302d4bd1/389754291015211.png" alt="anya"/></div>
        
      </div> */}
    </div>
  );
}

export default Page3;