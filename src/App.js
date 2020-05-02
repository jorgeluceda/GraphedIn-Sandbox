import React, { useState } from "react";
import "./styles.css";

import conn_l from "../public/connection-left.jpg";
import conn_m from "../public/connection-middle.jpg";
import conn_r from "../public/connection-right.jpg";

export default function App() {
  const [profile, setProfile] = useState({
    name: "Tim Cook",
    company: "CEO of Apple Inc.",
    degree: "2nd"
  });

  const [nodeLinks, setNodeLinks] = useState({
    leftToMiddle: true,
    middleToRight: true,
    rightToMain: true
  });

  let linkKeys = Object.keys(nodeLinks);
  let shownLinks = [];
  for (let i = 0; i < linkKeys.length; i++) {
    shownLinks.push(<div className={`link ${linkKeys[i]}`}>&nbsp;</div>);
  }

  return (
    <div className="App">
      <div className="searchBar" />
      <div className="profile">
        <div className="profileGraph">
          <div className="smallPicture spLeft">
            <img
              src={conn_l}
              alt="conn-l"
              className="embeddedPicture epSmall"
            />
          </div>
          <div className="smallPicture spMiddle">
            <img
              src={conn_m}
              alt="conn-m"
              className="embeddedPicture epSmall"
            />
          </div>
          <div className="smallPicture spRight">
            <img
              src={conn_r}
              alt="conn-r"
              className="embeddedPicture epSmall"
            />
          </div>

          {shownLinks}
          {/* <div className="link leftToMiddle">&nbsp;</div>
          <div className="link leftToMain">&nbsp;</div>
          <div className="link leftToRight">&nbsp;</div>
          <div className="link middleToRight">&nbsp;</div>
          <div className="link rightToMain">&nbsp;</div> */}
        </div>

        <div className="profileSummary">
          <div className="summaryName">{profile.name}</div>
          <div className="summaryCompany">{profile.company}</div>

          {/* <span className="summary-degree">{profile.degree}</span> */}
        </div>
        <div className="bigPicture">
          <div className="embeddedPicture epLarge" />
        </div>
        <div className="profileExtraInfo">Extra Info goes here</div>
        <div className="profileExtraInfo">Extra Info goes here</div>
        <div className="profileExtraInfo">Extra Info goes here</div>
        <div className="profileExtraInfo">Extra Info goes here</div>
      </div>
      <div className="options">
        <div className="optionsText">
          Note: all images are royalty-free stock images
        </div>
      </div>
    </div>
  );
}
