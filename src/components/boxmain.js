import * as React from 'react';
import mountain from './photo/bg-mountain3.png';
import blue from './photo/big-blue-phoenix.png';

export default function BoxMain() {
  return (
    <div className="boxmain" >
      <div className="bluephoenix" >
        <div className="boxmainblur">
          <div className="box">
            <h1 className="h1style-right"><img src={blue} alt="phoenix" />ประวัติของฟินิกซ์</h1>
            <div className=" h-[450px] overflow-auto px-20  ">
              <div className="pstyle">
                <p className="indent-20" >นกฟีนิกซ์นี้เป็นสัญลักษณ์แห่งความเป็นอมตะ มีชีวิตยั่งยืนนิรันดร์ เพราะมันสามารถฟื้นคืนชีพได้ เมื่อร่างกายสิ้นอายุขัย ตัวจะลุกเป็นไฟ จากนั้นฟีนิกซ์ก็จะฟื้นจากกองขี้เถ้ามาเป็นลูกนกใหม่</p>
                <p className="indent-20" >ฟีนิกส์ (Phoenix) เป็นสิ่งมีชีวิตที่คล้ายนกเป็นสัตว์เทพในตำนาน ซึ่งคู่ควรแก่การบูชา ยกย่องเคารพ เกี่ยวข้องกับเทพแห่งไฟ ดังนั้นจะสังเกตได้ว่าขนนกของฟีนิกส์นั้นจะออกเป็นประกายเหลืองทองคล้ายเปลวไฟ บ้างก็ว่าปกคลุมด้วยเปลวไฟทั้งตัวทีเดียว ขนาดของนกฟีนิกส์จะมีขนาดเท่านกอินทรีย์ตัวโต จงอยปากและส่วนขาเป็นสีทองประกาย ขนสีแดงถึงเหลืองทอง มีเสียงร้องที่ไพเราะดังเสียงดนตรี มีอายุเป็นอมตะ รูปร่างสวยสง่างาม บางครั้งหยิ่งผยองบางครั้งเปี่ยมด้วยความเป็นมิตร... </p>
                <p className="indent-20" >ฟีนิกซ์เป็นสัตว์ที่นิสัยอ่อนโยน เพลงของฟีนิกซ์มีเวทมนตร์สามารถกระตุ้นความกล้าหาญ แห่งจิตใจบริสุทธิ์และทำให้เกิดความกลัวในจิตใจที่คิดร้าย น้ำตาของนกฟีนิกซ์มีพลังในการรักษาบาดแผลได้ บางตำนานเล่าว่า นกนี้สามารถฟื้นชีวิตให้กับผู้ตายได้และสามารถฟื้นพลังให้กลับสู่ปกติได้ </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={mountain} alt="mountain" className="bg-mountainleft" />
      <img src={mountain} alt="mountain" className="bg-mountainright" />  
    </div>
  );
}



