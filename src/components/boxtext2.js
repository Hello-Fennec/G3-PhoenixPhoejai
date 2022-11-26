import * as React from 'react';
import mini2 from "./photo/mini-blue-phoenix.png";
import blu from "./photo/bg-bluecard.png";


export default function BoxText2() {
  return (
    <div className='boxtext2' >
      

      <section className="bluecard-front"><img src={blu} alt="bluecardfront" /></section>

      <div class="miniblue">
        <img src={mini2} alt="minibluephoenix" />

        
        <div className='bg-text2' id="6">
          <h1 className="h1style-left " >ฟีนิกซ์ของอียิปต์โบราณ</h1>
          <div className='overflow'>
            <div className="pstyle">
              <p>ฟีนิกซ์ ปรากฏ ตำนานของพวกอียิปต์โบราณ ในฐานะของสัตว์เทพในตำนานซึ่งคู่ควรแก่การบูชา ยกย่อง เคารพ ฟีนิกซ์เกี่ยวข้องกับเทพแห่งไฟ ดังนั้นจะสังเกตได้ว่าขนนกของฟีนิกซ์นั้นจะออกเป็น ประกายเหลืองทองคล้ายเปลวไฟบ้างก็ว่าปกคลุม ด้วย เปลวไฟทั้งตัวทีเดียว</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



