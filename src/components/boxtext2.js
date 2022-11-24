import * as React from 'react';
import mini2 from "./photo/mini-blue-phoenix.png";
import blu from "./photo/bg-bluecard.png";


export default function BoxText2() {
  return (
    <div class="m-5 p-20 float-right relative">
      

      <section className="bluecard-front"><img src={blu} alt="bluecardfront" /></section>

      <div class="miniblue">
        <img src={mini2} alt="minibluephoenix" />

        <div class="bg-[#eff1d4]/90 w-[800px] h-[500px] rounded-[3em] ">
          <h1 className="h1style-left">ฟีนิกซ์ของอียิปต์โบราณ</h1>
          <div class=" h-[400px] overflow-auto px-20">
            <div className="pstyle">
              <p class="indent-20 " >ฟีนิกซ์ ปรากฏ ตำนานของพวกอียิปต์โบราณ ในฐานะของสัตว์เทพในตำนานซึ่งคู่ควรแก่การบูชา ยกย่อง เคารพ ฟีนิกซ์เกี่ยวข้องกับเทพแห่งไฟ ดังนั้นจะสังเกตได้ว่าขนนกของฟีนิกซ์นั้นจะออกเป็น ประกายเหลืองทองคล้ายเปลวไฟบ้างก็ว่าปกคลุม ด้วย เปลวไฟทั้งตัวทีเดียว</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



