import React from "react";
import isodentPct from "../../assets/photo/isodent.jpg";
import easymyoPct from "../../assets/photo/easymyo.jpg";
import tfrtechnologyPct from "../../assets/photo/tfr.jpg";
import "./Collaborations.scss";

function Collaborations({ title }) {
  return (
    <div id="collaborations" className="text">
      <h2>{title.collaboration}</h2>
      <div className="row justify-content-evently">
        <div className="col-xl-4 col-lg-10 col-md-10 col-sm-10">
          <a href="http://www.isodent.ud.it/" target="_blank" rel="noreferrer">
            <img
              className="collaborationImg"
              src={isodentPct}
              alt="isodent.ud.it"
            />
            <p>www.isodent.ud.it/</p>
          </a>
        </div>
        <div className="col-xl-4 col-lg-10 col-md-10 col-sm-10">
          <a href="http://www.easymyo.it/" target="_blank" rel="noreferrer">
            <img
              className="collaborationImg"
              src={easymyoPct}
              alt="easymyo.it"
            />
            <p>www.easymyo.it/</p>
          </a>
        </div>
        <div className="col-xl-4 col-lg-10 col-md-10 col-sm-10">
          <a
            href="http://www.tfrtechnology.it/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="collaborationImg"
              src={tfrtechnologyPct}
              alt="tfrtechnology.it"
            />
            <p>www.tfrtechnology.it/</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Collaborations;
