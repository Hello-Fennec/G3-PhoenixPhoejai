import React from 'react';
import ReactDOM from 'react-dom/client';
import sky2 from '../components/photo/bgsky2.png';

function ContentGradient(){
  return (
    <div>
      <img src={sky2} alt="bg"/>
      <div class="flex flex-row justify-center p-20 ">
        <div class="float-left w-96"><img src="https://cdn140.picsart.com/af39a78e-734c-4b10-ba37-723e884745c4/391973412015211.png?to=crop&type=webp&r=1456x2202&q=85" /></div>
        <h1 class="text-l text-stone-200 p-20 w-1/2">Phoenix<br></br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula sapien eget neque blandit lacinia. Nam quam nisl, varius id risus ut, condimentum suscipit orci. Mauris et quam quam. Mauris ut egestas ante, id dapibus nulla. Cras malesuada efficitur ex vel placerat. Donec a volutpat libero. Vestibulum ut lectus eget libero rutrum pharetra. Fusce nec massa quis felis maximus ultricies. Sed neque sem, eleifend sed est vitae, tristique volutpat urna. Nullam a odio vel ex pretium porttitor.</h1>
      </div>

      <div class="flex flex-row justify-center p-20 ">
      <h1 class="text-l text-stone-200 p-20 w-1/2">Phoenix<br></br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula sapien eget neque blandit lacinia. Nam quam nisl, varius id risus ut, condimentum suscipit orci. Mauris et quam quam. Mauris ut egestas ante, id dapibus nulla. Cras malesuada efficitur ex vel placerat. Donec a volutpat libero. Vestibulum ut lectus eget libero rutrum pharetra. Fusce nec massa quis felis maximus ultricies. Sed neque sem, eleifend sed est vitae, tristique volutpat urna. Nullam a odio vel ex pretium porttitor.</h1>
        <div class="float-right w-96"><img src="https://cdn130.picsart.com/62f03481-6936-4abf-af02-ba42302d4bd1/389754291015211.png" /></div>
        
      </div>
    </div>
  );
}

export default ContentGradient;

{/* <h1 style={{
  margin: 10,
  paddingTop: 200 ,
  paddingLeft: 300,
  color: 'white',}}> */}
  // style={{
  //   backgroundImage: "linear-gradient(90deg, #65152E -2.4%, #130542 98.23%)",
  //   height: 1500 ,}}