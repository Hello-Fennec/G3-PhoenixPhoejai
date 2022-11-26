import React from 'react';
import BoxText1 from './boxtext1';
import BoxText2 from "./boxtext2";
import intofooter from "./photo/into-footer.png";
import rd from "./photo/bg-redcard.png";
import blu from "./photo/bg-bluecard.png";
function Page4() {
  return (
    <div className="bg-page4">

      <section className="redcard-right"><img src={rd} alt="redcardright" /></section>
      <section className="redcard-left"><img src={rd} alt="redcardleft" /></section>
      <section className="bluecard-left"><img src={blu} alt="bluecardleft" /></section>
      <section className="bluecard-right"><img src={blu} alt="bluecardright" /></section>

      <div className="suptext">
        <div id="5"><BoxText1 /></div>
        <div ><BoxText2 id="6" /></div>
      </div>

      <div className="btw-section"><img src={intofooter} alt="intofooter" />
      </div>

    </div>
  );
}

export default Page4;