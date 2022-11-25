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
    <div className="membermain">
      <div className='memberhead'>
        <img src={memberheader} alt="member" />
        <div className="bgblur"></div>
      </div>
      <div className="bg-member">
        <div className="namelist">
          <div className="member-img">
            <p><a href="https://www.instagram.com/arenleys/" target="blank"><img src={earn} alt="earn" /></a>
              <a href="https://www.instagram.com/plengkj/" target="blank"><img src={pleng} alt="pleng" /></a>
              <a href="https://www.instagram.com/21st_horizontal/" target="blank"><img src={pin} alt="pin" /></a>
              <a href="https://www.instagram.com/mantana_chp/" target="blank"><img src={chompooh} alt="chompooh" /></a>
              <a href="https://www.instagram.com/04.03_jrx/" target="blank"><img src={plub} alt="plub" /></a>
              <a href="https://www.instagram.com/_mwnrk/" target="blank"><img src={mos} alt="mos" /></a></p>
          </div>
          <div className="membername">
            <p className="name"><a href="https://www.instagram.com/arenleys/" target="blank"> Earn <div className="position">Web Design</div></a></p>
            <p className="name"><a href="https://www.instagram.com/plengkj/" target="blank"> Pleng <div className="position">Web Design</div></a></p>
            <p className="name"><a href="https://www.instagram.com/21st_horizontal/" target="blank"> Pin <div className="position">Front-End</div></a></p>
            <p className="name"><a href="https://www.instagram.com/mantana_chp/" target="blank"> Chompooh <div className="position">Front-End</div></a></p>
            <p className="name"><a href="https://www.instagram.com/04.03_jrx/" target="blank"> Plub <div className="position">Front-End</div></a></p>
            <p className="name"><a href="https://www.instagram.com/_mwnrk/" target="blank"> Mos <div className="position">Infrastructure</div></a></p>
          </div>
        </div>
      </div>
    </div>
  );
}



