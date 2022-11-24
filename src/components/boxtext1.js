import * as React from 'react';
import mini1 from "./photo/mini-red-phoenix.png";
import rdfront from "./photo/redcard-wiggle.png";

export default function BoxText1() {
  return (
    <div class="m-5 p-20 float-left relative">

      <section className="redcard-front"><img src={rdfront} alt="redcardleft" /></section>

      <div className="minired">
        <img src={mini1} alt="miniredphoenix" />

        <div class="bg-[#eff1d4]/90 w-[800px] h-[600px] rounded-[3em]">
          <h1 className="h1style-left">ฟีนิกซ์ของกรีกโบราณ</h1>
          <div class=" w-[780px] h-[400px] overflow-auto px-20">
            <div className="pstyle">
              <p class="indent-20 " >เริ่มแรกของนกฟีนิกซ์มาจากวรรณกรรมกรีกโบราณที่ชื่อ ว่า Account of Egypt ของกวีเฮโรโดตัส ตามตำนานกล่าวว่า นกฟีนิกซ์มีอายุ 500 ปี </p>
              <p class="indent-20 " >เมื่อถึงเวลาที่ใกล้จะหมดอายุขัย นกฟีนิกซ์จะล่วงรู้ถึงชะตากรรม มันจะสร้างรังจากไม้เครื่องเทศที่มีกลิ่นหอม แล้วนั่งคอยที่กองฟืนไม้หอมและร้องเพลงอย่างสำราญใจ เมื่อแสงอาทิตย์แรกสาดส่อง นกฟีนิกซ์จะแผดเผาตนเองกลายเป็นเถ้าถ่าน เถ้าถ่านนั้นฟีนิกซ์หนุ่มตัวใหม่จะกำเนิดขึ้น</p>
              <p class="indent-20 " >ภารกิจแรกที่ฟีนิกซ์หนุ่มต้องกระทำก็คือ การรวบรวมเถ้าถ่านของพ่อแม่แล้วนำไปฝังที่วิหารเฮลิโอโปลิส หรือนครแห่งตะวันในอียิปต์ จากนั้นก็จะบินกลับมาที่อาระเบียและใช้ชีวิตอยู่จนกว่าจะเปลี่ยนร่างอีกครั้ง </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



