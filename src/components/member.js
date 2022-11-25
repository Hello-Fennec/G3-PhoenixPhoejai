import * as React from 'react';
import memberheader from './photo/member-head1.png'
import earn from './photo/earn.jpg'
import pleng from './photo/pleng.jpg'
import pin from './photo/pin.jpg'
import chompooh from './photo/chompooh.jpg'
import plub from './photo/plub.jpg'
import mos from './photo/mos.jpg'

export default function MemberName() {
  return (
    <div class="membermain">
      <div className='memberhead'>
        <img src={memberheader} alt="member" />
        <div class="bgblur"></div>
      </div>
      <div class="bg-member">
        <div class="namelist">
          <div class="member-img">
            <p><a href="https://www.instagram.com/arenleys/" target="blank"><img src={earn} alt="earn" /></a>
              <a href="https://www.instagram.com/plengkj/" target="blank"><img src={pleng} alt="pleng" /></a>
              <a href="https://www.instagram.com/21st_horizontal/" target="blank"><img src={pin} alt="pin" /></a>
              <a href="https://www.instagram.com/mantana_chp/" target="blank"><img src={chompooh} alt="chompooh" /></a>
              <a href="https://www.instagram.com/04.03_jrx/" target="blank"><img src={plub} alt="plub" /></a>
              <a href="https://www.instagram.com/_mwnrk/" target="blank"><img src={mos} alt="mos" /></a></p>
          </div>
          <div class="membername">
            <p class="name"><a href="https://www.instagram.com/arenleys/" target="blank"> Earn <div class="position">Web Design</div></a></p>
            <p class="name"><a href="https://www.instagram.com/plengkj/" target="blank"> Pleng <div class="position">Web Design</div></a></p>
            <p class="name"><a href="https://www.instagram.com/21st_horizontal/" target="blank"> Pin <div class="position">Front-End</div></a></p>
            <p class="name"><a href="https://www.instagram.com/mantana_chp/" target="blank"> Chompooh <div class="position">Front-End</div></a></p>
            <p class="name"><a href="https://www.instagram.com/04.03_jrx/" target="blank"> Plub <div class="position">Front-End</div></a></p>
            <p class="name"><a href="https://www.instagram.com/_mwnrk/" target="blank"> Mos <div class="position">Infrastructure</div></a></p>
          </div>
        </div>
      </div>
    </div>
  );
}



