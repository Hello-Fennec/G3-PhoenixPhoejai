import * as React from 'react';
import mini1 from "./photo/mini-red-phoenix.png";
import rd from "./photo/bg-redcard.png";

export default function BoxText1() {
  return (
    <div className='boxtext1' >

      <section className="redcard-front"><img src={rd} alt="redcardleft" /></section>

      <div className="minired">
        <img src={mini1} alt="miniredphoenix" />

        <div className='bg-text1'>
          <h1 className="h1style-left">ฟีนิกซ์ของกรีกโบราณ</h1>
          <div className='overflow'>
            <div className="pstyle">
              <p>เริ่มแรกของนกฟีนิกซ์มาจากวรรณกรรมกรีกโบราณที่ชื่อ ว่า Account of Egypt ของกวีเฮโรโดตัส ตามตำนานกล่าวว่า นกฟีนิกซ์มีอายุ 500 ปี </p>
              <p>เมื่อถึงเวลาที่ใกล้จะหมดอายุขัย นกฟีนิกซ์จะล่วงรู้ถึงชะตากรรม มันจะสร้างรังจากไม้เครื่องเทศที่มีกลิ่นหอม แล้วนั่งคอยที่กองฟืนไม้หอมและร้องเพลงอย่างสำราญใจ เมื่อแสงอาทิตย์แรกสาดส่อง นกฟีนิกซ์จะแผดเผาตนเองกลายเป็นเถ้าถ่าน เถ้าถ่านนั้นฟีนิกซ์หนุ่มตัวใหม่จะกำเนิดขึ้น</p>
              <p>ภารกิจแรกที่ฟีนิกซ์หนุ่มต้องกระทำก็คือ การรวบรวมเถ้าถ่านของพ่อแม่แล้วนำไปฝังที่วิหารเฮลิโอโปลิส หรือนครแห่งตะวันในอียิปต์ จากนั้นก็จะบินกลับมาที่อาระเบียและใช้ชีวิตอยู่จนกว่าจะเปลี่ยนร่างอีกครั้ง </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



